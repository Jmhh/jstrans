{
  //组合继承
  function Recttangle(length, width) {
    this.length = length;
    this.width = width;
    this.color = "red";
  }
  Recttangle.prototype.getArea = function () {
    return this.length * this.width;
  };
  Recttangle.prototype.getSize = function () {
    console.log(
      `Rectangle: ${this.length}x${this.width}，面积: ${this.getArea()}`
    );
  };
  function Square(size) {
    Recttangle.call(this, size, size);
    this.color = "bule";
  }
  Square.prototype = new Recttangle();
  Square.prototype.constructor = Square;
  Square.prototype.getSize = function () {
    console.log(
      `Square: ${this.length}x${this.width}，面积: ${this.getArea()}`
    );
  };
}

{
  //寄生继承
  function inheritPrototype(sub, sup) {
    let prototype = Object.create(sup.prototype);
    prototype.constructor = sub;
    sub.prototype = prototype;
  }
  function Recttangle(length, width) {
    this.length = length;
    this.width = width;
    this.color = "red";
  }
  Recttangle.prototype.getArea = function () {
    return this.length * this.width;
  };
  Recttangle.prototype.getSize = function () {
    console.log(
      `Rectangle: ${this.length}x${this.width}，面积: ${this.getArea()}`
    );
  };
  function Square(size) {
    Recttangle.call(this, size, size);
    this.color = "bule";
  }
  inheritPrototype(Square, Recttangle);
  Square.prototype.getSize = function () {
    console.log(
      `Square: ${this.length}x${this.width}，面积: ${this.getArea()}`
    );
  };
}
