export default function (array, className) {
    var menu = document.createElement("ul");
    menu.className = className;
    var listItems = '';
    array.forEach(function (item) {
        listItem += '<li>' + item + '</li>';
    });
    menu.innerHTML = listItems;
    return menu;
};