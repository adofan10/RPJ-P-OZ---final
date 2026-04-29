async function updateStatus() {
    try {
        const response = await fetch("http://10.28.14.160:5000/status");
        const data = await response.json();

        // Senzory 
        document.getElementById("temp").textContent = Math.round(data.teplota * 100) / 100;
        document.getElementById("hum").textContent = Math.round(data.vlhkost * 100) / 100;
        document.getElementById("light").textContent = Math.round(data.intenzita_svetla * 100) / 100;
        document.getElementById("rain").textContent = data.dazd === 1 ? "Prší" : "Neprší";

        // JEDINÝ STAV, KTORÝ JE POTREBNÝ:
        // Zoberie hotovú vetu z RPi a vypíše ju na web do "Stav fontány"
        if (data.vypis) {
            document.getElementById("status").textContent = data.vypis;
        }

    } catch (err) {
        document.getElementById("status").textContent = "OFFLINE";
    }
}

setInterval(updateStatus, 2000);
window.onload = updateStatus;