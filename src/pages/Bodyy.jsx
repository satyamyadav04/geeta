import React from 'react'
import { useState } from 'react'
import '../style/Bodyy.css'
// import Sidebar from '../Sidebar/Sidebar.css'
import { assets } from '../assets/assets'
import axios from 'axios'
// import { FaFacebook, AiFillDelete } from 'react-icons/fa';
import { BiArrowToTop ,BiSolidMessageSquareDots} from "react-icons/bi";
import { FaHistory ,FaPlusCircle} from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";
import { LuHistory } from "react-icons/lu";
import { TiMicrophone } from "react-icons/ti";
import { MdPermMedia } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { ImMenu } from "react-icons/im";
import { IoMdMenu } from "react-icons/io";


const Bodyy = () => {
  const [extended, setextended] = useState(false)
  const [question, setquestion] = useState("")
  const [answer, setanswer] = useState("")
  const [showResult,setshowresult]=useState(false)
  // const [input, setinput] = useState(true)
  const [loading, setloading] = useState(true)
  const [resultdata,setResultdata]=useState()
   async function generateAnswer(){
    setanswer("loading....")
   const response = await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDH9AoYgUPmeQQn06hezllHFzlTvbhhg-Y",
      method:"post",
      data:{"contents":[
        {"parts":[{"text": question}]}]}

    })
    
    setanswer(response['data']['candidates'][0]['content']['parts'][0]['text'])
     

  }
  const onSent = async ( ) =>{
    setResultdata("")
    setloading(true)
    setshowresult(true)
    await generateAnswer(question);
    setloading(false)
    setquestion("")
    
  }
  return (
    <>


<div className="Full">
<div className="Sidebar">
            <div className="top">
                {/* <img onClick={() => setextended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" /> */}
                <button onClick={() => setextended(prev => !prev)} className='menu'> <IoMdMenu size={25} color='white'/> </button>
                <div className="new_chat">
                    {/* <img src={assets.plus_icon} alt="" /> */}
                    <button><FaPlusCircle size={15}/></button>
                    {extended ? <p>New chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className='Recent_title font-bold text-black'>Recent</p>
                        <div className="recent_entry">
                            <button><BiSolidMessageSquareDots size={22}/></button>
                            <p>What is React../</p>
                        </div>
                    </div>
                    : null}
            </div>
            <div className="bottom">
                <div className="bottom_icon recent_entry">
                    {/* <img src={assets.question_icon} alt="" /> */}
                    <button><BsFillQuestionSquareFill size={20}/></button>
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom_icon recent_entry">
                     <button> <LuHistory size={20}/></button>
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom_icon recent_entry">
                     <button > <IoSettings size={23}/></button>
                    {extended ? <p>Setting</p> : null}
                </div>
            </div>
        </div>
    <div className="main w-full h-full">
      
    <div className="nav rounded-full">
      
      {/* <p className='bg-cyan-400 px-3 py-2 text-black font-semibold rounded-lg '>Analysis</p> */}
      <img src='src\assets\peckcock.jpg' alt="" />
    </div>
    <div className="main_container">
      <div className="greet">
        <p ><span className='text font-extrabold'>भवतः स्वागतम्‌</span></p>
        <p className=' font-extrabold text-zinc-50'>कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥</p>
        <h3 className='answer text-black   p-20 rounded-3xl'>{answer}</h3>
        
      </div>
    
      <div className="main-bottom">
        <div className="search-box">
          <input  value={question} onChange={(e)=>setquestion(e.target.value)}type="text " placeholder='Enter the query here'  />
          <div>
            <button><MdPermMedia size={25} color='white'/></button>
            <button><TiMicrophone size={25}color='white'/></button>
          <button onClick={()=>onSent()}> <BsSendFill size={20}color='white'/></button>
          </div>
        </div>
      
      </div>
    </div>
   </div>
   </div>

   </>
  )
}

export default Bodyy
