(function(root) {
  if (typeof Tanks === 'undefined') {
    root.Tanks = {};
  }

  var Game = Tanks.Game = function (width, height) {
    this.DIM_X = width;
    this.DIM_Y = height;
  }

})(this);