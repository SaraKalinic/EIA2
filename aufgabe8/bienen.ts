 namespace L6_Classes {

export class BieneData {
        x: number; 
        y: number; 
        color: string;
        size: number; 
   
     
     setStart (): void { 
            this.x = 1750; 
            this.y = 650;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.size = Math.random() * 10 + 2;
            
               }
    move(): void { 
                this.x += Math.random() * 7 - 6;
                this.y += Math.random() * 4 - 2;
            } 
    
    catch(): void {
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
    
        drawBiene(_x: number, _y: number, _color: string, _size: number): void {
        
        crc2.beginPath();
        crc2.fillStyle = _color;
        crc2.strokeStyle = _color;
        crc2.moveTo(_x + 2 , _y - 12);
        crc2.arc(_x + 2 , _y - 12 , _size, 180, 270); 
        crc2.moveTo(_x + 9 , _y - 12);
        crc2.arc(_x + 9 , _y - 12 , _size, 180, 270);    
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
             
        crc2.beginPath();
        crc2.fillStyle = "yellow";
        crc2.strokeStyle = "yellow";
        crc2.moveTo(_x + 9 , _y);
        crc2.arc(_x + 9 , _y , _size, 180, 270); 
        crc2.closePath();
        crc2.fill();
        crc2.stroke();   
           
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.strokeStyle = "black";
        crc2.moveTo(_x + 4 , _y);
        crc2.arc(_x + 4 , _y , _size, 180, 270); 
        crc2.closePath();
        crc2.fill();
        crc2.stroke(); 
           
        crc2.beginPath();
        crc2.fillStyle = "yellow";
        crc2.strokeStyle = "yellow";
        crc2.moveTo(_x , _y);
        crc2.arc(_x , _y , _size, 180, 270); 
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
           
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.strokeStyle = "black";
        crc2.moveTo(_x - 5 , _y - 2);
        crc2.arc(_x - 5 , _y - 2, _size, 180, 270);      
        crc2.closePath();
        crc2.fill();
        crc2.stroke();   
         }
        }
       }