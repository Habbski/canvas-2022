const canvas = document.getElementById("three");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#fff";
ctx.fillRect(500, 100, 500, 300);

ctx.fillStyle = "#ff0000";
ctx.beginPath();
ctx.arc(750, 250, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle="red";
ctx.fill();