class LoadImg {
  constructor(src) {
    this.src = src;
  }
  getImg() {
    const promise = new Promise((resolve, reject) => {
      let img = document.createElement("img");
      img.onload = function () {
        console.log("222");
        resolve(img);
      };
      img.error = function () {
        reject(img);
      };
      img.src = this.src;
    });
    return promise;
  }
}

export { LoadImg };
