/*$(document).ready(function(){
    $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
});
*/


function addClass() {
  document.getElementById("elem").classList.add("active");
};

function removeClass() {
  document.getElementById("elem").classList.remove("active");
};

function checkClass() {
  if (document.getElementById("elem").classList.contains("active")) {
    removeClass();
  } else {
    addClass();
  }
};






var dataArray = [
  {
  	name: 'Stretching is fun'
  },
  {
  	name: 'Design afterwards'
  },
  {
  	name: 'Finalize'
  }
];


var imgArray = [1, 2, 3];


var skillText = ("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
);

var hui = '';


function addHtml(element, index) {
  hui = hui+`<div class="skills__sketching skills">
  <img src='img/png_${index+1}.png'>
  <div class="skill__name">
    ${element.name}
  </div>
  <div class="skills__text">${skillText}</div>
  </div>`;
};

dataArray.forEach(addHtml);

document.getElementById('skills').innerHTML = hui;


/*
        <div class="skills__sketching skills">
          <img src="img/png_1.png">
          <div class="skill__name">
            Stretching is fun
          </div>
          <div class="skills__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
        <div class="skills__design skills">
          <img src="img/png_2.png">
          <div class="skill__name">
            Design afterwards
          </div>
          <div class="skills__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
        <div class="skills__finalize skills">
          <img src="img/png_3.png">
          <div class="skill__name">
            Finalize
          </div>
          <div class="skills__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>

*/