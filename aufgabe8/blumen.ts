namespace L6_Classes {

    export class Blume {
        x: number;
        y: number;
        r: number;
        strokeColor: string;
        fillColor: string;
        fillColor1: string;
        strokeColor1: string;
        fillColor2: string;
        strokeColor2: string;
        fillColor3: string;
        strokeColor3: string;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
            
        }

       



        //Sonnenblume
        drawBlume(): void {
            crc2.beginPath();
            crc2.fillStyle = "#ffff99";
            crc2.strokeStyle = "#ffff99";
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
            crc2.fillStyle = "#4d2600";
            crc2.strokeStyle = "#4d2600";
            crc2.moveTo(this.x + 28, this.y);
            crc2.arc(this.x + 30, this.y, 17, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        // Gänseblümchen
        drawBlume1(): void {
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


        // Blaue Blume
        drawBlume3(): void {
            crc2.beginPath();
            crc2.fillStyle = "#66ccff";
            crc2.strokeStyle = "#66ccff";
            crc2.moveTo(this.x + 30, this.y - 26);
            crc2.arc(this.x + 30, this.y - 26, 21, 180, 270);
            crc2.moveTo(this.x + 7, this.y - 13);
            crc2.arc(this.x + 7, this.y - 13, 21, 180, 270);
            crc2.moveTo(this.x + 52, this.y - 12);
            crc2.arc(this.x + 52, this.y - 12, 21, 180, 270);
            crc2.moveTo(this.x + 7, this.y + 7);
            crc2.arc(this.x + 7, this.y + 7, 21, 180, 270);
            crc2.moveTo(this.x + 55, this.y + 12);
            crc2.arc(this.x + 55, this.y + 12, 21, 180, 270);
            crc2.moveTo(this.x + 30, this.y + 23);
            crc2.arc(this.x + 30, this.y + 25, 21, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "#3399ff";
            crc2.strokeStyle = "#3399ff";
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
            crc2.fillStyle = "#ffff00";
            crc2.strokeStyle = "#ffff00";
            crc2.moveTo(this.x + 28, this.y);
            crc2.arc(this.x + 30, this.y, 17, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "#663300";
            crc2.strokeStyle = "#663300";
            crc2.moveTo(this.x + 28, this.y);
            crc2.arc(this.x + 30, this.y, 9, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }


    }

}