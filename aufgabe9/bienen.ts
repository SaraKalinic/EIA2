namespace inheritance {

    export class BieneData {
        x: number;
        y: number;
        color: string;
        size: number;

        constructor() {
              this.x = 1750;
              this.y = 650;
              this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
              this.size = Math.random() * 10 + 2;
        }

        
        update(): void {
             this.move();
             this.draw();
          }
        
        setStart(): void {
            this.x = 1750;
            this.y = 650;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.size = Math.random() * 10 + 2;

        }
        move(): void {
            this.x += Math.random() * 7 - 6;
            this.y += Math.random() * 4 - 2;


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

        draw(): void {

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.color;
            crc2.moveTo(this.x + 2, this.y - 12);
            crc2.arc(this.x + 2, this.y - 12, this.size, 180, 270);
            crc2.moveTo(this.x + 9, this.y - 12);
            crc2.arc(this.x + 9, this.y - 12, this.size, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "yellow";
            crc2.strokeStyle = "yellow";
            crc2.moveTo(this.x + 9, this.y);
            crc2.arc(this.x + 9, this.y, this.size, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x + 4, this.y);
            crc2.arc(this.x + 4, this.y, this.size, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "yellow";
            crc2.strokeStyle = "yellow";
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, this.size, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x - 5, this.y - 2);
            crc2.arc(this.x - 5, this.y - 2, this.size, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
    }
}