let barMenu = document.querySelector(".menu i");
let theUlList = document.querySelector("header ul");
let inchor = document.querySelectorAll("header a");
let allSection = document.querySelectorAll("section")
let theHoverSwiper = document.querySelectorAll(".work .swiper-slide")
let skillBar = document.querySelectorAll(".skill-filled")
let perCent = document.querySelectorAll(".skill-bar span")
let current = 90;
let slide = 0;
// window Height function########################""
function windowHeight() {
  if (window.innerWidth > 768) {
    $(allSection).css("height", `${window.innerHeight}px`);
    current = -slide * window.innerHeight;

    $('.content').css('transform', `translateY(${current}px)`);
  }
}
window.addEventListener("resize",windowHeight)
windowHeight()
// bar width function ##############################
function barWidth(){
 for (let a = 0; a < $(skillBar).length; a++) {

 $(skillBar).eq(a).css("width",`${$(perCent).eq(a).text()}`)
  
 }
}

barWidth()
// wheelFunction #################################
let canSwipe = true;
function wheelFunc(e){

if (canSwipe) {
  if (e.deltaY > 0 && current !== -(window.innerHeight * 6) && window.innerWidth > 768) {
  
    canSwipe = false;
    current -= window.innerHeight;
    slide++;
    $(".content").css('transform',`translateY(${current}px)`);
    setTimeout(()=>{
      canSwipe = true;
    },1000)
  }
  if (e.deltaY < 0 && current !== 0 && window.innerWidth > 768) {
 
    canSwipe = false;
    current += window.innerHeight;
    slide--;
    $(".content").css('transform',`translateY(${current}px)`);
    setTimeout(()=>{
      canSwipe = true;
    },1000)
  }
}
$(".content").css('transtion',`1s`);
}
window.addEventListener('wheel',wheelFunc)

window.onkeydown = function (e) { 
 
  if (canSwipe) {
    if (e.which === 38 && current !== -(window.innerHeight * 6) && window.innerWidth > 768) {
      canSwipe = false;
      current -= window.innerHeight;
      slide++;
      $(".content").css('transform',`translateY(${current}px)`);
      setTimeout(()=>{
        canSwipe = true;
      },1000)
    }
    if (e.which === 40 && current !== 0 && window.innerWidth > 768) {
      canSwipe = false;
      current += window.innerHeight;
      slide--;
      $(".content").css('transform',`translateY(${current}px)`);
      setTimeout(()=>{
        canSwipe = true;
      },1000)
    }
  }
};


  // swiper ##############################
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
  });
    // new swiper ##############################
  var nwSwiper = new Swiper(".newSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-paginations",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
  });
    // swiper one ##############################
  var SwiperOne = new Swiper(".swiper-one", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination-one",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
  });
  // swiper tow ##############################
  var swiper = new Swiper(".swiper-tow", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination-tow",
      clickable: true,
    },
    autoplay:{
      delay:3000
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 60,
      },
    },
  });


// bar menu fonction##############
$(barMenu).click(function () { 

   $(theUlList).toggleClass('show');;
});

// hover function ##########################
function swiperHover() {
  
  for (let i = 0; i < $(theHoverSwiper).length; i++) {
  $(theHoverSwiper).eq(i).hover(
    function () {
      $(".disc").eq(i).toggleClass("trans")
    }
  )
    
  }
}

swiperHover()