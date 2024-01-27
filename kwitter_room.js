
const firebaseConfig = {
  apiKey: "AIzaSyAlnzgl4ix5m1PU8R36mrjl03Unp4RhgU8",
  authDomain: "kwitter1-7fd7a.firebaseapp.com",
  databaseURL: "https://kwitter1-7fd7a-default-rtdb.firebaseio.com",
  projectId: "kwitter1-7fd7a",
  storageBucket: "kwitter1-7fd7a.appspot.com",
  messagingSenderId: "623075880615",
  appId: "1:623075880615:web:b24f804780fe0c95aef582",
  measurementId: "G-HPXJR98JQ7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
document.getElementById("username1").innerHTML = "Welcome " + username + "!";

function addroom()
{
      addroom_name = document.getElementById("Add_Room").value;
      firebase.database().ref("/").child(addroom_name).update({
            purpose : "adding room name"
            //key       value
      });
      //ref(gives path to folder on where to make it)
      //child(makes folder with a name we give it)
}


function getData() {firebase.database().ref("/").on
('value', function(snapshot)
 {document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot)  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)' > #"+ Room_names +"</div> <hr>";

      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData()


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}