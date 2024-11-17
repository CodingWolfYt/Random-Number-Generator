function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
document.getElementById("Generate").onclick = function() {
    const Maximum = document.getElementById("MaxNum")
    let MXNUM = Maximum.value;
    alert(getRandomInt(MXNUM));
}
