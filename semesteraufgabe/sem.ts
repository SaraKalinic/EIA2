//*Aufgabe: (Semesteraufgabe)
/*Name: (Sara Kalinic)
Matrikel: (255073)
Datum: (16.07.2017)
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. */

namespace Sem {
    window.addEventListener("load", start); // Lädt Start Screen wenn Fenster geladen wird
    
    export let crc2: CanvasRenderingContext2D;
    //Klassen
    export let ant: Ameise[] = [];
    export let antRed: AmeiseRot[] = [];
    export let antBrown: AmeiseBrown[] = [];
    let image: ImageData;
    let n: number = 3;
    // var Runden durchlaufene animate Funktion 
    let t: number = 0;
    // var gesamt vernichtete Ameisen 
    let k: number = 0;
    // var klicks auf rote Ameisen 
    let z: number = 0;
    // var klicks auf braune Ameisen 
    let br: number = 0;
    // var vernichtete schwarze Ameisen 
    let s: number = 0;
    // var vernichtete rote Ameisen 
    let r: number = 0;
    // var vernichtete braune Ameisen 
    let ab: number = 0;
    //---------------------------------------------------------------------------
    //START SCREEN
    function start(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1300;
        canvas.height = 700;
        console.log(canvas);
        // EventListener auf Canvas -> Bei Klick/ Touch auf Canvas wird auf Erklärung gewechselt
        // Ruft bei klick startTutorial auf 
        canvas.addEventListener("click", startTutorial);
        //Ruft bei touch startTutorial2 auf 
        canvas.addEventListener("touchstart", startTutorial2);
        //canvas.addEventListener("touchend", startTutorial2);
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        // Zeichnet Hintergrund
        crc2.beginPath();
        crc2.fillStyle = "#adebad";
        crc2.strokeStyle = "#adebad";
        crc2.moveTo(0, 0);
        crc2.lineTo(0, canvas.height);
        crc2.lineTo(canvas.width, canvas.height);
        crc2.lineTo(canvas.width, 0);
        crc2.closePath();
        crc2.fill();

        // Text 
        crc2.stroke();
        crc2.fillStyle = "black";
        crc2.font = "100px Arial";
        crc2.fillText("Das Große Krabbeln", 250, 250);
        crc2.font = "60px Arial";
        crc2.fillText("Klicken Sie um das Spiel zu starten", 250, 450);


    }
    //--------------------------------------------------------------------------   
    //INTERAKTION ERKLÄRUNG für klick Devices

    function startTutorial(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1300;
        canvas.height = 700;
        console.log(canvas);
        //Entfernt Eventlistener, welcher Erklärung aufrufen soll von Canvas 
        canvas.removeEventListener("click", startTutorial);
        canvas.removeEventListener("touchstart", startTutorial2);
        //canvas.removeEventListener("touchend", startTutorial2);
        // Fügt Canvas EventListener hinzu, bei klick auf Canvas wird init (Spiel) aufgerufen
        canvas.addEventListener("click", init);
        
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        // Zeichnet Hintergrund
        crc2.beginPath();
        crc2.fillStyle = "#adebad";
        crc2.strokeStyle = "#adebad";
        crc2.moveTo(0, 0);
        crc2.lineTo(0, canvas.height);
        crc2.lineTo(canvas.width, canvas.height);
        crc2.lineTo(canvas.width, 0);
        crc2.closePath();
        crc2.fill();

        // Schrift
        crc2.stroke();
        crc2.fillStyle = "black";
        crc2.font = "70px Arial";
        crc2.fillText("Das Große Krabbeln", 200, 150);
        crc2.font = "35px Arial";
        crc2.fillText("Vernichte die Ameisen (durch klich auf diese bevor) sie an den Korb gelangen. ", 50, 250);
        crc2.fillText("Schwarze Ameise = 1 Klick ", 50, 320);
        crc2.fillText("Braune Ameise = 2 Klick ", 50, 390);
        crc2.fillText("Rote Ameise = 3 Klick ", 50, 460);
        crc2.fillText("Erreicht eine Ameise den Korb so hast du verloren. ", 50, 530);
        crc2.fillText("Klicke um das Spiel zu starten.", 50, 620);



    };

