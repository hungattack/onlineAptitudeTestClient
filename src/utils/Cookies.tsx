import React from 'react'
import { useCookies } from 'react-cookie'

const Cookies = () => {
  const [cookies] = useCookies(['k_user', 'tks'])
  const userId = cookies.k_user
  const token = cookies.tks
  return {
    userId,
    token,
  }
}
export default Cookies
