import Header from 'components/header/mainHeader/mainheader';
import Section from './section/Section';
import './intro.scss';
class IntroPage {
  introWrapperElement: HTMLDivElement;
  sectionElement: HTMLElement[];
  constructor() {
    this.introWrapperElement = document.createElement('div');
    this.introWrapperElement.id = 'intro-page-wrapper';

    const sectionData = [
      {
        id: 'section-01',
        index: 0,
        subtitle: 'Science, exploration to change the world',
        title: 'NATIONAL GEOGRAPHIC',
        description:
          'National Geographic is an American digital cable and satellite television network that is owned by National Geographic Partners, majority-owned by 21st Century Fox with the remainder owned by the National Geographic Society.',
      },
      {
        id: 'section-02',
        index: 1,
        subtitle: 'Working for a Planet in Balance',
        title: 'WHO WE ARE',
        description:
          'The National Geographic Society is a nonprofit scientific and educational organization that pushes the boundaries of exploration.',
      },
      {
        id: 'section-03',
        index: 2,
        subtitle: 'Impact for the planet',
        title: 'EXPLORER',
        description:
          'We fund and support groundbreaking scientists, conservationists, educators, and storytellers.',
      },
      {
        id: 'section-04',
        index: 3,
        subtitle: 'See explorers inpiring community',
        title: 'EXHIBITION & EVENT',
        description:
          'In the heart of Washington, D.C., National Geographic hosts world-class exhibitions, exclusive events, and an inspiring community of explorers.',
      },
      {
        id: 'section-05',
        index: 4,
        subtitle: 'Current portfolio',
        title: 'PROJECT',
        description:
          'Explore our current portfolio of initiatives, and get the latest updates from them below.',
      },
    ];
    this.sectionElement = sectionData.map((item) => new Section(item).instance);
    this.sectionElement.forEach((section) => {
      this.introWrapperElement.appendChild(section);
    });
  }

  get instance() {
    return [new Header('sticky').instance, this.introWrapperElement];
  }
}

export default IntroPage;

// const test = () => {
//   $(function () {
//     $('#bgArea li:not(:first-child)').hide();

//     setInterval(function () {
//       $('#bgArea li:first-child').fadeOut(2000).next().fadeIn(3000).end().appendTo('#bgArea');
//     }, 7000);
//   });

//   //높이값 설정후 타이틀 보이기
//   $(function () {
//     const headerH = $('#header').height();
//     const s1H = $('#section1').height() + headerH;
//     const s2H = $('#section2').height() + s1H;
//     const s3H = $('#section3').height() + s2H;

//     $(window).scroll(function () {
//       var scrollT = $(document).scrollTop();

//       if (scrollT >= headerH + 400) {
//         $('#section2 .textArea ul').css({ top: '50%', opacity: 1 });
//       }
//       if (scrollT >= s1H + 400) {
//         $('#section3 .textArea ul').css({ top: '50%', opacity: 1 });
//       }
//       if (scrollT >= s2H + 400) {
//         $('#section4 .textArea ul').css({ top: '50%', opacity: 1 });
//       }
//       if (scrollT >= s3H + 400) {
//         $('#section5 .textArea ul').css({ top: '50%', opacity: 1 });
//       }
//     });
//   });

//   $(function () {
//     $('.con1').mouseover(function () {
//       $(this).attr('src', 'img/scrollbtn011.png');
//     });
//     $('.con2').mouseover(function () {
//       $(this).attr('src', 'img/scrollbtn021.png');
//     });
//     $('.con3').mouseover(function () {
//       $(this).attr('src', 'img/scrollbtn031.png');
//     });
//     $('.con4').mouseover(function () {
//       $(this).attr('src', 'img/scrollbtn041.png');
//     });
//     $('.con5').mouseover(function () {
//       $(this).attr('src', 'img/scrollbtn051.png');
//     });

//     $('.con1').mouseleave(function () {
//       $(this).attr('src', 'img/scrollbtn01.png');
//     });
//     $('.con2').mouseleave(function () {
//       $(this).attr('src', 'img/scrollbtn02.png');
//     });
//     $('.con3').mouseleave(function () {
//       $(this).attr('src', 'img/scrollbtn03.png');
//     });
//     $('.con4').mouseleave(function () {
//       $(this).attr('src', 'img/scrollbtn04.png');
//     });
//     $('.con5').mouseleave(function () {
//       $(this).attr('src', 'img/scrollbtn05.png');
//     });
//   });

//   $(function () {
//     $('#alist li:eq(0)')
//       .children('a')
//       .bind('click focus', function () {
//         $('html, body').stop().animate({ scrollTop: 0 }, 500);
//       });

//     $('#alist li:eq(1)')
//       .children('a')
//       .bind('click focus', function () {
//         var section2 = $('#section2').offset().top - 80;
//         $('html, body').stop().animate({ scrollTop: section2 }, 500);
//       });

//     $('#alist li:eq(2)')
//       .children('a')
//       .bind('click focus', function () {
//         var section3 = $('#section3').offset().top - 80;
//         $('html, body').stop().animate({ scrollTop: section3 }, 500);
//       });

//     $('#alist li:eq(3)')
//       .children('a')
//       .bind('click focus', function () {
//         var section4 = $('#section4').offset().top - 80;
//         $('html, body').stop().animate({ scrollTop: section4 }, 500);
//       });
//     $('#alist li:eq(4)')
//       .children('a')
//       .bind('click focus', function () {
//         var section5 = $('#section5').offset().top - 80;
//         $('html, body').stop().animate({ scrollTop: section5 }, 500);
//       });
//   });

//   $(window).resize(function () {
//     body = $('body').width();
//     if (body < 1025) {
//       $('#slideScroll').hide();
//     } else {
//       $('#slideScroll').show();
//     }
//   });

//   var mov = document.getElementById('mov');
//   mov.autoplay = true;
//   mov.load();
// };
