
function generateGIF() {
  const name = document.getElementById('nameInput').value;
  const message = document.getElementById('messageInput').value;
  const template = document.getElementById('template').value;
  const color = document.getElementById('themeColor').value;
  const font = document.getElementById('fontSelect').value;
  const confetti = document.getElementById('confetti').checked;
  const sparkle = document.getElementById('sparkle').checked;

  const preview = document.getElementById('preview');
  const finalMessage = `${template.toUpperCase()} Greetings! 🎉\n${message}\n- ${name}`;
  let content = '<div style="color:' + color + '; font-family:' + font + ';">';
  if (confetti) content += '🎉 ';
  if (sparkle) content += '✨ ';
  content += '<h2>' + finalMessage.replace(/\n/g, '<br>') + '</h2></div>';
  preview.innerHTML = content;
}

function downloadGIF() {
  alert("Download feature will be added with html2canvas or gif.js in full version.");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function saveTemplate() {
  const templateData = {
    name: document.getElementById('nameInput').value,
    message: document.getElementById('messageInput').value,
    template: document.getElementById('template').value,
    color: document.getElementById('themeColor').value,
    font: document.getElementById('fontSelect').value
  };
  localStorage.setItem("giftagram_template", JSON.stringify(templateData));
  alert("Template saved!");
}

function loadTemplate() {
  const data = JSON.parse(localStorage.getItem("giftagram_template"));
  if (data) {
    document.getElementById('nameInput').value = data.name;
    document.getElementById('messageInput').value = data.message;
    document.getElementById('template').value = data.template;
    document.getElementById('themeColor').value = data.color;
    document.getElementById('fontSelect').value = data.font;
    alert("Template loaded!");
  } else {
    alert("No saved template found.");
  }
}

function startCountdown(dateStr) {
  const countdownEl = document.getElementById('countdown');
  const target = new Date(dateStr).getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const diff = target - now;
    if (diff <= 0) {
      countdownEl.innerText = "🎉 It's time to celebrate!";
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);
    countdownEl.innerText = `⏳ Countdown: ${days}d ${hrs}h ${mins}m ${secs}s`;
  }, 1000);
}

// Countdown to Diwali 2025
startCountdown("2025-10-20T00:00:00");
