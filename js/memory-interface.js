var Memory = require("./../js/memory.js").memoryModule;

$(document).ready(function(){
  var card1;
  var card2;
  var cardNum;
  $('.card').click(function(){
    $(this).show();
    cardNum++;
    if(cardNum > 1){
      card2 = $(this).attr('id').match(/^\d/g);
      var memory=
    }
  });
});
