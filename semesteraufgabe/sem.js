/*Aufgabe: (Semesteraufgabe)
Name: (Sara Kalinic)
Matrikel: (255073)
Datum: (16.07.2017)
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. */
var Sem;
(function (Sem) {
    window.addEventListener("load", start);
    Sem.ant = [];
    let image;
    let n = 3;
    let t = 0;
    let m = 1;
    let k = 0;
    //---------------------------------------------------------------------------
    //START SCREEN
    function start(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1300;
        canvas.height = 700;
        console.log(canvas);
        canvas.addEventListener("click", startTutorial);
        canvas.addEventListener("touch", startTutorial);
        Sem.crc2 = canvas.getContext("2d");
        console.log(Sem.crc2);
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = "#adebad";
        Sem.crc2.strokeStyle = "#adebad";
        Sem.crc2.moveTo(0, 0);
        Sem.crc2.lineTo(0, canvas.height);
        Sem.crc2.lineTo(canvas.width, canvas.height);
        Sem.crc2.lineTo(canvas.width, 0);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.fillStyle = "black";
        Sem.crc2.font = "100px Arial";
        Sem.crc2.fillText("Das Große Krabbeln", 250, 250);
        Sem.crc2.font = "60px Arial";
        Sem.crc2.fillText("Klicken Sie um das Spiel zu starten", 250, 450);
    }
    //--------------------------------------------------------------------------   
    //EKLÄRUNG
    function startTutorial(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1300;
        canvas.height = 700;
        console.log(canvas);
        canvas.addEventListener("click", init);
        canvas.addEventListener("touch", init);
        Sem.crc2 = canvas.getContext("2d");
        console.log(Sem.crc2);
        canvas.removeEventListener("click", startTutorial);
        canvas.removeEventListener("touch", startTutorial);
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = "#adebad";
        Sem.crc2.strokeStyle = "#adebad";
        Sem.crc2.moveTo(0, 0);
        Sem.crc2.lineTo(0, canvas.height);
        Sem.crc2.lineTo(canvas.width, canvas.height);
        Sem.crc2.lineTo(canvas.width, 0);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.fillStyle = "black";
        Sem.crc2.font = "70px Arial";
        Sem.crc2.fillText("Das Große Krabbeln", 200, 150);
        Sem.crc2.font = "50px Arial";
        Sem.crc2.fillText("Rette dein Picknick vor den Ameisen indem ", 200, 250);
        Sem.crc2.fillText("du auf diese klickst um sie zu vernichten. ", 200, 320);
        Sem.crc2.fillText("Erreicht eine Ameise den Korb ", 200, 390);
        Sem.crc2.fillText("so hast du verloren.", 200, 460);
        Sem.crc2.fillText("Klicke um das Spiel zu starten.", 200, 600);
    }
    ;
    //---------------------------------------------------------------------------
    // SPIEL 
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1300;
        canvas.height = 700;
        console.log(canvas);
        Sem.crc2 = canvas.getContext("2d");
        console.log(Sem.crc2);
        canvas.removeEventListener("click", init);
        canvas.removeEventListener("touch", init);
        Sem.crc2.fillStyle = "#adebad";
        Sem.crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Hintergrund malen lassen
        drawDecke(400, 150, "#80aaff", "#80aaff", "#cce6ff", "#cce6ff");
        drawTeller(470, 430, 50, 180, 270, "#ffffff", "#ffffff", "#e6e6e6", "#e6e6e6");
        drawTeller(820, 230, 50, 180, 270, "#ffffff", "#ffffff", "#e6e6e6", "#e6e6e6");
        drawKorb(650, 320, 50, 180, 270, "#d9b38c", "#d9b38c", "#734d26", "#734d26");
        // Hintergrund speichern
        image = Sem.crc2.getImageData(0, 0, canvas.width, canvas.height);
        // Ameise erstellen
        for (let i = 0; i < n; i++) {
            Sem.ant[i] = new Sem.Ameise();
        }
        window.setTimeout(animate, 20);
        // Event Listener hinzufügen
        canvas.addEventListener("touch", killAntM);
        canvas.addEventListener("click", killAnt);
        // Bei Klick auf Ameise soll diese gelöscht werden
        function killAnt(event) {
            for (let i = 0; i < Sem.ant.length; i++) {
                let a = Sem.ant[i];
                // Position des Klick herausfinden
                let clickX = event.clientX;
                let clickY = event.clientY;
                //console.log(clickX);
                //console.log(clickY);
                // Differenz zwischen Klick Position und Position der Ameise ausrechnen
                let diffX = Math.abs(a.currentPosX - clickX);
                let diffY = Math.abs(a.currentPosY - clickY);
                //console.log(diffX);
                //console.log(diffY);
                // Wenn differenz < 20 wird Ameise gelöscht
                if (diffX <= 40 && diffY <= 40) {
                    Sem.ant.splice(i, 1);
                    k++;
                }
                ;
            }
            ; //console.log(n);
        }
        ;
        // Bei Klick auf Ameise soll diese gelöscht werden
        function killAntM(event) {
            for (let i = 0; i < Sem.ant.length; i++) {
                let a = Sem.ant[i];
                // Position des Klick herausfinden
                let clickX = event.clientX;
                let clickY = event.clientY;
                //console.log(clickX);
                //console.log(clickY);
                // Differenz zwischen Klick Position und Position der Ameise ausrechnen
                let diffX = Math.abs(a.currentPosX - clickX);
                let diffY = Math.abs(a.currentPosY - clickY);
                //console.log(diffX);
                //console.log(diffY);
                // Wenn differenz < 20 wird Ameise gelöscht
                if (diffX <= 70 && diffY <= 70) {
                    Sem.ant.splice(i, 1);
                    k++;
                }
                ;
            }
            ; //console.log(n);
        }
        ;
        function checkPosition() {
            for (let i = 0; i < Sem.ant.length; i++) {
                let a = Sem.ant[i];
                if (a.currentPosX >= 567 && a.currentPosX <= 750) {
                    if (a.currentPosY >= 245 && a.currentPosY <= 429) {
                        gameLost();
                    }
                }
                ;
            }
            ;
        }
        ;
        //Neue Ameise malen lassen
        function drawNeueAmeise() {
            let a = new Sem.Ameise();
            Sem.ant.push(a);
            n++;
        }
        ;
        // Animate Funktion
        function animate() {
            // Hintergrundbild abrufen
            Sem.crc2.putImageData(image, 0, 0);
            // Ameise animieren
            for (let i = 0; i < Sem.ant.length; i++) {
                let a = Sem.ant[i];
                a.update();
            }
            ;
            window.setTimeout(animate, 20);
            // checkPosition();
            t++;
            //console.log(t); 
            if (t > 35) {
                let a = new Sem.Ameise();
                Sem.ant.push(a);
                n++;
                t = 0;
            }
            // Game Over - Wenn über 200 Ameisen vernichtet wurden
            if (k > 10) {
                gameWon();
            }
            ;
        }
        // GAME WON SCREEN 
        function gameWon() {
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "#adebad";
            Sem.crc2.strokeStyle = "#adebad";
            Sem.crc2.moveTo(0, 0);
            Sem.crc2.lineTo(0, canvas.height);
            Sem.crc2.lineTo(canvas.width, canvas.height);
            Sem.crc2.lineTo(canvas.width, 0);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.fillStyle = "black";
            Sem.crc2.font = "70px Arial";
            Sem.crc2.fillText("Game Over - Sie haben gewonnen", 150, 350);
            Sem.crc2.font = "50px Arial";
            Sem.crc2.fillText("Refresh to play again", 370, 450);
        }
        ;
        //GAME LOST SCREEN 
        function gameLost() {
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "#adebad";
            Sem.crc2.strokeStyle = "#adebad";
            Sem.crc2.moveTo(0, 0);
            Sem.crc2.lineTo(0, canvas.height);
            Sem.crc2.lineTo(canvas.width, canvas.height);
            Sem.crc2.lineTo(canvas.width, 0);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.fillStyle = "black";
            Sem.crc2.font = "70px Arial";
            Sem.crc2.fillText("Game Over - Sie haben verloren", 150, 250);
            Sem.crc2.font = "50px Arial";
            Sem.crc2.fillText("Refresh to play again", 370, 450);
        }
        ;
        // Hintergrund mal funktionen
        function drawDecke(_x, _y, _strokeColor, _fillColor, _strokeColor1, _fillColor1) {
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor;
            Sem.crc2.strokeStyle = _strokeColor;
            Sem.crc2.moveTo(_x, _y);
            Sem.crc2.lineTo(_x + 500, _y);
            Sem.crc2.lineTo(_x + 500, _y + 350);
            Sem.crc2.lineTo(_x, _y + 350);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x, _y);
            Sem.crc2.lineTo(_x + 15, _y);
            Sem.crc2.lineTo(_x + 15, _y + 350);
            Sem.crc2.lineTo(_x, _y + 350);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x + 35, _y);
            Sem.crc2.lineTo(_x + 50, _y);
            Sem.crc2.lineTo(_x + 50, _y + 350);
            Sem.crc2.lineTo(_x + 35, _y + 350);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x + 70, _y);
            Sem.crc2.lineTo(_x + 85, _y);
            Sem.crc2.lineTo(_x + 85, _y + 350);
            Sem.crc2.lineTo(_x + 70, _y + 350);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x + 105, _y);
            Sem.crc2.lineTo(_x + 120, _y);
            Sem.crc2.lineTo(_x + 120, _y + 350);
            Sem.crc2.lineTo(_x + 105, _y + 350);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x + 140, _y);
            Sem.crc2.lineTo(_x + 155, _y);
            Sem.crc2.lineTo(_x + 155, _y + 350);
            Sem.crc2.lineTo(_x + 140, _y + 350);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x + 175, _y);
            Sem.crc2.lineTo(_x + 190, _y);
            Sem.crc2.lineTo(_x + 190, _y + 350);
            Sem.crc2.lineTo(_x + 175, _y + 350);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x + 210, _y);
            Sem.crc2.lineTo(_x + 225, _y);
            Sem.crc2.lineTo(_x + 225, _y + 350);
            Sem.crc2.lineTo(_x + 210, _y + 350);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x + 245, _y);
            Sem.crc2.lineTo(_x + 260, _y);
            Sem.crc2.lineTo(_x + 260, _y + 350);
            Sem.crc2.lineTo(_x + 245, _y + 350);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x + 280, _y);
            Sem.crc2.lineTo(_x + 295, _y);
            Sem.crc2.lineTo(_x + 295, _y + 350);
            Sem.crc2.lineTo(_x + 280, _y + 350);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x + 315, _y);
            Sem.crc2.lineTo(_x + 330, _y);
            Sem.crc2.lineTo(_x + 330, _y + 350);
            Sem.crc2.lineTo(_x + 315, _y + 350);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x + 350, _y);
            Sem.crc2.lineTo(_x + 365, _y);
            Sem.crc2.lineTo(_x + 365, _y + 350);
            Sem.crc2.lineTo(_x + 350, _y + 350);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x + 385, _y);
            Sem.crc2.lineTo(_x + 400, _y);
            Sem.crc2.lineTo(_x + 400, _y + 350);
            Sem.crc2.lineTo(_x + 385, _y + 350);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x + 420, _y);
            Sem.crc2.lineTo(_x + 435, _y);
            Sem.crc2.lineTo(_x + 435, _y + 350);
            Sem.crc2.lineTo(_x + 420, _y + 350);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x + 455, _y);
            Sem.crc2.lineTo(_x + 470, _y);
            Sem.crc2.lineTo(_x + 470, _y + 350);
            Sem.crc2.lineTo(_x + 455, _y + 350);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x + 490, _y);
            Sem.crc2.lineTo(_x + 505, _y);
            Sem.crc2.lineTo(_x + 505, _y + 350);
            Sem.crc2.lineTo(_x + 490, _y + 350);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x, _y + 10);
            Sem.crc2.lineTo(_x + 500, _y + 10);
            Sem.crc2.lineTo(_x + 500, _y + 25);
            Sem.crc2.lineTo(_x, _y + 25);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x, _y + 45);
            Sem.crc2.lineTo(_x + 500, _y + 45);
            Sem.crc2.lineTo(_x + 500, _y + 60);
            Sem.crc2.lineTo(_x, _y + 60);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x, _y + 80);
            Sem.crc2.lineTo(_x + 500, _y + 80);
            Sem.crc2.lineTo(_x + 500, _y + 95);
            Sem.crc2.lineTo(_x, _y + 95);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x, _y + 115);
            Sem.crc2.lineTo(_x + 500, _y + 115);
            Sem.crc2.lineTo(_x + 500, _y + 130);
            Sem.crc2.lineTo(_x, _y + 130);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x, _y + 150);
            Sem.crc2.lineTo(_x + 500, _y + 150);
            Sem.crc2.lineTo(_x + 500, _y + 165);
            Sem.crc2.lineTo(_x, _y + 165);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x, _y + 185);
            Sem.crc2.lineTo(_x + 500, _y + 185);
            Sem.crc2.lineTo(_x + 500, _y + 200);
            Sem.crc2.lineTo(_x, _y + 200);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x, _y + 220);
            Sem.crc2.lineTo(_x + 500, _y + 220);
            Sem.crc2.lineTo(_x + 500, _y + 235);
            Sem.crc2.lineTo(_x, _y + 235);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x, _y + 255);
            Sem.crc2.lineTo(_x + 500, _y + 255);
            Sem.crc2.lineTo(_x + 500, _y + 270);
            Sem.crc2.lineTo(_x, _y + 270);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x, _y + 290);
            Sem.crc2.lineTo(_x + 500, _y + 290);
            Sem.crc2.lineTo(_x + 500, _y + 305);
            Sem.crc2.lineTo(_x, _y + 305);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x, _y + 325);
            Sem.crc2.lineTo(_x + 500, _y + 325);
            Sem.crc2.lineTo(_x + 500, _y + 340);
            Sem.crc2.lineTo(_x, _y + 340);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
        }
        function drawTeller(_x, _y, _x1, _y1, r, _strokeColor, _fillColor, _strokeColor1, _fillColor1) {
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor;
            Sem.crc2.strokeStyle = _strokeColor;
            Sem.crc2.moveTo(_x, _y);
            Sem.crc2.arc(_x, _y, 40, 180, 270);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x, _y);
            Sem.crc2.arc(_x, _y, 25, 180, 270);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
        }
        function drawKorb(_x, _y, _x1, _y1, r, _strokeColor, _fillColor, _strokeColor1, _fillColor1) {
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor;
            Sem.crc2.strokeStyle = _strokeColor;
            Sem.crc2.moveTo(_x, _y);
            Sem.crc2.arc(_x, _y, 90, 180, 270);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = _fillColor1;
            Sem.crc2.strokeStyle = _strokeColor1;
            Sem.crc2.moveTo(_x, _y);
            Sem.crc2.arc(_x, _y, 75, 180, 270);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "red";
            Sem.crc2.strokeStyle = "red";
            Sem.crc2.moveTo(_x + 60, _y);
            Sem.crc2.arc(_x + 60, _y, 20, 180, 270);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "green";
            Sem.crc2.strokeStyle = "green";
            Sem.crc2.moveTo(_x - 60, _y);
            Sem.crc2.arc(_x - 60, _y, 20, 180, 270);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "red";
            Sem.crc2.strokeStyle = "red";
            Sem.crc2.moveTo(_x, _y);
            Sem.crc2.arc(_x, _y, 30, 180, 270);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "yellow";
            Sem.crc2.strokeStyle = "yellow";
            Sem.crc2.moveTo(_x, _y + 60);
            Sem.crc2.arc(_x, _y + 60, 20, 180, 270);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "orange";
            Sem.crc2.strokeStyle = "orange";
            Sem.crc2.moveTo(_x, _y - 60);
            Sem.crc2.arc(_x, _y - 60, 20, 180, 270);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "green";
            Sem.crc2.strokeStyle = "green";
            Sem.crc2.moveTo(_x + 45, _y - 45);
            Sem.crc2.arc(_x + 45, _y - 45, 20, 180, 270);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "yellow";
            Sem.crc2.strokeStyle = "yellow";
            Sem.crc2.moveTo(_x - 45, _y - 45);
            Sem.crc2.arc(_x - 45, _y - 45, 20, 180, 270);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "red";
            Sem.crc2.strokeStyle = "red";
            Sem.crc2.moveTo(_x - 45, _y + 45);
            Sem.crc2.arc(_x - 45, _y + 45, 20, 180, 270);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "orange";
            Sem.crc2.strokeStyle = "orange";
            Sem.crc2.moveTo(_x + 45, _y + 45);
            Sem.crc2.arc(_x + 45, _y + 45, 20, 180, 270);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            Sem.crc2.stroke();
        }
    }
})(Sem || (Sem = {}));
//# sourceMappingURL=sem.js.map