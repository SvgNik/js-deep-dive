const timerId = setTimeout(() => {
  console.log("Сработал таймер");
}, 2000);

console.log("Код после setTimeout");

function cancelTimer() {
  clearTimeout(timerId);
}

// cancelTimer();
