function Memory(username){
  this.name = username;
  this.matches = 0;
}

Memory.prototype.checkMatch = function (card1, card2) {
  if (card1 === card2){
    matches++;
    return true;
  } else {
    return false;
  }
};

Memory.prototype.hasWon = function () {
  return matches === 5;
};

exports.memoryModule = Memory;
