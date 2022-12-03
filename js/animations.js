const INCREASE_NUMBER_ANIMATION_SPEED = 50;

function increaseNumberAnimationStep(i, element, endNumber) {
    if (i <= endNumber) {
        if (i === endNumber) {
            element.innerText = i + '+';
        } else {
            element.innerText = i;
        }
        i+= 50;
    }
    setTimeout(function() {
        increaseNumberAnimationStep(i, element, endNumber);
      }, INCREASE_NUMBER_ANIMATION_SPEED);
}

function initIncreaseNumberAnimation() {
    let element = document.querySelector('.features__clients-count');
    increaseNumberAnimationStep(0, element, 5000);
}

document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
    if (event.target.value === 'other') {
      let formContainer = document.createElement('div');
      formContainer.classList.add('form__group');
      formContainer.classList.add('form__other-input');

      let input = document.createElement('input');
      input.placeholder = 'Введите ваш вариант';
      input.type = 'text';

      formContainer.appendChild(input);

      document.querySelector('.form_form').insertBefore(formContainer, document.querySelector('.form__other_button'));
    }
    
    const otherInput = document.querySelector('.form__other-input');
      
    if (event.target.value !== 'other' && Boolean(otherInput)) {
      document.querySelector('.form_form').removeChild(otherInput);
    }
});

let animationInited = false;

function updateScroll() {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('header__scrolled');
  } else {
    document.querySelector('.header').classList.remove('header__scrolled');
  }

  let countElementPosition = document.querySelector('.features__clients-count').offsetTop;

  let windowBottomPosition = window.scrollY + window.innerHeight;

  if (windowBottomPosition >= countElementPosition && !animationInited) { 
    animationInited = true;
    initIncreaseNumberAnimation()
  }
}

window.addEventListener('scroll', updateScroll);

function addSmoothScroll (link) {
  link.addEventListener('click', onLinkClick)
}

function onLinkClick (event) {
  event.preventDefault();

  document.querySelector(event.target.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  addSmoothScroll(anchor);
});

addSmoothScroll(document.querySelector('.more-button'));