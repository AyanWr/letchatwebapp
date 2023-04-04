// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyCXJ3TGmqeEcxGTC7qvgXrn0UNMJPCCgsg",
    authDomain: "let-chat-web-app-2e807.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-2e807-default-rtdb.firebaseio.com",
    projectId: "let-chat-web-app-2e807",
    storageBucket: "let-chat-web-app-2e807.appspot.com",
    messagingSenderId: "785725647074",
    appId: "1:785725647074:web:dcd574b011dbcd448656bb"
  };

//Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



