let clicks = 0;
let width = 1000;
let height = 1000;

let getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};
$("#map").click(function (event) {
    clicks++;
    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);
    $("#distance").text(distanceHint);
    if (distance < 8) {
        alert("The Treasure has been found! Clicks did: " + clicks);
    }

});

let getDistance = function (event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffY)) + (diffY * diffY);
};

let getDistanceHint = function (distance) {
    if (distance < 5) {
        return "It's Burning!";
    } else if (distance < 10) {
        return "Will Burn!";
    } else if (distance < 20) {
        return "Too Hot!";
    }else if (distance < 30) {
        return "Hot";
    } else if (distance < 40) {
        return "Kinda Hot";
    }else if (distance < 50) {
        return "Very Warm";
    } else if (distance < 80) {
        return "Warm";
    } else if (distance < 160) {
        return "Cold";
    } else if (distance < 320) {
        return "Too Cold!";
    }else if (distance < 400) {
        return "Very Very Cold!";
    }else {
        return "Will Freeze!"
    }
};