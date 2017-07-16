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
    let n = 10;
    let t = 0;
    let m = 1;
    function start(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1920;
        canvas.height = 1080;
        console.log(canvas);
        canvas.addEventListener("click", init);
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
        Sem.crc2.font = "150px Arial";
        Sem.crc2.fillText("Das Große Krabbeln", 250, 450);
        Sem.crc2.font = "70px Arial";
        Sem.crc2.fillText("Klicken Sie irgendwo hin um das Spiel zu starten", 200, 650);
    }
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1920;
        canvas.height = 1080;
        console.log(canvas);
        Sem.crc2 = canvas.getContext("2d");
        console.log(Sem.crc2);
        Sem.crc2.fillStyle = "#adebad";
        Sem.crc2.fillRect(0, 0, canvas.width, canvas.height);
        canvas.removeEventListener("click", init);
        //Hintergrund malen lassen
        drawDecke(500, 800, "#80aaff", "#80aaff", "#cce6ff", "#cce6ff");
        drawTeller(600, 700, 50, 180, 270, "#ffffff", "#ffffff", "#e6e6e6", "#e6e6e6");
        drawTeller(1300, 300, 50, 180, 270, "#ffffff", "#ffffff", "#e6e6e6", "#e6e6e6");
        drawKorb(950, 500, 50, 180, 270, "#d9b38c", "#d9b38c", "#734d26", "#734d26");
        // Hintergrund speichern
        image = Sem.crc2.getImageData(0, 0, canvas.width, canvas.height);
        // Ameise erstellen
        for (let i = 0; i < n; i++) {
            Sem.ant[i] = new Sem.Ameise();
        }
        window.setTimeout(animate, 20);
        // Event Listener hinzufügen
        canvas.addEventListener("touch", killAnt);
        canvas.addEventListener("click", killAnt);
        // Bei Klick auf Ameise soll diese gelöscht werden
        function killAnt(event) {
            for (let i = 0; i < Sem.ant.length; i++) {
                let a = Sem.ant[i];
                // Position des Klick herausfinden
                let clickX = event.clientX;
                let clickY = event.clientY;
                console.log(clickX);
                console.log(clickY);
                // Differenz zwischen Klick Position und Position der Ameise ausrechnen
                let diffX = Math.abs(clickX - a.currentPosX);
                let diffY = Math.abs(clickY - a.currentPosY);
                //console.log(diffX);
                //console.log(diffY);
                // Wenn differenz < 20 wird Ameise gelöscht
                if (diffX < 30 && diffY < 30) {
                    Sem.ant.splice(i);
                }
                ;
                //Game Over - Spieler hat gewonnen
                if (Sem.ant.length < 2) {
                    alert(" Game Over - Sie haben das Spiel gewonnen! ");
                }
                ;
            }
            ;
        }
        ;
        function checkPosition() {
            for (let i = 0; i < Sem.ant.length; i++) {
                let a = Sem.ant[i];
                if (a.currentPosX >= 837 && a.currentPosX <= 1087) {
                    if (a.currentPosY >= 388 && a.currentPosY <= 628) {
                        alert("Game Over - Sie haben das Spiel verloren");
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
            // Korb malen 
            drawKorb(950, 500, 50, 180, 270, "#d9b38c", "#d9b38c", "#734d26", "#734d26");
            // Ameise animieren
            for (let i = 0; i < Sem.ant.length; i++) {
                let a = Sem.ant[i];
                a.update();
            }
            ;
            window.setTimeout(animate, 20);
            checkPosition();
            t++;
            //console.log(t);
            if (t > 10) {
                let a = new Sem.Ameise();
                Sem.ant.push(a);
                n++;
                t = 0;
            }
            ;
        }
    }
    ;
    // Hintergrund mal funktionen
    function drawDecke(_x, _y, _strokeColor, _fillColor, _strokeColor1, _fillColor1) {
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor;
        Sem.crc2.strokeStyle = _strokeColor;
        Sem.crc2.moveTo(_x, _y);
        Sem.crc2.lineTo(_x + 900, _y);
        Sem.crc2.lineTo(_x + 900, _y - 600);
        Sem.crc2.lineTo(_x, _y - 600);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x, _y);
        Sem.crc2.lineTo(_x + 20, _y);
        Sem.crc2.lineTo(_x + 20, _y - 600);
        Sem.crc2.lineTo(_x, _y - 600);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x + 60, _y);
        Sem.crc2.lineTo(_x + 80, _y);
        Sem.crc2.lineTo(_x + 80, _y - 600);
        Sem.crc2.lineTo(_x + 60, _y - 600);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x + 120, _y);
        Sem.crc2.lineTo(_x + 140, _y);
        Sem.crc2.lineTo(_x + 140, _y - 600);
        Sem.crc2.lineTo(_x + 120, _y - 600);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x + 180, _y);
        Sem.crc2.lineTo(_x + 200, _y);
        Sem.crc2.lineTo(_x + 200, _y - 600);
        Sem.crc2.lineTo(_x + 180, _y - 600);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x + 240, _y);
        Sem.crc2.lineTo(_x + 260, _y);
        Sem.crc2.lineTo(_x + 260, _y - 600);
        Sem.crc2.lineTo(_x + 240, _y - 600);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x + 300, _y);
        Sem.crc2.lineTo(_x + 320, _y);
        Sem.crc2.lineTo(_x + 320, _y - 600);
        Sem.crc2.lineTo(_x + 300, _y - 600);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x + 360, _y);
        Sem.crc2.lineTo(_x + 380, _y);
        Sem.crc2.lineTo(_x + 380, _y - 600);
        Sem.crc2.lineTo(_x + 360, _y - 600);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x + 420, _y);
        Sem.crc2.lineTo(_x + 440, _y);
        Sem.crc2.lineTo(_x + 440, _y - 600);
        Sem.crc2.lineTo(_x + 420, _y - 600);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x + 480, _y);
        Sem.crc2.lineTo(_x + 500, _y);
        Sem.crc2.lineTo(_x + 500, _y - 600);
        Sem.crc2.lineTo(_x + 480, _y - 600);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x + 540, _y);
        Sem.crc2.lineTo(_x + 560, _y);
        Sem.crc2.lineTo(_x + 560, _y - 600);
        Sem.crc2.lineTo(_x + 540, _y - 600);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x + 600, _y);
        Sem.crc2.lineTo(_x + 620, _y);
        Sem.crc2.lineTo(_x + 620, _y - 600);
        Sem.crc2.lineTo(_x + 600, _y - 600);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x + 660, _y);
        Sem.crc2.lineTo(_x + 680, _y);
        Sem.crc2.lineTo(_x + 680, _y - 600);
        Sem.crc2.lineTo(_x + 660, _y - 600);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x + 720, _y);
        Sem.crc2.lineTo(_x + 740, _y);
        Sem.crc2.lineTo(_x + 740, _y - 600);
        Sem.crc2.lineTo(_x + 720, _y - 600);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x + 780, _y);
        Sem.crc2.lineTo(_x + 800, _y);
        Sem.crc2.lineTo(_x + 800, _y - 600);
        Sem.crc2.lineTo(_x + 780, _y - 600);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x + 840, _y);
        Sem.crc2.lineTo(_x + 860, _y);
        Sem.crc2.lineTo(_x + 860, _y - 600);
        Sem.crc2.lineTo(_x + 840, _y - 600);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x + 900, _y);
        Sem.crc2.lineTo(_x + 920, _y);
        Sem.crc2.lineTo(_x + 920, _y - 600);
        Sem.crc2.lineTo(_x + 900, _y - 600);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x, _y - 40);
        Sem.crc2.lineTo(_x + 920, _y - 40);
        Sem.crc2.lineTo(_x + 920, _y - 60);
        Sem.crc2.lineTo(_x, _y - 60);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x, _y - 100);
        Sem.crc2.lineTo(_x + 920, _y - 100);
        Sem.crc2.lineTo(_x + 920, _y - 120);
        Sem.crc2.lineTo(_x, _y - 120);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x, _y - 160);
        Sem.crc2.lineTo(_x + 920, _y - 160);
        Sem.crc2.lineTo(_x + 920, _y - 180);
        Sem.crc2.lineTo(_x, _y - 180);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x, _y - 220);
        Sem.crc2.lineTo(_x + 920, _y - 220);
        Sem.crc2.lineTo(_x + 920, _y - 240);
        Sem.crc2.lineTo(_x, _y - 240);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x, _y - 280);
        Sem.crc2.lineTo(_x + 920, _y - 280);
        Sem.crc2.lineTo(_x + 920, _y - 300);
        Sem.crc2.lineTo(_x, _y - 300);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x, _y - 340);
        Sem.crc2.lineTo(_x + 920, _y - 340);
        Sem.crc2.lineTo(_x + 920, _y - 360);
        Sem.crc2.lineTo(_x, _y - 360);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x, _y - 400);
        Sem.crc2.lineTo(_x + 920, _y - 400);
        Sem.crc2.lineTo(_x + 920, _y - 420);
        Sem.crc2.lineTo(_x, _y - 420);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x, _y - 460);
        Sem.crc2.lineTo(_x + 920, _y - 460);
        Sem.crc2.lineTo(_x + 920, _y - 480);
        Sem.crc2.lineTo(_x, _y - 480);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x, _y - 520);
        Sem.crc2.lineTo(_x + 920, _y - 520);
        Sem.crc2.lineTo(_x + 920, _y - 540);
        Sem.crc2.lineTo(_x, _y - 540);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
    }
    function drawTeller(_x, _y, _x1, _y1, r, _strokeColor, _fillColor, _strokeColor1, _fillColor1) {
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor;
        Sem.crc2.strokeStyle = _strokeColor;
        Sem.crc2.moveTo(_x, _y);
        Sem.crc2.arc(_x, _y, 60, 180, 270);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x, _y);
        Sem.crc2.arc(_x, _y, 45, 180, 270);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
    }
    function drawKorb(_x, _y, _x1, _y1, r, _strokeColor, _fillColor, _strokeColor1, _fillColor1) {
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor;
        Sem.crc2.strokeStyle = _strokeColor;
        Sem.crc2.moveTo(_x, _y);
        Sem.crc2.arc(_x, _y, 120, 180, 270);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = _fillColor1;
        Sem.crc2.strokeStyle = _strokeColor1;
        Sem.crc2.moveTo(_x, _y);
        Sem.crc2.arc(_x, _y, 100, 180, 270);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = "red";
        Sem.crc2.strokeStyle = "red";
        Sem.crc2.moveTo(_x + 80, _y);
        Sem.crc2.arc(_x + 80, _y, 30, 180, 270);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = "green";
        Sem.crc2.strokeStyle = "green";
        Sem.crc2.moveTo(_x - 75, _y);
        Sem.crc2.arc(_x - 75, _y, 30, 180, 270);
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
        Sem.crc2.moveTo(_x, _y + 75);
        Sem.crc2.arc(_x, _y + 75, 30, 180, 270);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = "orange";
        Sem.crc2.strokeStyle = "orange";
        Sem.crc2.moveTo(_x, _y - 75);
        Sem.crc2.arc(_x, _y - 75, 30, 180, 270);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = "green";
        Sem.crc2.strokeStyle = "green";
        Sem.crc2.moveTo(_x + 50, _y - 50);
        Sem.crc2.arc(_x + 50, _y - 50, 30, 180, 270);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = "yellow";
        Sem.crc2.strokeStyle = "yellow";
        Sem.crc2.moveTo(_x - 50, _y - 50);
        Sem.crc2.arc(_x - 50, _y - 50, 30, 180, 270);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = "red";
        Sem.crc2.strokeStyle = "red";
        Sem.crc2.moveTo(_x - 50, _y + 50);
        Sem.crc2.arc(_x - 50, _y + 50, 30, 180, 270);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = "orange";
        Sem.crc2.strokeStyle = "orange";
        Sem.crc2.moveTo(_x + 50, _y + 50);
        Sem.crc2.arc(_x + 50, _y + 50, 30, 180, 270);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        Sem.crc2.stroke();
    }
})(Sem || (Sem = {}));
//# sourceMappingURL=sem.js.map