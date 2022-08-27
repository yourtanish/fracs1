var W, H;
var len = 130, branch = 1, angle = 35;

document.addEventListener('touchstart', function () {
    if (branch < 10) {
        branch++;
        init();
    }
})

document.addEventListener('click', function () {
    if (branch < 10) {
        branch++;
        init();
    }
})

//Main function
function init() {
    //Some basic canvas work
    var canvas = document.querySelector('canvas');
    canvas.height = H = 280;
    canvas.width = W = window.innerWidth;

    //To Draw
    var c = canvas.getContext('2d');

    //to shift origin to bottom
    c.translate(W / 2, H);

    //to make color white
    c.strokeStyle = "white";

    //function to make these fractals
    function tree(x1, y1, branch, len, a) {
        if (branch > 0) {
            //making new points
            var x2 = x1 + Math.sin(a * (Math.PI / 180)) * len;
            var y2 = y1 - Math.cos(a * (Math.PI / 180)) * len;

            //drawing lines  
            c.moveTo(x1, y1);
            c.lineTo(x2, y2);
            c.stroke();

            //making recursions
            tree(x2, y2, branch - 1, len * 0.67, a + angle);
            tree(x2, y2, branch - 1, len * 0.67, a - angle);

        }
    }

    //to start the recursion
    tree(0, 0, branch, len * 0.67, 0);

}

