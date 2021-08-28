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

let eventHobbiesButton1 = e => {
    let obj = e.target;

    let hobbyImg = document.getElementsByClassName('hobby-image')[0];
    let button = document.getElementsByClassName('hobbyToImage')[0];

    if (obj.className == "hobbyToImage" && button.children[0].className == "fas fa-chevron-right") {
        hobbyImg.className += " move";
        button.children[0].className = "fas fa-chevron-left";
    } else if (obj.className == "hobbyToImage" && button.children[0].className == "fas fa-chevron-left") {
        hobbyImg.className = "hobby-image";
        button.children[0].className = "fas fa-chevron-right";
    }
}

let eventHobbiesButton2 = e => {
    let obj = e.target;

    let hobbyImg = document.getElementsByClassName('hobby-image')[1];
    let button = document.getElementsByClassName('hobbyToImage')[1];

    if (obj.className == "hobbyToImage" && button.children[0].className == "fas fa-chevron-right") {
        hobbyImg.className += " move";
        button.children[0].className = "fas fa-chevron-left";
    } else if (obj.className == "hobbyToImage" && button.children[0].className == "fas fa-chevron-left") {
        hobbyImg.className = "hobby-image";
        button.children[0].className = "fas fa-chevron-right";
    }
}

let eventHobbiesButton3 = e => {
    let obj = e.target;

    let hobbyImg = document.getElementsByClassName('hobby-image')[2];
    let button = document.getElementsByClassName('hobbyToImage')[2];

    if (obj.className == "hobbyToImage" && button.children[0].className == "fas fa-chevron-right") {
        hobbyImg.className += " move";
        button.children[0].className = "fas fa-chevron-left";
    } else if (obj.className == "hobbyToImage" && button.children[0].className == "fas fa-chevron-left") {
        hobbyImg.className = "hobby-image";
        button.children[0].className = "fas fa-chevron-right";
    }
}