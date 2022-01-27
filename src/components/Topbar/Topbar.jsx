import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">JEDE-ADMIN</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://cdnb.artstation.com/p/assets/images/images/037/916/403/large/giovanni-aguilar-n4ni_n4ni-gwen-icon.jpg?1621651324&dl=1" alt="avatar" className='topAvatar'/>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
