var Sem;
(function (Sem) {
    class AmeiseBrown extends Sem.Ameise {
        constructor() {
            super();
            this.setStartPosition();
        }
        update() {
            this.move();
            this.draw();
            this.logCurrentPosition();
        }
        setStartPosition() {
            for (var i = 0; i < Sem.ant.length; i++) {
                let position = Math.floor((Math.random() * 5) - 1);
                switch (position) {
                    case 0:
                        this.setPosition1();
                        break;
                    case 1:
                        this.setPosition2();
                        break;
                    case 2:
                        this.setPosition3();
                        break;
                    case 3:
                        this.setPosition4();
                        break;
                }
            }
        }
        // Startposition Möglichkeiten
        setPosition1() {
            this.x = 0;
            this.y = Math.floor(Math.random() * (700 - 0)) + 0;
        }
        setPosition2() {
            this.x = 1300;
            this.y = Math.floor(Math.random() * (700 - 0)) + 0;
        }
        setPosition3() {
            this.x = Math.floor(Math.random() * (1300 - 0)) + 0;
            this.y = 0;
        }
        setPosition4() {
            this.x = Math.floor(Math.random() * (1300 - 0)) + 0;
            this.y = 700;
        }
        draw() {
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "#b30000";
            Sem.crc2.strokeStyle = "#b30000";
            Sem.crc2.moveTo(this.x + 9, this.y);
            Sem.crc2.arc(this.x + 9, this.y, 7, 180, 270);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "brown";
            Sem.crc2.strokeStyle = "brown";
            Sem.crc2.moveTo(this.x + 9, this.y);
            Sem.crc2.lineTo(this.x + 10, this.y + 10);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "brown";
            Sem.crc2.strokeStyle = "brown";
            Sem.crc2.moveTo(this.x + 10, this.y + 10);
            Sem.crc2.lineTo(this.x + 5, this.y + 15);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "brown";
            Sem.crc2.strokeStyle = "brown";
            Sem.crc2.moveTo(this.x + 9, this.y);
            Sem.crc2.lineTo(this.x + 10, this.y - 13);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "brown";
            Sem.crc2.strokeStyle = "brown";
            Sem.crc2.moveTo(this.x + 10, this.y - 13);
            Sem.crc2.lineTo(this.x + 5, this.y - 15);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "brown";
            Sem.crc2.strokeStyle = "brown";
            Sem.crc2.moveTo(this.x + 19, this.y);
            Sem.crc2.arc(this.x + 19, this.y, 6, 180, 270);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "brown";
            Sem.crc2.strokeStyle = "brown";
            Sem.crc2.moveTo(this.x + 19, this.y);
            Sem.crc2.lineTo(this.x + 20, this.y + 11);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "brown";
            Sem.crc2.strokeStyle = "brown";
            Sem.crc2.moveTo(this.x + 20, this.y + 11);
            Sem.crc2.lineTo(this.x + 15, this.y + 15);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "brown";
            Sem.crc2.strokeStyle = "brown";
            Sem.crc2.moveTo(this.x + 19, this.y);
            Sem.crc2.lineTo(this.x + 20, this.y - 11);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "brown";
            Sem.crc2.strokeStyle = "brown";
            Sem.crc2.moveTo(this.x + 20, this.y - 11);
            Sem.crc2.lineTo(this.x + 15, this.y - 15);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "brown";
            Sem.crc2.strokeStyle = "brown";
            Sem.crc2.moveTo(this.x + 29, this.y);
            Sem.crc2.arc(this.x + 29, this.y, 6, 180, 270);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "brown";
            Sem.crc2.strokeStyle = "brown";
            Sem.crc2.moveTo(this.x + 25, this.y);
            Sem.crc2.lineTo(this.x + 27, this.y + 11);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "brown";
            Sem.crc2.strokeStyle = "brown";
            Sem.crc2.moveTo(this.x + 27, this.y + 11);
            Sem.crc2.lineTo(this.x + 22, this.y + 15);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "brown";
            Sem.crc2.strokeStyle = "brown";
            Sem.crc2.moveTo(this.x + 25, this.y);
            Sem.crc2.lineTo(this.x + 27, this.y - 11);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "brown";
            Sem.crc2.strokeStyle = "brown";
            Sem.crc2.moveTo(this.x + 27, this.y - 11);
            Sem.crc2.lineTo(this.x + 22, this.y - 15);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
        }
    }
    Sem.AmeiseBrown = AmeiseBrown;
})(Sem || (Sem = {}));
//# sourceMappingURL=ameise3.js.map