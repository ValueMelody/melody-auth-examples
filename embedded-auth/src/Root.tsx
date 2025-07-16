import { useCallback, useEffect, useState } from "react"
import {
  usePostEmbeddedAuthV1InitiateMutation,
  usePostEmbeddedAuthV1BySessionIdSignInMutation,
  usePostEmbeddedAuthV1BySessionIdSignUpMutation,
  useGetEmbeddedAuthV1BySessionIdAppConsentQuery,
  useGetEmbeddedAuthV1BySessionIdMfaEnrollmentQuery,
  usePostEmbeddedAuthV1BySessionIdMfaEnrollmentMutation,
  usePostEmbeddedAuthV1BySessionIdEmailMfaCodeMutation,
  usePostEmbeddedAuthV1BySessionIdEmailMfaMutation,
  useGetEmbeddedAuthV1BySessionIdOtpMfaSetupQuery,
  usePostEmbeddedAuthV1BySessionIdOtpMfaMutation,
  usePostEmbeddedAuthV1BySessionIdSmsMfaSetupMutation,
  useGetEmbeddedAuthV1BySessionIdSmsMfaQuery,
  usePostEmbeddedAuthV1BySessionIdSmsMfaMutation,
  usePostEmbeddedAuthV1BySessionIdAppConsentMutation,
  usePostEmbeddedAuthV1TokenExchangeMutation,
  usePostEmbeddedAuthV1TokenRefreshMutation,
  usePostEmbeddedAuthV1SignOutMutation,
  useGetEmbeddedAuthV1BySessionIdPasskeyEnrollQuery,
  usePostEmbeddedAuthV1BySessionIdPasskeyEnrollMutation,
  usePostEmbeddedAuthV1BySessionIdPasskeyEnrollDeclineMutation,
  usePostEmbeddedAuthV1ResetPasswordCodeMutation,
  useGetEmbeddedAuthV1BySessionIdRecoveryCodeEnrollQuery,
  usePostEmbeddedAuthV1BySessionIdRecoveryCodeMutation,
  useLazyGetEmbeddedAuthV1BySessionIdPasskeyVerifyQuery,
  usePostEmbeddedAuthV1BySessionIdPasskeyVerifyMutation,
} from "./services/embedded-auth/api"
import { genRandomString, genCodeChallenge } from "@melody-auth/shared"
import { startAuthentication, startRegistration } from "@simplewebauthn/browser"

const CLIENT_ID = '1A3564de462142A60cE5456edaADB5659dBC1B9c719c9E558dcaac0850a2f8F8'

