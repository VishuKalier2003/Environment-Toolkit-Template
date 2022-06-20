function CreateBubbles() {
    const screen = document.getElementById("ocean");
    const bubble = document.createElement("span");
    bubble.setAttribute("id", "bub");
    var size = Math.random() * 20;
    bubble.style.width = 10 + size + "px";
    bubble.style.height = 10 + size + "px";
    bubble.style.left = Math.random() * innerWidth + "px";
    bubble.style.top = Math.random() * innerHeight + "px";
    bubble.style.zIndex = '-1';
    screen.appendChild(bubble);
    setTimeout(() => {
        console.log("Bubble Blasted!!");
        bubble.remove();
    }, 8000);
}
var evapor_value = 1,
    precip_value = 2,
    snow_value = 2;
const evaporation = document.getElementById('evaporation');
evaporation.addEventListener('mouseenter', function() {
    if (evapor_value == 0) { setInterval(CreateBubbles, 800); } else if (evapor_value == 1) { setInterval(CreateBubbles, 400); } else {
        setInterval(CreateBubbles, 100);
    }
    evaporation.textContent = "On";
});

evaporation.addEventListener('mouseleave', function() {
    window.location.reload();
});

function CreateDrops() {
    const screen = document.getElementById("screen");
    const drop = document.createElement("span");
    drop.setAttribute("id", "dropping");
    var drop_size = 10;
    drop.style.width = 2 * drop_size + "px";
    drop.style.height = 5 * drop_size + "px";
    drop.style.top = Math.random() * -50 + "px";
    drop.style.left = Math.random() * innerWidth + "px";
    screen.appendChild(drop);
    setTimeout(() => {
        drop.remove();
    }, 5000);
}

const precipitation = document.getElementById('precipitation');
precipitation.addEventListener('mouseenter', function() {
    if (precip_value == 0) {
        setInterval(CreateDrops, 250);
        setInterval(CreateDrops, 250);
    } else if (precip_value == 1) {
        setInterval(CreateDrops, 100);
        setInterval(CreateDrops, 100);
    } else {
        setInterval(CreateDrops, 50);
        setInterval(CreateDrops, 50);
    }
    precipitation.textContent = "On";
});

precipitation.addEventListener('mouseleave', function() {
    window.location.reload();
});

const eva_meter = document.getElementById('meter1');
const meter_val1 = document.getElementById('meter-value1');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
b1.addEventListener('click', function() {
    if (evapor_value == 0) {
        eva_meter.style.backgroundColor = "rgb(0, 0, 255)";
        meter_val1.textContent = "Low";
        evapor_value++;
    } else if (evapor_value == 1) {
        eva_meter.style.backgroundColor = "rgb(0, 255, 0)";
        meter_val1.textContent = "Normal";
        evapor_value++;
    } else {
        eva_meter.style.backgroundColor = "rgb(255, 0, 0)";
        meter_val1.textContent = "High";
        evapor_value = 2;
    }
});

b2.addEventListener('click', function() {
    if (evapor_value == 2) {
        eva_meter.style.backgroundColor = "rgb(255, 0, 0)";
        meter_val1.textContent = "High";
        evapor_value--;
    } else if (evapor_value == 1) {
        eva_meter.style.backgroundColor = "rgb(0, 255, 0)";
        meter_val1.textContent = "Normal";
        evapor_value--;
    } else {
        eva_meter.style.backgroundColor = "rgb(0, 0, 255)";
        meter_val1.textContent = "Low";
        evapor_value = 0;
    }
});

