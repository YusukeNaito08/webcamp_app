var user_hand = prompt('ジャンケンの手をグー・チョキ・パーから選んでください');
while ((user_hand != "グー")&&(user_hand !="チョキ")&&(user_hand != "パー")&&(user_hand != null)){
  alert ("グー・チョキ・パーのいずれかを入力してください");
  user_hand = prompt('ジャンケンの手をグー・チョキ・パーから選んでください');
}
var js_hand = getJshand();

var judge = winLose(user_hand, js_hand);

if(user_hand != null ){
  alert(`あなたの選んだ手は${user_hand}です。Javaの選んだては${js_hand}です。結果は${judge}です。`);
} else{
  alert("またチャレンジしてね");
}




function getJshand(){
  var js_hand_num = Math.floor(Math.random() * 3);

  if(js_hand_num === 0){
    js_hand_name ="グー";
  } else if (js_hand_num === 1){
    js_hand_name="チョキ";
  } else if (js_hand_num == 2) {
    js_hand_name="パー";
  }
  return js_hand_name;
}

function winLose(user,js){
  var winLoseStr;

  if(user === "グー"){
    if(js === "グー"){
      winLoseStr ="あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js === "パー"){
      winLoseStr =" 負け";
    }
  }  else if(user === "チョキ"){
    if(js === "グー"){
      winLoseStr ="負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js === "パー"){
      winLoseStr =" 勝ち";
    }
   } else if(user === "パー"){
      if(js === "グー"){
        winLoseStr ="勝ち";
      } else if(js == "チョキ"){
        winLoseStr = "負け";
      } else if(js === "パー"){
        winLoseStr =" あいこ";
      }
    }
  return winLoseStr;
}