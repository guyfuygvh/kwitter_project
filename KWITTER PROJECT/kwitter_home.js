// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALxG7ZibHJHCcImGIkbw_F5vUJVzE12BM",
  authDomain: "kwitter-project-daa9a.firebaseapp.com",
  projectId: "kwitter-project-daa9a",
  storageBucket: "kwitter-project-daa9a.appspot.com",
  messagingSenderId: "309671395638",
  appId: "1:309671395638:web:cd642732a81bd554e13397"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML ="Welcome " + user_name +"!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose :"adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML +=row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}