import { useEffect } from 'react'

const UseScript = (...urls) => {
    useEffect(() => {
        urls.forEach(url => {
            const script = document.createElement('script')

            script.src = url
            script.async = true

            document.body.appendChild(script)
            return () => {
                document.body.removeChild(script)
            }
        })
    }, urls)
};

export default UseScript