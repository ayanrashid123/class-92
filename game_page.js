player_1_name = localStorage.getItem("Player_1_name")
player_2_name = localStorage.getItem("Player_2_name")
player1_score = 0
player2_score = 0
document.getElementById("Player1_name").innerHTML = player_1_name + ":"
document.getElementById("Player2_name").innerHTML = player_2_name + ":"

document.getElementById("player1_score").innerHTML = player1_score
document.getElementById("player2_score").innerHTML = player2_score

document.getElementById("player_question").innerHTML = "Question_turn-"+ player_1_name
document.getElementById("player_answer").innerHTML = "Answer_turn-"+ player_2_name
function send() {
    get_word = document.getElementById("word").value;
    que_low = get_word.toLowerCase()
  word =get_word.toLowerCase();
  ques_length = word.length;
  for(var i=0; i<ques_length; i+=2) {
      new_word=word.charAt(i);
      word=word.replace(new_word,"_");
  }
  question_word = "<h4 id ='word_display'>"+word+"</h4>"
  inputbox = "<br>Answer:<input id = 'input_check_box'>"
  check_button ="<br> <button class = 'btn btn-info' onclick = 'check()'>Check</button>"
  document.getElementById("output").innerHTML =question_word+inputbox+check_button;
}
a_turn = "player_1"
q_turn ="player_2"
function check(){
  get_answer = document.getElementById("input_check_box").value;
  answer = get_answer.toLowerCase();
  if(answer == que_low){
    if (a_turn =="player_1") {
     player1_score = player1_score +1;
     document.getElementById("player1_score").innerHTML = player1_score

    } else {
       player2_score = player2_score +1;
     document.getElementById("player2_score").innerHTML = player2_score
    }
  }
  if (q_turn == "player_1") {
    q_turn = "player_2"
    a_turn = "player_1"
    document.getElementById("player_question").innerHTML = "Question_turn-"+ player_2_name
document.getElementById("player_answer").innerHTML = "Answer_turn-"+ player_1_name
  } else {
    q_turn = "player_1"
    a_turn = "player_2"
    document.getElementById("player_question").innerHTML = "Question_turn-"+ player_1_name
    document.getElementById("player_answer").innerHTML = "Answer_turn-"+ player_2_name 
  }
  document.getElementById("output").innerHTML = ""
}