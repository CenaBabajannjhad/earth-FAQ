let accordions = document.querySelectorAll('.faq-title');
// set event
accordions.forEach(item => item.addEventListener('click' , () => {
    let targetElement  = item.nextElementSibling;

    if(targetElement.style.maxHeight){
        item.classList.remove('hide');
        item.classList.add('show');
        targetElement.style.maxHeight = null;
    }else{
        item.classList.remove('show');
        item.classList.add('hide');
        targetElement.style.maxHeight = `${targetElement.scrollHeight}px`;
    } 
}));