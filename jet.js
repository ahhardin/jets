var Jet = function (color, size) {
  this.color = color;
  this.size = size;

  this.fly = function() {
    console.log('whoosh! U+1F680')
  this.takeOff = function () {
    console.log('lift off!');
  }
}

module.exports = Jet;
