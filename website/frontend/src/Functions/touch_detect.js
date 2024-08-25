const touch_effect = (class_name, left_func, right_func) => {
  let startx1,
    starty1,
    starttime1,
    distx1,
    disty1,
    elapsedtime1,
    threshold1 = 2000;

  let isSwiping = false; 

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
  });

  element1.addEventListener("touchmove", (e1) => {
    if (!isSwiping) {
      isSwiping = true;
    }
  });

  element1.addEventListener("touchend", (e1) => {
    var obj2 = e1.changedTouches[0];
    distx1 = obj2.pageX - startx1;
    disty1 = obj2.pageY - starty1;
    elapsedtime1 = new Date().getTime() - starttime1;
    if (isSwiping && (elapsedtime1 < threshold1) && (Math.abs(disty1) < 50)) {
      if (distx1 < -70) {
        right_func();
      } else if (distx1 > 70) {
        left_func();
      }
    }

    isSwiping = false;
  });
};

export default touch_effect;
