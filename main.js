//accordion

document.addEventListener("DOMContentLoaded", function() {
    const accordionItemHeaders = document.querySelectorAll('.accordion__item--header')
  
  accordionItemHeaders.forEach(accordionItemHeader => {
      accordionItemHeader.addEventListener('click', event => {
          event.target.classList.toggle('active');
          const accordionItemBody = accordionItemHeader.nextElementSibling;
          if(accordionItemHeader.classList.contains("active")) {
              accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
          }
          else {
              accordionItemBody.style.maxHeight = 0;
          }
      });
  });
  });

 //modal box for contact

/*  function contact(event) {
      event.preventDefault();

  const loading = document.querySelector('.contact__overlay--loading')
  const success = document.querySelector('.contact__overlay--success')
  loading.classList += " contact__overlay--visible"
  //for testing
  setTimeout(() => {
      loading.classList.remove("contact__overlay--visible")
      success.classList += " contact__overlay--visible";
      console.log('it worked')
  }, 10000);
} */

function toggleModal() {
    document.body.classList += " modal--close";
}

//menu backdrop

function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}