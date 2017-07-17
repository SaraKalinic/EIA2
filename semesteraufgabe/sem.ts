/*Aufgabe: (Semesteraufgabe)
Name: (Sara Kalinic)
Matrikel: (255073)
Datum: (16.07.2017)
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. */


namespace Sem {
    window.addEventListener("load", start);
    export let crc2: CanvasRenderingContext2D;
    export let ant: Ameise[] = [];
    let image: ImageData;
    let n: number = 5;
    let t: number = 0;
    let m: number = 1;
    let k: number = 0;
    //---------------------------------------------------------------------------
    //START SCREEN
    function start(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1300;
        canvas.height = 700;
        console.log(canvas);
        canvas.addEventListener("click", startTutorial);
        canvas.addEventListener("touch", startTutorial);
        crc2 = canvas.getContext("2d");
        console.log(crc2);


        crc2.beginPath();
        crc2.fillStyle = "#adebad";
        crc2.strokeStyle = "#adebad";
        crc2.moveTo(0, 0);
        crc2.lineTo(0, canvas.height);
        crc2.lineTo(canvas.width, canvas.height);
        crc2.lineTo(canvas.width, 0);
        crc2.closePath();
        crc2.fill();


        crc2.stroke();
        crc2.fillStyle = "black";
        crc2.font = "100px Arial";
        crc2.fillText("Das Große Krabbeln", 250, 250);
        crc2.font = "60px Arial";
        crc2.fillText("Klicken Sie um das Spiel zu starten", 250, 450);


    }
    //--------------------------------------------------------------------------   
    //EKLÄRUNG

    function startTutorial(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1300;
        canvas.height = 700;
        console.log(canvas);
        canvas.addEventListener("click", init);
        canvas.addEventListener("touch", init);
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        canvas.removeEventListener("click", startTutorial);
        canvas.removeEventListener("touch", startTutorial);
        crc2.beginPath();
        crc2.fillStyle = "#adebad";
        crc2.strokeStyle = "#adebad";
        crc2.moveTo(0, 0);
        crc2.lineTo(0, canvas.height);
        crc2.lineTo(canvas.width, canvas.height);
        crc2.lineTo(canvas.width, 0);
        crc2.closePath();
        crc2.fill();


        crc2.stroke();
        crc2.fillStyle = "black";
        crc2.font = "70px Arial";
        crc2.fillText("Das Große Krabbeln", 200, 150);
        crc2.font = "50px Arial";
        crc2.fillText("Rette dein Picknick vor den Ameisen indem ", 200, 250);
        crc2.fillText("du auf diese klickst um sie zu vernichten. ", 200, 320);
        crc2.fillText("Erreicht eine Ameise den Korb ", 200, 390);
        crc2.fillText("so hast du verloren.", 200, 460);
        crc2.fillText("Klicke um das Spiel zu starten.", 200, 600);



    };


