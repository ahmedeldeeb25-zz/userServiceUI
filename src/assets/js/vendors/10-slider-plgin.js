(function($){
  $.fn.slider = function(options){

   return this.each(function(){

    //default  option  for every slider
   var SliderOptions = $.extend({
      slideToShow:1,
      arrows:true,
      autoplay:true,
      dots:false,
      mouseDrag:true,
      responsive:false,
      waitingTime:3000
    },options);


  var $this = $(this);
  //add slider plugin class for every slider here
  $this.addClass('slider-plugin');

//get slider propirtes in object
var sliderObj={
    sliderBanner:$this.find('.slider-banner'),
    sliderItem:$this.find('.slider-item'),
    itemsLength:  $this.find('.slider-item').length,
    nextbtn:$this.find('.next'),
    prevbtn:$this.find('.prev'),
    // to move the slider
    move:0,
    //to pretected click on another click
    click:false,
    mouseDown:false,
    pageX:0
};

function reseizing(){
//width of one item = width of whole banner / num of item i need
// sliderObj.sliderBanner.width()  حجمه العادى قبل مااظبطه الى بيبقى ظاهر فالاول
// sliderObj.sliderItem.width(parseInt ( sliderObj.sliderBanner.width() / options.slideToShow ) );
responsiveFun();

sliderObj.sliderItem.outerWidth(parseInt ( $this.outerWidth() / SliderOptions.slideToShow ) );
//$this.width() ====> width of parent

  // console.log(sliderObj.sliderBanner.width()); //848 ثابت علطول

  //if slide to show is 5 slider w'll show 5 item
sliderObj.sliderBanner.outerWidth(sliderObj.itemsLength * sliderObj.sliderItem.outerWidth());
// console.log(sliderObj.sliderBanner.width()); دا هيتغير على حسب كام عنصر جواه

// for resizing him self every time
// sliderObj.move*sliderObj.sliderItem.outerWidth() = 0
sliderObj.sliderBanner.css('transform', 'translateX('+ -(sliderObj.move*sliderObj.sliderItem.outerWidth()) +'px');
} reseizing();

// click to next function
function nextFn(){
    //check if slider haven't any click
    if (sliderObj.click == false) {
        sliderObj.click = true;

          // to get last item in the slider
        var lastSlide = ((sliderObj.itemsLength -1) - (SliderOptions.slideToShow -1));

          //to derect slider oves if it is last slide don't increase eles increase moves
        sliderObj.move = sliderObj.move ==  lastSlide  ? lastSlide  : sliderObj.move + 1;


        sliderObj.sliderBanner.css('transform', 'translateX('+ -(sliderObj.move*sliderObj.sliderItem.outerWidth())+'px');

        activeDots(sliderObj.move);
        setTimeout(function(){
          sliderObj.click = false;
          if (SliderOptions.autoplay) {
             autoPlay();
            }
          },505);

        if (sliderObj.move== lastSlide) {
          sliderObj.nextbtn.addClass('disabled');
          }
        else{

      $this.find('.slider-controllers .icon').removeClass('disabled');

        }
    }

}
sliderObj.nextbtn.click(nextFn);

function prevFn() {

  if (sliderObj.click==false) {
    sliderObj.click = true;
      // var firstSlide = ((sliderObj.itemsLength -1) - (options.slideToShow -1));

    sliderObj.move =   sliderObj.move <= 0 ?  0 : sliderObj.move - 1;


    sliderObj.sliderBanner.css('transform', 'translateX('+ -(sliderObj.move*sliderObj.sliderItem.outerWidth()) +'px');
      activeDots(sliderObj.move);
      setTimeout(function(){
        sliderObj.click = false;
        if (SliderOptions.autoplay) {
        autoPlay();

        }
      },505);
       if( sliderObj.move <= 0){
         console.log(sliderObj.move);
          sliderObj.prevbtn.addClass('disabled');
        }else{
        $this.find('.slider-controllers .icon').removeClass('disabled');
        }
    }


  }

  sliderObj.prevbtn.click(prevFn);

//auto play
var timeout ;


function autoPlay() {
      clearTimeout(timeout);
   timeout =  setInterval(function(){
      // sliderObj.nextbtn.trigger('click');
      nextFn()
    },SliderOptions.waitingTime);
  }
  if (SliderOptions.autoplay) {

  autoPlay();
}

//to drag with Mouse
function mouseDrag() {
    // click down on slider only
    $this.on('mousedown', function(e){
    //to prevent any action on click on this
    e.preventDefault();
    sliderObj.mouseDown = true;
    sliderObj.pageX = e.pageX;
    clearTimeout(timeout);


    $(document).on('mouseup' , function(e){
    //to prevent any action on click on this

    e.preventDefault();
    if (sliderObj.mouseDown) {
    sliderObj.mouseDown = false;

      if(e.pageX - sliderObj.pageX > 100) {
            // sliderObj.prevbtn.trigger('click');
            prevFn();
      }
      else if(e.pageX - sliderObj.pageX < -100){
            // sliderObj.nextbtn.trigger('click');
            nextFn();

      }
      else{

       autoPlay();
      }
       sliderObj.sliderBanner.css('margin-left', '0px');
    }


    });
  });



  $(document).on('mousemove' , function(e){
    //to prevent any action on click on this
    e.preventDefault();
    if (sliderObj.mouseDown) {
      // عشان احدد انا مشيت موجب ولا سالب وعلى اساسها هيعمل next ولا prev
      sliderObj.sliderBanner.css('margin-left', (e.pageX - sliderObj.pageX) +'px');


    }

  });

}

if(SliderOptions.mouseDrag){
      mouseDrag();
}

function activeDots(index){

  $this.find('.slider-dots .dot').removeClass('active').eq(index).addClass('active');

}
// function to make dots
function drawDots() {
  // to make ul and more li and append them on thim in html
  // var dotsFragment = document.createDocumentFragment();
  liArray =[];
  var SlideNum = sliderObj.itemsLength / SliderOptions.slideToShow ;
  // to detect number of dots
  for(var i =1 ; i<=SlideNum;i++){
  liArray.push('<li class="dot '+(i==1?"active":"")+'"></li>')
    // dotsFragment.appendChild(document.createElement('li'));
  }

   $this.append('<ul class="slider-dots">'+liArray.join("")+ '</ul>');

  //  $this.find('.slider-dots .dot:first-child').addClass('active');
   $this.on('click', '.slider-dots .dot' , function(){
      // console.log($(this)); //dots
      // console.log($this); //testmonials slider

      activeDots($(this).index());
      sliderObj.move = $(this).index();
      sliderObj.sliderBanner.css('transform', 'translateX('+ -(sliderObj.move*sliderObj.sliderItem.outerWidth()) +'px');

      if (SliderOptions.autoPlay) {
        // it stop himself before
        autoPlay();
      }
   });

}


  //to play drawots
if (SliderOptions.dots) {
      drawDots();
}
 // function to handel slidetoshow in responsive
 var responsiveScreenFound = false;
 function responsiveFun() {
   if (SliderOptions.responsive) {

    $.each(SliderOptions.responsive,function(index , item){
        if ($(window).width() <= item.breakpoint) {
          $.extend(
             SliderOptions,item.settings);
          //override options with item options
          responsiveScreenFound = true;
        }
        //false
        else if(!responsiveScreenFound){
           $.extend(
             SliderOptions,options);
        }

    });
    responsiveScreenFound = false;
   }


 }responsiveFun();

// //for mobile swap
// var hammertime = new Hammer(myElement, myOptions);
// hammertime.on('pan', function(ev) {
// 	console.log(ev);
  // });

  // for responsive
  var windowResizng ;
   $(window).on('resize',function(){
  clearTimeout(windowResizng);
   windowResizng =setTimeout(reseizing , 200);

   });

  // return this;
   });
  };
}( jQuery ));


