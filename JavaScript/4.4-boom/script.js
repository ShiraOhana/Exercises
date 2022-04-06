let sevenBoom = (n) => {
  for (let i = 1; i < n + 1; i++) {
    //   i = 0 causes BOOM (anyway the task asks to start from one)
    if (i % 7 === 0) {
      console.log("BOOM");
    } else if (i % 7 === 0 && String(i).includes(7)) {
      console.log("BOOM-BOOM");
    } else {
      console.log(i);
    }
  }
};

sevenBoom(15);
