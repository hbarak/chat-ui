import React from 'react';


class ChatBox extends React.PureComponent {
    render(){
        return(
            <div className={'chat-box'}>
                <div class="users-list-area">
                <div>dddddd</div>
                </div>
                
                <div className={'massage-box'}>
                    {/* //<input class="text-area" rows="5" id="comment"></input> */}
                    {/* <button class="send-button">button</button> */}
                    <div className={'messages'} id="messages">
                    </div>
                    <input type="text" class="text-area" id="text-area" placeholder="Type a message" />
                    <a href='#' classname={'send-button'} id="send-button">hello</a>
                </div>

            </div>
        );
    }
}

export default ChatBox;