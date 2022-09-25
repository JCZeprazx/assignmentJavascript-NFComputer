$(document).ready(function () {

    $(".chicken").click(function () { 
        const chicken = new Audio("./audio/chicken.mp3");
        chicken.play();
    });

    $(".duck").click(function () { 
        const duck = new Audio("./audio/duck.mp3");
        duck.play();
    });

    $(".swan").click(function () { 
        const swan = new Audio("./audio/swan.mp3");
        swan.play();
    });

    $(".pinguin").click(function () { 
        const pinguin = new Audio("./audio/penguin.mp3");
        pinguin.play();
    });

    $(".cow").click(function () { 
        const cow = new Audio("./audio/cow.mp3");
        cow.play();
    });

    $(".goat").click(function () { 
        const goat = new Audio("./audio/sheep.mp3")
        goat.play();
    });

    $(".lion").click(function () { 
        const lion = new Audio("./audio/lion.mp3");
        lion.play();
    });

    $(".snake").click(function () { 
        const snake = new Audio("./audio/rattlesnake.mp3");
        snake.play();
    });

    $(".tiger").click(function () { 
        const tiger = new Audio("./audio/tiger.mp3");
        tiger.play();
    });

    $(".wolf").click(function () { 
        const wolf = new Audio("./audio/wolf.mp3");
        wolf.play();
    });
});