var inheritance;
(function (inheritance) {
    class BlauBlume extends inheritance.Blume {
        constructor(_x, _y) {
            super(_x, _y);
        }
        // Blaue Blume
        drawBlume3() {
            inheritance.crc2.beginPath();
            inheritance.crc2.fillStyle = "#66ccff";
            inheritance.crc2.strokeStyle = "#66ccff";
            inheritance.crc2.moveTo(this.x + 30, this.y - 26);
            inheritance.crc2.arc(this.x + 30, this.y - 26, 21, 180, 270);
            inheritance.crc2.moveTo(this.x + 7, this.y - 13);
            inheritance.crc2.arc(this.x + 7, this.y - 13, 21, 180, 270);
            inheritance.crc2.moveTo(this.x + 52, this.y - 12);
            inheritance.crc2.arc(this.x + 52, this.y - 12, 21, 180, 270);
            inheritance.crc2.moveTo(this.x + 7, this.y + 7);
            inheritance.crc2.arc(this.x + 7, this.y + 7, 21, 180, 270);
            inheritance.crc2.moveTo(this.x + 55, this.y + 12);
            inheritance.crc2.arc(this.x + 55, this.y + 12, 21, 180, 270);
            inheritance.crc2.moveTo(this.x + 30, this.y + 23);
            inheritance.crc2.arc(this.x + 30, this.y + 25, 21, 180, 270);
            inheritance.crc2.closePath();
            inheritance.crc2.fill();
            inheritance.crc2.stroke();
            inheritance.crc2.beginPath();
            inheritance.crc2.fillStyle = "#3399ff";
            inheritance.crc2.strokeStyle = "#3399ff";
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
            inheritance.crc2.fillStyle = "#ffff00";
            inheritance.crc2.strokeStyle = "#ffff00";
            inheritance.crc2.moveTo(this.x + 28, this.y);
            inheritance.crc2.arc(this.x + 30, this.y, 17, 180, 270);
            inheritance.crc2.closePath();
            inheritance.crc2.fill();
            inheritance.crc2.stroke();
            inheritance.crc2.beginPath();
            inheritance.crc2.fillStyle = "#663300";
            inheritance.crc2.strokeStyle = "#663300";
            inheritance.crc2.moveTo(this.x + 28, this.y);
            inheritance.crc2.arc(this.x + 30, this.y, 9, 180, 270);
            inheritance.crc2.closePath();
            inheritance.crc2.fill();
            inheritance.crc2.stroke();
        }
    }
    inheritance.BlauBlume = BlauBlume;
})(inheritance || (inheritance = {}));
//# sourceMappingURL=blaueblume.js.map