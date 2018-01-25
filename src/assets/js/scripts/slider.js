$('.slider').slider({});
 $('.featured-products').slider({
         slideToShow:4 ,
         responsive:[
           {
             breakpoint:767,
             settings:{
               slideToShow:3
             }
           },


          {
             breakpoint:450,
             settings:{
               slideToShow:1
             }
           },

         ]
 });


$('.testimonails-slider').slider({
         dots:true,
         mouseDrag:false,

});
