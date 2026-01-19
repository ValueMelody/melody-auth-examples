import { embeddedAuthApi as api } from "./";
export const addTagTypes = ["Embedded Auth"] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      postEmbeddedAuthV1Initiate: build.mutation<
        PostEmbeddedAuthV1InitiateApiResponse,
        PostEmbeddedAuthV1InitiateApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/initiate`,
          method: "POST",
          body: queryArg.postInitiateReq,
        }),
        invalidatesTags: ["Embedded Auth"],
      }),
      getEmbeddedAuthV1BySessionIdSignUp: build.query<
        GetEmbeddedAuthV1BySessionIdSignUpApiResponse,
        GetEmbeddedAuthV1BySessionIdSignUpApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/sign-up`,
        }),
        providesTags: ["Embedded Auth"],
      }),
      postEmbeddedAuthV1BySessionIdSignUp: build.mutation<
        PostEmbeddedAuthV1BySessionIdSignUpApiResponse,
        PostEmbeddedAuthV1BySessionIdSignUpApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/sign-up`,
          method: "POST",
          body: queryArg.postSignUpReq,
        }),
        invalidatesTags: ["Embedded Auth"],
      }),
      postEmbeddedAuthV1BySessionIdSignIn: build.mutation<
        PostEmbeddedAuthV1BySessionIdSignInApiResponse,
        PostEmbeddedAuthV1BySessionIdSignInApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/sign-in`,
          method: "POST",
          body: queryArg.postSignInReq,
        }),
        invalidatesTags: ["Embedded Auth"],
      }),
      getEmbeddedAuthV1BySessionIdAppConsent: build.query<
        GetEmbeddedAuthV1BySessionIdAppConsentApiResponse,
        GetEmbeddedAuthV1BySessionIdAppConsentApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/app-consent`,
        }),
        providesTags: ["Embedded Auth"],
      }),
      postEmbeddedAuthV1BySessionIdAppConsent: build.mutation<
        PostEmbeddedAuthV1BySessionIdAppConsentApiResponse,
        PostEmbeddedAuthV1BySessionIdAppConsentApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/app-consent`,
          method: "POST",
        }),
        invalidatesTags: ["Embedded Auth"],
      }),
      getEmbeddedAuthV1BySessionIdMfaEnrollment: build.query<
        GetEmbeddedAuthV1BySessionIdMfaEnrollmentApiResponse,
        GetEmbeddedAuthV1BySessionIdMfaEnrollmentApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/mfa-enrollment`,
        }),
        providesTags: ["Embedded Auth"],
      }),
      postEmbeddedAuthV1BySessionIdMfaEnrollment: build.mutation<
        PostEmbeddedAuthV1BySessionIdMfaEnrollmentApiResponse,
        PostEmbeddedAuthV1BySessionIdMfaEnrollmentApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/mfa-enrollment`,
          method: "POST",
          body: queryArg.postMfaEnrollmentReq,
        }),
        invalidatesTags: ["Embedded Auth"],
      }),
      postEmbeddedAuthV1BySessionIdEmailMfaCode: build.mutation<
        PostEmbeddedAuthV1BySessionIdEmailMfaCodeApiResponse,
        PostEmbeddedAuthV1BySessionIdEmailMfaCodeApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/email-mfa-code`,
          method: "POST",
        }),
        invalidatesTags: ["Embedded Auth"],
      }),
      postEmbeddedAuthV1BySessionIdEmailMfa: build.mutation<
        PostEmbeddedAuthV1BySessionIdEmailMfaApiResponse,
        PostEmbeddedAuthV1BySessionIdEmailMfaApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/email-mfa`,
          method: "POST",
          body: queryArg.mfaCodeReq,
        }),
        invalidatesTags: ["Embedded Auth"],
      }),
      getEmbeddedAuthV1BySessionIdOtpMfaSetup: build.query<
        GetEmbeddedAuthV1BySessionIdOtpMfaSetupApiResponse,
        GetEmbeddedAuthV1BySessionIdOtpMfaSetupApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/otp-mfa-setup`,
        }),
        providesTags: ["Embedded Auth"],
      }),
      getEmbeddedAuthV1BySessionIdOtpMfa: build.query<
        GetEmbeddedAuthV1BySessionIdOtpMfaApiResponse,
        GetEmbeddedAuthV1BySessionIdOtpMfaApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/otp-mfa`,
        }),
        providesTags: ["Embedded Auth"],
      }),
      postEmbeddedAuthV1BySessionIdOtpMfa: build.mutation<
        PostEmbeddedAuthV1BySessionIdOtpMfaApiResponse,
        PostEmbeddedAuthV1BySessionIdOtpMfaApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/otp-mfa`,
          method: "POST",
          body: queryArg.mfaCodeReq,
        }),
        invalidatesTags: ["Embedded Auth"],
      }),
      postEmbeddedAuthV1BySessionIdSmsMfaSetup: build.mutation<
        PostEmbeddedAuthV1BySessionIdSmsMfaSetupApiResponse,
        PostEmbeddedAuthV1BySessionIdSmsMfaSetupApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/sms-mfa-setup`,
          method: "POST",
          body: queryArg.smsMfaSetupReq,
        }),
        invalidatesTags: ["Embedded Auth"],
      }),
      getEmbeddedAuthV1BySessionIdSmsMfa: build.query<
        GetEmbeddedAuthV1BySessionIdSmsMfaApiResponse,
        GetEmbeddedAuthV1BySessionIdSmsMfaApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/sms-mfa`,
        }),
        providesTags: ["Embedded Auth"],
      }),
      postEmbeddedAuthV1BySessionIdSmsMfa: build.mutation<
        PostEmbeddedAuthV1BySessionIdSmsMfaApiResponse,
        PostEmbeddedAuthV1BySessionIdSmsMfaApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/sms-mfa`,
          method: "POST",
          body: queryArg.mfaCodeReq,
        }),
        invalidatesTags: ["Embedded Auth"],
      }),
      postEmbeddedAuthV1BySessionIdSmsMfaCode: build.mutation<
        PostEmbeddedAuthV1BySessionIdSmsMfaCodeApiResponse,
        PostEmbeddedAuthV1BySessionIdSmsMfaCodeApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/sms-mfa-code`,
          method: "POST",
        }),
        invalidatesTags: ["Embedded Auth"],
      }),
      getEmbeddedAuthV1BySessionIdPasskeyEnroll: build.query<
        GetEmbeddedAuthV1BySessionIdPasskeyEnrollApiResponse,
        GetEmbeddedAuthV1BySessionIdPasskeyEnrollApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/passkey-enroll`,
        }),
        providesTags: ["Embedded Auth"],
      }),
      postEmbeddedAuthV1BySessionIdPasskeyEnroll: build.mutation<
        PostEmbeddedAuthV1BySessionIdPasskeyEnrollApiResponse,
        PostEmbeddedAuthV1BySessionIdPasskeyEnrollApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/passkey-enroll`,
          method: "POST",
          body: queryArg.postPasskeyEnrollReq,
        }),
        invalidatesTags: ["Embedded Auth"],
      }),
      postEmbeddedAuthV1BySessionIdPasskeyEnrollDecline: build.mutation<
        PostEmbeddedAuthV1BySessionIdPasskeyEnrollDeclineApiResponse,
        PostEmbeddedAuthV1BySessionIdPasskeyEnrollDeclineApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/passkey-enroll-decline`,
          method: "POST",
          body: queryArg.postPasskeyEnrollDeclineReq,
        }),
        invalidatesTags: ["Embedded Auth"],
      }),
      getEmbeddedAuthV1BySessionIdPasskeyVerify: build.query<
        GetEmbeddedAuthV1BySessionIdPasskeyVerifyApiResponse,
        GetEmbeddedAuthV1BySessionIdPasskeyVerifyApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/passkey-verify`,
          params: {
            email: queryArg.email,
          },
        }),
        providesTags: ["Embedded Auth"],
      }),
      postEmbeddedAuthV1BySessionIdPasskeyVerify: build.mutation<
        PostEmbeddedAuthV1BySessionIdPasskeyVerifyApiResponse,
        PostEmbeddedAuthV1BySessionIdPasskeyVerifyApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/passkey-verify`,
          method: "POST",
          body: queryArg.postPasskeyVerifyReq,
        }),
        invalidatesTags: ["Embedded Auth"],
      }),
      getEmbeddedAuthV1BySessionIdRecoveryCodeEnroll: build.query<
        GetEmbeddedAuthV1BySessionIdRecoveryCodeEnrollApiResponse,
        GetEmbeddedAuthV1BySessionIdRecoveryCodeEnrollApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/recovery-code-enroll`,
        }),
        providesTags: ["Embedded Auth"],
      }),
      postEmbeddedAuthV1BySessionIdRecoveryCode: build.mutation<
        PostEmbeddedAuthV1BySessionIdRecoveryCodeApiResponse,
        PostEmbeddedAuthV1BySessionIdRecoveryCodeApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/recovery-code`,
          method: "POST",
          body: queryArg.postSignInWithRecoveryCodeReq,
        }),
        invalidatesTags: ["Embedded Auth"],
      }),
      getEmbeddedAuthV1BySessionIdSwitchOrg: build.query<
        GetEmbeddedAuthV1BySessionIdSwitchOrgApiResponse,
        GetEmbeddedAuthV1BySessionIdSwitchOrgApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/switch-org`,
        }),
        providesTags: ["Embedded Auth"],
      }),
      postEmbeddedAuthV1BySessionIdSwitchOrg: build.mutation<
        PostEmbeddedAuthV1BySessionIdSwitchOrgApiResponse,
        PostEmbeddedAuthV1BySessionIdSwitchOrgApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/switch-org`,
          method: "POST",
          body: queryArg.postProcessSwitchOrgReq,
        }),
        invalidatesTags: ["Embedded Auth"],
      }),
      getEmbeddedAuthV1BySessionIdAppBanners: build.query<
        GetEmbeddedAuthV1BySessionIdAppBannersApiResponse,
        GetEmbeddedAuthV1BySessionIdAppBannersApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/${queryArg.sessionId}/app-banners`,
        }),
        providesTags: ["Embedded Auth"],
      }),
      postEmbeddedAuthV1TokenExchange: build.mutation<
        PostEmbeddedAuthV1TokenExchangeApiResponse,
        PostEmbeddedAuthV1TokenExchangeApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/token-exchange`,
          method: "POST",
          body: queryArg.tokenExchangeReq,
        }),
        invalidatesTags: ["Embedded Auth"],
      }),
      postEmbeddedAuthV1TokenRefresh: build.mutation<
        PostEmbeddedAuthV1TokenRefreshApiResponse,
        PostEmbeddedAuthV1TokenRefreshApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/token-refresh`,
          method: "POST",
          body: queryArg.tokenRefreshReq,
        }),
        invalidatesTags: ["Embedded Auth"],
      }),
      postEmbeddedAuthV1SignOut: build.mutation<
        PostEmbeddedAuthV1SignOutApiResponse,
        PostEmbeddedAuthV1SignOutApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/sign-out`,
          method: "POST",
          body: queryArg.signOutReq,
        }),
        invalidatesTags: ["Embedded Auth"],
      }),
      postEmbeddedAuthV1ResetPasswordCode: build.mutation<
        PostEmbeddedAuthV1ResetPasswordCodeApiResponse,
        PostEmbeddedAuthV1ResetPasswordCodeApiArg
      >({
        query: (queryArg) => ({
          url: `/embedded-auth/v1/reset-password-code`,
          method: "POST",
          body: queryArg.resetPasswordReq,
        }),
        invalidatesTags: ["Embedded Auth"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as embeddedAuthApi };
export type PostEmbeddedAuthV1InitiateApiResponse =
  /** status 200 A session id */ {
    sessionId?: string;
  };
export type PostEmbeddedAuthV1InitiateApiArg = {
  postInitiateReq: PostInitiateReq;
};
export type GetEmbeddedAuthV1BySessionIdSignUpApiResponse =
  /** status 200 Sign up info */ GetSignUpInfoRes;
export type GetEmbeddedAuthV1BySessionIdSignUpApiArg = {
  sessionId: string;
};
export type PostEmbeddedAuthV1BySessionIdSignUpApiResponse =
  /** status 200 Next step of the auth flow */ AuthRes;
export type PostEmbeddedAuthV1BySessionIdSignUpApiArg = {
  sessionId: string;
  postSignUpReq: PostSignUpReq;
};
export type PostEmbeddedAuthV1BySessionIdSignInApiResponse =
  /** status 200 Next step of the auth flow */ AuthRes;
export type PostEmbeddedAuthV1BySessionIdSignInApiArg = {
  sessionId: string;
  postSignInReq: PostSignInReq;
};
export type GetEmbeddedAuthV1BySessionIdAppConsentApiResponse =
  /** status 200 App consent */ GetAppConsentRes;
export type GetEmbeddedAuthV1BySessionIdAppConsentApiArg = {
  sessionId: string;
};
export type PostEmbeddedAuthV1BySessionIdAppConsentApiResponse =
  /** status 200 App consent */ AuthRes;
export type PostEmbeddedAuthV1BySessionIdAppConsentApiArg = {
  sessionId: string;
};
export type GetEmbeddedAuthV1BySessionIdMfaEnrollmentApiResponse =
  /** status 200 Mfa enrollment */ MfaEnrollmentInfoRes;
export type GetEmbeddedAuthV1BySessionIdMfaEnrollmentApiArg = {
  sessionId: string;
};
export type PostEmbeddedAuthV1BySessionIdMfaEnrollmentApiResponse =
  /** status 200 Mfa enrolled */ AuthRes;
export type PostEmbeddedAuthV1BySessionIdMfaEnrollmentApiArg = {
  sessionId: string;
  postMfaEnrollmentReq: PostMfaEnrollmentReq;
};
export type PostEmbeddedAuthV1BySessionIdEmailMfaCodeApiResponse = unknown;
export type PostEmbeddedAuthV1BySessionIdEmailMfaCodeApiArg = {
  sessionId: string;
};
export type PostEmbeddedAuthV1BySessionIdEmailMfaApiResponse =
  /** status 200 the email mfa code has been verified */ AuthRes;
export type PostEmbeddedAuthV1BySessionIdEmailMfaApiArg = {
  sessionId: string;
  mfaCodeReq: MfaCodeReq;
};
export type GetEmbeddedAuthV1BySessionIdOtpMfaSetupApiResponse =
  /** status 200 the otp mfa initial setup info */ OtpMfaSetupRes;
export type GetEmbeddedAuthV1BySessionIdOtpMfaSetupApiArg = {
  sessionId: string;
};
export type GetEmbeddedAuthV1BySessionIdOtpMfaApiResponse =
  /** status 200 the otp mfa config */ OtpMfaConfigRes;
export type GetEmbeddedAuthV1BySessionIdOtpMfaApiArg = {
  sessionId: string;
};
export type PostEmbeddedAuthV1BySessionIdOtpMfaApiResponse =
  /** status 200 the otp mfa code has been verified */ AuthRes;
export type PostEmbeddedAuthV1BySessionIdOtpMfaApiArg = {
  sessionId: string;
  mfaCodeReq: MfaCodeReq;
};
export type PostEmbeddedAuthV1BySessionIdSmsMfaSetupApiResponse = unknown;
export type PostEmbeddedAuthV1BySessionIdSmsMfaSetupApiArg = {
  sessionId: string;
  smsMfaSetupReq: SmsMfaSetupReq;
};
export type GetEmbeddedAuthV1BySessionIdSmsMfaApiResponse =
  /** status 200 the sms mfa config */ SmsMfaConfigRes;
export type GetEmbeddedAuthV1BySessionIdSmsMfaApiArg = {
  sessionId: string;
};
export type PostEmbeddedAuthV1BySessionIdSmsMfaApiResponse =
  /** status 200 the sms mfa code has been verified */ AuthRes;
export type PostEmbeddedAuthV1BySessionIdSmsMfaApiArg = {
  sessionId: string;
  mfaCodeReq: MfaCodeReq;
};
export type PostEmbeddedAuthV1BySessionIdSmsMfaCodeApiResponse = unknown;
export type PostEmbeddedAuthV1BySessionIdSmsMfaCodeApiArg = {
  sessionId: string;
};
export type GetEmbeddedAuthV1BySessionIdPasskeyEnrollApiResponse =
  /** status 200 the passkey enroll options */ PasskeyEnrollInfoRes;
export type GetEmbeddedAuthV1BySessionIdPasskeyEnrollApiArg = {
  sessionId: string;
};
export type PostEmbeddedAuthV1BySessionIdPasskeyEnrollApiResponse =
  /** status 200 Next step of the auth flow */ AuthRes;
export type PostEmbeddedAuthV1BySessionIdPasskeyEnrollApiArg = {
  sessionId: string;
  postPasskeyEnrollReq: PostPasskeyEnrollReq;
};
export type PostEmbeddedAuthV1BySessionIdPasskeyEnrollDeclineApiResponse =
  /** status 200 Next step of the auth flow */ AuthRes;
export type PostEmbeddedAuthV1BySessionIdPasskeyEnrollDeclineApiArg = {
  sessionId: string;
  postPasskeyEnrollDeclineReq: PostPasskeyEnrollDeclineReq;
};
export type GetEmbeddedAuthV1BySessionIdPasskeyVerifyApiResponse =
  /** status 200 the passkey verify options */ PasskeyVerifyInfoRes;
export type GetEmbeddedAuthV1BySessionIdPasskeyVerifyApiArg = {
  sessionId: string;
  email: string;
};
export type PostEmbeddedAuthV1BySessionIdPasskeyVerifyApiResponse =
  /** status 200 Next step of the auth flow */ AuthRes;
export type PostEmbeddedAuthV1BySessionIdPasskeyVerifyApiArg = {
  sessionId: string;
  postPasskeyVerifyReq: PostPasskeyVerifyReq;
};
export type GetEmbeddedAuthV1BySessionIdRecoveryCodeEnrollApiResponse =
  /** status 200 the recovery code */ RecoveryCodeEnrollRes;
export type GetEmbeddedAuthV1BySessionIdRecoveryCodeEnrollApiArg = {
  sessionId: string;
};
export type PostEmbeddedAuthV1BySessionIdRecoveryCodeApiResponse =
  /** status 200 Next step of the auth flow */ AuthRes;
export type PostEmbeddedAuthV1BySessionIdRecoveryCodeApiArg = {
  sessionId: string;
  postSignInWithRecoveryCodeReq: PostSignInWithRecoveryCodeReq;
};
export type GetEmbeddedAuthV1BySessionIdSwitchOrgApiResponse =
  /** status 200 User orgs */ UserOrgsRes;
export type GetEmbeddedAuthV1BySessionIdSwitchOrgApiArg = {
  sessionId: string;
};
export type PostEmbeddedAuthV1BySessionIdSwitchOrgApiResponse =
  /** status 200 Next step of the auth flow */ AuthRes;
export type PostEmbeddedAuthV1BySessionIdSwitchOrgApiArg = {
  sessionId: string;
  postProcessSwitchOrgReq: PostProcessSwitchOrgReq;
};
export type GetEmbeddedAuthV1BySessionIdAppBannersApiResponse =
  /** status 200 the app banners */ AppBannersRes;
export type GetEmbeddedAuthV1BySessionIdAppBannersApiArg = {
  sessionId: string;
};
export type PostEmbeddedAuthV1TokenExchangeApiResponse =
  /** status 200 Access token, refresh token, id token */ TokenExchangeRes;
export type PostEmbeddedAuthV1TokenExchangeApiArg = {
  tokenExchangeReq: TokenExchangeReq;
};
export type PostEmbeddedAuthV1TokenRefreshApiResponse =
  /** status 200 Access token */ TokenRefreshRes;
export type PostEmbeddedAuthV1TokenRefreshApiArg = {
  tokenRefreshReq: TokenRefreshReq;
};
export type PostEmbeddedAuthV1SignOutApiResponse = unknown;
export type PostEmbeddedAuthV1SignOutApiArg = {
  signOutReq: SignOutReq;
};
export type PostEmbeddedAuthV1ResetPasswordCodeApiResponse = unknown;
export type PostEmbeddedAuthV1ResetPasswordCodeApiArg = {
  resetPasswordReq: ResetPasswordReq;
};
export type PostInitiateReq = {
  redirectUri: string;
  clientId: string;
  codeChallenge: string;
  codeChallengeMethod: "S256" | "plain";
  scopes: string[];
  locale: string;
  org?: string;
};
export type GetSignUpInfoRes = {
  userAttributes: {
    id?: number;
    name?: string;
    includeInSignUpForm?: boolean;
    requiredInSignUpForm?: boolean;
    includeInIdTokenBody?: boolean;
    includeInUserInfo?: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string | null;
  }[];
};
export type AuthRes = {
  sessionId: string;
  nextStep?:
    | "consent"
    | "mfa_enroll"
    | "email_mfa"
    | "sms_mfa"
    | "otp_setup"
    | "otp_mfa"
    | "passkey_enroll";
  success: boolean;
};
export type PostSignUpReq = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  attributes?: {
    [key: string]: string;
  };
};
export type PostSignInReq = {
  email: string;
  password: string;
};
export type GetAppConsentRes = {
  scopes: {
    id?: number;
    name?: string;
    note?: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string | null;
    locales?: {
      id?: number;
      scopeId?: number;
      locale?: string;
      value?: string;
      createdAt?: string;
      updatedAt?: string;
      deletedAt?: string | null;
    }[];
  }[];
  appName: string;
};
export type MfaEnrollmentInfoRes = {
  mfaTypes: ("otp" | "email" | "sms")[];
};
export type PostMfaEnrollmentReq = {
  type: "otp" | "email" | "sms";
};
export type MfaCodeReq = {
  mfaCode: string;
  rememberDevice?: boolean;
};
export type OtpMfaSetupRes = {
  otpUri: string;
  otpSecret: string;
};
export type OtpMfaConfigRes = {
  couldFallbackToEmailMfa: boolean;
};
export type SmsMfaSetupReq = {
  phoneNumber: string;
};
export type SmsMfaConfigRes = {
  allowFallbackToEmailMfa: boolean;
  countryCode: string;
  phoneNumber: string;
};
export type PasskeyEnrollInfoRes = {
  /** PublicKeyCredentialCreationOptions suitable for JSON transmission to navigator.credentials.create() */
  enrollOptions: {
    /** Relying Party entity */
    rp: {
      name: string;
      id?: string;
    };
    /** User entity JSON */
    user: {
      id: string;
      name: string;
      displayName: string;
    };
    /** Base64URL-encoded challenge */
    challenge: string;
    /** Public key credential parameters */
    pubKeyCredParams: {
      type: "public-key";
      /** COSE algorithm identifier */
      alg: number;
    }[];
    /** Milliseconds to wait for completion */
    timeout?: number;
    /** Credentials to exclude */
    excludeCredentials?: {
      id: string;
      type: "public-key";
      transports?: (
        | "ble"
        | "cable"
        | "hybrid"
        | "internal"
        | "nfc"
        | "smart-card"
        | "usb"
      )[];
    }[];
    /** Authenticator selection criteria */
    authenticatorSelection?: {
      authenticatorAttachment?: "platform" | "cross-platform";
      requireResidentKey?: boolean;
      residentKey?: "discouraged" | "preferred" | "required";
      userVerification?: "discouraged" | "preferred" | "required";
    };
    /** Credential UX hints */
    hints?: ("hybrid" | "security-key" | "client-device")[];
    /** Attestation conveyance preference */
    attestation?: "direct" | "enterprise" | "indirect" | "none";
    /** Supported attestation formats */
    attestationFormats?: (
      | "fido-u2f"
      | "packed"
      | "android-safetynet"
      | "android-key"
      | "tpm"
      | "apple"
      | "none"
    )[];
    /** Authentication extensions inputs */
    extensions?: {
      appid?: string;
      credProps?: boolean;
      hmacCreateSecret?: boolean;
      minPinLength?: boolean;
    };
  };
};
export type PostPasskeyEnrollReq = {
  /** Registration response JSON from navigator.credentials.create(), with all ArrayBuffers Base64URL-encoded */
  enrollInfo: {
    /** Base64URL-encoded credential ID */
    id: string;
    /** Base64URL-encoded raw credential ID */
    rawId: string;
    /** Authenticator attestation response, with all binary fields Base64URL-encoded */
    response: {
      /** Base64URL-encoded JSON of the clientData */
      clientDataJSON: string;
      /** Base64URL-encoded CBOR attestation object */
      attestationObject: string;
      /** Base64URL-encoded authenticatorData (optional) */
      authenticatorData?: string;
      /** Supported authenticator transports (optional) */
      transports?: (
        | "ble"
        | "cable"
        | "hybrid"
        | "internal"
        | "nfc"
        | "smart-card"
        | "usb"
      )[];
      /** COSE algorithm identifier (optional) */
      publicKeyAlgorithm?: number;
      /** Base64URL-encoded raw public key (optional) */
      publicKey?: string;
    };
    /** Where the credential is stored (optional) */
    authenticatorAttachment?: "platform" | "cross-platform";
    /** Results of any client-side extensions */
    clientExtensionResults: {
      /** appid extension result (optional) */
      appid?: boolean;
      /** credProps extension result (optional) */
      credProps?: {
        /** Whether the credential is resident-key capable */
        rk?: boolean;
      };
      /** hmacCreateSecret extension result (optional) */
      hmacCreateSecret?: boolean;
    };
    /** Credential type */
    type: "public-key";
  };
};
export type PostPasskeyEnrollDeclineReq = {
  remember: boolean;
};
export type PasskeyVerifyInfoRes = {
  /** A variant of PublicKeyCredentialRequestOptions suitable for JSON transmission to the browser to be passed into navigator.credentials.get(). */
  passkeyOption: {
    /** Base64URL-encoded challenge */
    challenge: string;
    /** Milliseconds the caller is willing to wait for the call to complete */
    timeout?: number;
    /** Relying Party identifier */
    rpId?: string;
    /** List of credential descriptors that are allowed for assertion */
    allowCredentials?: {
      /** Base64URL-encoded credential ID */
      id: string;
      /** Credential type */
      type: "public-key";
      /** Allowed authenticator transports */
      transports?: (
        | "ble"
        | "cable"
        | "hybrid"
        | "internal"
        | "nfc"
        | "smart-card"
        | "usb"
      )[];
    }[];
    /** User verification requirement */
    userVerification?: "discouraged" | "preferred" | "required";
    /** Hints to guide the browser’s authenticator UX */
    hints?: ("hybrid" | "security-key" | "client-device")[];
    /** Authentication extension inputs */
    extensions?: {
      appid?: string;
      credProps?: boolean;
      hmacCreateSecret?: boolean;
      minPinLength?: boolean;
    };
  } | null;
};
export type PostPasskeyVerifyReq = {
  /** Authentication response JSON from navigator.credentials.get(), with all ArrayBuffers Base64URL-encoded */
  passkeyInfo: {
    /** Base64URL-encoded credential ID */
    id: string;
    /** Base64URL-encoded raw credential ID */
    rawId: string;
    /** Authenticator assertion response, with all binary fields Base64URL-encoded */
    response: {
      /** Base64URL-encoded JSON of the clientData */
      clientDataJSON: string;
      /** Base64URL-encoded authenticatorData */
      authenticatorData: string;
      /** Base64URL-encoded assertion signature */
      signature: string;
      /** Base64URL-encoded user handle (optional) */
      userHandle?: string;
    };
    /** Where the credential is stored (optional) */
    authenticatorAttachment?: "platform" | "cross-platform";
    /** Results of any client-side extensions */
    clientExtensionResults: {
      /** appid extension result (optional) */
      appid?: boolean;
      /** credProps extension result (optional) */
      credProps?: {
        /** Whether the credential is resident-key capable */
        rk?: boolean;
      };
      /** hmacCreateSecret extension result (optional) */
      hmacCreateSecret?: boolean;
    };
    /** Credential type */
    type: "public-key";
  };
  /** The challenge value read from the response of Get passkey verify options */
  challenge: string;
};
export type RecoveryCodeEnrollRes = {
  recoveryCode: string;
};
export type PostSignInWithRecoveryCodeReq = {
  email?: string;
  recoveryCode: string;
};
export type UserOrgsRes = {
  orgs: {
    id?: number;
    name?: string;
    slug?: string;
    companyLogoUrl?: string;
  }[];
  activeOrgSlug: string;
};
export type PostProcessSwitchOrgReq = {
  org: string;
};
export type Banner = {
  id: number;
  type: string;
  text: string;
  isActive: boolean;
  locales: {
    locale: string;
    value: string;
  }[];
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};
export type AppBannersRes = {
  banners: Banner[];
};
export type TokenExchangeRes = {
  access_token: string;
  expires_in: number;
  expires_on: number;
  not_before: number;
  token_type: "Bearer";
  scope: string;
  refresh_token?: string;
  refresh_token_expires_in?: number;
  refresh_token_expires_on?: number;
  id_token?: string;
};
export type TokenExchangeReq = {
  codeVerifier: string;
  sessionId: string;
};
export type TokenRefreshRes = {
  access_token: string;
  expires_in: number;
  expires_on: number;
  token_type: "Bearer";
};
export type TokenRefreshReq = {
  refreshToken: string;
};
export type SignOutReq = {
  refreshToken: string;
  clientId: string;
};
export type ResetPasswordReq = {
  email: string;
  locale?: string;
};
export const {
  usePostEmbeddedAuthV1InitiateMutation,
  useGetEmbeddedAuthV1BySessionIdSignUpQuery,
  useLazyGetEmbeddedAuthV1BySessionIdSignUpQuery,
  usePostEmbeddedAuthV1BySessionIdSignUpMutation,
  usePostEmbeddedAuthV1BySessionIdSignInMutation,
  useGetEmbeddedAuthV1BySessionIdAppConsentQuery,
  useLazyGetEmbeddedAuthV1BySessionIdAppConsentQuery,
  usePostEmbeddedAuthV1BySessionIdAppConsentMutation,
  useGetEmbeddedAuthV1BySessionIdMfaEnrollmentQuery,
  useLazyGetEmbeddedAuthV1BySessionIdMfaEnrollmentQuery,
  usePostEmbeddedAuthV1BySessionIdMfaEnrollmentMutation,
  usePostEmbeddedAuthV1BySessionIdEmailMfaCodeMutation,
  usePostEmbeddedAuthV1BySessionIdEmailMfaMutation,
  useGetEmbeddedAuthV1BySessionIdOtpMfaSetupQuery,
  useLazyGetEmbeddedAuthV1BySessionIdOtpMfaSetupQuery,
  useGetEmbeddedAuthV1BySessionIdOtpMfaQuery,
  useLazyGetEmbeddedAuthV1BySessionIdOtpMfaQuery,
  usePostEmbeddedAuthV1BySessionIdOtpMfaMutation,
  usePostEmbeddedAuthV1BySessionIdSmsMfaSetupMutation,
  useGetEmbeddedAuthV1BySessionIdSmsMfaQuery,
  useLazyGetEmbeddedAuthV1BySessionIdSmsMfaQuery,
  usePostEmbeddedAuthV1BySessionIdSmsMfaMutation,
  usePostEmbeddedAuthV1BySessionIdSmsMfaCodeMutation,
  useGetEmbeddedAuthV1BySessionIdPasskeyEnrollQuery,
  useLazyGetEmbeddedAuthV1BySessionIdPasskeyEnrollQuery,
  usePostEmbeddedAuthV1BySessionIdPasskeyEnrollMutation,
  usePostEmbeddedAuthV1BySessionIdPasskeyEnrollDeclineMutation,
  useGetEmbeddedAuthV1BySessionIdPasskeyVerifyQuery,
  useLazyGetEmbeddedAuthV1BySessionIdPasskeyVerifyQuery,
  usePostEmbeddedAuthV1BySessionIdPasskeyVerifyMutation,
  useGetEmbeddedAuthV1BySessionIdRecoveryCodeEnrollQuery,
  useLazyGetEmbeddedAuthV1BySessionIdRecoveryCodeEnrollQuery,
  usePostEmbeddedAuthV1BySessionIdRecoveryCodeMutation,
  useGetEmbeddedAuthV1BySessionIdSwitchOrgQuery,
  useLazyGetEmbeddedAuthV1BySessionIdSwitchOrgQuery,
  usePostEmbeddedAuthV1BySessionIdSwitchOrgMutation,
  useGetEmbeddedAuthV1BySessionIdAppBannersQuery,
  useLazyGetEmbeddedAuthV1BySessionIdAppBannersQuery,
  usePostEmbeddedAuthV1TokenExchangeMutation,
  usePostEmbeddedAuthV1TokenRefreshMutation,
  usePostEmbeddedAuthV1SignOutMutation,
  usePostEmbeddedAuthV1ResetPasswordCodeMutation,
} = injectedRtkApi;
