

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(800);
  
});
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });
    $(document).ready(function(){

      $('#itemslider').carousel({ interval: 3000 });
      
      $('.carousel-showmanymoveone .item').each(function(){
      var itemToClone = $(this);
      
      for (var i=1;i<6;i++) {
      itemToClone = itemToClone.next();
      
      if (!itemToClone.length) {
      itemToClone = $(this).siblings(':first');
      }
      
      itemToClone.children(':first-child').clone()
      .addClass("cloneditem-"+(i))
      .appendTo($(this));
      }
      });
      });
      
      // JavaScript Document
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

  var cardDrop = document.getElementById('card-dropdown');
var activeDropdown;
cardDrop.addEventListener('click',function(){
  var node;
  for (var i = 0; i < this.childNodes.length-1; i++)
    node = this.childNodes[i];
    if (node.className === 'dropdown-select') {
      node.classList.add('visible');
       activeDropdown = node; 
    };
})

window.onclick = function(e) {
  console.log(e.target.tagName)
  console.log('dropdown');
  console.log(activeDropdown)
  if (e.target.tagName === 'LI' && activeDropdown){
    if (e.target.innerHTML === 'Master Card') {
      document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Master Card';
    }
    else if (e.target.innerHTML === 'American Express') {
         document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/f5hyn6u05ktql8d/amex-icon-6902.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'American Express';      
    }
    else if (e.target.innerHTML === 'Visa') {
         document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Visa';
    }
  }
  else if (e.target.className !== 'dropdown-btn' && activeDropdown) {
    activeDropdown.classList.remove('visible');
    activeDropdown = null;
  }
}

const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});
