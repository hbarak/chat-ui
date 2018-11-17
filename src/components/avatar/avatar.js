import React from 'react';


class Avatar extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            src : this.props.src
        }
    }
    render(){
        //window.alert("aa");
        return(
                <img src={this.state.src} className={"avatar"}
                style={{float:"top"}}>
                </img>
        )
    }

    // onAvatarClick = ()=>{
    //     this.props.changeAvatar()
    // }
}
export default Avatar;
