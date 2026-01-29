import { useEffect } from "react"

export const useTitle = (title) => {
    useEffect(() =>{
      document.title = `${title} / Code Book`
    },[title])
  return null
}
