function add_user(){
    player_1_name = document.getElementById("Player_1_name").value;
    player_2_name = document.getElementById("Player_2_name").value;
    localStorage.setItem("Player_1_name", player_1_name)
    localStorage.setItem("Player_2_name", player_2_name)
    window.location = "game_page.html"
}