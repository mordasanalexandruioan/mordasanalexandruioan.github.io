/*menu events*/

let eventMenuClick = e => {
    let bars = document.getElementsByClassName('fa-bars')[0];
    let minus = document.getElementsByClassName('fa-minus-square')[0];
    let menuItems = document.getElementsByClassName('menu-items')[0];

    let obj = e.target;

    if (obj.className == "fas fa-bars") {
        obj.className += " desappear";
        minus.className = "far fa-minus-square appear";
        menuItems.className = "menu-items appear";
    } else if (obj.className == "far fa-minus-square appear") {
        obj.className = "far fa-minus-square desappear";
        bars.className = "fas fa-bars";
        menuItems.className = "menu-items desappear";
    }

}