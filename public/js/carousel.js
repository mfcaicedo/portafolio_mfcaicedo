window.addEventListener('load', function () {
    let opciones = {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: ".puntos",
        rewind: true,
        arrows: {
            prev: ".prev",
            next: ".next"
        }
    };
    slider = new Glider(document.querySelector("#lista"), opciones);

    let actual = 0;
    const conteo = slider.track.childElementCount;
    let timeout = null;
    slider.scrollItem(actual);
    function deslizar(milisegs) {
        timeout = setTimeout(() => {
            if (actual < conteo - 1) actual++;
            else actual = 0;
            slider.scrollItem(actual);
        }, milisegs);
    }
    slider.ele.addEventListener("glider-animated", function () {
        actual = slider.slide;
        window.clearInterval(timeout);
        deslizar(5000);
    });

});