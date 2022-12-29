<<<<<<< HEAD
<<<<<<< HEAD


$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(800);
  
});
=======
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
>>>>>>> 073ff7fddb535964344f63cd0430f69d757d946f
=======
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
      
      const sliderMainImage = document.getElementById("product-main-image"); //product container image
      const sliderImageList = document.getElementsByClassName("image-list"); // image thumblian group selection
      console.log(sliderImageList);
      
      sliderImageList[0].onclick = function(){
          sliderMainImage.src = sliderImageList[0].src;
          console.log(sliderMainImage.src);
      };
      
      sliderImageList[1].onclick = function(){
          sliderMainImage.src = sliderImageList[1].src;
          console.log(sliderMainImage.src);
      };
      
      sliderImageList[2].onclick = function(){
          sliderMainImage.src = sliderImageList[2].src;
          console.log(sliderMainImage.src);
      };
      
      sliderImageList[3].onclick = function(){
          sliderMainImage.src = sliderImageList[3].src;
          console.log(sliderMainImage.src);
      };
