

var firebaseConfig = {
  apiKey: "AIzaSyAp7qibXTh9AtuaSEkznrJn6MlAvYelNQw",

  authDomain: "togoban.firebaseapp.com",

  databaseURL: "https://togoban-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "togoban",

  storageBucket: "togoban.appspot.com",

  messagingSenderId: "607349651499",

  appId: "1:607349651499:web:691fca00a6aca0df75526e",

  measurementId: "G-7BKJW3RTS1"

};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const { set, onChildAdded } = require("firebase/database");
const username = prompt("Please Tell Us Your Name");
var msgTxt=document.getElementById("msgTxt");
var sender;
if(sessionStorage.getItem("username")){
  sender=sessionStorage.getItem("username");}
  else{
    sender=prompt("Please Tell Us Your Name");
    sessionStorage.setItem("username",username);
  }

module.sendMsg = function sendMsg() {
  var msg=msgTxt.value;
  var timestamp=new Date().getTime();
  set(ref(db,"messages/"+timestamp),{
    msg:msg,
    username:username
  });
  }
  onChildAdded(ref(db,"messages"), (data)=>{
    if(data.val().sender == sender){
        messages.innerHTML += "<div style=justify-content:end class=outer id="+data.key+"><div id=inner class=me>you : "+data.val().msg+"<button id=dltMsg onclick=module.dltMsg("+data.key+")>DELETE</button></div></div>";
    } else {
        messages.innerHTML += "<div class=outer id="+data.key+"><div id=inner class=notMe>"+data.val().sender+" : "+data.val().msg+"</div></div>";
    }
})

// TO DELETE MSG
module.dltMsg = function dltMsg(key){
    remove(ref(db,"messages/"+key));
}

// WHEN MSG IS DELETED
onChildRemoved(ref(db,"messages"),(data)=>{
    var msgBox = document.getElementById(data.key);
    messages.removeChild(msgBox);
})