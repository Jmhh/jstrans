class Menu {
  constructor(type, message) {
    this.type = type;
    this.message = message;
  }
  eat() {
    console.log(this.type + this.message);
  }
}

class Restaurant {
  constructor() {
    this.menuData = {};
  }
  //获取菜品
  getMenu(menu) {
    if (!this.menuData[menu]) {
      throw new Error("没有这个菜~~");
    }
    const { type, message } = this.menuData[menu];
    return new Menu(type, message);
  }
  //新增菜品
  addMenu(menu, type, message) {
    if (this.menuData[menu]) {
      console.log("已经有这个菜了");
      return;
    }
    this.menuData[menu] = { type, message };
  }
  //删除菜品
  removeMenu(menu) {
    if (!this.menuData[menu]) return;
    delete this.menuData[menu];
  }
}

export { Restaurant, Menu };
