import React from 'react';

class ChatBox extends React.PureComponent {
    render(){
        return(
            <div className={'chat-box-wrapper'}>
                <div className={'chat-box'}>
                    
                    {/* first part, messages window */}
                    <div className={'chat-first'}>
                        <div className={'messages'} id="messages">
                            <ul className={'messages-table'} id="messages-table"></ul>
                        </div>
                    </div>
                    {/* second aprt, inputs area + gender*/}
                    <div className={'chat-second'}>
                        
                        {/* username */}
                        <div style={{width:"80%"}}>
                            <text style={{maxWidth:"20%", float:"left", paddingRight:"1%"}}>User name: </text>
                            <input style={{width:"20%", marginBottom:"10px", float:"left"}} type="text" className="username-area" id="username-area" defaultValue="Anonymous" />
                            
                            {/* gender checkbox */}
                            <div class="inline fields" id="gender-checkbox" style={{width:"50%", float:"left", paddingLeft:"8%"}}>
                                <label style={{float:"left", paddingRight:"2%"}}>Gender: </label>
                                <div style={{float:"left", paddingRight:"2%"}} class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="radio" checked="checked"></input>
                                        <label>Male</label>
                                    </div>
                                </div>
                                <div style={{float:"left"}} class="field">
                                    <div class="ui radio checkbox">
                                        <input type="radio" name="radio" checked="checked"></input>
                                        <label>Female</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/*message's text + send button */}
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