    //--------------------------------------------------------------------------   
    //INTERAKTION ERKLÄRUNG für Touch Devices 

    function startTutorial2(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 1300;
        canvas.height = 700;
        console.log(canvas);
        //Entfernt Eventlistener, welcher Erklärung aufrufen soll von Canvas 
        canvas.removeEventListener("touchstart", startTutorial2);
        canvas.removeEventListener("touchend", startTutorial2);
        canvas.removeEventListener("click", startTutorial);
        // Fügt Canvas EventListener hinzu, bei klick auf Canvas wird init (Spiel) aufgerufen
        canvas.addEventListener("touchstart", init);
        //canvas.addEventListener("touchend", init);
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        // Zeichnet Hintergrund
        crc2.beginPath();
        crc2.fillStyle = "#adebad";
        crc2.strokeStyle = "#adebad";
        crc2.moveTo(0, 0);
        crc2.lineTo(0, canvas.height);
        crc2.lineTo(canvas.width, canvas.height);
        crc2.lineTo(canvas.width, 0);
        crc2.closePath();
        crc2.fill();

        // Schrift
        crc2.stroke();
        crc2.fillStyle = "black";
        crc2.font = "70px Arial";
        crc2.fillText("Das Große Krabbeln", 200, 150);
        crc2.font = "50px Arial";
        crc2.fillText("Rette dein Picknick vor den Ameisen indem ", 200, 250);
        crc2.fillText("du auf diese tippst um sie zu vernichten. ", 200, 320);
        crc2.fillText("Erreicht eine Ameise den Korb ", 200, 390);
        crc2.fillText("so hast du verloren.", 200, 460);
        crc2.fillText("Tippe um das Spiel zu starten.", 200, 600);




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
        // Entfernt EventListener von Canvas, welcher init (Spiel) aufrufen soll
        canvas.removeEventListener("click", init);
        canvas.removeEventListener("touchstart", init);
        canvas.removeEventListener("touchend", init);

        crc2.fillStyle = "#adebad";
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        // Div für Highscore wird erstellt und an Body angehangen
        let highscore: HTMLDivElement = document.createElement("div");
        highscore.innerText = " Ameisen vernichtet: " + k + "\n Schwarze Ameisen: " + s + " \n Braune Ameisen: " + ab + " \n Rote Ameisen: " + r;
        highscore.style.fontSize = "40px";
        document.body.appendChild(highscore);

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

            let r: AmeiseRot = new AmeiseRot();
            antRed.push(r);

            let b: AmeiseBrown = new AmeiseBrown();
            antBrown.push(b);
        }



        window.setTimeout(animate, 35);

        // Event Listener an Canvas anfügen, welcher Funktion "killAnt" aufruft
        canvas.addEventListener("touchstart", killAntM);
        canvas.addEventListener("touchend", killAntM);
        canvas.addEventListener("click", killAnt);

        // Funktion um Ameise bei klick darauf zu Löschen
        function killAnt(event: MouseEvent): void {

            // Schwarze Ameise nach einem Klick löschen        
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

                // Wenn differenz zwischen Position Ameise und Position Klick < 40 wird Ameise gelöscht
                if (diffX <= 40 && diffY <= 40) {

                    //Entfernt Ameise aus Array
                    ant.splice(i, 1);

                    //Zählt gesamte Ameisen getötet hoch
                    k++;

                    // Zählt schwarze Ameisen getötet hoch
                    s++;

                    // console.log(k);
                }


            }

