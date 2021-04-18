/* BUSINESS LOGIC*/

let validateBtn = document.getElementById('validate');
validateBtn.addEventListener('click', validate, true);
let submitBtn = document.getElementById("mc-embedded-subscribe");

function validate(e) {
    let nameValue = document.getElementById('mce-MMERGE3').value;
    let emailValue = document.getElementById('mce-EMAIL').value;
    let textValue = document.getElementById('mce-MMERGE1').value;

    if ((nameValue === "") || (emailValue === "") || (textValue === "")) {
        alert('Kindly enter your name, email and a message!');
        location.reload();
    };
    validateBtn.style.display = "none";
    submitBtn.dataset.toggle = "modal";
    submitBtn.dataset.target = "#exampleModalCenter";
    submitBtn.style.display = "block";
    submitBtn.classList.add("submit-appear");
    let form = document.getElementById('mc-embedded-subscribe-form');
    form.addEventListener('submit', submit, true);

    let resubmit = document.getElementById('resubmit');
    resubmit.addEventListener('click', reld, true);

    function submit(e) {
        e.preventDefault();
        document.getElementById('sub-name').innerText = nameValue;
        form.style.display = "none";
        resubmit.style.display = "block";
    };
    function reld() {
        location.reload();
    };

};
/* UI */
let loader = document.getElementById('lds-ripple');
window.addEventListener('load', preload, true);
function preload() {
    loader.classList.add('preloader');
}

function fDL() {
    let movedElement = document.querySelector('.fdL');
    let elementPosition = movedElement.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (elementPosition < screenPosition) {
        movedElement.classList.add('fdalt');
    };
};
window.addEventListener('scroll', fDL);

$("#first-icon").click(function () {
    $("#first-icon").hide();
    $("#first-description").show();
    $("#first-icon").removeClass("show");
    $("#first-description").addClass("show");
});

$("#first-description").click(function () {
    $("#first-icon").show();
    $("#first-description").hide();
    $("#first-icon").addClass("show");
    $("#first-description").removeClass("show");
});

$("#second-icon").click(function () {
    $("#second-icon").hide();
    $("#second-description").show();
    $("#second-icon").removeClass("show");
    $("#second-description").addClass("show");
});

$("#second-description").click(function () {
    $("#second-icon").show();
    $("#second-description").hide();
    $("#second-icon").addClass("show");
    $("#second-description").removeClass("show");
});

$("#third-icon").click(function () {
    $("#third-icon").hide();
    $("#third-description").show();
    $("#third-icon").removeClass("show");
    $("#third-description").addClass("show");
});

$("#third-description").click(function () {
    $("#third-icon").show();
    $("#third-description").hide();
    $("#third-icon").addClass("show");
    $("#third-description").removeClass("show");
});


$("#first-img").mouseenter(function () {
    $("#first-portfolio-item").show();
    $("#first-img").addClass("show");
    $(".second-row").addClass("img-selected");
});

$("#first-img").mouseleave(function () {
    $("#first-portfolio-item").hide();
    $("#first-img").removeClass("show");
    $(".second-row").removeClass("img-selected");
});

$("#first-img").click(function () {
    $("#first-portfolio-item").toggle();
    $("#first-img").toggleClass("show");
    $(".second-row").toggleClass("img-selected");
});

$("#second-img").mouseenter(function () {
    $("#second-portfolio-item").show();
    $("#second-img").addClass("show");
    $(".second-row").addClass("img-selected");
});

$("#second-img").mouseleave(function () {
    $("#second-portfolio-item").hide();
    $("#second-img").removeClass("show");
    $(".second-row").removeClass("img-selected");
});

$("#second-img").click(function () {
    $("#second-portfolio-item").toggle();
    $("#second-img").toggleClass("show");
    $(".second-row").toggleClass("img-selected");
});

$("#third-img").mouseenter(function () {
    $("#third-portfolio-item").show();
    $("#third-img").addClass("show");
    $(".second-row").addClass("img-selected");
});

