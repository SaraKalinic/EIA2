/*Aufgabe: (Semesteraufgabe)
Name: (Sara Kalinic)
Matrikel: (255073)
Datum: (16.07.2017)
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. */
var Sem;
(function (Sem) {
    window.addEventListener("load", init);
    Sem.ant = [];
    let image;
    let n = 2;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1920;
        canvas.height = 1080;
        console.log(canvas);
        Sem.crc2 = canvas.getContext("2d");
        console.log(Sem.crc2);
        Sem.crc2.fillStyle = "#b3ffb3";
        Sem.crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Hintergrund malen lassen
        drawDecke(500, 800, "#cc0000", "#cc0000");
        drawTeller(600, 700, 50, 180, 270, "#ffffff", "#ffffff", "#e6e6e6", "#e6e6e6");
        drawTeller(1300, 300, 50, 180, 270, "#ffffff", "#ffffff", "#e6e6e6", "#e6e6e6");
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
    }
    // Bei Klick auf Ameise soll diese gelöscht werden
    function killAnt(event) {
        for (let i = 0; i < Sem.ant.length; i++) {
            let a = Sem.ant[i];
            // Position des Klick herausfinden
            let clickX = event.clientX;
            let clickY = event.clientY;
            //console.log(clickX);
            // console.log(clickY);
            // Differenz zwischen Klick Position und Position der Ameise ausrechnen
            let diffX = Math.abs(clickX - a.currentPosX);
            let diffY = Math.abs(clickY - a.currentPosY);
            console.log(diffX);
            console.log(diffY);
            // Wenn differenz < 20 wird Ameise gelöscht
            if (diffX < 20) {
                Sem.ant.splice(i);
            }
        }
    }
    ;
    //Neue Ameise malen lassen
    function drawNeueAmeise() {
        let a = new Sem.Ameise();
        Sem.ant.push(a);
        n++;
    }
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
        window.setTimeout(animate, 20);
    }
    // Hintergrund mal funktionen
    function drawDecke(_x, _y, _strokeColor, _fillColor) {
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
    }
})(Sem || (Sem = {}));
//# sourceMappingURL=sem.js.map