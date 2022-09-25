function show_crosshair_screen() {
setScreen("play_screen");
onEvent("play_button", "click", function(event) {
  setScreen("crosshair_screen");
  console.log(JSON.stringify(event));
  });
onEvent("button", "click", function() {
  setProperty("button", "x", randomNumber(0, 220));
  setProperty("button", "y", randomNumber(80, 350));
  playSound("assets/category_jump/arcade_game_jump_1.mp3");
});

var crosshair = 10;
setText("crosshair_count", "         " + crosshair + " targets left!" );
var milliseconds = 0;
var avg_time = 0;
setText("avg_time", "Average time per target");
setText("training_input", "Training Your Aim");

onEvent("button", "click", function() {
  timedLoop(1000, function(){
  milliseconds = milliseconds + 1;
  console.log("The time elapsed is " + milliseconds + " milliseconds");
  if (crosshair==0)
  {stopTimedLoop();
   avg_time = milliseconds/10;
   console.log("Average time per target is " + avg_time + " rounded " + Math.round(avg_time) + " ms");
    setText("final_score", + avg_time + " ms");
  }
  });

  crosshair = crosshair - 1;
  console.log(crosshair);
  setText("crosshair_count", "           " +  crosshair + " targets left!");
  if (crosshair == 0){
   setScreen("end_screen");
  }
});
}


/*------------------------------------*/
show_crosshair_screen();
onEvent("play_again", "click", function() {
  show_crosshair_screen();
});
