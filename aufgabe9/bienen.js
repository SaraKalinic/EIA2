var inheritance;
(function (inheritance) {
    var BieneData = (function () {
        function BieneData() {
            this.x = 1750;
            this.y = 650;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.size = Math.random() * 10 + 2;
        }
        BieneData.prototype.update = function () {
            this.move();
            this.draw();
        };
        BieneData.prototype.move = function () {
            this.x += Math.random() * 7 - 6;
            this.y += Math.random() * 4 - 2;
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
        };
        BieneData.prototype.draw = function () {
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
            inheritance.crc2.fillStyle = "yellow";
            inheritance.crc2.strokeStyle = "yellow";
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
            inheritance.crc2.fillStyle = "yellow";
            inheritance.crc2.strokeStyle = "yellow";
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
        };
        return BieneData;
    }());
    inheritance.BieneData = BieneData;
})(inheritance || (inheritance = {}));
