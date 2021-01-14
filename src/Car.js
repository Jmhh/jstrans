class Car {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Kuaiche extends Car {
  constructor(name, price) {
    super(name, price);
    this.number = "粤A8Y56G";
  }
}

class Yueche extends Car {
  constructor(name, price) {
    super(name, price);
    this.number = "粤B967UJ";
  }
}

class Trip {
  constructor(car) {
    this.car = car;
  }
  start() {
    console.log(`行程开始 名称：${this.car.number} 车型：${this.car.name}`);
  }
  end() {
    console.log(
      "行程结束 价格：" + this.car.price * Math.ceil(Math.random() * 10)
    );
  }
}

export { Kuaiche, Yueche, Trip };
