'use client'

import { useEffect } from 'react'

export default function MFEPage() {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://d1ok4nzvcbsy3m.cloudfront.net/bundle.js'
        script.async = true
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return <div id="root" />
}
