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
        size: number;
        xTarget: number;
        yTarget: number;
        speed: number;
        currentPosX:number;
        currentPosY:number;

        constructor() {
            
            this.draw();
            this.speed = 0.01;
            this.setStartPosition();
            this.setTarget();
          

        }
        
        // Position der Ameise herausfinden
        logCurrentPosition():void {
        this.currentPosX= this.x;
        this.currentPosY = this.y;
            
        //console.log(this.x);
        //console.log(this.y);    
        }
        // Update Funktion
        update(): void {
            this.move();
            this.draw();
            this.logCurrentPosition();
        }

        // Target Position auf den Korb setzten
        setTarget(): void {
            this.xTarget = 1150;
            this.yTarget = 500;
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
            this.x = 0;
            this.y = Math.floor(Math.random() * (1080 - 0)) + 0;
        }
        setPosition2(): void {
            this.x = 1920;
            this.y = Math.floor(Math.random() * (1080 - 0)) + 0;
        }

        setPosition3(): void {
            this.x = Math.floor(Math.random() * (1920 - 0)) + 0;
            this.y = 0;
        }

        setPosition4(): void {
            this.x = Math.floor(Math.random() * (1920 - 0)) + 0;
            this.y = 1080;
        }

        // Ameise zeichnen Funktion
        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x + 9, this.y);
            crc2.arc(this.x + 9, this.y, 7, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x + 9, this.y);
            crc2.lineTo(this.x + 10, this.y + 10);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x + 10, this.y + 10);
            crc2.lineTo(this.x + 5, this.y + 15);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x + 9, this.y);
            crc2.lineTo(this.x + 10, this.y - 13);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x + 10, this.y - 13);
            crc2.lineTo(this.x + 5, this.y - 15);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x + 19, this.y);
            crc2.arc(this.x + 19, this.y, 6, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x + 19, this.y);
            crc2.lineTo(this.x + 20, this.y + 11);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x + 20, this.y + 11);
            crc2.lineTo(this.x + 15, this.y + 15);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x + 19, this.y);
            crc2.lineTo(this.x + 20, this.y - 11);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x + 20, this.y - 11);
            crc2.lineTo(this.x + 15, this.y - 15);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x + 29, this.y);
            crc2.arc(this.x + 29, this.y, 6, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x + 25, this.y);
            crc2.lineTo(this.x + 27, this.y + 11);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x + 27, this.y + 11);
            crc2.lineTo(this.x + 22, this.y + 15);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x + 25, this.y);
            crc2.lineTo(this.x + 27, this.y - 11);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x + 27, this.y - 11);
            crc2.lineTo(this.x + 22, this.y - 15);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

        }
    }
}
