import { useEffect } from "react"

const Animation = () => {

    useEffect(() => {
      const handleScroll = () => {
        const div = document.getElementById('scroll')
      } 

      window.addEventListener ('scroll', handleScroll)
    }, [])

    return (
        <div style={{height: '180vh', background: 'pink' }}>
            <h1>scroll</h1>
        </div>
    )
}

export default Animation