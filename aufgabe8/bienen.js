var L6_Classes;
(function (L6_Classes) {
    class BieneData {
        setStart() {
            this.x = 1750;
            this.y = 650;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.size = Math.random() * 10 + 2;
        }
        move() {
            this.x += Math.random() * 7 - 6;
            this.y += Math.random() * 4 - 2;
        }
        catch() {
            // Wenn Bienen aus dem Bild fliegen
            // X-Richtung 
            if (this.x >= 1920)
                this.x = -6;
            if (this.x < -6)
                this.x = 1920;
            // Y-Richtung
            if (this.y <= -6)
                this.y = 1086;
            if (this.y > 1086)
                this.y = -6;
        }
        drawBiene(_x, _y, _color, _size) {
            L6_Classes.crc2.beginPath();
            L6_Classes.crc2.fillStyle = _color;
            L6_Classes.crc2.strokeStyle = _color;
            L6_Classes.crc2.moveTo(_x + 2, _y - 12);
            L6_Classes.crc2.arc(_x + 2, _y - 12, _size, 180, 270);
            L6_Classes.crc2.moveTo(_x + 9, _y - 12);
            L6_Classes.crc2.arc(_x + 9, _y - 12, _size, 180, 270);
            L6_Classes.crc2.closePath();
            L6_Classes.crc2.fill();
            L6_Classes.crc2.stroke();
            L6_Classes.crc2.beginPath();
            L6_Classes.crc2.fillStyle = "yellow";
            L6_Classes.crc2.strokeStyle = "yellow";
            L6_Classes.crc2.moveTo(_x + 9, _y);
            L6_Classes.crc2.arc(_x + 9, _y, _size, 180, 270);
            L6_Classes.crc2.closePath();
            L6_Classes.crc2.fill();
            L6_Classes.crc2.stroke();
            L6_Classes.crc2.beginPath();
            L6_Classes.crc2.fillStyle = "black";
            L6_Classes.crc2.strokeStyle = "black";
            L6_Classes.crc2.moveTo(_x + 4, _y);
            L6_Classes.crc2.arc(_x + 4, _y, _size, 180, 270);
            L6_Classes.crc2.closePath();
            L6_Classes.crc2.fill();
            L6_Classes.crc2.stroke();
            L6_Classes.crc2.beginPath();
            L6_Classes.crc2.fillStyle = "yellow";
            L6_Classes.crc2.strokeStyle = "yellow";
            L6_Classes.crc2.moveTo(_x, _y);
            L6_Classes.crc2.arc(_x, _y, _size, 180, 270);
            L6_Classes.crc2.closePath();
            L6_Classes.crc2.fill();
            L6_Classes.crc2.stroke();
            L6_Classes.crc2.beginPath();
            L6_Classes.crc2.fillStyle = "black";
            L6_Classes.crc2.strokeStyle = "black";
            L6_Classes.crc2.moveTo(_x - 5, _y - 2);
            L6_Classes.crc2.arc(_x - 5, _y - 2, _size, 180, 270);
            L6_Classes.crc2.closePath();
            L6_Classes.crc2.fill();
            L6_Classes.crc2.stroke();
        }
    }
    L6_Classes.BieneData = BieneData;
})(L6_Classes || (L6_Classes = {}));
//# sourceMappingURL=bienen.js.map