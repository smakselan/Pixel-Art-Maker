// Select color input
var color = document.getElementById("colorPicker");
// Select size input
var sizePicker = document.getElementById("sizePicker");
var canvas = document.getElementById("pixelCanvas");

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", function(event){
    event.preventDefault();
    makeGrid();
});
// Your code goes here!
function makeGrid(height, width) {
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    canvas.innerHTML = null;

    for (var x = 0; x < height; x++) {
        var row = canvas.insertRow(x);
        for (var y = 0; y < width; y++) {
            var column = row.insertCell(y);
            canvas.addEventListener('click', addColor);
        }
    }
};

//add color
function addColor(event) {
    event.target.style.backgroundColor = colorPicker.value;
}
