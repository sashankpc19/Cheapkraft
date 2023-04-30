//Read data from localstorage
function readData() {
    var data = localStorage.getItem("userinput");
    if (data) {
        return JSON.parse(data);
    }
    return [];
}

let userInput = readData();
let from = userInput[0];
let to = userInput[1];
let date = userInput[2];
let airlines = ["Air india", "Indigo", "Air Vistara", "Air asia", "Go air"];
toReplace = document.getElementsByClassName("name");
        for (i = 0; i < toReplace.length; i++) {
            let temp = airlines[i];
            toReplace[i].innerHTML = "<b>" + temp + "</b><br>" + from + " to " + to;
        }
if (from.toUpperCase() == 'DELHI' ) {
    if (to.toUpperCase() == 'MUMBAI') {
        document.getElementById("price1").innerHTML = "₹" + Math.floor((Math.random() * 100) + 4100);
        document.getElementById("price2").innerHTML = "₹" + Math.floor((Math.random() * 100) + 4500);
        document.getElementById("price3").innerHTML = "₹" + Math.floor((Math.random() * 100) + 5200);
        document.getElementById("price4").innerHTML = "₹" + Math.floor((Math.random() * 100) + 5550);
        document.getElementById("price5").innerHTML = "₹" + Math.floor((Math.random() * 100) + 6120);
    }

    if (to.toUpperCase() == 'CHENNAI') {
        document.getElementById("price1").innerHTML = "₹" + Math.floor((Math.random() * 100) + 5200);
        document.getElementById("price2").innerHTML = "₹" + Math.floor((Math.random() * 100) + 6000);
        document.getElementById("price3").innerHTML = "₹" + Math.floor((Math.random() * 100) + 6500);
        document.getElementById("price4").innerHTML = "₹" + Math.floor((Math.random() * 100) + 6800);
        document.getElementById("price5").innerHTML = "₹" + Math.floor((Math.random() * 100) + 7200);

        toReplace = document.getElementsByClassName("name");
        for (i = 0; i < toReplace.length; i++) {
            let temp = airlines[i];
            toReplace[i].innerHTML = "<b>" + temp + "</b><br>" + "Delhi to Chennai";
        }
    }

    if (to.toUpperCase() == 'KOLKATA') {
        document.getElementById("price1").innerHTML = "₹" + Math.floor((Math.random() * 100) + 4000);
        document.getElementById("price2").innerHTML = "₹" + Math.floor((Math.random() * 100) + 4500);
        document.getElementById("price3").innerHTML = "₹" + Math.floor((Math.random() * 100) + 4800);
        document.getElementById("price4").innerHTML = "₹" + Math.floor((Math.random() * 100) + 5000);
        document.getElementById("price5").innerHTML = "₹" + Math.floor((Math.random() * 100) + 5200);

        toReplace = document.getElementsByClassName("name");
        for (i = 0; i < toReplace.length; i++) {
            let temp = airlines[i];
            toReplace[i].innerHTML = "<b>" + temp + "</b><br>" + "Delhi to Kolkata";
        }
    }
}

if (from.toUpperCase() == 'MUMBAI') {
    if (to.toUpperCase() == 'DELHI') {
        document.getElementById("price1").innerHTML = "₹" + Math.floor((Math.random() * 100) + 4100);
        document.getElementById("price2").innerHTML = "₹" + Math.floor((Math.random() * 100) + 4500);
        document.getElementById("price3").innerHTML = "₹" + Math.floor((Math.random() * 100) + 5200);
        document.getElementById("price4").innerHTML = "₹" + Math.floor((Math.random() * 100) + 5650);
        document.getElementById("price5").innerHTML = "₹" + Math.floor((Math.random() * 100) + 6320);
        toReplace = document.getElementsByClassName("name");
        for (i = 0; i < toReplace.length; i++) {
            let temp = airlines[i];
            toReplace[i].innerHTML = "<b>" + temp + "</b><br>" + "Mumbai to Delhi";
        }
    }

    if (to.toUpperCase() == 'CHENNAI') {
        document.getElementById("price1").innerHTML = "₹" + Math.floor((Math.random() * 100) + 5200);
        document.getElementById("price2").innerHTML = "₹" + Math.floor((Math.random() * 100) + 5600);
        document.getElementById("price3").innerHTML = "₹" + Math.floor((Math.random() * 100) + 5100);
        document.getElementById("price4").innerHTML = "₹" + Math.floor((Math.random() * 100) + 4400);
        document.getElementById("price5").innerHTML = "₹" + Math.floor((Math.random() * 100) + 4100);

        toReplace = document.getElementsByClassName("name");
        for (i = 0; i < toReplace.length; i++) {
            let temp = airlines[i];
            toReplace[i].innerHTML = "<b>" + temp + "</b><br>" + "Mumbai to Chennai";
        }
    }

    if (to.toUpperCase() == 'KOLKATA') {
        document.getElementById("price1").innerHTML = "₹" + Math.floor((Math.random() * 100) + 4000);
        document.getElementById("price2").innerHTML = "₹" + Math.floor((Math.random() * 100) + 4500);
        document.getElementById("price3").innerHTML = "₹" + Math.floor((Math.random() * 100) + 4200);
        document.getElementById("price4").innerHTML = "₹" + Math.floor((Math.random() * 100) + 3800);
        document.getElementById("price5").innerHTML = "₹" + Math.floor((Math.random() * 100) + 3500);

        toReplace = document.getElementsByClassName("name");
        for (i = 0; i < toReplace.length; i++) {
            let temp = airlines[i];
            toReplace[i].innerHTML = "<b>" + temp + "</b><br>" + "Mumbai to Kolkata";
        }
    }
}

