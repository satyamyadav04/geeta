
import { useState } from 'react'
import '../style/Bodyy.css'
import { assets } from '../assets/assets'
import axios from 'axios'


const Bodyy = () => {
  const [extended, setextended] = useState(false)
  const [question, setquestion] = useState("")
  const [answer, setanswer] = useState("")
  const [showResult,setshowresult]=useState(false)
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
                <img onClick={() => setextended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
                <div className="new_chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className='Recent_title'>Recent</p>
                        <div className="recent_entry">
                            <img src={assets.message_icon} alt="" />
                            <p>What is React../</p>
                        </div>
                    </div>
                    : null}
            </div>
            <div className="bottom">
                <div className="bottom_icon recent_entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom_icon recent_entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom_icon recent_entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Setting</p> : null}
                </div>
            </div>
        </div>
    <div className="main w-full h-full">
      
    <div className="nav">
      
      <p className='bg-cyan-400 px-3 py-2 text-black font-semibold rounded-lg '>Analysis</p>
      <img src={assets.user_icon} alt="" />
    </div>
    <div className="main_container">
      <div className="greet">
        <p ><span className='text'>भवतः स्वागतम्‌</span></p>
        <p className='font-light'>कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥</p>
        <p className='answer text-black bg-gray-400 p-20 rounded-3xl'>{answer}</p>
        
      </div>
    
      <div className="main-bottom">
        <div className="search-box">
          <input  value={question} onChange={(e)=>setquestion(e.target.value)}type="text "placeholder='Enter the query here' />
          <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img onClick={()=>onSent()} src={assets.send_icon}/>
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
