/* var Items to store info from user */
var item1;
var item2;
var item3;

/* Button set up for onclick to create a new list */
document.getElementById("changeList").onClick = newList;

/* function to prompt user to enter 3 new list items */
function newList() {
    item1 = prompt ("Enter a new first thing: ");
    item2 = prompt ("Enter a new second thing: ");
    item3 = prompt ("Enter a new third thing: ");
    updateList();
}

/*function to update the HTML with the 3 new list items from user */
function updateList() {
    document.getElementById("firstThing") .innerHTML = item1;
    document.getElementById("secondThing") .innerHTML = item2;
    document.getElementById("thirdThing") .innerHTML = item3;
}
