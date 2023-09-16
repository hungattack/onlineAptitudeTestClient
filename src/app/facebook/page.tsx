'use client'
import { getPost } from '@/API/facebookAPI/facebookAPI'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react'

interface Props {}

const Facebook = () => {
    // const result = useQuery({
    //   queryKey: ['posts', 1],
    //   queryFn: () => getPost(),
    //   staleTime: 5000,
    //   keepPreviousData: true,
    // })
    // console.log(result.data)

    return (
        <div>
            FaceBook
            <Link href="/sm">tiktok</Link>
        </div>
    )
}

export default Facebook
