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

let animateHobbies = () => {
    let hobbiesIMGLoader = document.querySelector('.hobbies').children[0];

    let img1 = document.querySelector('#drum');
    let img2 = document.querySelector('#race');
    let img3 = document.querySelector('#mbike');


    function anim1() {
        img1.classList.add("change1");
        img2.classList.add("change1");
        img3.classList.add("change1");
    }

    function anim2() {
        img1.classList.remove("change1");
        img1.classList.add("change2");

        img2.classList.remove("change1");
        img2.classList.add("change2");

        img3.classList.remove("change1");
        img3.classList.add("change2");
    }

    function anim3() {
        img1.classList.remove("change2");

        img2.classList.remove("change2");

        img3.classList.remove("change2");
    }

    function animate() {
        anim1();
        setTimeout(anim1, 4000);

        anim2();
        setTimeout(anim2, 6000);

        anim3();
        setTimeout(anim3, 8000);
    }

    setInterval(animate, 8001);



}