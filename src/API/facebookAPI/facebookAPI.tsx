import http from '@/utils/http'

export const getPost = async (limit: number = 10) => {
  try {
    const res = await http.get('/SN/home/getPosts', {
      params: { limit, offset: 0, status: 'friend' },
    })
    return res.data
  } catch (error) {
    console.log(error)
  }
}
