import React from 'react'
import { useState } from 'react'
import '../style/Bodyy.css'
// import Sidebar from '../Sidebar/Sidebar.css'
import { assets } from '../assets/assets'


const Bodyy = () => {
  const [extended, setextended] = useState(false)
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
        <p><span>भवतः स्वागतम्‌</span></p>
        <p className='font-light'>कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥</p>
      </div>
      <div className="cards ">
        <div className="card ">
          <p>Suggest me some beautiful places for visiting in month of sept</p>
          <img src={assets.compass_icon} alt="" />
        </div>
        <div className="card">
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ea.</p>
          <img src={assets.bulb_icon} alt="" />
        </div>
        <div className="card">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, tempora!</p>
          <img src={assets.message_icon} alt="" />
        </div>
        <div className="card">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, totam.</p>
          <img src={assets.code_icon} alt="" />
        </div>
      </div>
      <div className="main-bottom">
        <div className="search-box">
          <input type="text "placeholder='Enter the query here' />
          <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img src={assets.send_icon} alt="" />
          </div>
        </div>
      
      </div>
    </div>
   </div>
   </div>

   </>
  )
}

export default Bodyy
