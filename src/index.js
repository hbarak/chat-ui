
//This is then entry point for your app. Do as you wish.

import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components";
import io from "socket.io-client";

//connecting to Socket.IO chat server
const socket = io("https://spotim-demo-chat-server.herokuapp.com");
var avatarMale = "https://playjoor.com/assets/avatar/matthew.png";
var avatarFemale = "https://semantic-ui.com/images/avatar2/large/kristy.png";

ReactDOM.render(<App/>, document.getElementById("root"));

//Query DOM
const messagesToShow = document.getElementById("messages-table");
const sendBtn = document.getElementById("send-button");
const textArea = document.getElementById("text-area");
const usernameArea = document.getElementById("username-area");


//initials

//button click event
sendBtn.addEventListener('click', function(){
  if(textArea.value.length === 0) return;
  var avatar = document.getElementsByName("radio")[0].checked? avatarMale:avatarFemale;
  socket.emit("spotim/chat",{avatar:avatar, username: usernameArea.value, text:textArea.value, token:10});
  textArea.value = '';
})

//adding @textArea eventlistener to click @sendBtn when 'enter' is pressed
textArea.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    sendBtn.click();
  }
})

socket.on("connection", function() {
  console.log("connected to chat server!");
});

socket.on("spotim/chat", function(data){
  //defining new line for message
  var newline = document.createElement("li");

  //adding avatar and text to line
  newline.innerHTML += '<img src='+ data.avatar+'><p color="blue"><strong>' + data.username + ': </strong><br>'+ data.text +'</p>';
  
  //if right token is added, line is given a classname for style
  if(data.token && data.token === 10 && data.username === usernameArea.value){
    newline.className = "my-message";
  }
  
  messagesToShow.appendChild(newline);

});

socket.on("disconnect", function() {
  console.log("disconnected from chat server!");
});