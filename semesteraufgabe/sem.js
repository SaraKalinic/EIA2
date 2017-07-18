/*Aufgabe: (Semesteraufgabe)
Name: (Sara Kalinic)
Matrikel: (255073)
Datum: (16.07.2017)
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. */
var Sem;
(function (Sem) {
    window.addEventListener("load", start); // Lädt Start Screen wenn Fenster geladen wird
    //Klassen
    Sem.ant = [];
    Sem.antRed = [];
    Sem.antBrown = [];
    let image;
    let n = 3;
    // var Runden durchlaufene animate Funktion 
    let t = 0;
    // var gesamt vernichtete Ameisen 
    let k = 0;
    // var klicks auf rote Ameisen 
    let z = 0;
    // var klicks auf braune Ameisen 
    let br = 0;
    // var vernichtete schwarze Ameisen 
    let s = 0;
    // var vernichtete rote Ameisen 
    let r = 0;
    // var vernichtete braune Ameisen 
    let ab = 0;
    //---------------------------------------------------------------------------
    //START SCREEN
    function start(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1300;
        canvas.height = 700;
        console.log(canvas);
        // EventListener auf Canvas -> Bei Klick auf Canvas wird auf Erklärung gewechselt
        canvas.addEventListener("click", startTutorial1);
        canvas.addEventListener("touch", startTutorial2);
        Sem.crc2 = canvas.getContext("2d");
        console.log(Sem.crc2);
        // Zeichnet Hintergrund
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = "#adebad";
        Sem.crc2.strokeStyle = "#adebad";
        Sem.crc2.moveTo(0, 0);
        Sem.crc2.lineTo(0, canvas.height);
        Sem.crc2.lineTo(canvas.width, canvas.height);
        Sem.crc2.lineTo(canvas.width, 0);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        // Text 
        Sem.crc2.stroke();
        Sem.crc2.fillStyle = "black";
        Sem.crc2.font = "100px Arial";
        Sem.crc2.fillText("Das Große Krabbeln", 250, 250);
        Sem.crc2.font = "60px Arial";
        Sem.crc2.fillText("Klicken Sie um das Spiel zu starten", 250, 450);
    }
    //--------------------------------------------------------------------------   
    //ERKLÄRUNG für Klick Geräte/ Klick EventListener
    function startTutorial1(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1300;
        canvas.height = 700;
        console.log(canvas);
        //Entfernt Eventlistener, welcher Erklärung aufrufen soll von Canvas 
        canvas.removeEventListener("click", startTutorial1);
        canvas.removeEventListener("touch", startTutorial2);
        // Fügt Canvas EventListener hinzu, bei klick auf Canvas wird init (Spiel) aufgerufen
        canvas.addEventListener("click", init);
        Sem.crc2 = canvas.getContext("2d");
        console.log(Sem.crc2);
        // Zeichnet Hintergrund
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = "#adebad";
        Sem.crc2.strokeStyle = "#adebad";
        Sem.crc2.moveTo(0, 0);
        Sem.crc2.lineTo(0, canvas.height);
        Sem.crc2.lineTo(canvas.width, canvas.height);
        Sem.crc2.lineTo(canvas.width, 0);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        // Schrift
        Sem.crc2.stroke();
        Sem.crc2.fillStyle = "black";
        Sem.crc2.font = "70px Arial";
        Sem.crc2.fillText("Das Große Krabbeln", 200, 150);
        Sem.crc2.font = "35px Arial";
        Sem.crc2.fillText("Vernichte die Ameisen (durch klich auf diese bevor) sie an den Korb gelangen. ", 50, 250);
        Sem.crc2.fillText("Schwarze Ameise = 1 Klick ", 50, 320);
        Sem.crc2.fillText("Braune Ameise = 2 Klick ", 50, 390);
        Sem.crc2.fillText("Rote Ameise = 3 Klick ", 50, 460);
        Sem.crc2.fillText("Erreicht eine Ameise den Korb so hast du verloren. ", 50, 530);
        Sem.crc2.fillText("Klicke um das Spiel zu starten.", 50, 620);
    }
    ;
    function startTutorial2(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1300;
        canvas.height = 700;
        console.log(canvas);
        //Entfernt Eventlistener, welcher Erklärung aufrufen soll von Canvas 
        canvas.removeEventListener("touch", startTutorial2);
        // Fügt Canvas EventListener hinzu, bei klick auf Canvas wird init (Spiel) aufgerufen
        canvas.addEventListener("click", init);
        canvas.addEventListener("touch", init);
        Sem.crc2 = canvas.getContext("2d");
        console.log(Sem.crc2);
        // Zeichnet Hintergrund
        Sem.crc2.beginPath();
        Sem.crc2.fillStyle = "#adebad";
        Sem.crc2.strokeStyle = "#adebad";
        Sem.crc2.moveTo(0, 0);
        Sem.crc2.lineTo(0, canvas.height);
        Sem.crc2.lineTo(canvas.width, canvas.height);
        Sem.crc2.lineTo(canvas.width, 0);
        Sem.crc2.closePath();
        Sem.crc2.fill();
        // Schrift
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
        // Entfernt EventListener von Canvas, welcher init (Spiel) aufrufen soll
        canvas.removeEventListener("click", init);
        canvas.removeEventListener("touch", init);
        Sem.crc2.fillStyle = "#adebad";
        Sem.crc2.fillRect(0, 0, canvas.width, canvas.height);
        // Div für Highscore wird erstellt und an Body angehangen
        let highscore = document.createElement("div");
        highscore.innerText = " Ameisen vernichtet: " + k + "\n Schwarze Ameisen: " + s + " \n Braune Ameisen: " + ab + " \n Rote Ameisen: " + r;
        highscore.style.fontSize = "40px";
        document.body.appendChild(highscore);
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
            let r = new Sem.AmeiseRot();
            Sem.antRed.push(r);
            let b = new Sem.AmeiseBrown();
            Sem.antBrown.push(b);
        }
        window.setTimeout(animate, 35);
        // Event Listener an Canvas anfügen, welcher Funktion "killAnt" aufruft
        canvas.addEventListener("touchstart", killAntM);
        canvas.addEventListener("touchend", killAntM);
        canvas.addEventListener("click", killAnt);
        // Funktion um Ameise bei klick darauf zu Löschen
        function killAnt(event) {
            // Schwarze Ameise nach einem Klick löschen        
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
                // Wenn differenz zwischen Position Ameise und Position Klick < 40 wird Ameise gelöscht
                if (diffX <= 40 && diffY <= 40) {
                    //Entfernt Ameise aus Array
                    Sem.ant.splice(i, 1);
                    //Zählt gesamte Ameisen getötet hoch
                    k++;
                    // Zählt schwarze Ameisen getötet hoch
                    s++;
                }
            }
            //  Braune Ameise nach 2 Klicks löschen
            for (let i = 0; i < Sem.antBrown.length; i++) {
                let b = Sem.antBrown[i];
                // Position des Klick herausfinden
                let clickX = event.clientX;
                let clickY = event.clientY;
                //console.log(clickX);
                //console.log(clickY);
                // Differenz zwischen Klick Position und Position der Ameise ausrechnen
                let diffX = Math.abs(b.currentPosX - clickX);
                let diffY = Math.abs(b.currentPosY - clickY);
                //console.log(diffX);
                //console.log(diffY);
                // Wenn differenz zwischen Position Ameise und Klick Position < 40 wird Ameise gelöscht
                if (diffX <= 40 && diffY <= 40) {
                    //Zählt Klicks auf Ameise hoch
                    br++;
                    console.log(br);
                    // Wenn Ameise 2 Mal geklickt wurde 
                    if (br > 1 && br < 3) {
                        // Ameise wird aus Array gelöscht
                        Sem.antBrown.splice(i, 1);
                        //Zählt gesamt Ameisen getötet hoch
                        k++;
                        //Zählt braune Ameisen getötet hoch
                        ab++;
                        // Setzt Anzahl an klick auf Ameise wieder Null
                        br = 0;
                    }
                }
            }
            // Rote Ameise nach 3 klicks löschen
            for (let i = 0; i < Sem.antRed.length; i++) {
                let ar = Sem.antRed[i];
                // Position des Klick herausfinden
                let clickX = event.clientX;
                let clickY = event.clientY;
                //console.log(clickX);
                //console.log(clickY);
                // Differenz zwischen Klick Position und Position der Ameise ausrechnen
                let diffX = Math.abs(ar.currentPosX - clickX);
                let diffY = Math.abs(ar.currentPosY - clickY);
                //console.log(diffX);
                //console.log(diffY);
                // Wenn differenz < 40 wird Ameise gelöscht
                if (diffX <= 40 && diffY <= 40) {
                    //Zählt Klick auf Ameise hoch
                    z++;
                    //console.log(z);
                    //Wenn Ameise 3 Mal geklickt wurde
                    if (z > 2 && z < 4) {
                        //Ameise wird aus Array gelöscht
                        Sem.antRed.splice(i, 1);
                        //Zählt gesamt Ameisen getötet hoch
                        k++;
                        //Zählt rote Ameisen getötet hoch
                        r++;
                        // Setzt Klick auf Ameise wieder Null
                        z = 0;
                    }
                }
            }
            //console.log(n);
        }
        // Bei Klick auf Ameise soll diese gelöscht werden für Touch
        function killAntM(event) {
            if (event.touches.length == 1) {
                var touch = event.touches[0];
                for (let i = 0; i < Sem.ant.length; i++) {
                    let a = Sem.ant[i];
                    // Position des Klick herausfinden
                    let clickX = touch.clientX;
                    let clickY = touch.clientY;
                    //console.log(clickX);
                    //console.log(clickY);
                    // Differenz zwischen Klick Position und Position der Ameise ausrechnen
                    let diffX = Math.abs(a.currentPosX - clickX);
                    let diffY = Math.abs(a.currentPosY - clickY);
                    //console.log(diffX);
                    //console.log(diffY);
                    // Wenn differenz < 20 wird Ameise gelöscht
                    if (diffX <= 300 && diffY <= 300) {
                        Sem.ant.splice(i, 1);
                        k++;
                        s++;
                    }
                } //console.log(n);
                for (let i = 0; i < Sem.antRed.length; i++) {
                    let a = Sem.antRed[i];
                    // Position des Klick herausfinden
                    let clickX = touch.clientX;
                    let clickY = touch.clientY;
                    //console.log(clickX);
                    //console.log(clickY);
                    // Differenz zwischen Klick Position und Position der Ameise ausrechnen
                    let diffX = Math.abs(a.currentPosX - clickX);
                    let diffY = Math.abs(a.currentPosY - clickY);
                    //console.log(diffX);
                    //console.log(diffY);
                    // Wenn differenz < 20 wird Ameise gelöscht
                    if (diffX <= 300 && diffY <= 300) {
                        Sem.antRed.splice(i, 1);
                        k++;
                        r++;
                    }
                }
                for (let i = 0; i < Sem.antBrown.length; i++) {
                    let a = Sem.antBrown[i];
                    // Position des Klick herausfinden
                    let clickX = touch.clientX;
                    let clickY = touch.clientY;
                    //console.log(clickX);
                    //console.log(clickY);
                    // Differenz zwischen Klick Position und Position der Ameise ausrechnen
                    let diffX = Math.abs(a.currentPosX - clickX);
                    let diffY = Math.abs(a.currentPosY - clickY);
                    //console.log(diffX);
                    //console.log(diffY);
                    // Wenn differenz < 20 wird Ameise gelöscht
                    if (diffX <= 300 && diffY <= 300) {
                        Sem.antBrown.splice(i, 1);
                        k++;
                        ab++;
                    }
                }
            }
        }
        // Funktion die das Spiel beendet
        function checkPosition() {
            // Für Ameise Schwarz
            for (let i = 0; i < Sem.ant.length; i++) {
                let a = Sem.ant[i];
                // Wenn Ameisen Position auf X - Achse zwischen 567 & 750 
                if (a.currentPosX >= 567 && a.currentPosX <= 750) {
                    // Wenn Ameisen Position auf Y - Achse zwischen 245 & 429
                    if (a.currentPosY >= 245 && a.currentPosY <= 429) {
                        // Ruft Funktion für Game Over Screen auf
                        gameLost();
                    }
                }
            }
            // Für Ameise Braun
            for (let i = 0; i < Sem.antBrown.length; i++) {
                let b = Sem.antBrown[i];
                // Wenn Ameisen Position auf X - Achse zwischen 567 & 750
                if (b.currentPosX >= 567 && b.currentPosX <= 750) {
                    // Wenn Ameisen Position auf Y - Achse zwischen 245 & 429
                    if (b.currentPosY >= 245 && b.currentPosY <= 429) {
                        // Ruft Funktion für Game Over Screen auf
                        gameLost();
                    }
                }
            }
            // Für Ameise Rot
            for (let i = 0; i < Sem.antRed.length; i++) {
                let r = Sem.antRed[i];
                // Wenn Ameisen Position auf X - Achse zwischen 567 & 750
                if (r.currentPosX >= 567 && r.currentPosX <= 750) {
                    // Wenn Ameisen Position auf Y - Achse zwischen 245 & 429
                    if (r.currentPosY >= 245 && r.currentPosY <= 429) {
                        // Ruft Funktion für Game Over Screen auf
                        gameLost();
                    }
                }
            }
        }
        //Neue Ameise malen lassen
        function drawNeueAmeise() {
            let a = new Sem.Ameise();
            Sem.ant.push(a);
            let h = new Sem.AmeiseRot();
            Sem.antRed.push(h);
            let b = new Sem.AmeiseBrown();
            Sem.antBrown.push(b);
            n++;
        }
        // Animate Funktion
        function animate() {
            // Hintergrundbild abrufen
            Sem.crc2.putImageData(image, 0, 0);
            // Ameise animieren
            for (let i = 0; i < Sem.ant.length; i++) {
                let a = Sem.ant[i];
                a.update();
            }
            for (let i = 0; i < Sem.antRed.length; i++) {
                let h = Sem.antRed[i];
                h.update();
            }
            for (let i = 0; i < Sem.antBrown.length; i++) {
                let b = Sem.antBrown[i];
                b.update();
            }
            window.setTimeout(animate, 35);
            // Funktion welche immer die aktuelle Position der Ameise herausfinden / speichern soll 
            checkPosition();
            // Highscore welcher Anzahl Ameisen vernichtet + einzelner Ameisen Arten vernichtet hochzählt
            highscore.innerText = " Ameisen vernichtet: " + k + "\n Schwarze Ameisen: " + s + " \n Braune Ameisen: " + ab + " \n Rote Ameisen: " + r;
            // Variable zum durchzählen wie oft Animate Funktion aufgerufen wurde
            t++;
            //console.log(t); 
            // If Funktionen um neue Ameisen nachzuschieben
            // Wenn Animate Funktion 32 Mal aufgerufen
            if (t > 31 && t < 33) {
                // erstelle neue schwarze Ameisen
                let a = new Sem.Ameise();
                Sem.ant.push(a);
                n++;
            }
            //Wenn Animate Funktion 51 Mal aufgerufen
            if (t > 50 && t < 52) {
                //erstelle neue braune Ameise
                let b = new Sem.AmeiseBrown();
                Sem.antBrown.push(b);
                n++;
            }
            // Wenn Animate Funktion 71 Mal aufgerufen
            if (t > 70 && t < 72) {
                //erstelle neue rote Ameise
                let r = new Sem.AmeiseRot();
                Sem.antRed.push(r);
                n++;
                //setze t Null um wieder von vorne zu zählen
                t = 0;
            }
            // Game Over - Wenn über 200 Ameisen vernichtet wurden
            if (k > 15000) {
                gameWon();
            }
        }
        //GAME LOST SCREEN 
        function gameLost() {
            //Zeichnet Background
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "#adebad";
            Sem.crc2.strokeStyle = "#adebad";
            Sem.crc2.moveTo(0, 0);
            Sem.crc2.lineTo(0, canvas.height);
            Sem.crc2.lineTo(canvas.width, canvas.height);
            Sem.crc2.lineTo(canvas.width, 0);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            //Text
            Sem.crc2.stroke();
            Sem.crc2.fillStyle = "black";
            Sem.crc2.font = "70px Arial";
            Sem.crc2.fillText("Game Over - Sie haben verloren", 150, 250);
            Sem.crc2.font = "50px Arial";
            Sem.crc2.fillText("Refresh to play again", 370, 450);
            // Zeigt Highscore auf Game Over Screen an
            Sem.crc2.fillText("Dein Highscore: " + k, 370, 550);
            // Damit wenn Game Over Screen angezeigt wird keine Ameisen mehr geklickt werden können
            canvas.removeEventListener("click", killAnt);
        }
        // GAME WON SCREEN 
        function gameWon() {
            //Zeichnet Background
            Sem.crc2.beginPath();
            Sem.crc2.fillStyle = "#adebad";
            Sem.crc2.strokeStyle = "#adebad";
            Sem.crc2.moveTo(0, 0);
            Sem.crc2.lineTo(0, canvas.height);
            Sem.crc2.lineTo(canvas.width, canvas.height);
            Sem.crc2.lineTo(canvas.width, 0);
            Sem.crc2.closePath();
            Sem.crc2.fill();
            //Schrift
            Sem.crc2.stroke();
            Sem.crc2.fillStyle = "black";
            Sem.crc2.font = "70px Arial";
            Sem.crc2.fillText("Game Over - Sie haben gewonnen", 150, 350);
            Sem.crc2.font = "50px Arial";
            Sem.crc2.fillText("Refresh to play again", 370, 450);
            //Damit wenn Game Over Screen angezeigt wird keine Ameisen mehr geklickt werden können
            canvas.removeEventListener("click", killAnt);
        }
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