function signup(){
    password=document.getElementById("wordpass").value;
    username=document.getElementById("username1").value;
    email= document.getElementById("email").value;
    localStorage.setItem("password", password);
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    window.location="qwitter.html";
}


function login(){
password=localStorage.getItem("password");
username=localStorage.getItem("username");
enterpass=document.getElementById("password").value;
enteruser=document.getElementById("username").value;

    if(password==enterpass && username==enteruser){
        window.location="qwitter.html";
        console.log("correct");
    }
    else{
        window.alert("Your Username or Password is wrong. Please enter it again");
    }

}