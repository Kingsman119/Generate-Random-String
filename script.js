document.getElementById("btn").onclick = function () {
  const res = Math.random().toString(36).substring(2,7)

  document.getElementById("res").innerHTML =  res;
};
