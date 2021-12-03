function openPage(){
user_name=document.getElementById("user_name");
localStorage.setItem("user_name",user_name);
window.location="listen_to_songs.html";
}
