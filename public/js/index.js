
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
   
  firebase.initializeApp(firebaseConfig);


const db = firebase.database();


const username = prompt("Please Tell Us Your Name");


function sendMessage(e) {

  e.preventDefault();


  // get values to be submitted

  const timestamp = Date.now();

  const messageInput = document.getElementById("message-input");

  const message = messageInput.value;


  // clear the input box

  messageInput.value = "";


  //auto scroll to bottom

  document

    .getElementById("messages")

    .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });


  // create db collection and send in the data

  db.ref("messages/" + timestamp).set({

    username,

    message,

  });

}


const fetchChat = db.ref("messages/");


fetchChat.on("child_added", function (snapshot) {

  const messages = snapshot.val();

  const message = `<li class=${

    username === messages.username ? "sent" : "receive"

  }><span>${messages.username}: </span>${messages.message}</li>`;

  // append the message on the page

  document.getElementById("messages").innerHTML += message;

});