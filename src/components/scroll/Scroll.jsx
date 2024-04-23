import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Scroll() {

   const {pathname} = useLocation()

   useEffect(()=>{
    window.scrollTo(0, 0)
   }
   , [pathname])
  return null;
}


export default Scroll
