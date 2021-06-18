import { encodeQuery } from '../utils'
import { Oauth2Scheme } from '../schemes/oauth2'

export class Auth0Scheme extends Oauth2Scheme {
  logout(): void {
    this.$auth.reset()

    const opts = {
      client_id: this.options.clientId + '',
      returnTo: this.logoutRedirectURI
    }
    const url = this.options.endpoints.logout + '?' + encodeQuery(opts)

    if (process.client) {
      window.location.replace(url)
    } else {
      this.$auth.ctx.redirect(url)
    }
  }
}
