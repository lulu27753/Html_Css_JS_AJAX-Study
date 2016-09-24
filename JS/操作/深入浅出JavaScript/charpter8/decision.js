var curScene = 0;
 function changeScene(decision) {
        var message = "";
        var decision1 = "", decision2 = "";


        if (curScene == 0) {
          curScene = 1;
          message = "Your journey begins at a fork in the road.";
          decision1 = "Take the Path";
          decision2 = "Take the Bridge";
        }
        else if (curScene == 1) {
          if (decision == 1) {
            curScene = 2;
            message = "You have arrived at a cute little house in the woods.";
            decision1 = "Walk around Back";
            decision2 = "Knock on Door";
          }
          else {
            curScene = 3;
            message = "You are standing on the bridge overlooking a peaceful stream.";
            decision1 = "Walk across Bridge";
            decision2 = "Gaze into Stream";
          }
        }
        else if (curScene == 2) {
          if (decision == 1) {
            curScene = 4;
            message = "Peeking through the window, you see a witch inside the house.";
            decision1 = "Sneak by Window";
            decision2 = "Wave at Witch";
          }
          else {
            curScene = 5;
            message = "Sorry, a witch lives in the house and you just became part of her stew.";
            decision1 = "Start Over";
            decision2 = "";
          }
        }
        else if (curScene == 3) {
          if (decision == 1) {
            curScene = 6;
            message = "Sorry, a troll lives on the other side of the bridge and you just became his lunch.";
            decision1 = "Start Over";
            decision2 = "";
          }
          else {
            curScene = 7;
            message = "Your stare is interrupted by the arrival of a huge troll.";
            decision1 = "Say Hello to Troll";
            decision2 = "Jump into Stream";
          }
        }
        else if (curScene == 4) {
          if (decision == 1) {
            curScene = 8;
            decision1 = "?";
            decision2 = "?";
          }
          else {
            curScene = 5;
            message = "Sorry, you became part of the witch's stew.";
            decision1 = "Start Over";
            decision2 = "";
          }
        }
        else if (curScene == 5) {
          curScene = 0;
          decision1 = "Start Game";
          decision2 = "";
        }
        else if (curScene == 6) {
          curScene = 0;
          decision1 = "Start Game";
          decision2 = "";
        }
        else if (curScene == 7) {
          if (decision == 1) {
            curScene = 6;
            message = "Sorry, you became the troll's tasty lunch.";
            decision1 = "Start Over";
            decision2 = "";
          }
          else {
            curScene = 9;
            decision1 = "?";
            decision2 = "?";
          }
        }
        else if (curScene == 8) {
        }
        else if (curScene == 9) {
        }

        document.getElementById("sceneimg").src = "scene" + curScene + ".png";
        document.getElementById("scenetext").innerHTML = message;
        replaceNodeText("decision1", decision1);
        replaceNodeText("decision2", decision2);

         // 历史历程
         var history = document.getElementById("history");
         if(curScene != 0){
          var decisionElem = document.createElement("p");
          decisionElem.appendChild(document.createTextNode("Decision" + decision + "->Scene" + curScene + ":" + message));
          history.appendChild(decisionElem);
         }else{
          // 清空历史历程
          while(history.firstChild)
            history.removeChild(history.firstChild);
         }
      }

function replaceNodeText(id, newText){
  var node = document.getElementById(id);
  while(node.firstChild)
    node.removeChild(node.firstChild);
  node.appendChild(document.createTextNode(newText));
}