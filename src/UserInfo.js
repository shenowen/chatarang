import React from 'react'
import Avatar from './Avatar';

const UserInfo = ({ user }) =>{
    return(
    <div 
        className="UserInfo"
        style={styles.UserInfoClass}
    >
        <Avatar user={user} />
        <div className="user">Davey</div>
        <a href="#">
        <i className="fas fa-sign-out-alt"></i>
        </a>
    </div>
    )
}

const styles = {
//.UserInfo
    UserInfoClass: {
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center"
    },
//.UserInfo .Avatar
    UserInfoAvatarClass: {
            marginRight: "0.5rem"
    },
//.UserInfo .user
    UserInfoUserClass: {
            flex: "1"
    }
}

export default UserInfo