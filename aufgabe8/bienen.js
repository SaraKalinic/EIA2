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
        drawBiene() {
            L6_Classes.crc2.beginPath();
            L6_Classes.crc2.fillStyle = this.color;
            L6_Classes.crc2.strokeStyle = this.color;
            L6_Classes.crc2.moveTo(this.x + 2, this.y - 12);
            L6_Classes.crc2.arc(this.x + 2, this.y - 12, this.size, 180, 270);
            L6_Classes.crc2.moveTo(this.x + 9, this.y - 12);
            L6_Classes.crc2.arc(this.x + 9, this.y - 12, this.size, 180, 270);
            L6_Classes.crc2.closePath();
            L6_Classes.crc2.fill();
            L6_Classes.crc2.stroke();
            L6_Classes.crc2.beginPath();
            L6_Classes.crc2.fillStyle = "yellow";
            L6_Classes.crc2.strokeStyle = "yellow";
            L6_Classes.crc2.moveTo(this.x + 9, this.y);
            L6_Classes.crc2.arc(this.x + 9, this.y, this.size, 180, 270);
            L6_Classes.crc2.closePath();
            L6_Classes.crc2.fill();
            L6_Classes.crc2.stroke();
            L6_Classes.crc2.beginPath();
            L6_Classes.crc2.fillStyle = "black";
            L6_Classes.crc2.strokeStyle = "black";
            L6_Classes.crc2.moveTo(this.x + 4, this.y);
            L6_Classes.crc2.arc(this.x + 4, this.y, this.size, 180, 270);
            L6_Classes.crc2.closePath();
            L6_Classes.crc2.fill();
            L6_Classes.crc2.stroke();
            L6_Classes.crc2.beginPath();
            L6_Classes.crc2.fillStyle = "yellow";
            L6_Classes.crc2.strokeStyle = "yellow";
            L6_Classes.crc2.moveTo(this.x, this.y);
            L6_Classes.crc2.arc(this.x, this.y, this.size, 180, 270);
            L6_Classes.crc2.closePath();
            L6_Classes.crc2.fill();
            L6_Classes.crc2.stroke();
            L6_Classes.crc2.beginPath();
            L6_Classes.crc2.fillStyle = "black";
            L6_Classes.crc2.strokeStyle = "black";
            L6_Classes.crc2.moveTo(this.x - 5, this.y - 2);
            L6_Classes.crc2.arc(this.x - 5, this.y - 2, this.size, 180, 270);
            L6_Classes.crc2.closePath();
            L6_Classes.crc2.fill();
            L6_Classes.crc2.stroke();
        }
    }
    L6_Classes.BieneData = BieneData;
})(L6_Classes || (L6_Classes = {}));
//# sourceMappingURL=bienen.js.map