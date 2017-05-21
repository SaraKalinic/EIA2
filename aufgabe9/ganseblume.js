var inheritance;
(function (inheritance) {
    class Ganseblume extends inheritance.Blume {
        constructor(_x, _y) {
            super(_x, _y);
        }
        // Gänseblümchen
        draw() {
            inheritance.crc2.beginPath();
            inheritance.crc2.fillStyle = "#ffffff";
            inheritance.crc2.strokeStyle = "#ffffff";
            inheritance.crc2.moveTo(this.x + 30, this.y - 26);
            inheritance.crc2.arc(this.x + 30, this.y - 26, 15, 180, 270);
            inheritance.crc2.moveTo(this.x + 7, this.y - 13);
            inheritance.crc2.arc(this.x + 7, this.y - 13, 15, 180, 270);
            inheritance.crc2.moveTo(this.x + 52, this.y - 12);
            inheritance.crc2.arc(this.x + 52, this.y - 12, 15, 180, 270);
            inheritance.crc2.moveTo(this.x + 7, this.y + 7);
            inheritance.crc2.arc(this.x + 7, this.y + 7, 15, 180, 270);
            inheritance.crc2.moveTo(this.x + 55, this.y + 12);
            inheritance.crc2.arc(this.x + 55, this.y + 12, 15, 180, 270);
            inheritance.crc2.moveTo(this.x + 30, this.y + 23);
            inheritance.crc2.arc(this.x + 30, this.y + 25, 15, 180, 270);
            inheritance.crc2.closePath();
            inheritance.crc2.fill();
            inheritance.crc2.stroke();
            inheritance.crc2.beginPath();
            inheritance.crc2.fillStyle = "#ffff1a";
            inheritance.crc2.strokeStyle = "#ffff1a";
            inheritance.crc2.moveTo(this.x + 28, this.y);
            inheritance.crc2.arc(this.x + 30, this.y, 17, 180, 270);
            inheritance.crc2.closePath();
            inheritance.crc2.fill();
            inheritance.crc2.stroke();
        }
    }
    inheritance.Ganseblume = Ganseblume;
})(inheritance || (inheritance = {}));
//# sourceMappingURL=ganseblume.js.map