


import { useState } from "react";
import './App.css';
import search from "/home/hp/Documents/React/pro1/src/Search.png";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass,faHeart, faBookBookmark, faComment, faUpload, faInfo} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

import image from "/home/hp/Pictures/Screenshots/Musk1.jpeg";
import image2 from "/home/hp/Documents/React/pro1/src/Im.jpeg";
import p1 from "/home/hp/Documents/React/pro1/src/Photo1.png";
import p2 from "/home/hp/Documents/React/pro1/src/Photo2.png";
import p3 from "/home/hp/Documents/React/pro1/src/Photo3.png";
import p4 from "/home/hp/Documents/React/pro1/src/Photo4.png";
import Chat from "./Chat";


function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isclik,setisclik]=useState(false);
    const navigate=useNavigate(Navigate);
    const handleclick=()=>{
      
      navigate('./chat');
    }
    
    
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
    setisclik(!isclik);
  };
    return (
      <div>
        <div className="py-5 sm:m-5 md:flex md:m-7 justify-evenly">
            <div className="flex justify-between">
                <h1 className="text-black font-extrabold text-4xl italic">Dribble</h1>
             
                 <button className="md:hidden" onClick={toggleMenu}><FontAwesomeIcon className="text-4xl " icon={faBars}></FontAwesomeIcon></button>
                 
            </div>
            <div className={`${isclik? "hidden":"flex"}  rounded-4xl justify-between  max-sm:p-1.5 bg-gray-200 max-sm:mt-5 w-1.5xl md:w-xl items-center`}>
                    <input className="outline-none font-bold text-center" placeholder="what are you looking for?" ></input>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#ffffff', backgroundColor:"magenta",borderRadius:"25px",padding:"10px" ,margin:"7px" }} />
                    
                </div>
             
            <div className="max-sm:hidden md:flex justify-center align-middle text-center items-center">
                <ul className="flex gap-7">
                 <li>Home</li>
                 <li>service</li>
                 <li>contact</li>
                 <li>Blogs</li>
                 <li>Designs</li>
                </ul>
                </div>    
               <div className="max-sm:hidden space-3">
                <button className="">sign in</button>
                <button className="md:flex-row bg-black text-white rounded-2xl p-3 ml-3">sign up</button>
                </div> 
                
             <div className={`${isMenuOpen? "flex":"hidden"} w-full  text-4xl text-center justify-center border-b-black`}>
                    <ul className="font-light text-2xl">
                        <a href="#"><li>Home</li></a>
                        <a href="#"><li>service</li></a>
                       <a href="#"><li>contact</li></a> 
                        <a href="#"><li>sign in</li></a>
                      <a href="#"><li>signup</li></a>  
                    </ul>
                 </div>
          </div>
                   <div className="sm:flex-row max-sm:w-full shrink  md:flex-col md:w-[800px] md:flex-wrap  md:mx-auto">
                    <div><h1 className="m-6 text-2xl font-extrabold ">ChatApp</h1></div>
                       <br></br>
                       <div className="flex justify-around items-center ">
                         <img src={image} className="w-8 h-8 border-r-50% rounded-2xl"></img> 
                         <h3 className="font-extrabold">Elon Musk</h3>
                         <h6 className="text-0.2xl text-green-400">Available</h6>
                         <FontAwesomeIcon className="text-2xl p-3 border-2 rounded-4xl bg-blue-900 text-white max-sm:text-0.2xl"  icon={faHeart}></FontAwesomeIcon>
                        <FontAwesomeIcon className="text-2xl p-3 border-2 rounded-4xl bg-blue-900 text-white max-sm:text-0.2xl" icon={faBookBookmark}></FontAwesomeIcon>
                         
                         <button className="text-0.5xl bg-black p-4 text-white rounded-3xl max-sm:rounded-2xl max-sm:p-1.5" onClick={handleclick}>Get in Touch</button>
                       </div>
                       <div>
                          <div className="justify-center items-center m-3 ">
                            <img src={image2}></img>
                            <div className="text-center space-x-4 m-2">
                                 <FontAwesomeIcon className="text-2xl p-3 border-2 rounded-4xl bg-blue-900 text-white" icon={faComment}></FontAwesomeIcon>
                                 <FontAwesomeIcon className="text-2xl p-3 border-2 rounded-4xl bg-blue-900 text-white" icon={faUpload}></FontAwesomeIcon>
                                 <FontAwesomeIcon className="text-2xl p-3 border-2 rounded-4xl bg-blue-900 text-white" icon={faInfo}></FontAwesomeIcon>
                            </div>
                          
                          </div>

                       </div>

<br></br>
                   <div className="flex flex-col flex-wrap justify-center text-center items-center align-middle ">
                      <img src={image} className="w-11 h-11  rounded-4xl"></img> 
                      <h1 className="font-extrabold">Elon musk</h1>
                      <h4 className="font-medium text-red-500">Chieft executive officer</h4>
                      <h6 className="font-ligh">Tesla</h6>
                        <button className="text-0.5xl bg-black p-4 text-white md:rounded-3xl max-sm:rounded-2xl max-sm:p-1.5" onClick={handleclick}>Get in Touch</button>
                   </div>
                      
                   </div>
                    <div className=" md:flex  justify-center w-full gap-36 m-4 sm:mx-auto sm:w-full max-sm:m-23 " >
                      <div className="1"><img  src={p1}></img></div>
                      <div className="2"><img  src={p2}></img></div>
                      <div className="3"><img  src={p3}></img></div>
                      <div className="4"><img  src={p4}></img></div>
                      
                    </div>
                  <div className="max-sm:flex-col md:flex w-full justify-around align-middle text-center p-4 bg-amber-400 max-sm:leading-10 max-sm:w-fit">
                    <div className="md:flex justify-center text-center items-center">
                      <h1 className="text-black font-extrabold text-4xl italic">Dribble</h1>
                    </div>
                    <div className="max-sm:flex-wrap md:flex justify-center text-center items-center gap-5">
                      
                      <h1 className="2">For Designers</h1>
                      <h1 className="3">Hire Talent</h1>
                      <h1 className="4">Inspiration</h1>
                      <h1 className="5">Advertising</h1>
                      <h1 className="6">Blog</h1>
                      <h1 className="7">About</h1>
                      <h1 className="8">Contact</h1>
                      <h1>Support</h1>


                    </div>
                    <div className="md:flex justify-center text-center items-center gap-7">
                        <FontAwesomeIcon className="text-2xl p-3 border-2 rounded-4xl bg-blue-900 text-white" icon={faTwitter}></FontAwesomeIcon>
                        <FontAwesomeIcon className="text-2xl p-3 border-2 rounded-4xl bg-blue-900 text-white" icon={faYoutube}></FontAwesomeIcon>
                        <FontAwesomeIcon className="text-2xl p-3 border-2 rounded-4xl bg-blue-900 text-white" icon={faInstagram}></FontAwesomeIcon>
                        <FontAwesomeIcon className="text-2xl p-3 border-2 rounded-4xl bg-blue-900 text-white" icon={faFacebook}></FontAwesomeIcon>
                    </div>
                
                  </div>
                  
                  
                 

        
        </div>
    );
}

export default Home;