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

exports.memoryModule = Memory;

},{}],2:[function(require,module,exports){
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

},{"./../js/memory.js":1}]},{},[2]);