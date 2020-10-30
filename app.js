const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

//CSS와 별개로 픽셀 컨트롤을 위한 캔버스 사이즈 지정 필요
canvas.width = 700;
canvas.height = 700;

//context mdn 문서 참고
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false; //기본값 설정

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseDown(event) {
  painting = true;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

function init() {}

init();
