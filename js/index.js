class UI{
    static show(item){
        item.style.display = "block";
    };

    static hide(item){
        item.style.display = "none";
    }
}

const questions = document.querySelectorAll('section.faqs ul li');
const reply = document.querySelectorAll('section.faqs ul li p.answer');

for(i=0; i < questions.length; i++){
    questions[i].addEventListener('click', toggleAns);
    reply[i].style.display = "none";
}

function toggleAns(e){
    neededObject = e.target.parentElement.querySelector('p.answer');
    if(neededObject.style.display == "block"){
        UI.hide(neededObject);
    }
    else{
        UI.show(neededObject);
    }
}