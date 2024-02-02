const navLinks = document.querySelector('.nav-links')
const navButton = document.querySelector('.button')


const bar = document.querySelector('.bar')
const close = document.querySelector('.close')


bar.addEventListener('click', revealMobileNav)
function revealMobileNav(){
    navLinks.classList.add('reveal')
    close.classList.add('display')
    bar.classList.add('hide')
}

close.addEventListener('click', hideMobileNav)
function hideMobileNav(){
    navLinks.classList.remove('reveal')
    close.classList.remove('display')
    bar.classList.remove('hide')
}




// document.addEventListener('DOMContentLoaded', function () {
//     const faqQuestions = document.querySelectorAll('.faq-question');

//     faqQuestions.forEach(function (question) {
//         question.addEventListener('click', function () {
//             const answer = this.nextElementSibling; 

//             if (answer.style.display === 'block') {
//                 answer.style.display = 'none';
//             } else {
//                 answer.style.display = 'block';
//             }
            
//         });
//     });
// });




function toggleAnswer(questionNumber) {
    let answer = document.getElementById('answer' + questionNumber);

    // Hide all answers
    let allAnswers = document.querySelectorAll('.answer');
    allAnswers.forEach(function (ans) {
        ans.style.display = 'none';
    });

    // Toggle the display of the clicked answer
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}