const pre_meter = document.getElementById('meter2');
const meter_val2 = document.getElementById('meter-value2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
b3.addEventListener('click', function() {
    if (precip_value == 0) {
        pre_meter.style.backgroundColor = "rgb(0, 0, 255)";
        meter_val2.textContent = "Low";
        precip_value++;
    } else if (precip_value == 1) {
        pre_meter.style.backgroundColor = "rgb(0, 255, 0)";
        meter_val2.textContent = "Normal";
        precip_value++;
    } else {
        pre_meter.style.backgroundColor = "rgb(255, 0, 0)";
        meter_val2.textContent = "High";
        precip_value = 2;
    }
});

b4.addEventListener('click', function() {
    if (precip_value == 2) {
        pre_meter.style.backgroundColor = "rgb(255, 0, 0)";
        meter_val2.textContent = "High";
        precip_value--;
    } else if (precip_value == 1) {
        pre_meter.style.backgroundColor = "rgb(0, 255, 0)";
        meter_val2.textContent = "Normal";
        precip_value--;
    } else {
        pre_meter.style.backgroundColor = "rgb(0, 0, 255)";
        meter_val2.textContent = "Low";
        precip_value = 0;
    }
});

const screen = document.getElementById("screen");
const night = document.getElementById('night');
var check = false;
night.addEventListener('click', function() {
    if (check == false) {
        screen.style.backgroundColor = "rgb(40, 40, 40)";
        screen.style.transitionDuration = "1.5s";
        check = true;
        night.textContent = "Enabled";
    } else {
        screen.style.backgroundColor = "rgb(255, 255, 255)";
        screen.style.transitionDuration = "1.5s";
        check = false;
        night.textContent = "Disabled";
    }
});

const ocean = document.getElementById("ocean");
const blue_light = document.getElementById('blue-light');
var ch1 = false;
blue_light.addEventListener('click', function() {
    if (ch1 == false) {
        ocean.style.backgroundColor = "rgb(40, 10, 10)";
        ocean.style.transitionDuration = "1s";
        ch1 = true;
        blue_light.textContent = "Open";
    } else {
        ocean.style.backgroundColor = "rgb(0, 125, 255)";
        ocean.style.transitionDuration = "1s";
        ch1 = false;
        blue_light.textContent = "Close";
    }
});

const red_light = document.getElementById('red-light');
var ch2 = false;
red_light.addEventListener('click', function() {
    if (ch2 == false) {
        ocean.style.backgroundColor = "rgb(10, 10, 70)";
        ocean.style.transitionDuration = "1s";
        ch2 = true;
        red_light.textContent = "Open";
    } else {
        ocean.style.backgroundColor = "rgb(0, 125, 255)";
        ocean.style.transitionDuration = "1s";
        ch2 = false;
        red_light.textContent = "Close";
    }
});

function SnowFall() {
    const screen = document.getElementById('screen');
    const flakes = document.createElement('span');
    flakes.setAttribute("id", "snow-flakes");
    var fl = 10;
    var ran = Math.random() * 30 + fl + "px";
    flakes.style.width = ran;
    flakes.style.height = ran;
    flakes.style.top = Math.random() * -50 + "px";
    flakes.style.left = Math.random() * innerWidth + "px";
    screen.appendChild(flakes);
    setTimeout(() => {
        flakes.remove();
    }, 12000);
    const flakes1 = document.createElement('span');
    flakes1.setAttribute("id", "snow-flakes1");
    var fl1 = 10;
    var ran1 = Math.random() * 30 + fl1 + "px";
    flakes1.style.width = ran1;
    flakes1.style.height = ran1;
    flakes1.style.top = Math.random() * -50 + "px";
    flakes1.style.left = Math.random() * innerWidth + "px";
    screen.appendChild(flakes1);
    setTimeout(() => {
        flakes1.remove();
    }, 12000);
}

const snow = document.getElementById("snow");

snow.addEventListener('mouseenter', function() {
    if (snow_value == 0) { setInterval(SnowFall, 800); } else if (snow_value == 1) { setInterval(SnowFall, 400); } else {
        setInterval(SnowFall, 100);
    }
    ocean.style.backgroundColor = "rgb(255, 255, 255)";
    ocean.style.transitionDuration = "2s";
    ocean.style.boxShadow = "0px 0px 8px 8px rgb(0, 125, 255)";
    snow.textContent = "On";
});

snow.addEventListener("mouseleave", function() {
    window.location.reload();
});

const snw_meter = document.getElementById('meter3');
const meter_val3 = document.getElementById('meter-value3');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
b5.addEventListener('click', function() {
    if (snow_value == 0) {
        snw_meter.style.backgroundColor = "rgb(0, 0, 255)";
        meter_val3.textContent = "Low";
        snow_value++;
    } else if (snow_value == 1) {
        snw_meter.style.backgroundColor = "rgb(0, 255, 0)";
        meter_val3.textContent = "Normal";
        snow_value++;
    } else {
        snw_meter.style.backgroundColor = "rgb(255, 0, 0)";
        meter_val3.textContent = "High";
        snow_value = 2;
    }
});

b6.addEventListener('click', function() {
    if (snow_value == 2) {
        snw_meter.style.backgroundColor = "rgb(255, 0, 0)";
        meter_val3.textContent = "High";
        snow_value--;
    } else if (snow_value == 1) {
        snw_meter.style.backgroundColor = "rgb(0, 255, 0)";
        meter_val3.textContent = "Normal";
        snow_value--;
    } else {
        snw_meter.style.backgroundColor = "rgb(0, 0, 255)";
        meter_val3.textContent = "Low";
        snow_value = 0;
    }
});