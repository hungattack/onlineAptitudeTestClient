import refreshToken from '@/refreshToken/refreshToken'
import http from '@/utils/http'

class VerifyAPI {
  login = async () => {
    try {
      const res = await http.post('verify/login')
      console.log(res, 'res')

      return res.data
    } catch (error) {
      console.log('Error verify login: ', error)
    }
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new VerifyAPI()
