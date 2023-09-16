'use client'
import { getPost } from '@/API/facebookAPI/facebookAPI'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react'

interface Props {}

const Tiktok = () => {
    // const result = useQuery({
    //   queryKey: ['posts', 2],
    //   queryFn: () => getPost(2),
    // })
    // console.log(result.data)

    return (
        <div>
            {/* {result.data?.map(
        (p: {
          _id: string
          content: {
            text: string
          }
        }) => (
          <p key={p._id}>{p.content.text}</p>
        ),
      )} */}
            <Link href="/sm/tiktok">tiktok</Link>
        </div>
    )
}

export default Tiktok
