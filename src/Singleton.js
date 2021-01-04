class Singleton {
  constructor(name) {
    this.name = name;
    this.instance = null;
  }
  getName() {
    console.log(this.name);
  }
  getInstance(name) {
    if (!this.instance) {
      this.instance = new Singleton(name);
    }
    return this.instance;
  }
}

export default Singleton;
