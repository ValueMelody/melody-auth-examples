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
export type AuthRes = {
  sessionId: string;
  nextStep?:
    | "consent"
    | "mfa_enroll"
    | "email_mfa"
    | "sms_mfa"
    | "otp_setup"
    | "opt_mfa"
    | "passkey_enroll";
  success: boolean;
};
export type PostSignUpReq = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
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
    deletedAt?: string;
    locales?: {
      id?: number;
      scopeId?: number;
      locale?: string;
      value?: string;
      createdAt?: string;
      updatedAt?: string;
      deletedAt?: string;
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
  usePostEmbeddedAuthV1TokenExchangeMutation,
  usePostEmbeddedAuthV1TokenRefreshMutation,
  usePostEmbeddedAuthV1SignOutMutation,
  usePostEmbeddedAuthV1ResetPasswordCodeMutation,
} = injectedRtkApi;
