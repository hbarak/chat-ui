
//This is then entry point for your app. Do as you wish.

import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components";
import io from "socket.io-client";

//connecting to Socket.IO chat server
const socket = io("https://spotim-demo-chat-server.herokuapp.com");
ReactDOM.render(<App socket={socket}/>, document.getElementById("root"));

//Query DOM
const messagesToShow = document.getElementById("messages");
const sendBtn = document.getElementById("send-button");
window.alert("start");
//initials
sendBtn.addEventListener('click', function(){
  window.alert("clicked");
  //btn = document.getElementById("send-button");
  let textArea = document.getElementById("text-area");
  socket.emit("spotim/chat",{avatar:"", username: "usrname", text:textArea.value});
  //this.props.socket.open();
})

socket.on("connection", function() {
  window.alert("connected");
  console.log("connected to chat server!");
});

socket.on("spotim/chat", function(data){
  messagesToShow.innerHTML += '<p><strong>' + data.username + ': <strong>'+ data.text +'</p>';
  //window.alert("recieved msg:" + msg);
});

socket.on("disconnect", function() {
  console.log("disconnected from chat server!");
});


