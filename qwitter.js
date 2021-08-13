 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDw181l3JB6sK5r0ujrsH44ic896Nm2uD4",
    authDomain: "bwitter-fbd3c.firebaseapp.com",
    databaseURL: "https://bwitter-fbd3c-default-rtdb.firebaseio.com",
    projectId: "bwitter-fbd3c",
    storageBucket: "bwitter-fbd3c.appspot.com",
    messagingSenderId: "411000557214",
    appId: "1:411000557214:web:08b07fcea0a664e258358f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  //this whole code isnt working :(


user=localStorage.getItem("signusername");
pass=localStorage.getItem("signpassword");
mail=localStorage.getItem("signemail");
gender=localStorage.getItem("gender");

document.getElementById("acusername").innerHTML=user;
document.getElementById("acpassword").innerHTML=password;
document.getElementById("acemail").innerHTML=mail;
document.getElementById("acgender").innerHTML=gender;

document.getElementById("name").innerHTML="Welcome "+user+"!!!";

function AddRoom(){
    roomname=document.getElementById("room").value;
    localStorage.setItem("room", roomname);
    firebase.database().ref("/").child(roomname).update({
        purpose:"adding user"
    });
    window.location="chat.html";
}

function getData(){
    firebase.database().ref("/").on('value', function(snapshot){
        document.getElementById("output").innerHTML="";
        snapshot.forEach(function(childSnapshot){
            childKey=childSnapshot.apiKey;
            Room_names=childKey;
            console.log("The Room Name Is "+Room_names);
            row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"<hr></div>";
            document.getElementById("output").innerHTML+=row;
        });
    });
}
getData();

function redirect(name){
    console.log(name);
    localStorage.setItem("room", name);
    window.location="chat.html";
}

//function Logout(){
  //  localStorage.removeItem("room");
    //window.location.replace("index.html");
//}


function Account(){
    window.location="account.html";
}

function back(){
window.location="qwitter.html";
}



