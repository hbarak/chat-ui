import React from 'react';
import Avatar from '../avatar';

const avatarList=["https://semantic-ui.com/images/avatar/small/jenny.jpg",
                    "https://semantic-ui.com/images/avatar/small/laura.jpg",
                    "https://semantic-ui.com/images/avatar/small/joe.jpg",
                    "https://semantic-ui.com/images/avatar/small/daniel.jpg",
                    "https://semantic-ui.com/images/avatar2/small/matthew.png",
                    "https://semantic-ui.com/images/avatar2/small/kristy.png"];

class ChatBox extends React.PureComponent {
    render(){
        return(
            <div className={'chat-box-wrapper'}>
                <div className={'chat-box'}>
                    <div className={'chat-first'}>
                        <div className={'messages'} id="messages">
                            <ul className={'messages-table'} id="messages-table"></ul>
                        </div>
                        {/* <div className={'choose-avatr'}>
                        {avatarList.map((src, index) => {
                            //window.alert("aa");
                            return <Avatar src={src} index={index}/>
                        })}
                        </div> */}
                    </div>
                    <div className={'chat-second'}>
                        <div style={{width:"20%"}}>
                            <text style={{width:"50%"}}>User name: </text>
                            <input style={{width:"50%",height:"10%"}} type="text" className="username-area" id="username-area" defaultValue="Anonymous" />
                        </div>
                        <div style={{width:"80%", height:"30px"}}>
                            <input style={{width:"90%"}} type="text" className="text-area" id="text-area" placeholder="Type a message" />
                            <a style={{width:"30%"}} href='#' className={'send-button'} id="send-button">Send</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatBox;