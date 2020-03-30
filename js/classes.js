class Figure {
  constructor(x, y, wWidth, wHeight) {
    this.x = Number(x);
    this.y = Number(y);
    this.wWidth = wWidth;
    this.wHeight = wHeight;
    this.dx = Math.random() * 4 - 2;
    this.dy = Math.random() * 4 - 2;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
}

export class Circle extends Figure {
  constructor(x, y, wWidth, wHeight, r, color) {
    super(x, y, wWidth, wHeight);
    this.r = r;
    this.color = color;
  }
  draw(canvas) {
    const ctx = canvas.getContext("2d");
    this.bounce();
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fill();
    this.move();
  }
  bounce() {
    this.x + this.dx > this.wWidth - this.r && (this.dx = this.dx * -1);
    this.x + this.dx < 0 + this.r && (this.dx = this.dx * -1);
    this.y + this.dy > this.wHeight - this.r && (this.dy = this.dy * -1);
    this.y + this.dy < 0 + this.r && (this.dy = this.dy * -1);
  }
}

export class Rectangle extends Figure {
  constructor(x, y, wWidth, wHeight, width, height, color) {
    super(x, y, wWidth, wHeight);
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw(canvas) {
    const ctx = canvas.getContext("2d");
    this.bounce();
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.stroke();
    this.move();
  }
  bounce() {
    this.x + this.dx > this.wWidth - this.width && (this.dx = this.dx * -1);
    this.x + this.dx < 0 && (this.dx = this.dx * -1);
    this.y + this.dy > this.wHeight - this.height && (this.dy = this.dy * -1);
    this.y + this.dy < 0 && (this.dy = this.dy * -1);
  }
}
