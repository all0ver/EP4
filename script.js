//inventory
var inv = ["HARPOON","KNIFE","LANTERN", "F-16", "MELON"];

inv.push("URAN");

//zmina broni

var invidx = 0;

document.getElementById("invWindow").innerHTML = inv[invidx];

function invchange(ichng) {

    invidx += ichng;

    if (invidx >= inv.length) {
        invidx = 0;
    } else if (invidx < 0) {
        invidx = inv.length -1;
    }

    document.getElementById("invWindow").innerHTML = inv[invidx];
}