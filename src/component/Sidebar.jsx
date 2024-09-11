// import React from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets'
import '../style/Sidebar.css'

const Sidebar = () => {

    const [Extended, setExtended] = useState(false)
    return (
        <div className="Sidebar">
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
                <div className="new_chat">
                    <img src={assets.plus_icon} alt="" />
                    {Extended ? <p>New chat</p> : null}
                </div>
                {Extended ?
                    <div className="recent">
                        <p className='Recent_title'>Recent</p>
                        <div className="recent_entry">
                            <img src={assets.message_icon} alt="" />
                            <p>What is Geeta../</p>
                        </div>
                    </div>
                    : null}
            </div>
            <div className="bottom">
                <div className="bottom_icon recent_entry">
                    <img src={assets.question_icon} alt="" />
                    {Extended ? <p>Help</p> : null}
                </div>
                <div className="bottom_icon recent_entry">
                    <img src={assets.history_icon} alt="" />
                    {Extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom_icon recent_entry">
                    <img src={assets.setting_icon} alt="" />
                    {Extended ? <p>Setting</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
