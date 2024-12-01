import { getRandomInt } from "./utils.js";

init();

function init(){
    document.querySelectorAll('[data-count=true]').forEach(count => {
        
        count.textContent = getRandomInt(0, 100);
    });
    
    document.querySelectorAll('#comments .comment .content').forEach(function(comment) {
        
        const strLength = comment.textContent.length;
        if(strLength > 150) {
            const readMoreBtn = document.createElement('button');
            readMoreBtn.classList.add('btnReadMore');
            readMoreBtn.textContent = 'עוד..';

            comment.insertAdjacentElement('afterend', readMoreBtn)
        }
        
    });


    document.querySelector('.btnReadMore').addEventListener('click', function() {
        const textElement = this.previousElementSibling;
    
        if (textElement) {
            const btnText = this.textContent === 'עוד..' ? 'פחות..' : 'עוד..';

            this.innerText = btnText;
            textElement.classList.toggle('full');
        }
        
    });
}