// JavaScript Document

// var click = 0;
// function financeBtn() {
//   var financeInfo = document.getElementById('financeInfo');
//   if (click == 0) {
//     financeInfo.style.right = 0;
//     $('#full2').fadeTo(500, 0.8);
//     $('body').on('scroll touchmove mousewheel', function (event) {
//       event.preventDefault();
//       event.stopPropagation();
//       return false;
//     });
//     click = 1;
//   } else {
//     financeInfo.style.right = '-640px';
//     $('body').off('scroll touchmove mousewheel');
//     $('#full2').fadeOut();
//     click = 0;
//   }
// }

// $(window).resize(function () {
//   body = $('body').width();

//   if (body < 1025) {
//     $('#financeInfo').css({ right: '-640px' });
//     $('#full2').fadeOut();
//     $('body').off('scroll touchmove mousewheel');
//     click = 0;
//   }
// });

/*  스크롤 막는법
        
            $("body").on("scroll touchmove mousewheel", function(event) {
                event.preventDefault();
                event.stopPropagation();
                return false;
            });
        
        */

/*  스크롤 푸는법
        
            $("body").off("scroll touchmove mousewheel");
        
        */