function Root() {
  const [codeVerifier, setCodeVerifier] = useState('')
  const [step, setStep] = useState<
    'initiate' |
    'signIn' |
    'signUp' |
    'consent' |
    'tokenExchange' |
    'mfaEnroll' |
    'emailMfa' |
    'otpSetup' |
    'otpMfa' |
    'smsMfa' |
    'passkeyEnroll' |
    'recoveryCodeEnroll'
  >('initiate')
  const [sessionId, setSessionId] = useState('')
  const [idToken, setIdToken] = useState('')
  const [accessToken, setAccessToken] = useState('')
  const [refreshToken, setRefreshToken] = useState('')
  const [email, setEmail] = useState('')
  const [recoveryCode, setRecoveryCode] = useState('')
  const [password, setPassword] = useState('')
  const [emailMfaCode, setEmailMfaCode] = useState('')
  const [otpMfaCode, setOtpMfaCode] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [smsMfaCode, setSmsMfaCode] = useState('')
  const [hasSetPhoneNumber, setHasSetPhoneNumber] = useState(false)
  const [rememberDeclinePasskeyEnroll, setRememberDeclinePasskeyEnroll] = useState(false)

  const [initiate] = usePostEmbeddedAuthV1InitiateMutation()
  const [signIn] =  usePostEmbeddedAuthV1BySessionIdSignInMutation()
  const [signInWithRecoveryCode] = usePostEmbeddedAuthV1BySessionIdRecoveryCodeMutation()
  const [signUp] =  usePostEmbeddedAuthV1BySessionIdSignUpMutation()
  const [consent] =  usePostEmbeddedAuthV1BySessionIdAppConsentMutation()
  const [enrollMfa] = usePostEmbeddedAuthV1BySessionIdMfaEnrollmentMutation()
  const [tokenExchange] = usePostEmbeddedAuthV1TokenExchangeMutation()
  const [tokenRefresh] = usePostEmbeddedAuthV1TokenRefreshMutation()
  const [signOut] = usePostEmbeddedAuthV1SignOutMutation()
  const [resetPasswordEmail] = usePostEmbeddedAuthV1ResetPasswordCodeMutation()
  const [sendEmailMfaCode] = usePostEmbeddedAuthV1BySessionIdEmailMfaCodeMutation()
  const [verifyEmailMfa] = usePostEmbeddedAuthV1BySessionIdEmailMfaMutation()
  const [verifyOtpMfa] = usePostEmbeddedAuthV1BySessionIdOtpMfaMutation()
  const [sendSmsSetup] = usePostEmbeddedAuthV1BySessionIdSmsMfaSetupMutation()
  const [verifySmsMfa] = usePostEmbeddedAuthV1BySessionIdSmsMfaMutation()
  const [enrollPasskey] = usePostEmbeddedAuthV1BySessionIdPasskeyEnrollMutation()
  const [declinePasskeyEnroll] = usePostEmbeddedAuthV1BySessionIdPasskeyEnrollDeclineMutation()
  const [verifyPasskey] = usePostEmbeddedAuthV1BySessionIdPasskeyVerifyMutation()

  const [getPasskeyInfo, { data: passkeyInfo }] = useLazyGetEmbeddedAuthV1BySessionIdPasskeyVerifyQuery()

  const { data: consentInfo } =  useGetEmbeddedAuthV1BySessionIdAppConsentQuery({
    sessionId,
  },{
    skip: step !== 'consent',
  })

  const { data: mfaEnrollmentInfo } = useGetEmbeddedAuthV1BySessionIdMfaEnrollmentQuery({
    sessionId,
  },{
    skip: step !== 'mfaEnroll',
  })

  const { data: otpMfaSetupInfo } = useGetEmbeddedAuthV1BySessionIdOtpMfaSetupQuery({
    sessionId,
  },{
    skip: step !== 'otpSetup',
  })

  const { data: smsMfaInfo } = useGetEmbeddedAuthV1BySessionIdSmsMfaQuery({
    sessionId,
  },{
    skip: step !== 'smsMfa',
  })

  const { data: passkeyEnrollInfo } = useGetEmbeddedAuthV1BySessionIdPasskeyEnrollQuery({
    sessionId,
  },{
    skip: step !== 'passkeyEnroll',
  })

  const { data: recoveryCodeEnrollInfo } = useGetEmbeddedAuthV1BySessionIdRecoveryCodeEnrollQuery({
    sessionId,
  },{
    skip: step !== 'recoveryCodeEnroll',
  })

  const handleInitiate = useCallback(async () => {
    const codeVerifier = genRandomString(32)
    const codeChallenge = await genCodeChallenge(codeVerifier)
    setCodeVerifier(codeVerifier)

    const res = await initiate({
      postInitiateReq: {
        locale: 'en',
        redirectUri: 'http://localhost:3000',
        clientId: CLIENT_ID,
        codeChallenge,
        codeChallengeMethod: 'S256',
        scopes: ['openid', 'profile', 'email', 'offline_access'],
      },
    })

    setSessionId(res.data?.sessionId ?? '')
    setStep('signIn')
  }, [initiate])

  const handleTokenExchange = useCallback(async () => {
    const res = await tokenExchange({
      tokenExchangeReq: {
        sessionId,
        codeVerifier,
      },
    })

    setIdToken(res.data?.id_token ?? '')
    setAccessToken(res.data?.access_token ?? '')
    setRefreshToken(res.data?.refresh_token ?? '')
  }, [tokenExchange, sessionId, codeVerifier])

  useEffect(() => {
    handleInitiate()
  }, [handleInitiate])

  useEffect(() => {
    if (step === 'tokenExchange') {
      handleTokenExchange()
    } else if (step === 'emailMfa') {
      sendEmailMfaCode({
        sessionId,
      })
    }
  }, [step])

  const handleSignIn = async () => {
    const res = await signIn({
      sessionId,
      postSignInReq: {
        email,
        password,
      },
    })

    handleNextStep(res.data?.nextStep ?? '')
  }

  const handleLoadPasskeyInfo = async () => {
    await getPasskeyInfo({
      email,
      sessionId
    })
  }

  const handleVerifyPasskey = async () => {
    if (!passkeyInfo?.passkeyOption) return

    startAuthentication({ optionsJSON: passkeyInfo.passkeyOption })
      .then((res) => {
        verifyPasskey({
          sessionId,
          postPasskeyVerifyReq: {
            email,
            passkeyInfo: res,
          },
        }).then((res) => {
          handleNextStep(res.data?.nextStep ?? '')
        })
      })
  }

  const handleRecoveryCodeSignIn = async () => {
    const res = await signInWithRecoveryCode({
      sessionId,
      postSignInWithRecoveryCodeReq: {
        email,
        recoveryCode,
      },
    })

    handleNextStep(res.data?.nextStep ?? '')
  }

  const handleSignUp = async () => {
    const res = await signUp({
      sessionId,
      postSignUpReq: {
        email,
        password,
      },
    })

    handleNextStep(res.data?.nextStep ?? '')
  }

  const handleConsent = async () => {
    const res = await consent({
      sessionId,
    })

    handleNextStep(res.data?.nextStep ?? '')
  }

  const handleMfaEnroll = async (type: 'email' | 'sms' | 'otp') => {
    const res = await enrollMfa({
      sessionId,
      postMfaEnrollmentReq: {
        type,
      },
    })

    handleNextStep(res.data?.nextStep ?? '')
  }

  const handleTokenRefresh = async () => {
    const res = await tokenRefresh({
      tokenRefreshReq: {
        refreshToken,
      },
    })

    setAccessToken(res.data?.access_token ?? '')
  }

  const handleVerifyEmailMfa = async () => {
    const res = await verifyEmailMfa({
      sessionId,
      mfaCodeReq: {
        mfaCode: emailMfaCode,
      },
    })

    handleNextStep(res.data?.nextStep ?? '')
  }

  const handleVerifyOtpMfa = async () => {
    const res = await verifyOtpMfa({
      sessionId,
      mfaCodeReq: {
        mfaCode: otpMfaCode,
      },
    })

    handleNextStep(res.data?.nextStep ?? '')
  }

  const handleSendSmsSetup = async () => {
    await sendSmsSetup({
      sessionId,
      smsMfaSetupReq: {
        phoneNumber,
      },
    })

    setHasSetPhoneNumber(true)
  }

  const handleVerifySmsMfa = async () => {
    const res = await verifySmsMfa({
      sessionId,
      mfaCodeReq: {
        mfaCode: smsMfaCode,
      },
    })

    handleNextStep(res.data?.nextStep ?? '')
  }

  const handleEnrollPasskey = async () => {
    if (!passkeyEnrollInfo?.enrollOptions) return
    startRegistration({ optionsJSON: passkeyEnrollInfo.enrollOptions })
      .then((enrollInfo) => {
        enrollPasskey({
          sessionId,
          postPasskeyEnrollReq: {
            enrollInfo,
          },
        }).then((res) => {
          handleNextStep(res.data?.nextStep ?? '')
        })
      })
  }

  const handleDeclinePasskeyEnroll = async () => {
    await declinePasskeyEnroll({
      sessionId,
      postPasskeyEnrollDeclineReq: {
        remember: rememberDeclinePasskeyEnroll,
      },
    }).then((res) => {
      handleNextStep(res.data?.nextStep ?? '')
    })
  }

  const handleContinueFromRecoveryCodeEnroll = async () => {
    handleNextStep('tokenExchange')
  }

  const handleSignOut = async () => {
    const res = await signOut({
      signOutReq: {
        refreshToken,
        clientId: CLIENT_ID,
      },
    })

    if (!res.error) {
      handleInitiate()
    }
  }

  const handleResetPassword = async () => {
    await resetPasswordEmail({
      resetPasswordReq: {
        email,
      },
    })
  }

  const handleNextStep = (step: string) => {
    console.log('step', step)
    switch (step) {
      case 'consent':
        setStep('consent')
        break
      case 'mfa_enroll':
        setStep('mfaEnroll')
        break
      case 'email_mfa':
        setStep('emailMfa')
        break
      case 'otp_setup':
        setStep('otpSetup')
        break
      case 'otp_mfa':
        setStep('otpMfa')
        break
      case 'sms_mfa':
        setStep('smsMfa')
        break
      case 'passkey_enroll':
        setStep('passkeyEnroll')
        break
      case 'recovery_code_enroll':
        setStep('recoveryCodeEnroll')
        break
      default:
        setStep('tokenExchange')
    }
  }

  return (
    <section>
      <h1>Embedded Auth</h1>
      {step === 'signIn' && (
        <section style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
          <h2>Sign In</h2>
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="button" onClick={handleSignIn} style={{ marginBottom: '20px' }}>Sign In</button>

          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="recovery code" value={recoveryCode} onChange={(e) => setRecoveryCode(e.target.value)} />
          <button type="button" onClick={handleRecoveryCodeSignIn}>Recovery Code Sign In</button>

          <input type="text" style={{ marginTop: '20px' }} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {!passkeyInfo && (
            <button type="button" onClick={handleLoadPasskeyInfo}>Load Passkey Info</button>
          )}
          {passkeyInfo && !passkeyInfo.passkeyOption && (
            <p>No passkey found</p>
          )}
          {passkeyInfo && passkeyInfo.passkeyOption && (
            <button type="button" onClick={handleVerifyPasskey}>Sign in with passkey</button>
          )}

          <button type="button" onClick={() => setStep('signUp')} style={{ marginTop: '20px' }}>Sign Up</button>
          <button type="button" onClick={handleResetPassword} style={{ marginTop: '20px' }}>Reset Password</button>
        </section>
      )}
      {step === 'signUp' && (
        <section style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
          <h2>Sign Up</h2>
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="button" onClick={handleSignUp}>Sign Up</button>
          <button type="button" onClick={() => setStep('signIn')} style={{ marginTop: '20px' }}>Sign In</button>
        </section>
      )}
      {step === 'consent' && (
        <section style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
          <h2>Consent to app: {consentInfo?.appName}</h2>
          <button type="button" onClick={handleConsent}>Consent</button>
        </section>
      )}
      {
        step === 'mfaEnroll' && (
          <section style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            <h2>MFA Enrollment</h2>
            {mfaEnrollmentInfo?.mfaTypes.map((type) => (
              <button type="button" key={type} onClick={() => handleMfaEnroll(type)}>
                <p>enroll with {type}</p>
              </button>
            ))}
          </section>
        )
      }
      {
        step === 'emailMfa' && (
          <section style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            <h2>Enter the code sent to your email</h2>
            <input type="text" placeholder="Code" value={emailMfaCode} onChange={(e) => setEmailMfaCode(e.target.value)} />
            <button type="button" onClick={handleVerifyEmailMfa}>Verify</button>
          </section>
        )
      }
      {
        step === 'otpSetup' && (
          <section style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            <h2>Setup your mfa</h2>
            <p>This is your otp uri: {otpMfaSetupInfo?.otpUri}</p>
            <input type="text" placeholder="Code" value={otpMfaCode} onChange={(e) => setOtpMfaCode(e.target.value)} />
            <button type="button" onClick={handleVerifyOtpMfa}>Verify</button>
          </section>
        )
      }
      {
        step === 'otpMfa' && (
          <section style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            <h2>Enter your otp code</h2>
            <input type="text" placeholder="Code" value={otpMfaCode} onChange={(e) => setOtpMfaCode(e.target.value)} />
            <button type="button" onClick={handleVerifyOtpMfa}>Verify</button>
          </section>
        )
      }
      {
        step === 'smsMfa' && (
          <section style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            {(smsMfaInfo?.phoneNumber || hasSetPhoneNumber) && (
              <>
                <p>Phone Number: {smsMfaInfo?.phoneNumber || phoneNumber}</p>
                <input type="text" placeholder="Code" value={smsMfaCode} onChange={(e) => setSmsMfaCode(e.target.value)} />
                <button type="button" onClick={handleVerifySmsMfa}>Verify</button>
              </>
            )}
            {!smsMfaInfo?.phoneNumber && !hasSetPhoneNumber && (
              <>
                <h2>Enter your phone number</h2>
                <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <button type="button" onClick={handleSendSmsSetup}>Send</button>
              </>
            )}
          </section>
        )
      }
      {
        step === 'passkeyEnroll' && (
          <section style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            <h2>Passkey Enrollment</h2>
            <button type="button" onClick={handleEnrollPasskey}>Enroll</button>
            <div>
              <input type="checkbox" checked={rememberDeclinePasskeyEnroll} onChange={() => setRememberDeclinePasskeyEnroll(!rememberDeclinePasskeyEnroll)} />
              <label>Decline forever</label>
            </div>
            <button type="button" onClick={handleDeclinePasskeyEnroll}>Decline</button>
          </section>
        )
      }
      {
        step === 'recoveryCodeEnroll' && (
          <section style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            <h2>Save your recovery code</h2>
            <p>{recoveryCodeEnrollInfo?.recoveryCode}</p>
            <button type="button" onClick={handleContinueFromRecoveryCodeEnroll}>Continue</button>
          </section>
        )
      }
      {step === 'tokenExchange' && (
        <section style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
          <h2>Token Exchange</h2>
          <p>Id Token: {idToken}</p>
          <p>Access Token: {accessToken}</p>
          <button type="button" onClick={handleTokenRefresh}>Refresh Token</button>
          <p>Refresh Token: {refreshToken}</p>
          <button type="button" onClick={handleSignOut}>Sign Out</button>
        </section>
      )}
    </section>
  )
}

export default Root
