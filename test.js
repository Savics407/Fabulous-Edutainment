// Fetching ID's
const testifier = document.querySelector('#name')
const title = document.querySelector('#title')
const testimony = document.querySelector('#testimony')
const currentImg = document.querySelector('#img')
const backgroundImage = document.querySelector('.profile')
const next = document.querySelector('#nxt')
const prev = document.querySelector('#prev')
const firstDot = document.querySelector('#one')
const secondDot = document.querySelector('#two')
const thirdDot = document.querySelector('#three')
const fourthDot = document.querySelector('#four')
const profile = document.querySelector(".profile")
const testMsg = document.querySelector(".testimony")

let currentTestimonial = 0 

function first() {
    // () => {
    loadTestimonies(testimonials[0]); 
    one.classList.add('active-dots')
    two.classList.remove('active-dots')
    three.classList.remove('active-dots')
    four.classList.remove('active-dots')
     profile.classList.toggle('animpro');
    testMsg.classList.toggle('animtest');
}

function second() {
    loadTestimonies(testimonials[1]); 
    one.classList.remove('active-dots')
    two.classList.add('active-dots')
    three.classList.remove('active-dots')
    four.classList.remove('active-dots')
     profile.classList.toggle('animpro');
    testMsg.classList.toggle('animtest');
}

function third() {
    loadTestimonies(testimonials[2]); 
    one.classList.remove('active-dots')
    two.classList.remove('active-dots')
    three.classList.add('active-dots')
    four.classList.remove('active-dots')
     profile.classList.toggle('animpro');
    testMsg.classList.toggle('animtest');
}

function fourth() {
    loadTestimonies(testimonials[3]); 
    one.classList.remove('active-dots')
    two.classList.remove('active-dots')
    three.classList.remove('active-dots')
    four.classList.add('active-dots')
     profile.classList.toggle('animpro');
    testMsg.classList.toggle('animtest');
}

// let currentFunction = 0
// const funcs = [
//     {first()},
//     {second()}, 
//     {third()},
//     {fourth()}
// ];

const testimonials = [
    {
        name: "Hon. Nwaibe Chidubem",
        title: "Event Host",
        testimony: "While hosting a Beauty Pagentry in 2020, I contracted Fabulous Edutainment to take care of entertainments during the Grand Finale of the event. The company did excellently well in entertaining our guests with various talent-shows ranging from dance, Spoken Word, Drama etc... I would always recommend Fabulous Edutainment to any Event Planner or Organizer, they are simply the best",
        image: "testimonial",
    },
    {
        name: "Aroh Kingsley Arinze",
        title: "Instructor",
        testimony: "Fabulous Edutainment dance Academy has been a wonderful place to teach and share the art of dance. The Management is top-notch, and the staff is talented and trust worthy. The most enjoyable part is watching the students grow as performers and seeing the fruit of everyone's labor",
        image: "testimonial2",
    },
     {
        name: "Victor Ozoilo",
        title: "Student",
        testimony: "As a student of Fabulous Edutainment Dance Academy, I must say, I am beyond thrilled at the level of professionalism and organization put into it, the choreographers are talented and teaches so well. A day class at FA dance Academy will get your body pumping like a superstar",
        image: "testimonial4",
    },
     {
        name: "Swtboy-Mane",
        title: "Singer",
        testimony: "Fabulous Edutainment is the best talent company I have ever seen. This company nurtured me and made me who I am today. With the push, encouragement and trainings the company have given me a sense of purpose through music. I now record my songs in FE studio with their supervision. Fabulous Edutainment is simply the best ",
        image: "testimonial3",
    },
];



const loadTestimonies = (test) => {
    testifier.textContent = test.name;
    title.textContent = test.title;
    testimony.textContent = test.testimony;
    currentImg.src = `images/${test.image}.jpg`;
    backgroundImage.style.backgroundImage= `url(${currentImg.src})`
  
}
loadTestimonies(testimonials[currentTestimonial]); 


next.addEventListener('click', () => {
    currentTestimonial === testimonials.length-1 ?
    next.disabled = true :
    currentTestimonial += 1;
    loadTestimonies(testimonials[currentTestimonial]); 
    profile.classList.toggle('animpro');
    testMsg.classList.toggle('animtest');

    if(one.classList.contains('active-dots') && currentTestimonial) {
        one.classList.remove('active-dots');
        two.classList.add('active-dots')
    } 
    else if (two.classList.contains('active-dots')) {
        two.classList.remove('active-dots')
        three.classList.add('active-dots')
    }
    else {
        three.classList.remove('active-dots')
        four.classList.add('active-dots')
    }
});

//prev btton clicked
prev.addEventListener('click', () => {
    currentTestimonial === 0 ?
    prev.disabled = true :
    currentTestimonial -= 1;
    loadTestimonies(testimonials[currentTestimonial]); 
    profile.classList.toggle('animpro');
    testMsg.classList.toggle('animtest');
    if(one.classList.contains('active-dots')) {
        one.classList.add('active-dots');
        // two.classList.add('active-dots')
    } 
    else if (two.classList.contains('active-dots')) {
        two.classList.remove('active-dots')
        one.classList.add('active-dots');
    }
    else if (three.classList.contains('active-dots')) {
        three.classList.remove('active-dots')
        two.classList.add('active-dots')
    } 
    else if (four.classList.contains('active-dots')) {
        four.classList.remove('active-dots')
        three.classList.add('active-dots')
    }

    else {
        four.classList.add('active-dots')

    }
});

firstDot.addEventListener('click', first)
secondDot.addEventListener('click', second)
thirdDot.addEventListener('click', third)
fourthDot.addEventListener('click', fourth)