import { loadCodeAndStateFromUrl, triggerLogin, exchangeTokenByAuthCode, getUserInfo, exchangeTokenByRefreshToken, logout } from '@melody-auth/web'
import { checkStorage, isValidTokens } from '@melody-auth/shared'

const config = {
  serverUri: 'http://localhost:8787',
  clientId: '1A3564de462142A60cE5456edaADB5659dBC1B9c719c9E558dcaac0850a2f8F8',
  redirectUri: 'http://localhost:3000/en/dashboard',
  scopes: ['openid', 'profile', 'email'],
  storage: 'localStorage' as const
}

export function signIn() {
  triggerLogin(
    'redirect',
    config
  )
}

export function exchangeAuthCode () {
  const { code, state } = loadCodeAndStateFromUrl()

  const { storedRefreshToken } = checkStorage(config.storage)
  const parsed = JSON.parse(storedRefreshToken)
  if (parsed && parsed.refreshToken) {
    document.querySelector('#refresh-token')!.innerHTML = parsed.refreshToken || 'null'
    refreshAccessToken()
  } else if (code && state) {
    exchangeTokenByAuthCode (
      code,
      state,
      config
    ).then((res) => {
      document.querySelector('#access-token')!.innerHTML = res.accessTokenStorage.accessToken || 'null'
      document.querySelector('#refresh-token')!.innerHTML = res.refreshTokenStorage?.refreshToken || 'null'
      document.querySelector('#id-token')!.innerHTML = res.idTokenStorage?.idToken || 'null'
      window.accessToken = res.accessTokenStorage.accessToken
    })
  }
}

export function fetchUserInfo () {
  getUserInfo(config, { accessToken: window.accessToken })
    .then((res) => {
      document.querySelector('#user-info')!.innerHTML = JSON.stringify(res)
    })
}

export function refreshAccessToken () {
  const { storedRefreshToken } = checkStorage(config.storage)
  const parsed = JSON.parse(storedRefreshToken)

  const { hasValidAccessToken } = isValidTokens({
    accessToken: window.accessToken,
    expiresOn: window.accessTokenExpiresOn,
  }, {}, {})

  if (!hasValidAccessToken) {
    exchangeTokenByRefreshToken(config, parsed.refreshToken)
      .then((res) => {
        document.querySelector('#access-token')!.innerHTML = res.accessToken || 'null'
        window.accessToken = res.accessToken
        window.accessTokenExpiresOn = res.expiresOn
      })
  }
}

export function signOut () {
  const { storedRefreshToken } = checkStorage(config.storage)
  const parsed = JSON.parse(storedRefreshToken)

  logout(config,
    window.accessToken,
    parsed.refreshToken,
    config.redirectUri,
    false,
  )
}