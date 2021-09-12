var list = document.getElementsByClassName("nav-menu");
// get all elements inside list
var listItems = list[0].getElementsByTagName("li");
for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("menu-active");
        current[0].className = "menu";
        this.className = "menu-active";
        // document.getElementById("faq").scrollIntoView({ behavior: "smooth" });
        // window.scrollBy(0, -200);
        console.log("clicked");
    });
}


// faq https://github.com/acmurichmond/acm_website.git
const questions = document.getElementsByClassName('question-title') //Gets all the questions (plus icon)

for (const question of questions) {
    const answer = question.parentElement.querySelector('.question-answer')
    const remove = question.parentElement.querySelector(".minus")
    const add = question.parentElement.querySelector(".add")
    let open = false //Variable to check if the answer is visible or not

    function openAnswer() {
        if (open == true) { //If you click the question while the answer is visible it will stop being visible and open will change it's value to false
            add.style.display = "block";
            remove.style.display = "none";
            answer.style.overflow = "hidden";
            answer.style.maxHeight = '0';
            open = false;
        } else { //If you click the question while the answer is not visible it will start being visible and open will change it's value to true
            add.style.display = "none";
            remove.style.display = "block";
            answer.style.maxHeight = "300px";
            answer.style.overflow = "visible";
            open = true;
        }
    }

    question.addEventListener('click', openAnswer)
}