function Store_name()
{
    username = document.getElementById("Textbox1").value;
    localStorage.setItem("username", username);
    window.location = "kwitter_room.html";
    
}