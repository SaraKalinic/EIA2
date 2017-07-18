/*Aufgabe: (Semesteraufgabe)
Name: (Sara Kalinic)
Matrikel: (255073)
Datum: (16.07.2017)
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. */

namespace Sem {

    export class AmeiseBrown extends Ameise {


        constructor() {
            super();
            this.setStartPosition();

        }

        update(): void {
            this.move();
            this.draw();
            this.logCurrentPosition();
        }

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
            this.x = 0;
            this.y = Math.floor(Math.random() * (700 - 0)) + 0;
        }
        setPosition2(): void {
            this.x = 1300;
            this.y = Math.floor(Math.random() * (700 - 0)) + 0;
        }

        setPosition3(): void {
            this.x = Math.floor(Math.random() * (1300 - 0)) + 0;
            this.y = 0;
        }

        setPosition4(): void {
            this.x = Math.floor(Math.random() * (1300 - 0)) + 0;
            this.y = 700;
        }

        draw(): void {


            crc2.beginPath();
            crc2.fillStyle = "#b30000";
            crc2.strokeStyle = "#b30000";
            crc2.moveTo(this.x + 9, this.y);
            crc2.arc(this.x + 9, this.y, 7, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.strokeStyle = "brown";
            crc2.moveTo(this.x + 9, this.y);
            crc2.lineTo(this.x + 10, this.y + 10);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.strokeStyle = "brown";
            crc2.moveTo(this.x + 10, this.y + 10);
            crc2.lineTo(this.x + 5, this.y + 15);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.strokeStyle = "brown";
            crc2.moveTo(this.x + 9, this.y);
            crc2.lineTo(this.x + 10, this.y - 13);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.strokeStyle = "brown";
            crc2.moveTo(this.x + 10, this.y - 13);
            crc2.lineTo(this.x + 5, this.y - 15);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.strokeStyle = "brown";
            crc2.moveTo(this.x + 19, this.y);
            crc2.arc(this.x + 19, this.y, 6, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.strokeStyle = "brown";
            crc2.moveTo(this.x + 19, this.y);
            crc2.lineTo(this.x + 20, this.y + 11);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.strokeStyle = "brown";
            crc2.moveTo(this.x + 20, this.y + 11);
            crc2.lineTo(this.x + 15, this.y + 15);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.strokeStyle = "brown";
            crc2.moveTo(this.x + 19, this.y);
            crc2.lineTo(this.x + 20, this.y - 11);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.strokeStyle = "brown";
            crc2.moveTo(this.x + 20, this.y - 11);
            crc2.lineTo(this.x + 15, this.y - 15);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.strokeStyle = "brown";
            crc2.moveTo(this.x + 29, this.y);
            crc2.arc(this.x + 29, this.y, 6, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.strokeStyle = "brown";
            crc2.moveTo(this.x + 25, this.y);
            crc2.lineTo(this.x + 27, this.y + 11);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.strokeStyle = "brown";
            crc2.moveTo(this.x + 27, this.y + 11);
            crc2.lineTo(this.x + 22, this.y + 15);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.strokeStyle = "brown";
            crc2.moveTo(this.x + 25, this.y);
            crc2.lineTo(this.x + 27, this.y - 11);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "brown";
            crc2.strokeStyle = "brown";
            crc2.moveTo(this.x + 27, this.y - 11);
            crc2.lineTo(this.x + 22, this.y - 15);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

        }
    }
}