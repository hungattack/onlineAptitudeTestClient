import Link from 'next/link'
import React from 'react'

const SocailMedia = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div>Header</div>
            layout here
            {children}
            <div>Footer</div>
        </div>
    )
}

export default SocailMedia
