import { Faq } from "./components/Faq"
import { FeaturedProduct } from "./components/FeaturedProduct"
import { Hero } from "./components/Hero"
import { Testimonials } from "./components/Testimonials"
import {useTitle} from "../../hooks/useTitle"

export const HomePage = ({title}) => {
    useTitle(title)
  return (
    <>
        <Hero/>
        <FeaturedProduct/>
        <Testimonials/>
        <Faq />
    </>
  )
}
