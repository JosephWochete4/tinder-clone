import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person'; 
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum"

function Header() {
    return (
        <div className="header" >
           
            <IconButton>
            <PersonIcon className="header_icon" fontSize="large"/>
            </IconButton>

            <img
            className="header_logo"
            src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"
            alt=""
            />
            <IconButton>
            <ForumIcon className="header_icon" fontSize="large"/>
            </IconButton>
            
            
        </div>
    )
}

export default Header
