import http from '@/utils/http'
import { CookieSetOptions } from 'universal-cookie/cjs/types'

class AuthAPI {
  Login = async (
    params: { nameAccount: string; password: string },
    setCookies: (
      name: 'tks' | 'k_user',
      value: any,
      options?: CookieSetOptions | undefined,
    ) => void,
  ) => {
    try {
      const response = await http.post('/account/login', { params })
      console.log(response)

      if (response.data.user) {
        const { id, accessToken } = response.data.user
        const token = 'Bearer ' + accessToken
        setCookies('tks', token, {
          path: '/',
          secure: false,
          sameSite: 'strict',
          expires: new Date(new Date().getTime() + 30 * 86409000),
        })
        // 30 days
        delete response.data?.user.accessToken
        setCookies('k_user', id, {
          path: '/',
          secure: false,
          sameSite: 'strict',
          expires: new Date(new Date().getTime() + 30 * 86409000),
        })
        // 30 days
      }
      return response.data
    } catch (error) {
      console.log('login', error)
    }
  }
}
export default new AuthAPI()
