document.addEventListener('DOMContentLoaded', function() {
    var elem = document.querySelector('.rotating');
    console.log("Element selected:", elem);

    window.addEventListener('scroll', function() {
        var value = window.scrollY * 0.25;
        console.log("Scroll Y:", window.scrollY);
        console.log("Rotation value:", value);
        elem.style.transform = `translateX(-50%) translateY(-50%) rotate(${value}deg)`;
    });
});
