/*Aufgabe: (Semesteraufgabe)
Name: (Sara Kalinic)
Matrikel: (255073)
Datum: (16.07.2017)
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. */

namespace Sem {
    export class Ameise {
        x: number;
        y: number;
        color: string;
        xTarget: number;
        yTarget: number;
        speed: number;
        klicks: number; 

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
        update(): void {
            this.move();
            this.draw();

        }

        // Target Position auf den Korb setzten
        setTarget(): void {
            this.xTarget = 1250;
            this.yTarget = 320;
        }

        move(): void {

            this.x += Math.random() * 7 - 6;
            this.y += Math.random() * 4 - 2;


            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;

            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.setTarget();

            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }

        // Startposition bestimmen, damit Ameisen von unterschiedlichen Punkten am Rand starten
        setStartPosition(): void {

            for (var i: number = 0; i < ant.length; i++) {
                let position: number = Math.floor((Math.random() * 5) - 1);

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
        setPosition1(): void {
            // Bei 0 an X - Achse, Random auf y Achse
            this.x = 0;
            this.y = Math.floor(Math.random() * (700));
        }
        setPosition2(): void {
            // Bei canvas.width an X - Achse, Random auf y Achse
            this.x = 1300;
            this.y = Math.floor(Math.random() * (700));
        }

        setPosition3(): void {
            // Bei 0 an Y - Achse, Random auf X - Achse
            this.x = Math.floor(Math.random() * (1300));
            this.y = 0;
        }

        setPosition4(): void {
            // Bei canvas.length an Y - Achse, Random auf X - Achse
            this.x = Math.floor(Math.random() * (1300));
            this.y = 700;
        }

        // Ameise zeichnen Funktion
        draw(): void {


            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.moveTo(this.x + 9, this.y);
            crc2.arc(this.x + 9, this.y, 7, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.moveTo(this.x + 9, this.y);
            crc2.lineTo(this.x + 10, this.y + 10);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.moveTo(this.x + 10, this.y + 10);
            crc2.lineTo(this.x + 5, this.y + 15);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.moveTo(this.x + 9, this.y);
            crc2.lineTo(this.x + 10, this.y - 13);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.moveTo(this.x + 10, this.y - 13);
            crc2.lineTo(this.x + 5, this.y - 15);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.moveTo(this.x + 19, this.y);
            crc2.arc(this.x + 19, this.y, 6, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.moveTo(this.x + 19, this.y);
            crc2.lineTo(this.x + 20, this.y + 11);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.moveTo(this.x + 20, this.y + 11);
            crc2.lineTo(this.x + 15, this.y + 15);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.moveTo(this.x + 19, this.y);
            crc2.lineTo(this.x + 20, this.y - 11);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.moveTo(this.x + 20, this.y - 11);
            crc2.lineTo(this.x + 15, this.y - 15);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.moveTo(this.x + 29, this.y);
            crc2.arc(this.x + 29, this.y, 6, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.moveTo(this.x + 25, this.y);
            crc2.lineTo(this.x + 27, this.y + 11);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.moveTo(this.x + 27, this.y + 11);
            crc2.lineTo(this.x + 22, this.y + 15);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.moveTo(this.x + 25, this.y);
            crc2.lineTo(this.x + 27, this.y - 11);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.moveTo(this.x + 27, this.y - 11);
            crc2.lineTo(this.x + 22, this.y - 15);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

        }
    }
}
