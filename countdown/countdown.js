const OPEN_HOUR = 9;
const CLOSE_HOUR = 18;

function updateTimer() {
  const now = new Date();
  const currentHour = now.getHours();

  const statusMsg = document.getElementById("status-message");
  const timerDisplay = document.getElementById("timer");

  const openTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    OPEN_HOUR,
    0,
    0,
  );
  const closeTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    CLOSE_HOUR,
    0,
    0,
  );

  let targetTime;

  if (now < openTime) {
    //운영전
    statusMsg.innerText = "금일 오픈까지 남은 시간:";
    targetTime = openTime;
  } else if (now >= openTime && now < closeTime) {
    //운영중
    statusMsg.innerText = "금일 마감까지 남은 시간:";
    targetTime = closeTime;
  } else {
    //마감후
    statusMsg.innerText = "금일 마감";
    timerDisplay.innerText = "";
    return;
  }

  const diff = targetTime - now;

  const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(
    1,
    "0",
  );
  const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(
    1,
    "0",
  );
  const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

  timerDisplay.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTimer, 1000);
updateTimer();
