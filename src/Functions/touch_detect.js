const touch_effect = (class_name, left_func, right_func) => {
  var startx1,
    starty1,
    starttime1,
    distx1,
    disty1,
    elapsedtime1,
    threshold1 = 2000;
    // dist1 = 100,
    // restraint1 = 30;
  const element1 = document.querySelector(class_name);

  if (!element1) {
    console.error(`Element with class "${class_name}" not found.`);
    return;
  }
  element1.addEventListener("touchstart", (e1) => {
    var obj1 = e1.changedTouches[0];
    startx1 = obj1.pageX;
    starty1 = obj1.pageY;
    starttime1 = new Date().getTime();
    e1.preventDefault();
  });

  element1.addEventListener("touchend", (e1) => {
    e1.preventDefault();
    var obj2 = e1.changedTouches[0];
    distx1 = obj2.pageX - startx1;
    disty1 = obj2.pageY - starty1;
    elapsedtime1 = new Date().getTime() - starttime1;
    if ((elapsedtime1 < threshold1) & (disty1 < 60)) {
      if (distx1 < 0) {
        right_func()
      } else if (distx1 > 0) {
        left_func()
      }
    }
  });
};

export default touch_effect