            //  Braune Ameise nach 2 Klicks löschen
            for (let i: number = 0; i < antBrown.length; i++) {
                let b: AmeiseBrown = antBrown[i];


                // Position des Klick herausfinden
                let clickX: number = event.clientX;
                let clickY: number = event.clientY;
                //console.log(clickX);
                //console.log(clickY);

                // Differenz zwischen Klick Position und Position der Ameise ausrechnen
                let diffX: number = Math.abs(b.currentPosX - clickX);
                let diffY: number = Math.abs(b.currentPosY - clickY);

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
                        antBrown.splice(i, 1);
                        //Zählt gesamt Ameisen getötet hoch
                        k++;
                        //Zählt braune Ameisen getötet hoch
                        ab++;
                        // Setzt Anzahl an klick auf Ameise wieder Null
                        br = 0;
                    }

                    // console.log(k);
                }

            }

            // Rote Ameise nach 3 klicks löschen
            for (let i: number = 0; i < antRed.length; i++) {
                let ar: AmeiseRot = antRed[i];


                // Position des Klick herausfinden
                let clickX: number = event.clientX;
                let clickY: number = event.clientY;
                //console.log(clickX);
                //console.log(clickY);

                // Differenz zwischen Klick Position und Position der Ameise ausrechnen
                let diffX: number = Math.abs(ar.currentPosX - clickX);
                let diffY: number = Math.abs(ar.currentPosY - clickY);

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
                        antRed.splice(i, 1);
                        //Zählt gesamt Ameisen getötet hoch
                        k++;
                        //Zählt rote Ameisen getötet hoch
                        r++;
                        // Setzt Klick auf Ameise wieder Null
                        z = 0;
                    }

                    // console.log(k);
                }

            }
            //console.log(n);

        }


        //Funktion KillAnt für touch devices
        // Bei Klick auf Ameise soll diese gelöscht werden für Touch
        function killAntM(event: TouchEvent): void {
            if (event.touches.length == 1) {
                var touch = event.touches[0];
                for (let i: number = 0; i < ant.length; i++) {
                    let a: Ameise = ant[i];

                    // Position des Klick herausfinden
                    let clickX: number = touch.clientX;
                    let clickY: number = touch.clientY;
                    //console.log(clickX);
                    //console.log(clickY);

                    // Differenz zwischen Klick Position und Position der Ameise ausrechnen
                    let diffX: number = Math.abs(a.currentPosX - clickX);
                    let diffY: number = Math.abs(a.currentPosY - clickY);

                    //console.log(diffX);
                    //console.log(diffY);

                    // Wenn differenz < 20 wird Ameise gelöscht
                    if (diffX <= 200 && diffY <= 200) {
                        ant.splice(i, 1);
                        k++;
                        s++;
                        // console.log(k);
                    }

                } //console.log(n);

                for (let i: number = 0; i < antRed.length; i++) {
                    let a: AmeiseRot = antRed[i];

                    // Position des Klick herausfinden
                    let clickX: number = touch.clientX;
                    let clickY: number = touch.clientY;
                    //console.log(clickX);
                    //console.log(clickY);

                    // Differenz zwischen Klick Position und Position der Ameise ausrechnen
                    let diffX: number = Math.abs(a.currentPosX - clickX);
                    let diffY: number = Math.abs(a.currentPosY - clickY);

                    //console.log(diffX);
                    //console.log(diffY);

                    // Wenn differenz < 20 wird Ameise gelöscht
                    if (diffX <= 200 && diffY <= 200) {
                        antRed.splice(i, 1);
                        k++;
                        r++;
                        // console.log(k);
                    }

                }
                for (let i: number = 0; i < antBrown.length; i++) {
                    let a: AmeiseBrown = antBrown[i];

                    // Position des Klick herausfinden
                    let clickX: number = touch.clientX;
                    let clickY: number = touch.clientY;
                    //console.log(clickX);
                    //console.log(clickY);

                    // Differenz zwischen Klick Position und Position der Ameise ausrechnen
                    let diffX: number = Math.abs(a.currentPosX - clickX);
                    let diffY: number = Math.abs(a.currentPosY - clickY);

                    //console.log(diffX);
                    //console.log(diffY);

                    // Wenn differenz < 20 wird Ameise gelöscht
                    if (diffX <= 200 && diffY <= 200) {
                        antBrown.splice(i, 1);
                        k++;
                        ab++;
                        // console.log(k);
                    }

                }
            }
        }

        // Funktion die das Spiel beendet
        function checkPosition(): void {

            // Für Ameise Schwarz
            for (let i: number = 0; i < ant.length; i++) {
                let a: Ameise = ant[i];
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
            for (let i: number = 0; i < antBrown.length; i++) {
                let b: AmeiseBrown = antBrown[i];
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
            for (let i: number = 0; i < antRed.length; i++) {
                let r: AmeiseRot = antRed[i];
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
        function drawNeueAmeise(): void {
            let a: Ameise = new Ameise();
            ant.push(a);

            let h: AmeiseRot = new AmeiseRot();
            antRed.push(h);

            let b: AmeiseBrown = new AmeiseBrown();
            antBrown.push(b);

            n++;
        }




        // Animate Funktion
        function animate(): void {
            // Hintergrundbild abrufen
            crc2.putImageData(image, 0, 0);


            // Ameise animieren
            for (let i: number = 0; i < ant.length; i++) {
                let a: Ameise = ant[i];
                a.update();

            }

            for (let i: number = 0; i < antRed.length; i++) {

                let h: AmeiseRot = antRed[i];
                h.update();

            }

            for (let i: number = 0; i < antBrown.length; i++) {

                let b: AmeiseBrown = antBrown[i];
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
                let a: Ameise = new Ameise();
                ant.push(a);
                n++;
            }

            //Wenn Animate Funktion 51 Mal aufgerufen
            if (t > 50 && t < 52) {
                //erstelle neue braune Ameise
                let b: AmeiseBrown = new AmeiseBrown();
                antBrown.push(b);
                n++;


            }
            // Wenn Animate Funktion 71 Mal aufgerufen
            if (t > 70 && t < 72) {
                //erstelle neue rote Ameise
                let r: AmeiseRot = new AmeiseRot();
                antRed.push(r);
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
        function gameLost(): void {
            //Zeichnet Background
            crc2.beginPath();
            crc2.fillStyle = "#adebad";
            crc2.strokeStyle = "#adebad";
            crc2.moveTo(0, 0);
            crc2.lineTo(0, canvas.height);
            crc2.lineTo(canvas.width, canvas.height);
            crc2.lineTo(canvas.width, 0);
            crc2.closePath();
            crc2.fill();

            //Text
            crc2.stroke();
            crc2.fillStyle = "black";
            crc2.font = "70px Arial";
            crc2.fillText("Game Over - Sie haben verloren", 150, 250);
            crc2.font = "50px Arial";
            crc2.fillText("Refresh to play again", 370, 450);
            // Zeigt Highscore auf Game Over Screen an
            crc2.fillText("Dein Highscore: " + k, 370, 550);
            // Damit wenn Game Over Screen angezeigt wird keine Ameisen mehr geklickt werden können
            canvas.removeEventListener("click", killAnt);
        }

        // GAME WON SCREEN 
        function gameWon(): void {

            //Zeichnet Background
            crc2.beginPath();
            crc2.fillStyle = "#adebad";
            crc2.strokeStyle = "#adebad";
            crc2.moveTo(0, 0);
            crc2.lineTo(0, canvas.height);
            crc2.lineTo(canvas.width, canvas.height);
            crc2.lineTo(canvas.width, 0);
            crc2.closePath();
            crc2.fill();

            //Schrift
            crc2.stroke();
            crc2.fillStyle = "black";
            crc2.font = "70px Arial";
            crc2.fillText("Game Over - Sie haben gewonnen", 150, 350);
            crc2.font = "50px Arial";
            crc2.fillText("Refresh to play again", 370, 450);
            //Damit wenn Game Over Screen angezeigt wird keine Ameisen mehr geklickt werden können
            canvas.removeEventListener("click", killAnt);

        }



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