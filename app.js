const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

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

// 클릭시 각 div의 색을 가져와 stroke 색상으로 지정하기
function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

//array로 가져와서 각 div로 나누고 eventlistener 추가
Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);
