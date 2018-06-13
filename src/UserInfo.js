import React from 'react'
import Avatar from './Avatar';
import SignOut from './SignOut'

const UserInfo = ({ user }) =>{
    return(
    <div 
        className="UserInfo"
        style={styles.UserInfoClass}
    >
        <Avatar user={user} />
        <div className="user">Davey</div>
        <SignOut />
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