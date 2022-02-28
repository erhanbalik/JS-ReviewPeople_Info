// Local reviews Data
const reviews = [
    {
        id: 1,
        name:"susan smith",
        job: "web developer",
        img : "./images/profile-1.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempore modi tempora perspiciatis incidunt harum, asperiores fuga itaque magni earum iste enim? Vel incidunt necessitatibus impedit quod eius voluptate doloribus ratione. Quos quis error nemo hic in accusamus culpa, blanditiis quas ullam quae, numquam eos qui nihil deserunt, nulla recusandae."

    },
    {
        id: 2,
        name:"Anna johnson",
        job: "Game designer",
        img : "./images/profile-1.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempore modi tempora perspiciatis incidunt harum, asperiores fuga itaque magni earum iste enim? Vel incidunt necessitatibus impedit quod eius voluptate doloribus ratione. Quos quis error nemo hic in accusamus culpa, blanditiis quas ullam quae, numquam eos qui nihil deserunt, nulla recusandae."

    },
    {
        id: 3,
        name:"Jhon overlord",
        job: "Front-end developer",
        img : "./images/profile-2.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempore modi tempora perspiciatis incidunt harum, asperiores fuga itaque magni earum iste enim? Vel incidunt necessitatibus impedit quod eius voluptate doloribus ratione. Quos quis error nemo hic in accusamus culpa, blanditiis quas ullam quae, numquam eos qui nihil deserunt, nulla recusandae."

    },
    {
        id: 4,
        name:"Naysa cruz",
        job: "Back-end developer",
        img : "./images/profile-3.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempore modi tempora perspiciatis incidunt harum, asperiores fuga itaque magni earum iste enim? Vel incidunt necessitatibus impedit quod eius voluptate doloribus ratione. Quos quis error nemo hic in accusamus culpa, blanditiis quas ullam quae, numquam eos qui nihil deserunt, nulla recusandae."
    }
]

// Select Items 
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting Item
let currentItem = 3;

// load intial item
window.addEventListener("DOMContentLoaded", function(){
    showPerson();
})

// Show Person

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// PREV BUTTON

prevBtn.addEventListener("click", function(){
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
})

// NEXT BUTTON

nextBtn.addEventListener("click", function(){
    currentItem++;
    if (currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
})

// RANDOM PERSON 

randomBtn.addEventListener("click", function(){
    currentItem =  Math.floor(Math.random() * reviews.length);
    showPerson();
})