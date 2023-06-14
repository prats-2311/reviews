// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
// select items
const img = document.querySelector("#person-img");
img.setAttribute("src", `${reviews[0].img}`);
const author = document.querySelector("#author");
author.textContent = `${reviews[0].name}`;
const job = document.querySelector("#job");
job.textContent = `${reviews[0].job}`;
const info = document.querySelector("#info");
info.textContent = `${reviews[0].text}`;
let count = 0;
const biBtn = document.querySelectorAll(".button-container button");
console.log(biBtn);
biBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("prev-btn")) {
      if (count === 0) {
        count = reviews.length - 1;
      } else {
        count--;
      }
    } else if (e.currentTarget.classList.contains("next-btn")) {
      if (count === reviews.length - 1) {
        count = 0;
      } else {
        count++;
      }
    }
    img.setAttribute("src", `${reviews[count].img}`);
    author.textContent = `${reviews[count].name}`;
    job.textContent = `${reviews[count].job}`;
    info.textContent = `${reviews[count].text}`;
  });
});
const surprise = document.querySelector(".random-btn");

surprise.addEventListener("click", function () {
  count = Math.floor(Math.random() * reviews.length);
  img.setAttribute("src", `${reviews[count].img}`);
  author.textContent = `${reviews[count].name}`;
  job.textContent = `${reviews[count].job}`;
  info.textContent = `${reviews[count].text}`;
});
