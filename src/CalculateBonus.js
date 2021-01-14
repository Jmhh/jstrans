{
  function name(type) {
    if (type == "A") {
      console.log("A");
    }
    if (type == "B") {
      console.log("B");
    }
    if (type == "C") {
      console.log("C");
    }
  }

  function calculate(type, cb) {
    const strategies = {
      A: function () {
        console.log("A");
        cb();
      },
      B: function () {
        console.log("B");
        cb();
      },
      C: function () {
        console.log("C");
        cb();
      },
    };
    return strategies[type];
  }
}

{
}
