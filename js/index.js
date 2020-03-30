import { Circle, Rectangle } from "./classes.js";
import { circleForm, rectangleForm } from "./forms.js";

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
let windowWidth = window.innerWidth - 200;
let windowHeight = window.innerHeight;
canvas.width = windowWidth;
canvas.height = windowHeight;

let radioCircle = document.getElementById("figureCircle");
let radioRectangle = document.getElementById("figureRectangle");
let formContent = document.getElementById("formContent");
let btnPressedNmbr;
let randomBtn = document.getElementById("random");

let circles = [];
let rectangles = [];

function createCircle() {
  event.preventDefault();
  console.log("createCircle");
  let xPut = document.getElementById("Xput");
  let yPut = document.getElementById("Yput");
  let rPut = document.getElementById("Rput");
  let colorPut = document.getElementById("colorPicker");

  circles.push(
    new Circle(
      xPut.value,
      yPut.value,
      windowWidth,
      windowHeight,
      rPut.value,
      colorPut.value
    )
  );
}

function createRectangle() {
  event.preventDefault();
  console.log("createRectangle");
  let xPut = document.getElementById("Xput");
  let yPut = document.getElementById("Yput");
  let recWidth = document.getElementById("recWidth");
  let recHeight = document.getElementById("recHeight");
  let colorPut = document.getElementById("colorPicker");

  rectangles.push(
    new Rectangle(
      xPut.value,
      yPut.value,
      windowWidth,
      windowHeight,
      recWidth.value,
      recHeight.value,
      colorPut.value
    )
  );
}
let formSubmit = document.getElementById("formSubmit");
function generateForm() {
  switch (btnPressedNmbr) {
    case 1:
      formContent.innerHTML = circleForm;
      formSubmit.removeEventListener("submit", createRectangle);
      formSubmit.addEventListener("submit", createCircle);
      break;
    case 2:
      formContent.innerHTML = rectangleForm;
      formSubmit.removeEventListener("submit", createCircle);
      formSubmit.addEventListener("submit", createRectangle);
      break;
  }
}
function generateRandom(windowWidth, windowHeight) {
  let x = Math.random() * windowWidth - 120;
  let y = Math.random() * windowHeight - 120;
  x <= 120 && (x = 121);
  y <= 120 && (y = 121);
  let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  let element = Math.random() * 2;
  let shape = Math.random() * 120;
  element < 1 &&
    circles.push(new Circle(x, y, windowWidth, windowHeight, shape / 2, color));
  element > 1 &&
    rectangles.push(
      new Rectangle(x, y, windowWidth, windowHeight, shape, shape, color)
    );
}

radioCircle.addEventListener(
  "click",
  () => {
    btnPressedNmbr = 1;
    generateForm();
  },
  false
);
radioRectangle.addEventListener(
  "click",
  () => {
    btnPressedNmbr = 2;
    generateForm();
  },
  false
);
randomBtn.addEventListener(
  "click",
  () => {
    generateRandom(windowWidth, windowHeight);
  },
  false
);

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);
  circles.forEach(element => {
    element.draw(canvas);
  });
  rectangles.forEach(element => {
    element.draw(canvas);
  });
}
animate();
