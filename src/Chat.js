import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList';
import MessageForm from './MessageForm';

class Chat extends Component{
    constructor(){
        super()

        this.state ={
            messages: [
                {
                    id: 1,
                    userName: 'dstrus',
                    body: 'Chatting up a storm, yo!',
                },
                {
                    id: 2,
                    userName: 'dpalazzo',
                    body: 'This guy has super AIDS',
                },
            ]
        }
    }

    addMessage = (body) =>{
        const messages = [...this.state.messages]
        messages.push({
                id: Date.now(),
                userName: 'jieun',
                body,
        })

        this.setState({ messages })
    }


    render(){
        return(
            <div className="chat">
              <ChatHeader />
              <MessageList messages={this.state.messages}/>
              <MessageForm addMessage={this.addMessage}/>
            </div>
        )
    }
}

export default Chat