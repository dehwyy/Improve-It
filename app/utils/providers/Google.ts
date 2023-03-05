import { OAuthConfig, OAuthUserConfig } from 'next-auth/providers'
import { GoogleProfile } from 'next-auth/providers/google'

export default function Google<P extends GoogleProfile>(options: OAuthUserConfig<P>): OAuthConfig<P> {
  return {
    id: 'google',
    name: 'Google',
    type: 'oauth',
    wellKnown: 'https://accounts.google.com/.well-known/openid-configuration',
    authorization: { params: { scope: 'openid email profile' } },
    idToken: true,
    checks: ['pkce', 'state'],
    profile(profile) {
      const splited = profile.picture.split('')
      const idx = splited.length - splited.reverse().findIndex(char => char === '=') - 1
      const picture = splited.reverse().slice(0, idx).join('')
      // cutting last part of url to make image full-sized
      return {
        id: profile.sub,
        name: profile.name,
        email: profile.email,
        image: picture,
      }
    },
    style: {
      logo: 'https://raw.githubusercontent.com/nextauthjs/next-auth/main/packages/next-auth/provider-logos/google.svg',
      logoDark: 'https://raw.githubusercontent.com/nextauthjs/next-auth/main/packages/next-auth/provider-logos/google.svg',
      bgDark: '#fff',
      bg: '#fff',
      text: '#000',
      textDark: '#000',
    },
    options,
  }
}
