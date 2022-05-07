
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuCufYLTnQ2luQZ8eszzGazIeiBZJREZg",
  authDomain: "kwitter-35e61.firebaseapp.com",
  databaseURL: "https://kwitter-35e61-default-rtdb.firebaseio.com",
  projectId: "kwitter-35e61",
  storageBucket: "kwitter-35e61.appspot.com",
  messagingSenderId: "675947823110",
  appId: "1:675947823110:web:71a6eff4f3d29cc8110387"
};


  firebase.initializeApp(firebaseConfig);
user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome" + user_name + "!";
function addRoom()
{
room_name = document.getElementById("room_name").value
firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      function redirectToRoomName(name)
      {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html"; 
      }
      });});}
getData();
