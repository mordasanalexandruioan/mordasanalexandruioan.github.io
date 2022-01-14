let eventMenuClick = e => {
    let obj = e.target;
    let b = document.querySelector('b');
    let aside = document.querySelector('aside');


    if (obj.tagName == "I" && b.className == "closed") {
        let button = obj.parentNode;
        button.classList.remove("closed");
        button.classList.add("opened");
        aside.classList.remove("closed");
        aside.classList.add("opened");
    } else if (obj.tagName == "B" && obj.className == "closed") {
        obj.classList.remove("closed");
        obj.classList.add("opened");
        aside.classList.remove("closed");
        aside.classList.add("opened");
    } else if (obj.tagName == "I" && b.className == "opened") {
        let button = obj.parentNode;
        button.classList.remove("opened");
        button.classList.add("closed");
        aside.classList.remove("opened");
        aside.classList.add("closed");
    } else if (obj.tagName == "B" && obj.className == "opened") {
        obj.classList.remove("opened");
        obj.classList.add("closed");
        aside.classList.remove("opened");
        aside.classList.add("closed");
    }
}