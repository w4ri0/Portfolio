
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

const username = prompt("Please Tell Us Your Name");

function sendMessage(e) {
  e.preventDefault();
  const timestamp = Date.now();
  const messageInput = document.getElementById("message-input");
  const message = messageInput.value;
  messageInput.value = "";
  db.ref("messages/" + timestamp).set({
    usr: username,
    msg: message,
  });
}
const fetchChat = db.ref("messages/");


fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const message = `<li class=${username === messages.username ? "sent" : "receive"}><span>${messages.username}: </span>${messages.message}</li>`;
  document.getElementById("messages").innerHTML += message;
});

// Retrieve and display existing messages
fetchChat.once("value", function (snapshot) {
  snapshot.forEach(function (childSnapshot) {
    const messages = childSnapshot.val();
    const message = `<li class=${username === messages.username ? "sent" : "receive"}><span>${messages.username}: </span>${messages.message}</li>`;
    document.getElementById("messages").innerHTML += message;
  });
});