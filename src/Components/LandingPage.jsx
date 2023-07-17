import React from "react";
import Hero from "./Hero";
import About from "./About";
import Product from "./Products";
import Service from "./Service";
import Courses from "./Courses";
import Participate from "./Participate";
import Header from "./Header";
import Features from "./Features";
import Play from "./Play";
import Footer from "./Footer";

const LandingPage=()=>{
    return(
        <div>
            <Header/>
            <Hero/>
            <About/>
            <Product/>
            <Service/>
            <Courses/>
            <Participate/>
            <Features/>
            <Play/>
            <Footer/>
            
        </div>
    )
}
export default LandingPage;
