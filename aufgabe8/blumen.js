var L6_Classes;
(function (L6_Classes) {
    class Blume {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        //Sonnenblume
        drawBlume() {
            L6_Classes.crc2.beginPath();
            L6_Classes.crc2.fillStyle = "#ffff99";
            L6_Classes.crc2.strokeStyle = "#ffff99";
            L6_Classes.crc2.moveTo(this.x + 30, this.y - 26);
            L6_Classes.crc2.arc(this.x + 30, this.y - 26, 15, 180, 270);
            L6_Classes.crc2.moveTo(this.x + 7, this.y - 13);
            L6_Classes.crc2.arc(this.x + 7, this.y - 13, 15, 180, 270);
            L6_Classes.crc2.moveTo(this.x + 52, this.y - 12);
            L6_Classes.crc2.arc(this.x + 52, this.y - 12, 15, 180, 270);
            L6_Classes.crc2.moveTo(this.x + 7, this.y + 7);
            L6_Classes.crc2.arc(this.x + 7, this.y + 7, 15, 180, 270);
            L6_Classes.crc2.moveTo(this.x + 55, this.y + 12);
            L6_Classes.crc2.arc(this.x + 55, this.y + 12, 15, 180, 270);
            L6_Classes.crc2.moveTo(this.x + 30, this.y + 23);
            L6_Classes.crc2.arc(this.x + 30, this.y + 25, 15, 180, 270);
            L6_Classes.crc2.closePath();
            L6_Classes.crc2.fill();
            L6_Classes.crc2.stroke();
            L6_Classes.crc2.beginPath();
            L6_Classes.crc2.fillStyle = "#4d2600";
            L6_Classes.crc2.strokeStyle = "#4d2600";
            L6_Classes.crc2.moveTo(this.x + 28, this.y);
            L6_Classes.crc2.arc(this.x + 30, this.y, 17, 180, 270);
            L6_Classes.crc2.closePath();
            L6_Classes.crc2.fill();
            L6_Classes.crc2.stroke();
        }
        // Gänseblümchen
        drawBlume1() {
            L6_Classes.crc2.beginPath();
            L6_Classes.crc2.fillStyle = "#ffffff";
            L6_Classes.crc2.strokeStyle = "#ffffff";
            L6_Classes.crc2.moveTo(this.x + 30, this.y - 26);
            L6_Classes.crc2.arc(this.x + 30, this.y - 26, 15, 180, 270);
            L6_Classes.crc2.moveTo(this.x + 7, this.y - 13);
            L6_Classes.crc2.arc(this.x + 7, this.y - 13, 15, 180, 270);
            L6_Classes.crc2.moveTo(this.x + 52, this.y - 12);
            L6_Classes.crc2.arc(this.x + 52, this.y - 12, 15, 180, 270);
            L6_Classes.crc2.moveTo(this.x + 7, this.y + 7);
            L6_Classes.crc2.arc(this.x + 7, this.y + 7, 15, 180, 270);
            L6_Classes.crc2.moveTo(this.x + 55, this.y + 12);
            L6_Classes.crc2.arc(this.x + 55, this.y + 12, 15, 180, 270);
            L6_Classes.crc2.moveTo(this.x + 30, this.y + 23);
            L6_Classes.crc2.arc(this.x + 30, this.y + 25, 15, 180, 270);
            L6_Classes.crc2.closePath();
            L6_Classes.crc2.fill();
            L6_Classes.crc2.stroke();
            L6_Classes.crc2.beginPath();
            L6_Classes.crc2.fillStyle = "#ffff1a";
            L6_Classes.crc2.strokeStyle = "#ffff1a";
            L6_Classes.crc2.moveTo(this.x + 28, this.y);
            L6_Classes.crc2.arc(this.x + 30, this.y, 17, 180, 270);
            L6_Classes.crc2.closePath();
            L6_Classes.crc2.fill();
            L6_Classes.crc2.stroke();
        }
        // Blaue Blume
        drawBlume3() {
            L6_Classes.crc2.beginPath();
            L6_Classes.crc2.fillStyle = "#66ccff";
            L6_Classes.crc2.strokeStyle = "#66ccff";
            L6_Classes.crc2.moveTo(this.x + 30, this.y - 26);
            L6_Classes.crc2.arc(this.x + 30, this.y - 26, 21, 180, 270);
            L6_Classes.crc2.moveTo(this.x + 7, this.y - 13);
            L6_Classes.crc2.arc(this.x + 7, this.y - 13, 21, 180, 270);
            L6_Classes.crc2.moveTo(this.x + 52, this.y - 12);
            L6_Classes.crc2.arc(this.x + 52, this.y - 12, 21, 180, 270);
            L6_Classes.crc2.moveTo(this.x + 7, this.y + 7);
            L6_Classes.crc2.arc(this.x + 7, this.y + 7, 21, 180, 270);
            L6_Classes.crc2.moveTo(this.x + 55, this.y + 12);
            L6_Classes.crc2.arc(this.x + 55, this.y + 12, 21, 180, 270);
            L6_Classes.crc2.moveTo(this.x + 30, this.y + 23);
            L6_Classes.crc2.arc(this.x + 30, this.y + 25, 21, 180, 270);
            L6_Classes.crc2.closePath();
            L6_Classes.crc2.fill();
            L6_Classes.crc2.stroke();
            L6_Classes.crc2.beginPath();
            L6_Classes.crc2.fillStyle = "#3399ff";
            L6_Classes.crc2.strokeStyle = "#3399ff";
            L6_Classes.crc2.moveTo(this.x + 30, this.y - 26);
            L6_Classes.crc2.arc(this.x + 30, this.y - 26, 15, 180, 270);
            L6_Classes.crc2.moveTo(this.x + 7, this.y - 13);
            L6_Classes.crc2.arc(this.x + 7, this.y - 13, 15, 180, 270);
            L6_Classes.crc2.moveTo(this.x + 52, this.y - 12);
            L6_Classes.crc2.arc(this.x + 52, this.y - 12, 15, 180, 270);
            L6_Classes.crc2.moveTo(this.x + 7, this.y + 7);
            L6_Classes.crc2.arc(this.x + 7, this.y + 7, 15, 180, 270);
            L6_Classes.crc2.moveTo(this.x + 55, this.y + 12);
            L6_Classes.crc2.arc(this.x + 55, this.y + 12, 15, 180, 270);
            L6_Classes.crc2.moveTo(this.x + 30, this.y + 23);
            L6_Classes.crc2.arc(this.x + 30, this.y + 25, 15, 180, 270);
            L6_Classes.crc2.closePath();
            L6_Classes.crc2.fill();
            L6_Classes.crc2.stroke();
            L6_Classes.crc2.beginPath();
            L6_Classes.crc2.fillStyle = "#ffff00";
            L6_Classes.crc2.strokeStyle = "#ffff00";
            L6_Classes.crc2.moveTo(this.x + 28, this.y);
            L6_Classes.crc2.arc(this.x + 30, this.y, 17, 180, 270);
            L6_Classes.crc2.closePath();
            L6_Classes.crc2.fill();
            L6_Classes.crc2.stroke();
            L6_Classes.crc2.beginPath();
            L6_Classes.crc2.fillStyle = "#663300";
            L6_Classes.crc2.strokeStyle = "#663300";
            L6_Classes.crc2.moveTo(this.x + 28, this.y);
            L6_Classes.crc2.arc(this.x + 30, this.y, 9, 180, 270);
            L6_Classes.crc2.closePath();
            L6_Classes.crc2.fill();
            L6_Classes.crc2.stroke();
        }
    }
    L6_Classes.Blume = Blume;
})(L6_Classes || (L6_Classes = {}));
//# sourceMappingURL=blumen.js.map