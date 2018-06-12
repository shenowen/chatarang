import React, { Component } from 'react'

const Sidebar = (props) =>{
    return(
        <div className="Sidebar">
            {props.user.userName}
        </div>
    )
}

export default Sidebar