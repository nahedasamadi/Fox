const counter1 = document.querySelector(".counter1");
window.addEventListener("load", () => {
  //  Counter
  let count = 1;
  let myint = setInterval(() => {
    document.querySelector(".teacher").innerText = count;
    if (count === 18) {
      clearInterval(myint);
    }
    count++;
  }, 100);
});
const counter2 = document.querySelector(".counter2");
window.addEventListener("load", () => {
  //  Counter
  let count = 1;
  let myint = setInterval(() => {
    document.querySelector(".student").innerText = count;
    if (count === 401) {
      clearInterval(myint);
    }
    count++;
  }, 3);
});
const counter3 = document.querySelector(".counter3");
window.addEventListener("load", () => {
  //  Counter
  let count = 1;
  let myint = setInterval(() => {
    document.querySelector(".course").innerText = count;
    if (count === 30) {
      clearInterval(myint);
    }
    count++;
  }, 60);
});
const counter4 = document.querySelector(".counter4");
window.addEventListener("load", () => {
  //  Counter
  let count = 1;
  let myint = setInterval(() => {
    document.querySelector(".award").innerText = count;
    if (count === 50) {
      clearInterval(myint);
    }
    count++;
  }, 35);
});
document.getElementById("admission").addEventListener("click", function () {
  window.location.href = "admissions.html";
});
document.getElementById("home").addEventListener("click", function () {
  window.location.href = "index.html";
});
document.getElementById("about").addEventListener("click", function () {
  window.location.href = "about.html";
});
document.getElementById("programs").addEventListener("click", function () {
  window.location.href = "programs.html";
});
document.getElementById("courses").addEventListener("click", function () {
  window.location.href = "courses.html";
});
document.getElementById("contacts").addEventListener("click", function () {
  window.location.href = "contacts.html";
});
const form1 = document.getElementById("form1");
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
  window.location.href = "admissions.html#form1";
});
// const slider1 = document.getElementById("slider1");
// const slider2 = document.getElementById("slider2");

// let showFirst = true;

// setInterval(function () {
//   if (showFirst) {
//     slider1.classList.add("hidden");
//     slider2.classList.remove("hidden");
//   } else {
//     slider2.classList.add("hidden");
//     slider1.classList.remove("hidden");
//   }

//   showFirst = !showFirst;
// }, 5000);
const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");

let showFirst = true;

setInterval(() => {
  if (showFirst) {
    slider1.style.opacity = "0";
    slider2.style.opacity = "1";
  } else {
    slider1.style.opacity = "1";
    slider2.style.opacity = "0";
  }

  showFirst = !showFirst;
}, 5000);
new Splide("#testimonial-slider", {
  type: "loop",
  perpage: 3,
  permove: 1,
  autoplay: true,
  interval: 3000,
}).mount();
