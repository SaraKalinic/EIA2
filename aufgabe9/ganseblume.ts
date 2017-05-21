namespace inheritance {

    export class Ganseblume extends Blume {

        r: number;
        strokeColor: string;
        fillColor: string;
        fillColor1: string;
        strokeColor1: string;
        fillColor2: string;
        strokeColor2: string;
        fillColor3: string;
        strokeColor3: string;

        constructor(_x: number, _y: number) {
            super(_x, _y);

        }

        // Gänseblümchen
        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "#ffffff";
            crc2.strokeStyle = "#ffffff";
            crc2.moveTo(this.x + 30, this.y - 26);
            crc2.arc(this.x + 30, this.y - 26, 15, 180, 270);
            crc2.moveTo(this.x + 7, this.y - 13);
            crc2.arc(this.x + 7, this.y - 13, 15, 180, 270);
            crc2.moveTo(this.x + 52, this.y - 12);
            crc2.arc(this.x + 52, this.y - 12, 15, 180, 270);
            crc2.moveTo(this.x + 7, this.y + 7);
            crc2.arc(this.x + 7, this.y + 7, 15, 180, 270);
            crc2.moveTo(this.x + 55, this.y + 12);
            crc2.arc(this.x + 55, this.y + 12, 15, 180, 270);
            crc2.moveTo(this.x + 30, this.y + 23);
            crc2.arc(this.x + 30, this.y + 25, 15, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "#ffff1a";
            crc2.strokeStyle = "#ffff1a";
            crc2.moveTo(this.x + 28, this.y);
            crc2.arc(this.x + 30, this.y, 17, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

    }
}