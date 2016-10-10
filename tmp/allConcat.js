var Memory = require("./../js/memory.js").memoryModule;

$(document).ready(function(){
  var card1;
  var card2;
  var cardCount=0;
  var memory = new Memory("steve");
  $('.card').click(function(){
    $(this).children().show();
    cardCount++;
    if(cardCount > 1){
      cardCount=0;
      card2 = $(this).attr('id');
      if(memory.checkMatch(card1.slice(0, -1), card2.slice(0, -1))){
        $(".message").text("It's a match! Yaaaaaaaaay");
        if(memory.hasWon()){
          $(".message").text("You won! Yaaaaaaaaay");
          //reset somehow
        }
      }
      else{
        $("#" + card1).children().hide();
        $("#" + card2).children().hide();
      }
    } else {
      card1 = $(this).attr('id');
    }
  });
});
