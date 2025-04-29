import { useEffect, useState } from "react"

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 991px)")

    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)

    setIsMobile(mediaQuery.matches)

    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return isMobile
}

export default useIsMobile
