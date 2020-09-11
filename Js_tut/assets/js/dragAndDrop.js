function drag(event) {

    event.dataTransfer.setData('text', event.target.id)

}
function drop(event) {
    event.preventDefault();
    var getData = event.dataTransfer.getData('text');
    var image = document.getElementById(getData);
    event.target.appendChild(image);
}

function allowDrop(event) {
    event.preventDefault();


}
