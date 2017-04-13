namespace L4_Canvas {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1920;
        canvas.height = 1080;
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        crc2.fillStyle = "#ccffff";
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        drawCloud(0, 100, 100, 180, 370, "#f2f2f2", "#f2f2f2");
        drawCloud(350, 60, 100, 180, 370, "#ffe6f2", "#ffe6f2");
        drawCloud(900, 50, 100, 180, 370, "#ffe6f2", "#ffe6f2");
        drawCloud(170, 0, 100, 180, 370, "#ffffff", "#ffffff");
        drawCloud(570, 20, 100, 180, 370, "#f2f2f2", "#f2f2f2");
        drawCloud(1600, 20, 100, 180, 370, "#ffe6f2", "#ffe6f2");
        drawCloud(1290, 70, 100, 180, 370, "#f2f2f2", "#f2f2f2");
        drawCloud1(770, 150, 100, 180, 70, "#ffffff", "#ffffff");
        drawCloud1(880, 0, 100, 180, 70, "#f2f2f2", "#f2f2f2");
        drawCloud1(1080, 0, 100, 180, 70, "#ffffff", "#ffffff");
        drawCloud1(1500, 150, 100, 180, 70, "#ffffff", "#ffffff");
        drawCloud1(1760, 10, 100, 180, 70, "#ffffff", "#ffffff");
        drawSun(0, 0, 100, 180, 270, "#ffffff", "#ffff99");
        
        drawWiese3(0, 473, "#2d8659", "#2d8659");
        drawWiese1(1920, 473, "#339966", "#339966");
        drawWiese2(0, 540, "#adebad", "#adebad");
  
        drawHaus(0, 540, "#9933ff", "#9933ff");
        drawDeko(0, 540, 4, 0, 180, "#b3d9ff", "#b3d9ff");
    }

    //Wolken und Sonne

    function drawCloud(_x: number, _y: number, _x1: number, _y1: number, r: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 100, 180, 470);
        crc2.arc(_x + 100, _y - 50, 100, 180, 470);
        crc2.arc(_x + 120, _y + 50, 100, 180, 270);
        crc2.arc(_x + 270, _y, 100, 180, 470);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }


    function drawCloud1(_x: number, _y: number, _x1: number, _y1: number, r: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);

        crc2.arc(_x, _y, 50, 0, 360);
        crc2.arc(_x + 50, _y + 30, 50, 0, 360);
        crc2.arc(_x + 110, _y + 30, 50, 0, 360);
        crc2.arc(_x + 70, _y - 20, 60, 0, 360);
        crc2.arc(_x + 140, _y, 50, 0, 360);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawSun(_x: number, _y: number, _x1: number, _y1: number, r: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 100, 180, 270);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }

    function drawWiese1(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x , _y );
        crc2.lineTo(_x - 1920, _y + 470);
        crc2.lineTo(_x , _y + 470 );
        crc2.lineTo(_x , _y );
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    
    function drawWiese2(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x , _y );
        crc2.lineTo(_x + 300, _y );
        crc2.lineTo(_x + 1920, _y + 400);
        crc2.lineTo(_x + 1920, _y + 540 );
        crc2.lineTo(_x, _y + 540 );
        crc2.lineTo(_x , _y  );
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    
     function drawWiese3(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x , _y );
        crc2.lineTo(_x + 1920, _y );
        crc2.lineTo(_x + 1920, _y + 400);
        crc2.lineTo(_x + 1920, _y + 540 );
        crc2.lineTo(_x, _y + 540 );
        crc2.lineTo(_x , _y  );
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    
    
    // Haus
    function drawHaus(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x , _y );
        crc2.lineTo(_x + 300, _y );
        crc2.lineTo(_x + 300, _y - 300 );
        crc2.lineTo(_x + 150, _y - 450 );
        crc2.lineTo(_x , _y - 300 );
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
   
       function drawDeko(_x: number, _y: number, _x1: number, _y1: number, r: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x + 10 , _y -20);
        crc2.arc(_x + 10, _y -20, 5, 0, 360);
        crc2.moveTo(_x + 40 , _y -20);
        crc2.arc(_x + 40, _y -20, 5, 0, 360);
        crc2.moveTo(_x + 70 , _y -20);
        crc2.arc(_x + 70, _y -20, 5, 0, 360);
        crc2.moveTo(_x + 100 , _y -20);
        crc2.arc(_x + 100, _y -20, 5, 0, 360);
        crc2.moveTo(_x + 130 , _y -20);
        crc2.arc(_x + 130, _y -20, 5, 0, 360);
        crc2.moveTo(_x + 160 , _y -20);
        crc2.arc(_x + 160, _y -20, 5, 0, 360);
        crc2.moveTo(_x + 190 , _y -20);
        crc2.arc(_x + 190, _y -20, 5, 0, 360);
        crc2.moveTo(_x + 220 , _y -20);
        crc2.arc(_x + 220, _y -20, 5, 0, 360); 
        crc2.moveTo(_x + 250 , _y -20);
        crc2.arc(_x + 250, _y -20, 5, 0, 360); 
        crc2.moveTo(_x + 280 , _y -20);
        crc2.arc(_x + 280, _y -20, 5, 0, 360);
        
        crc2.moveTo(_x + 10 , _y -70);
        crc2.arc(_x + 10, _y -70, 5, 0, 360);
        crc2.moveTo(_x + 40 , _y -70);
        crc2.arc(_x + 40, _y -70, 5, 0, 360);
        crc2.moveTo(_x + 70 , _y -70);
        crc2.arc(_x + 70, _y -70, 5, 0, 360);
        crc2.moveTo(_x + 100 , _y -70);
        crc2.arc(_x + 100, _y -70, 5, 0, 360);
        crc2.moveTo(_x + 130 , _y -70);
        crc2.arc(_x + 130, _y -70, 5, 0, 360);
        crc2.moveTo(_x + 160 , _y -70);
        crc2.arc(_x + 160, _y -70, 5, 0, 360);
        crc2.moveTo(_x + 190 , _y -70);
        crc2.arc(_x + 190, _y -70, 5, 0, 360);
        crc2.moveTo(_x + 220 , _y -70);
        crc2.arc(_x + 220, _y -70, 5, 0, 360); 
        crc2.moveTo(_x + 250 , _y -70);
        crc2.arc(_x + 250, _y -70, 5, 0, 360); 
        crc2.moveTo(_x + 280 , _y -70);
        crc2.arc(_x + 280, _y -70, 5, 0, 360);
           
        crc2.moveTo(_x + 10 , _y -110);
        crc2.arc(_x + 10, _y -110, 5, 0, 360);
        crc2.moveTo(_x + 40 , _y -110);
        crc2.arc(_x + 40, _y -110, 5, 0, 360);
        crc2.moveTo(_x + 70 , _y -110);
        crc2.arc(_x + 70, _y -110, 5, 0, 360);
        crc2.moveTo(_x + 100 , _y -110);
        crc2.arc(_x + 100, _y -110, 5, 0, 360);
        crc2.moveTo(_x + 130 , _y -110);
        crc2.arc(_x + 130, _y -110, 5, 0, 360);
        crc2.moveTo(_x + 160 , _y -110);
        crc2.arc(_x + 160, _y -110, 5, 0, 360);
        crc2.moveTo(_x + 190 , _y -110);
        crc2.arc(_x + 190, _y -110, 5, 0, 360);
        crc2.moveTo(_x + 220 , _y -110);
        crc2.arc(_x + 220, _y -110, 5, 0, 360); 
        crc2.moveTo(_x + 250 , _y -110);
        crc2.arc(_x + 250, _y -110, 5, 0, 360); 
        crc2.moveTo(_x + 280 , _y -110);
        crc2.arc(_x + 280, _y -110, 5, 0, 360);  
           
        crc2.moveTo(_x + 10 , _y -160);
        crc2.arc(_x + 10, _y -160, 5, 0, 360);
        crc2.moveTo(_x + 40 , _y -160);
        crc2.arc(_x + 40, _y -160, 5, 0, 360);
        crc2.moveTo(_x + 70 , _y -160);
        crc2.arc(_x + 70, _y -160, 5, 0, 360);
        crc2.moveTo(_x + 100 , _y -160);
        crc2.arc(_x + 100, _y -160, 5, 0, 360);
        crc2.moveTo(_x + 130 , _y -160);
        crc2.arc(_x + 130, _y -160, 5, 0, 360);
        crc2.moveTo(_x + 160 , _y -160);
        crc2.arc(_x + 160, _y -160, 5, 0, 360);
        crc2.moveTo(_x + 190 , _y -160);
        crc2.arc(_x + 190, _y -160, 5, 0, 360);
        crc2.moveTo(_x + 220 , _y -160);
        crc2.arc(_x + 220, _y -160, 5, 0, 360); 
        crc2.moveTo(_x + 250 , _y -160);
        crc2.arc(_x + 250, _y -160, 5, 0, 360); 
        crc2.moveTo(_x + 280 , _y -160);
        crc2.arc(_x + 280, _y -160, 5, 0, 360);  
           
        crc2.moveTo(_x + 10 , _y -200);
        crc2.arc(_x + 10, _y -200, 5, 0, 360);
        crc2.moveTo(_x + 40 , _y -200);
        crc2.arc(_x + 40, _y -200, 5, 0, 360);
        crc2.moveTo(_x + 70 , _y -200);
        crc2.arc(_x + 70, _y -200, 5, 0, 360);
        crc2.moveTo(_x + 100 , _y -200);
        crc2.arc(_x + 100, _y -200, 5, 0, 360);
        crc2.moveTo(_x + 130 , _y -200);
        crc2.arc(_x + 130, _y -200, 5, 0, 360);
        crc2.moveTo(_x + 160 , _y -200);
        crc2.arc(_x + 160, _y -200, 5, 0, 360);
        crc2.moveTo(_x + 190 , _y -200);
        crc2.arc(_x + 190, _y -200, 5, 0, 360);
        crc2.moveTo(_x + 220 , _y -200);
        crc2.arc(_x + 220, _y -200, 5, 0, 360); 
        crc2.moveTo(_x + 250 , _y -200);
        crc2.arc(_x + 250, _y -200, 5, 0, 360); 
        crc2.moveTo(_x + 280 , _y -200);
        crc2.arc(_x + 280, _y -200, 5, 0, 360);
           
         crc2.moveTo(_x + 10 , _y -250);
        crc2.arc(_x + 10, _y -250, 5, 0, 360);
        crc2.moveTo(_x + 40 , _y -250);
        crc2.arc(_x + 40, _y -250, 5, 0, 360);
        crc2.moveTo(_x + 70 , _y -250);
        crc2.arc(_x + 70, _y -250, 5, 0, 360);
        crc2.moveTo(_x + 100 , _y -250);
        crc2.arc(_x + 100, _y -250, 5, 0, 360);
        crc2.moveTo(_x + 130 , _y -250);
        crc2.arc(_x + 130, _y -250, 5, 0, 360);
        crc2.moveTo(_x + 160 , _y -250);
        crc2.arc(_x + 160, _y -250, 5, 0, 360);
        crc2.moveTo(_x + 190 , _y -250);
        crc2.arc(_x + 190, _y -250, 5, 0, 360);
        crc2.moveTo(_x + 220 , _y -250);
        crc2.arc(_x + 220, _y -250, 5, 0, 360); 
        crc2.moveTo(_x + 250 , _y -250);
        crc2.arc(_x + 250, _y -250, 5, 0, 360); 
        crc2.moveTo(_x + 280 , _y -250);
        crc2.arc(_x + 280, _y -250, 5, 0, 360);    
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    
}