if (from.toUpperCase() == 'CHENNAI') {
    if (to.toUpperCase() == 'DELHI') {
        document.getElementById("price1").innerHTML = "₹" + Math.floor((Math.random() * 100) + 5000);
        document.getElementById("price2").innerHTML = "₹" + Math.floor((Math.random() * 100) + 4500);
        document.getElementById("price3").innerHTML = "₹" + Math.floor((Math.random() * 100) + 4000);
        document.getElementById("price4").innerHTML = "₹" + Math.floor((Math.random() * 100) + 4100);
        document.getElementById("price5").innerHTML = "₹" + Math.floor((Math.random() * 100) + 4100);
        toReplace = document.getElementsByClassName("name");
        for (i = 0; i < toReplace.length; i++) {
            let temp = airlines[i];
            toReplace[i].innerHTML = "<b>" + temp + "</b><br>" + "Chennai to Delhi";
        }
    }

    if (to.toUpperCase() == 'MUMBAI') {
        document.getElementById("price1").innerHTML = "₹" + Math.floor((Math.random() * 100) + 6200);
        document.getElementById("price2").innerHTML = "₹" + Math.floor((Math.random() * 100) + 7000);
        document.getElementById("price3").innerHTML = "₹" + Math.floor((Math.random() * 100) + 6500);
        document.getElementById("price4").innerHTML = "₹" + Math.floor((Math.random() * 100) + 5800);
        document.getElementById("price5").innerHTML = "₹" + Math.floor((Math.random() * 100) + 5400);

        toReplace = document.getElementsByClassName("name");
        for (i = 0; i < toReplace.length; i++) {
            let temp = airlines[i];
            toReplace[i].innerHTML = "<b>" + temp + "</b><br>" + "Chennai to Mumbai";
        }
    }

    if (to.toUpperCase() == 'KOLKATA') {
        document.getElementById("price1").innerHTML = "₹" + Math.floor((Math.random() * 100) + 6000);
        document.getElementById("price2").innerHTML = "₹" + Math.floor((Math.random() * 100) + 6500);
        document.getElementById("price3").innerHTML = "₹" + Math.floor((Math.random() * 100) + 6200);
        document.getElementById("price4").innerHTML = "₹" + Math.floor((Math.random() * 100) + 5800);
        document.getElementById("price5").innerHTML = "₹" + Math.floor((Math.random() * 100) + 5300);

        toReplace = document.getElementsByClassName("name");
        for (i = 0; i < toReplace.length; i++) {
            let temp = airlines[i];
            toReplace[i].innerHTML = "<b>" + temp + "</b><br>" + "Chennai to Kolkata";
        }
    }
}

if (from.toUpperCase() == 'KOLKATA') {
    if (to.toUpperCase() == 'DELHI') {
        document.getElementById("price1").innerHTML = "₹" + Math.floor((Math.random() * 100) + 5000);
        document.getElementById("price2").innerHTML = "₹" + Math.floor((Math.random() * 100) + 4500);
        document.getElementById("price3").innerHTML = "₹" + Math.floor((Math.random() * 100) + 4000);
        document.getElementById("price4").innerHTML = "₹" + Math.floor((Math.random() * 100) + 4100);
        document.getElementById("price5").innerHTML = "₹" + Math.floor((Math.random() * 100) + 4100);
        toReplace = document.getElementsByClassName("name");
        for (i = 0; i < toReplace.length; i++) {
            let temp = airlines[i];
            toReplace[i].innerHTML = "<b>" + temp + "</b><br>" + "Kolkata to Delhi";
        }
    }

    if (to.toUpperCase() == 'MUMBAI') {
        document.getElementById("price1").innerHTML = "₹" + Math.floor((Math.random() * 100) + 6200);
        document.getElementById("price2").innerHTML = "₹" + Math.floor((Math.random() * 100) + 7000);
        document.getElementById("price3").innerHTML = "₹" + Math.floor((Math.random() * 100) + 6500);
        document.getElementById("price4").innerHTML = "₹" + Math.floor((Math.random() * 100) + 5800);
        document.getElementById("price5").innerHTML = "₹" + Math.floor((Math.random() * 100) + 5400);

        toReplace = document.getElementsByClassName("name");
        for (i = 0; i < toReplace.length; i++) {
            let temp = airlines[i];
            toReplace[i].innerHTML = "<b>" + temp + "</b><br>" + "Kolkata to Mumbai";
        }
    }

    if (to.toUpperCase() == 'CHENNAI') {
        document.getElementById("price1").innerHTML = "₹" + Math.floor((Math.random() * 100) + 6000);
        document.getElementById("price2").innerHTML = "₹" + Math.floor((Math.random() * 100) + 6500);
        document.getElementById("price3").innerHTML = "₹" + Math.floor((Math.random() * 100) + 6200);
        document.getElementById("price4").innerHTML = "₹" + Math.floor((Math.random() * 100) + 5800);
        document.getElementById("price5").innerHTML = "₹" + Math.floor((Math.random() * 100) + 5300);

        toReplace = document.getElementsByClassName("name");
        for (i = 0; i < toReplace.length; i++) {
            let temp = airlines[i];
            toReplace[i].innerHTML = "<b>" + temp + "</b><br>" + "Kolkata to Chennai";
        }
    }
}

