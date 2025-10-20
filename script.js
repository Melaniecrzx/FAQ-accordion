const button = document.querySelectorAll('button');

const displayDescription = (button) => {
    const section = button.closest('section');
    const wrapper = section.querySelector('div');
    const plus = section.querySelector('.plus');
    const minus = section.querySelector('.minus');  
     
    plus.classList.toggle('hidden');
    minus.classList.toggle('hidden');

    if (wrapper.classList.contains('grid-rows-[0fr]')) {
    wrapper.classList.remove('grid-rows-[0fr]');
    wrapper.classList.add('grid-rows-[1fr]');
  } else {
    wrapper.classList.remove('grid-rows-[1fr]');
    wrapper.classList.add('grid-rows-[0fr]');
  }
    
}

button.forEach(btn => {
    btn.addEventListener('click',() => {
        displayDescription(btn);
    });
})