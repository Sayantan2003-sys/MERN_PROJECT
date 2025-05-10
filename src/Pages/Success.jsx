import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import { Link } from "react-scroll";


const Success = () => {
const [countdown, setCountdown] = useState(10);
const navigate = useNavigate();

  useEffect(() => {
    
    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        navigate("/");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate]);


    return(
        <>
       <section className="notFound">
        <div className="container">
            <img src="/sandwich.png" alt="success" />
            <h1>Redirecting to Home in {countdown} seconds...</h1>
            <Link to={"/"}>Back to Home <HiOutlineArrowNarrowRight /> </Link>
        </div>
       </section>
        </>
    )
    
}
export default Success 