var Memory = require("./../js/memory.js").memoryModule;

//TODO: make it not hideous

$(document).ready(function(){
  var card1;
  var card2;
  var cardCount=0;
  $('#board').html(createBoard());
  var memory = new Memory("steve");
  $('.card').click(function(){
    if($(this).children("i").is(":hidden")){
      $(".message").text("");
      $(this).children().show();
      cardCount++;
      if(cardCount > 1){
        cardCount=0;
        card2 = $(this).attr('id');
        if(memory.checkMatch(card1.slice(0, -1), card2.slice(0, -1))){
          $(".message").text("It's a match! Yaaaaaaaaay");
          if(memory.hasWon()){
            $(".message").html("<h1>You won! Yaaaaaaaaay</h1>");
            $(".display").delay(3000).hide(0);
            memory.reset();
            $('#board').html(createBoard());
          }
        }
        else{
          $("#" + card1).children().delay(500).hide(0);
          $("#" + card2).children().delay(500).hide(0);
        }
      } else {
        card1 = $(this).attr('id');
      }
    }
  });
});

function createBoard(){
  var cardHash = [{name: "heart", icon:"fa-heart", used: 0}, {name: "star", icon:"fa-star", used: 0}, {name: "moon", icon:"fa-moon-o", used: 0}, {name: "shuttle", icon:"fa-space-shuttle", used: 0}, {name: "paw", icon:"fa-paw", used: 0}];
  var htmlString="";
  for (var i = 0; i < 2; i++) {
    htmlString += "<div class='row'>";
    for (var j = 0; j < 5; j++) {
      var random=0;
      do{
        random = Math.floor(Math.random()*5);
      }while(cardHash[random].used > 1);
      htmlString += "<div class='col-md-2 card' id='" + cardHash[random].name + cardHash[random].used + "'> <i class='display fa " + cardHash[random].icon + "' aria-hidden='true'></i></div>";
      cardHash[random].used++;
    }
    htmlString += "</div>";
  }
  return htmlString;
}
