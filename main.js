// generuoja spalva funkcija
function getNewColor() {
    let symbols = "0123456789ABCDEF";
    color = "#";
    for (let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)];
    }
    // spalva
    document.body.style.background = color;
    document.getElementById('hex').textContent = color;

    const lighter = adjustColorBrightness(color, 1.2);
    const darker = adjustColorBrightness(color, 0.8);

    document.querySelector('.hex1').style.backgroundColor = lighter;
    document.getElementById('p1').textContent = lighter;
    document.querySelector('.hex2').style.backgroundColor = darker;
    document.getElementById('p2').textContent = darker;
}

function adjustColorBrightness(hex, factor) {
     // Remove the # if it's there
    hex = hex.replace('#', '');

    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // spalvos ryskumas-sviesesne/tamsesne
    r = Math.min(255, Math.max(0, Math.floor(r * factor)));
    g = Math.min(255, Math.max(0, Math.floor(g * factor)));
    b = Math.min(255, Math.max(0, Math.floor(b * factor)));

     // Convert back to hex and return
    return (
        '#' + r.toString(16).padStart(2, '0') + 
        g.toString(16).padStart(2, '0') +
        b.toString(16).padStart(2, '0')
    )
}