$("#third-img").mouseleave(function () {
    $("#third-portfolio-item").hide();
    $("#third-img").removeClass("show");
    $(".second-row").removeClass("img-selected");
});

$("#third-img").click(function () {
    $("#third-portfolio-item").toggle();
    $("#third-img").toggleClass("show");
    $(".second-row").toggleClass("img-selected");
});

$("#fourth-img").mouseenter(function () {
    $("#fourth-portfolio-item").show();
    $("#fourth-img").addClass("show");
    $(".second-row").addClass("img-selected");
});

$("#fourth-img").mouseleave(function () {
    $("#fourth-portfolio-item").hide();
    $("#fourth-img").removeClass("show");
    $(".second-row").removeClass("img-selected");
});

$("#fourth-img").click(function () {
    $("#fourth-portfolio-item").toggle();
    $("#fourth-img").toggleClass("show");
    $(".second-row").toggleClass("img-selected");
});

$("#fifth-img").mouseenter(function () {
    $("#fifth-portfolio-item").show();
    $("#fifth-img").addClass("show");
    $(".second-row").addClass("img-selected");
    $(".first-row").addClass("img-unselected");
});

$("#fifth-img").mouseleave(function () {
    $("#fifth-portfolio-item").hide();
    $("#fifth-img").removeClass("show");
    $(".second-row").removeClass("img-selected");
    $(".first-row").removeClass("img-unselected");
});

$("#fifth-img").click(function () {
    $("#fifth-portfolio-item").toggle();
    $("#fifth-img").toggleClass("show");
    $(".second-row").toggleClass("img-selected");
    $(".first-row").toggleClass("img-unselected");
});


$("#sixth-img").mouseenter(function () {
    $("#sixth-portfolio-item").show();
    $("#sixth-img").addClass("show");
    $(".second-row").addClass("img-selected");
    $(".first-row").addClass("img-unselected");
});

$("#sixth-img").mouseleave(function () {
    $("#sixth-portfolio-item").hide();
    $("#sixth-img").removeClass("show");
    $(".second-row").removeClass("img-selected");
    $(".first-row").removeClass("img-unselected");
});

$("#sixth-img").click(function () {
    $("#sixth-portfolio-item").toggle();
    $("#sixth-img").toggleClass("show");
    $(".second-row").toggleClass("img-selected");
    $(".first-row").toggleClass("img-unselected");
});

$("#seventh-img").mouseenter(function () {
    $("#seventh-portfolio-item").show();
    $("#seventh-img").addClass("show");
    $(".second-row").addClass("img-selected");
    $(".first-row").addClass("img-unselected");
});

$("#seventh-img").mouseleave(function () {
    $("#seventh-portfolio-item").hide();
    $("#seventh-img").removeClass("show");
    $(".second-row").removeClass("img-selected");
    $(".first-row").removeClass("img-unselected");
});

$("#seventh-img").click(function () {
    $("#seventh-portfolio-item").toggle();
    $("#seventh-img").toggleClass("show");
    $(".second-row").toggleClass("img-selected");
    $(".first-row").toggleClass("img-unselected");
});

$("#eigth-img").mouseenter(function () {
    $("#eigth-portfolio-item").show();
    $("#eigth-img").addClass("show");
    $(".second-row").addClass("img-selected");
    $(".first-row").addClass("img-unselected");
});

$("#eigth-img").mouseleave(function () {
    $("#eigth-portfolio-item").hide();
    $("#eigth-img").removeClass("show");
    $(".second-row").removeClass("img-selected");
    $(".first-row").removeClass("img-unselected");
});

$("#eigth-img").click(function () {
    $("#eigth-portfolio-item").toggle();
    $("#eigth-img").toggleClass("show");
    $(".second-row").toggleClass("img-selected");
    $(".first-row").toggleClass("img-unselected");
});
