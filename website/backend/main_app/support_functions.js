const find_dept = (code) => {
    let dept;
    if (code === "11") {
      dept = "civ";
    } else if (code === "12") {
      dept = "mec";
    } else if (code === "13") {
      dept = "eee";
    } else if (code === "14") {
      dept = "ece";
    } else if (code === "15") {
      dept = "cse";
    }
    return dept;
  };

  module.exports={
    find_dept
}