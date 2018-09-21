var link = document.getElementById('sample-link');
var colorsArray = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
function getIndex() {
    var min = 0;
    var max = colorsArray.length;
    var idx = Math.floor(Math.random() * (max - min + 1)) + min;
    return idx;
}
link.addEventListener('touchstart', function (event) {
    event.preventDefault();
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += colorsArray[getIndex()];
    }
    document.body.style.backgroundColor = color;
}, false);
