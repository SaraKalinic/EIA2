/*Aufgabe: (Semesteraufgabe)
Name: (Sara Kalinic)
Matrikel: (255073)
Datum: (16.07.2017)
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. */
var Sem;
(function (Sem) {
    class Ameise {
        constructor() {
            this.color = "black";
            this.speed = 0.004;
            this.klicks = 0;
            this.setStartPosition();
            this.setTarget();
            this.draw();
            this.move();
        }
        // Update Funktion
        update() {
            this.move();
            this.draw();
        }
        // Target Position auf den Korb setzten
        setTarget() {
            this.xTarget = 1250;
            this.yTarget = 320;
        }
        move() {
            this.x += Math.random() * 7 - 6;
            this.y += Math.random() * 4 - 2;
            let xDiff = this.xTarget - this.x;
            let yDiff = this.yTarget - this.y;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.setTarget();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }
        // Startposition bestimmen, damit Ameisen von unterschiedlichen Punkten am Rand starten
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
            // Bei 0 an X - Achse, Random auf y Achse
            this.x = 0;
            this.y = Math.floor(Math.random() * (700));
        }
        setPosition2() {
            // Bei canvas.width an X - Achse, Random auf y Achse
            this.x = 1300;
            this.y = Math.floor(Math.random() * (700));
        }
        setPosition3() {
            // Bei 0 an Y - Achse, Random auf X - Achse
            this.x = Math.floor(Math.random() * (1300));
            this.y = 0;
        }
        setPosition4() {
            // Bei canvas.length an Y - Achse, Random auf X - Achse
            this.x = Math.floor(Math.random() * (1300));
            this.y = 700;
        }
        // Ameise zeichnen Funktion
        draw() {
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = this.color;
            Sem.crc2.strokeStyle = this.color;
            Sem.crc2.moveTo(this.x + 9, this.y);
            Sem.crc2.arc(this.x + 9, this.y, 7, 180, 270);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = this.color;
            Sem.crc2.strokeStyle = this.color;
            Sem.crc2.moveTo(this.x + 9, this.y);
            Sem.crc2.lineTo(this.x + 10, this.y + 10);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = this.color;
            Sem.crc2.strokeStyle = this.color;
            Sem.crc2.moveTo(this.x + 10, this.y + 10);
            Sem.crc2.lineTo(this.x + 5, this.y + 15);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = this.color;
            Sem.crc2.strokeStyle = this.color;
            Sem.crc2.moveTo(this.x + 9, this.y);
            Sem.crc2.lineTo(this.x + 10, this.y - 13);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = this.color;
            Sem.crc2.strokeStyle = this.color;
            Sem.crc2.moveTo(this.x + 10, this.y - 13);
            Sem.crc2.lineTo(this.x + 5, this.y - 15);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = this.color;
            Sem.crc2.strokeStyle = this.color;
            Sem.crc2.moveTo(this.x + 19, this.y);
            Sem.crc2.arc(this.x + 19, this.y, 6, 180, 270);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = this.color;
            Sem.crc2.strokeStyle = this.color;
            Sem.crc2.moveTo(this.x + 19, this.y);
            Sem.crc2.lineTo(this.x + 20, this.y + 11);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = this.color;
            Sem.crc2.strokeStyle = this.color;
            Sem.crc2.moveTo(this.x + 20, this.y + 11);
            Sem.crc2.lineTo(this.x + 15, this.y + 15);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = this.color;
            Sem.crc2.strokeStyle = this.color;
            Sem.crc2.moveTo(this.x + 19, this.y);
            Sem.crc2.lineTo(this.x + 20, this.y - 11);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = this.color;
            Sem.crc2.strokeStyle = this.color;
            Sem.crc2.moveTo(this.x + 20, this.y - 11);
            Sem.crc2.lineTo(this.x + 15, this.y - 15);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = this.color;
            Sem.crc2.strokeStyle = this.color;
            Sem.crc2.moveTo(this.x + 29, this.y);
            Sem.crc2.arc(this.x + 29, this.y, 6, 180, 270);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = this.color;
            Sem.crc2.strokeStyle = this.color;
            Sem.crc2.moveTo(this.x + 25, this.y);
            Sem.crc2.lineTo(this.x + 27, this.y + 11);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = this.color;
            Sem.crc2.strokeStyle = this.color;
            Sem.crc2.moveTo(this.x + 27, this.y + 11);
            Sem.crc2.lineTo(this.x + 22, this.y + 15);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = this.color;
            Sem.crc2.strokeStyle = this.color;
            Sem.crc2.moveTo(this.x + 25, this.y);
            Sem.crc2.lineTo(this.x + 27, this.y - 11);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = this.color;
            Sem.crc2.strokeStyle = this.color;
            Sem.crc2.moveTo(this.x + 27, this.y - 11);
            Sem.crc2.lineTo(this.x + 22, this.y - 15);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
        }
    }
    Sem.Ameise = Ameise;
})(Sem || (Sem = {}));
//# sourceMappingURL=ameise.js.map