document.addEventListener("click", function (event) {
  let element = event.target;
  let type = event.type;
  let timestamp = event.timeStamp;

  console.log(`${timestamp}, ${type}, ${element}`);
});

window.addEventListener("DOMContentLoaded", function (event) {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}, view, ${event.target}`);
});
