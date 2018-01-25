$(document).ready(function(){

var dropdown = $('.dropdown-select');

function dropdownFun(){
    dropdown.each(function(){
        var $this = $(this);

        var defaultText = $this.find('.list-item:first-child').addClass('active').find('a').text();
        $this.find('.selected-item .item-text').text(defaultText);
    });
    dropdown.on('click', '.list-item', function(){
        var $this = $(this);
        $this.addClass('active').siblings().removeClass('active')
            .parents('.dropdown-select').find('.selected-item .item-text')
            .text($this.find('a').text());
    });
}

if(dropdown.length){
    dropdownFun();
}


  //function to add class active to elenent parent
$(document).on('click', '.toggle-active-parent', function(){
    var $this = $(this);
    $this.parent().toggleClass('active');

      //to slide up accordion
    if($this.parent('.accordion').length){
        $this.parent().siblings().removeClass('active').find('.accordion-body').slideUp(300);

        $this.parent().find('.accordion-body').slideToggle(300);
    }
});


$(document).on('click', function(event){
    var $target = $(event.target);

    $('.click-outside').each(function(index){
        var $this = $(this);
    //second condition to check target in clickoutside || if target have parent name outside
    //class active to check if search box is open now
    //يعنى عاوز اشوفه ضغط عل الايقونه والسيرش مفتوح ولا لاء
    // length = 1 لو العنصر الى انا بضغط عليه ليه أب ليه كلاس اوت سيد


     //$target.closest('.click-outside').length ==0
     // معنااها انى دوست بره الكلاس cilick-outside
      // معناها ماتقفلش غير لما ادوس بره

        //user click on categroy button
        $target.hasClass('click-outside-btn');

      var hasClass = $this.hasClass('remove-from-parent') ? $this.parent().hasClass('active') :     $this.hasClass('active');

        if(hasClass && $target.closest('.click-outside').length == 0 && !$target.hasClass('click-outside-btn') ){

            $this.hasClass('remove-from-parent') ? $this.parent().removeClass('active').parents('body').removeClass('sidebar-oppend'): $this.removeClass('active');

        }

    });

});


// $('#zoom').elevateZoom();
$("#zoom").elevateZoom({gallery:'gallary', cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: true, loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'});

//pass the images to Fancybox
$("#zoom").bind("click", function(e) {
  var ez =   $('#zoom').data('elevateZoom');
	ez.fancybox(ez.getGalleryList());
  return false;
});


});
