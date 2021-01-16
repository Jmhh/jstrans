//import Singleton from "./Singleton.js";
import "./multiRequest";
console.log('dev-fix')

{
    /**
     * 按钮防抖处理
     * @param { Function } fnc
     * btnClickDebounce(handleRoomCard, item.id, true)
     */
    function btnClickDebounce(fnc, ...args) {
      let self = this;
      let timer = null;
      if (!self.onClick) {
        fnc(args);
        self.onClick = true;
        clearTimeout(timer);
        timer = setTimeout(() => {
          self.onClick = null;
        }, 3000);
      } else {
        console.log("3秒内重复点击了~~");
      }
    }
  }