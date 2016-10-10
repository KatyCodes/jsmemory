(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Memory(username){
  this.name = username;
  this.matches = 0;
}

Memory.prototype.checkMatch = function (card1, card2) {
  if (card1 === card2){
    this.matches++;
    return true;
  } else {
    return false;
  }
};

Memory.prototype.hasWon = function () {
  return this.matches === 5;
};

Memory.prototype.reset = function() {
  this.matches = 0;
};

exports.memoryModule = Memory;

},{}],2:[function(require,module,exports){
var Memory = require("./../js/memory.js").memoryModule;

//TODO: make it not hideous

$(document).ready(function(){
  var card1;
  var card2;
  var cardCount=0;
  createBoard();
  var memory = new Memory("steve");
  $('.card').click(function(){
    if($(this).children("i").is(":hidden")){
      console.log("inside the hidden check");
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
            memory.reset();
            setTimeout(function(){
              createBoard();
              $(".message").text("");
            }, 3000);
          }
        }
        else{
          $("#" + card1).children().delay(500).hide(0);
          $("#" + card2).children().delay(500).hide(0);
        }
      } else {
        console.log("click 1");
        card1 = $(this).attr('id');
      }
    } else {
      console.log("here is the else for the hidden check");
    }
  });
});

function createBoard(){
  var cardHash = [{name: "heart", icon:"fa-heart", used: 0}, {name: "star", icon:"fa-star", used: 0}, {name: "moon", icon:"fa-moon-o", used: 0}, {name: "shuttle", icon:"fa-space-shuttle", used: 0}, {name: "paw", icon:"fa-paw", used: 0}];
  var htmlString="";
  $('#board').children(".row").each(function(i){
    $(this).children(".card").each(function(j){
      var random=0;
       do{
         random = Math.floor(Math.random()*5);
       }while(cardHash[random].used > 1);
       htmlString = "<i class='display fa " + cardHash[random].icon + "' aria-hidden='true'></i>";
       $(this).html(htmlString);
       $(this).attr("id", cardHash[random].name + cardHash[random].used);
       cardHash[random].used++;
    });
  });
}

},{"./../js/memory.js":1}]},{},[2]);
