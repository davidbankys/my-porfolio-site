const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');


	burger.addEventListener('click', () => {
		//Toggle Nav
		nav.classList.toggle('nav-active');

			//Animate links
     navLinks.forEach((link, index) => {
      if (link.style.animation) {
       link.style.animation = '';

     }else {
       link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
     }
   });
      //Burger Animation
      burger.classList.toggle('toggle');
    });
  document.querySelectorAll('ul.nav-links li').forEach(element => element.addEventListener('click', () => {
      document.querySelector('ul.nav-links').classList.remove('nav-active');
   })
 );
}


navSlide();

window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    //var button = document.getElementById("my-form-button");
    var status = document.getElementById("satus");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      status.classList.add('success');
      status.innerHTML = "Thanks!";
    }

    function error() {
      status.classList.add('error');
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });

  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

