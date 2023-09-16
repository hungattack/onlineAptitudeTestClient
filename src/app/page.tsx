import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Facebook from './facebook/page'

export default function Home({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Link href="/sm">sm</Link>
        </>
    )
}