    //---------------------------------------------------------------------------
    // SPIEL 
    function init(_event: Event): void {
     
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1300;
        canvas.height = 700;
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        canvas.removeEventListener("click", init);
        canvas.removeEventListener("touch", init);

        crc2.fillStyle = "#adebad";
        crc2.fillRect(0, 0, canvas.width, canvas.height);



        //Hintergrund malen lassen
        drawDecke(400, 150, "#80aaff", "#80aaff", "#cce6ff", "#cce6ff");
        drawTeller(470, 430, 50, 180, 270, "#ffffff", "#ffffff", "#e6e6e6", "#e6e6e6");
        drawTeller(820, 230, 50, 180, 270, "#ffffff", "#ffffff", "#e6e6e6", "#e6e6e6");
        drawKorb(650, 320, 50, 180, 270, "#d9b38c", "#d9b38c", "#734d26", "#734d26");
        // Hintergrund speichern
        image = crc2.getImageData(0, 0, canvas.width, canvas.height);


        // Ameise erstellen
        for (let i: number = 0; i < n; i++) {
            ant[i] = new Ameise();

        }

        window.setTimeout(animate, 20);

        // Event Listener hinzufügen
        canvas.addEventListener("touch", killAntM);
        canvas.addEventListener("click", killAnt);

        // Bei Klick auf Ameise soll diese gelöscht werden
        function killAnt(event: MouseEvent): void {
            for (let i: number = 0; i < ant.length; i++) {
                let a: Ameise = ant[i];

                // Position des Klick herausfinden
                let clickX: number = event.clientX;
                let clickY: number = event.clientY;
                //console.log(clickX);
                //console.log(clickY);

                // Differenz zwischen Klick Position und Position der Ameise ausrechnen
                let diffX: number = Math.abs(a.currentPosX - clickX);
                let diffY: number = Math.abs(a.currentPosY - clickY);

                //console.log(diffX);
                //console.log(diffY);

                // Wenn differenz < 20 wird Ameise gelöscht
                if (diffX <= 40 && diffY <= 40) {
                    ant.splice(i, 1);
                    k++;
                    // console.log(k);
                };
                //Game over won
            }; //console.log(n);

        };


        // Bei Klick auf Ameise soll diese gelöscht werden
        function killAntM(event: MouseEvent): void {
            for (let i: number = 0; i < ant.length; i++) {
                let a: Ameise = ant[i];

                // Position des Klick herausfinden
                let clickX: number = event.clientX;
                let clickY: number = event.clientY;
                //console.log(clickX);
                //console.log(clickY);

                // Differenz zwischen Klick Position und Position der Ameise ausrechnen
                let diffX: number = Math.abs(a.currentPosX - clickX);
                let diffY: number = Math.abs(a.currentPosY - clickY);

                //console.log(diffX);
                //console.log(diffY);

                // Wenn differenz < 20 wird Ameise gelöscht
                if (diffX <= 80 && diffY <= 80) {
                    ant.splice(i, 1);
                    k++;
                    // console.log(k);
                };
                //Game over won
            }; //console.log(n);

        };

        function checkPosition(): void {
            for (let i: number = 0; i < ant.length; i++) {
                let a: Ameise = ant[i];
                if (a.currentPosX >= 567 && a.currentPosX <= 750) {
                    if (a.currentPosY >= 245 && a.currentPosY <= 429) {
                        gameLost();


                    }
                };
            };
        };


        //Neue Ameise malen lassen
        function drawNeueAmeise(): void {
            let a: Ameise = new Ameise();
            ant.push(a);
            n++;
        };



        // Animate Funktion
        function animate(): void {
            // Hintergrundbild abrufen
            crc2.putImageData(image, 0, 0);


            // Ameise animieren
            for (let i: number = 0; i < ant.length; i++) {
                let a: Ameise = ant[i];
                a.update();

            };


            window.setTimeout(animate, 20);

            checkPosition();
            
            t++;
            //console.log(t); 
            if (t > 22) {

                let a: Ameise = new Ameise();
                ant.push(a);
                n++;

                t = 0;
            }
                 
            
            // Game Over - Wenn über 200 Ameisen vernichtet wurden
            if (k > 15000) {
                gameWon();
            };
        }


     

        // GAME WON SCREEN 
        function gameWon(): void {
            crc2.beginPath();
            crc2.fillStyle = "#adebad";
            crc2.strokeStyle = "#adebad";
            crc2.moveTo(0, 0);
            crc2.lineTo(0, canvas.height);
            crc2.lineTo(canvas.width, canvas.height);
            crc2.lineTo(canvas.width, 0);
            crc2.closePath();
            crc2.fill();


            crc2.stroke();
            crc2.fillStyle = "black";
            crc2.font = "70px Arial";
            crc2.fillText("Game Over - Sie haben gewonnen", 150, 350);
            crc2.font = "50px Arial";
            crc2.fillText("Refresh to play again", 370, 450);

        };

        //GAME LOST SCREEN 
        function gameLost(): void {

            crc2.beginPath();
            crc2.fillStyle = "#adebad";
            crc2.strokeStyle = "#adebad";
            crc2.moveTo(0, 0);
            crc2.lineTo(0, canvas.height);
            crc2.lineTo(canvas.width, canvas.height);
            crc2.lineTo(canvas.width, 0);
            crc2.closePath();
            crc2.fill();


            crc2.stroke();
            crc2.fillStyle = "black";
            crc2.font = "70px Arial";
            crc2.fillText("Game Over - Sie haben verloren", 150, 250);
            crc2.font = "50px Arial";
            crc2.fillText("Refresh to play again", 370, 450);
            
            crc2.fillText("Dein Highscore: " + k , 370, 550);
        };



        // Hintergrund mal funktionen
        function drawDecke(_x: number, _y: number, _strokeColor: string, _fillColor: string, _strokeColor1: string, _fillColor1: string): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 500, _y);
            crc2.lineTo(_x + 500, _y + 350);
            crc2.lineTo(_x, _y + 350);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 15, _y);
            crc2.lineTo(_x + 15, _y + 350);
            crc2.lineTo(_x, _y + 350);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x + 35, _y);
            crc2.lineTo(_x + 50, _y);
            crc2.lineTo(_x + 50, _y + 350);
            crc2.lineTo(_x + 35, _y + 350);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x + 70, _y);
            crc2.lineTo(_x + 85, _y);
            crc2.lineTo(_x + 85, _y + 350);
            crc2.lineTo(_x + 70, _y + 350);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x + 105, _y);
            crc2.lineTo(_x + 120, _y);
            crc2.lineTo(_x + 120, _y + 350);
            crc2.lineTo(_x + 105, _y + 350);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x + 140, _y);
            crc2.lineTo(_x + 155, _y);
            crc2.lineTo(_x + 155, _y + 350);
            crc2.lineTo(_x + 140, _y + 350);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x + 175, _y);
            crc2.lineTo(_x + 190, _y);
            crc2.lineTo(_x + 190, _y + 350);
            crc2.lineTo(_x + 175, _y + 350);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x + 210, _y);
            crc2.lineTo(_x + 225, _y);
            crc2.lineTo(_x + 225, _y + 350);
            crc2.lineTo(_x + 210, _y + 350);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x + 245, _y);
            crc2.lineTo(_x + 260, _y);
            crc2.lineTo(_x + 260, _y + 350);
            crc2.lineTo(_x + 245, _y + 350);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x + 280, _y);
            crc2.lineTo(_x + 295, _y);
            crc2.lineTo(_x + 295, _y + 350);
            crc2.lineTo(_x + 280, _y + 350);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x + 315, _y);
            crc2.lineTo(_x + 330, _y);
            crc2.lineTo(_x + 330, _y + 350);
            crc2.lineTo(_x + 315, _y + 350);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x + 350, _y);
            crc2.lineTo(_x + 365, _y);
            crc2.lineTo(_x + 365, _y + 350);
            crc2.lineTo(_x + 350, _y + 350);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x + 385, _y);
            crc2.lineTo(_x + 400, _y);
            crc2.lineTo(_x + 400, _y + 350);
            crc2.lineTo(_x + 385, _y + 350);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x + 420, _y);
            crc2.lineTo(_x + 435, _y);
            crc2.lineTo(_x + 435, _y + 350);
            crc2.lineTo(_x + 420, _y + 350);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x + 455, _y);
            crc2.lineTo(_x + 470, _y);
            crc2.lineTo(_x + 470, _y + 350);
            crc2.lineTo(_x + 455, _y + 350);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x + 490, _y);
            crc2.lineTo(_x + 505, _y);
            crc2.lineTo(_x + 505, _y + 350);
            crc2.lineTo(_x + 490, _y + 350);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x, _y + 10);
            crc2.lineTo(_x + 500, _y + 10);
            crc2.lineTo(_x + 500, _y + 25);
            crc2.lineTo(_x, _y + 25);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x, _y + 45);
            crc2.lineTo(_x + 500, _y + 45);
            crc2.lineTo(_x + 500, _y + 60);
            crc2.lineTo(_x, _y + 60);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x, _y + 80);
            crc2.lineTo(_x + 500, _y + 80);
            crc2.lineTo(_x + 500, _y + 95);
            crc2.lineTo(_x, _y + 95);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x, _y + 115);
            crc2.lineTo(_x + 500, _y + 115);
            crc2.lineTo(_x + 500, _y + 130);
            crc2.lineTo(_x, _y + 130);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x, _y + 150);
            crc2.lineTo(_x + 500, _y + 150);
            crc2.lineTo(_x + 500, _y + 165);
            crc2.lineTo(_x, _y + 165);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x, _y + 185);
            crc2.lineTo(_x + 500, _y + 185);
            crc2.lineTo(_x + 500, _y + 200);
            crc2.lineTo(_x, _y + 200);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x, _y + 220);
            crc2.lineTo(_x + 500, _y + 220);
            crc2.lineTo(_x + 500, _y + 235);
            crc2.lineTo(_x, _y + 235);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x, _y + 255);
            crc2.lineTo(_x + 500, _y + 255);
            crc2.lineTo(_x + 500, _y + 270);
            crc2.lineTo(_x, _y + 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x, _y + 290);
            crc2.lineTo(_x + 500, _y + 290);
            crc2.lineTo(_x + 500, _y + 305);
            crc2.lineTo(_x, _y + 305);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x, _y + 325);
            crc2.lineTo(_x + 500, _y + 325);
            crc2.lineTo(_x + 500, _y + 340);
            crc2.lineTo(_x, _y + 340);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        function drawTeller(_x: number, _y: number, _x1: number, _y1: number, r: number, _strokeColor: string, _fillColor: string, _strokeColor1: string, _fillColor1: string): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.arc(_x, _y, 40, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x, _y);
            crc2.arc(_x, _y, 25, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();



        }

        function drawKorb(_x: number, _y: number, _x1: number, _y1: number, r: number, _strokeColor: string, _fillColor: string, _strokeColor1: string, _fillColor1: string): void {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.arc(_x, _y, 90, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = _fillColor1;
            crc2.strokeStyle = _strokeColor1;
            crc2.moveTo(_x, _y);
            crc2.arc(_x, _y, 75, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "red";
            crc2.strokeStyle = "red";
            crc2.moveTo(_x + 60, _y);
            crc2.arc(_x + 60, _y, 20, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();


            crc2.beginPath();
            crc2.fillStyle = "green";
            crc2.strokeStyle = "green";
            crc2.moveTo(_x - 60, _y);
            crc2.arc(_x - 60, _y, 20, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "red";
            crc2.strokeStyle = "red";
            crc2.moveTo(_x, _y);
            crc2.arc(_x, _y, 30, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "yellow";
            crc2.strokeStyle = "yellow";
            crc2.moveTo(_x, _y + 60);
            crc2.arc(_x, _y + 60, 20, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "orange";
            crc2.strokeStyle = "orange";
            crc2.moveTo(_x, _y - 60);
            crc2.arc(_x, _y - 60, 20, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "green";
            crc2.strokeStyle = "green";
            crc2.moveTo(_x + 45, _y - 45);
            crc2.arc(_x + 45, _y - 45, 20, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "yellow";
            crc2.strokeStyle = "yellow";
            crc2.moveTo(_x - 45, _y - 45);
            crc2.arc(_x - 45, _y - 45, 20, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "red";
            crc2.strokeStyle = "red";
            crc2.moveTo(_x - 45, _y + 45);
            crc2.arc(_x - 45, _y + 45, 20, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = "orange";
            crc2.strokeStyle = "orange";
            crc2.moveTo(_x + 45, _y + 45);
            crc2.arc(_x + 45, _y + 45, 20, 180, 270);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }



    }
}