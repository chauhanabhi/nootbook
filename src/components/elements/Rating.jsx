import { Star, StarFill } from "react-bootstrap-icons"

export const Rating = ({rating}) => {
  return (
    <>
    {[...Array(5)].map((_,i) => (
        i< rating ? <StarFill key={i} className="text-yellow-500 mr-1" size={18} /> : <Star  key={i} className="text-yellow-500 mr-1" size={18} />
    ))}
   
    </>
  )
}
