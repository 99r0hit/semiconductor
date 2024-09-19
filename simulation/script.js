const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function prepareMaterial() {
    clearCanvas();
    ctx.fillStyle = 'gray';
    ctx.fillRect(100, 100, 600, 400); // Simulate material preparation
    ctx.fillStyle = 'black';
    ctx.strokeRect(100, 100, 600, 400); // Draw border
}

function applyPattern() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(200, 200, 400, 200); // Simulate pattern application
}

function etch() {
    ctx.clearRect(250, 250, 100, 100); // Simulate etching by removing part of the pattern
}

function deposit() {
    ctx.fillStyle = 'red';
    ctx.fillRect(300, 300, 100, 100); // Simulate deposition of material
}

function dope() {
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.arc(500, 500, 50, 0, 2 * Math.PI); // Simulate doping with a circular mark
    ctx.fill();
}

function test() {
    ctx.fillStyle = 'purple';
    ctx.font = '30px Arial';
    ctx.fillText('Testing...', 350, 550); // Simulate testing
}
