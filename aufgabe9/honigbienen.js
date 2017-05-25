var inheritance;
(function (inheritance) {
    class Honigbiene extends inheritance.BieneData {
        constructor() {
            super();
            this.speed = 0.04;
            this.setRandomTargetPosition();
            this.setStartPosition();
        }
        setRandomTargetPosition() {
            let randomtargetflower = Math.round(Math.random() * (inheritance.flowers.length - 1));
            this.xTarget = inheritance.flowers[randomtargetflower].x;
            this.yTarget = inheritance.flowers[randomtargetflower].y;
        }
        setStartPosition() {
            this.x = 1750;
            this.y = 650;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            let xDiff = this.xTarget - this.x;
            let yDiff = this.yTarget - this.y;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.setRandomTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }
        draw() {
            inheritance.crc2.beginPath();
            inheritance.crc2.fillStyle = this.color;
            inheritance.crc2.strokeStyle = this.color;
            inheritance.crc2.moveTo(this.x + 2, this.y - 12);
            inheritance.crc2.arc(this.x + 2, this.y - 12, this.size, 180, 270);
            inheritance.crc2.moveTo(this.x + 9, this.y - 12);
            inheritance.crc2.arc(this.x + 9, this.y - 12, this.size, 180, 270);
            inheritance.crc2.closePath();
            inheritance.crc2.fill();
            inheritance.crc2.stroke();
            inheritance.crc2.beginPath();
            inheritance.crc2.fillStyle = "blue";
            inheritance.crc2.strokeStyle = "blue";
            inheritance.crc2.moveTo(this.x + 9, this.y);
            inheritance.crc2.arc(this.x + 9, this.y, this.size, 180, 270);
            inheritance.crc2.closePath();
            inheritance.crc2.fill();
            inheritance.crc2.stroke();
            inheritance.crc2.beginPath();
            inheritance.crc2.fillStyle = "black";
            inheritance.crc2.strokeStyle = "black";
            inheritance.crc2.moveTo(this.x + 4, this.y);
            inheritance.crc2.arc(this.x + 4, this.y, this.size, 180, 270);
            inheritance.crc2.closePath();
            inheritance.crc2.fill();
            inheritance.crc2.stroke();
            inheritance.crc2.beginPath();
            inheritance.crc2.fillStyle = "blue";
            inheritance.crc2.strokeStyle = "blue";
            inheritance.crc2.moveTo(this.x, this.y);
            inheritance.crc2.arc(this.x, this.y, this.size, 180, 270);
            inheritance.crc2.closePath();
            inheritance.crc2.fill();
            inheritance.crc2.stroke();
            inheritance.crc2.beginPath();
            inheritance.crc2.fillStyle = "black";
            inheritance.crc2.strokeStyle = "black";
            inheritance.crc2.moveTo(this.x - 5, this.y - 2);
            inheritance.crc2.arc(this.x - 5, this.y - 2, this.size, 180, 270);
            inheritance.crc2.closePath();
            inheritance.crc2.fill();
            inheritance.crc2.stroke();
        }
    }
    inheritance.Honigbiene = Honigbiene;
})(inheritance || (inheritance = {}));
//# sourceMappingURL=honigbienen.js.map