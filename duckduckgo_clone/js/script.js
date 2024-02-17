document.querySelectorAll('.sidebar_btn').forEach(elem => {
    elem.addEventListener("click", function (e) {
        document.getElementsByClassName('sidebar')[0].classList.toggle("invisible");
    });
});