import { exchangeAuthCode, signIn, fetchUserInfo, refreshAccessToken, signOut } from './auth.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card">
      <button id="sign-in" type="button">Sign In</button>
      <p>access token: <span id="access-token"></span></p>
      <p>refresh token: <span id="refresh-token"></span></p>
      <button id="refresh-token-btn">Refresh access token</button>
      <p>id token: <span id="id-token"></span></p>
      <button id="user-info-btn">Fetch user info</button>
      <p>user info: <span id="user-info"></span></p>
      <button id="sign-out">Sign Out</button>
    </div>
  </div>
`

document.querySelector('#sign-in')?.addEventListener('click', signIn)
document.querySelector('#user-info-btn')?.addEventListener('click', fetchUserInfo)
document.querySelector('#refresh-token-btn')?.addEventListener('click', refreshAccessToken)
document.querySelector('#sign-out')?.addEventListener('click', signOut)

exchangeAuthCode()