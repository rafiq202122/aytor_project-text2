$(function (){

    //* tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    //* tooltip end

$("#banner").slick({
    arrows:false,
    dots:true,
    dotsClass:"slick-dots container",
});

//* new product slider

$(".newProductSlider").slick({
    slidesToShow: 4,
    prevArrow:"#productSliderLeftArrow",
    nextArrow:"#productSliderReftArrow",
    arrows: true,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            
          
          },
        },

        {
            breakpoint: 767.999,
            settings: {
              slidesToShow: 2,
              
            
            },
          },

          {
            breakpoint: 575.999,
            settings: {
              slidesToShow: 1,
              
            
            },
          },
         
         
       
       
      ],
});

//* countdwon
$(".timer") .countdown("2023/08/01", function(event) {
   // $(this).text( event.strftime('%D days %H:%M:%S') );
   //console.log(event.strftime('%D days %H:%M:%S'));

   $(".days").html(event.strftime("%D"));
   $(".hours").html(event.strftime("%H"));
   $(".mins").html(event.strftime("%M"));
   $(".sec").html(event.strftime("%S"));
   




  });

//* countdwon end


//* FLASH SALE SLIDERS DOTS STARTS HERE
  $(".flashSaleSlider").slick({
    slidesToShow:2,
    arrows:false,
    dots:true,
    dotsClass:"flashSale-dots container",

  });
//* FLASH SALE SLIDER DOTS ENDS HERE  

//* VENOBOX STARTS HERE
new venobox({
  selector: ".venobox",
});
//* VENOBOX ENDS HERE

//*LATEST NEWS
$(".latestCradSlide").slick({
  slidesToShow:4,
  arrows:false,
  dots:true,
  dotsClass:"latestCrad_dots container",
  

});


//* LATEST NEWS END

})