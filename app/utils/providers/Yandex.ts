import { OAuthConfig, OAuthUserConfig } from 'next-auth/providers'

export default function Yandex<P extends Record<string, any> = any>(options: OAuthUserConfig<P>): OAuthConfig<P> {
  return {
    id: 'yandex',
    name: 'Yandex',
    type: 'oauth',
    authorization: 'https://oauth.yandex.ru/authorize?scope=login:email+login:info+login:avatar',
    token: 'https://oauth.yandex.ru/token',
    userinfo: 'https://login.yandex.ru/info?format=json',
    profile(profile: P) {
      return {
        id: profile.id,
        name: profile.real_name,
        email: profile.default_email,
        image: profile.is_avatar_empty ? null : `https://avatars.yandex.net/get-yapic/${profile.default_avatar_id}/islands-300`,
      }
    },
    options,
  }
}
