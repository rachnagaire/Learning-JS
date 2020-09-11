var count = 0;
function validate() {
    var dataEnter = document.getElementById('todolist-data');
    var span = document.createElement('span');
    span.classList.add('text-danger');




    if (dataEnter.value === "") {


        dataEnter.parentElement.parentElement.querySelector('.text-danger').innerHTML = "Required";

        return false;


    }
    else {

        dataEnter.parentElement.parentElement.querySelector('.text-danger').innerHTML = "";
        return true;




    }

}
document.getElementById('btn-add').addEventListener('click', function () {
    var result = validate();
    if (result === true) {
        addlist();
    }

});
document.getElementById('todolist-data').addEventListener('keyup', function (e) {
    var result = listEntry();

    if (result === true && e.key === "Enter") {
        addlist();

    }


});

function listEntry() {
    var dataEnter = document.getElementById('todolist-data');


    if (dataEnter.value === "") {
        dataEnter.parentElement.parentElement.querySelector('.text-danger').innerHTML = "Required";
        return false;
    }
    else {
        dataEnter.parentElement.parentElement.querySelector('.text-danger').innerHTML = "";
        return true;

    }




}

function addlist() {
    var dataEnter = document.getElementById('todolist-data');
    var listContainer = document.getElementById('list-content');

    var id = "list-remove" + count;
    var spanId = "list-value" + count;

    var listItem = '<li class="list-item d-flex flex-row py-3 px-5"> <a href="javascript:" class="list-icon d-none"><i class="ri-check-line"></i> </a> <span class="list-value flex-grow-1" id="' + spanId + '">' + dataEnter.value + '</span> <a href="javascript:"  id="' + id + '"><i class="ri-close-line"></i></a></li>';

    listContainer.insertAdjacentHTML('beforeend', listItem);

    count++;
    dataEnter.value = "";
    document.getElementById(id).addEventListener('click', function (e) {
        var ul = document.getElementById("list-content");

        var li = e.target.parentElement.parentElement;

        ul.removeChild(li);


    });
    document.getElementById(spanId).addEventListener('click', function (e) {
        debugger;
        var listItem = e.target.parentElement;
        if (listItem.querySelector('.list-icon').classList.contains('d-none') === true) {
            listItem.classList.add('bg-light');

            listItem.querySelector('.list-icon').classList.remove('d-none');
            listItem.querySelector('.list-icon').classList.add('d-block');
            listItem.querySelector('span').style.textDecoration = "line-through";
        }
        else {
            listItem.classList.remove('bg-light');
            listItem.querySelector('.list-icon').classList.remove('d-block');
            listItem.querySelector('.list-icon').classList.add('d-none');
            listItem.querySelector('span').style.textDecoration = "none";
        }


    });

}

function appendlist(div, text) {

    document.getElementById('list-content').appendChild(div);



}