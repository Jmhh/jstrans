class CarBuild {
  constructor(color, weight) {
    this.color = color;
    this.weight = weight;
  }
  buildType(type) {
    const tyre = {};
    switch (type) {
      case "small":
        tyre.tyreType = "小号轮胎";
        tyre.tyreIntro = "正在使用小号轮胎";
        break;
      case "normal":
        tyre.tyreType = "中号轮胎";
        tyre.tyreIntro = "正在使用中号轮胎";
        break;
      case "big":
        tyre.tyreType = "大号轮胎";
        tyre.tyreIntro = "正在使用大号轮胎";
        break;
    }
    return (this.tyre = tyre);
  }
  buildEngine(type) {
    const engine = {};
    switch (type) {
      case "small":
        engine.engineType = "小马力发动机";
        engine.engineIntro = "正在使用小马力发动机";
        break;
      case "normal":
        engine.engineType = "中马力发动机";
        engine.engineIntro = "正在使用中马力发动机";
        break;
      case "big":
        engine.engineType = "大马力发动机";
        engine.engineIntro = "正在使用大马力发动机";
        break;
    }
    this.engine = engine;
  }
}

class BenChibuild {
  constructor({ type, engine, param }) {
    const _benCar = new CarBuild(param);
    _benCar.buildType(type);
    _benCar.buildEngine(engine);
  }
}

const eClassBenChi = new BenChibuild("small", "normal", { color: "red" });
console.log(eClassBenChi);
