import React from 'react'
import Avatar from './Avatar';

const Message = (props) =>{
    return(
        <div className="Message" style={{...styles.MessageClass, ...styles.MessageDetailsClass}}>
             
            {props.message.userName}: {props.message.body}
        </div>
    )
}

var styles = {

    //.Message
        MessageClass: {
                display: "flex",
                marginTop: "1rem",
                padding: "0 1rem"
        },
    //.Message .details
        MessageDetailsClass: {
                flex: "1",
                paddingLeft: "0.5rem"
        }
    }

export default Message