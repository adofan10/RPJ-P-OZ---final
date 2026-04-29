function sendCommand(action) {
    const url = "http://10.28.14.160:5000/manual";
    document.getElementById("status").textContent = "Odosielam prikaz...";

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ manual: action })
    })
    .then(response => response.json())
    .then(data => {
        let message = "--";
        switch(action) {
            case "on":
                message = "Čerpadlo zapnuté";
                break;
            case "off":
                message = "Čerpadlo vypnuté";
                break;
            case "won":
                message = "Riadenie z webu: ON";
                break;
            case "woff":
                message = "Riadenie z webu: OFF";
                break;
            default:
                message = "Neznámy príkaz";
        }
        document.getElementById("status").textContent = message;
    })
    .catch(error => {
        document.getElementById("status").textContent = "Chyba komunikácie.";
        console.error("Chyba fetch:", error);
    });
}
