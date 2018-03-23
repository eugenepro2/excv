import {TweenLite} from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'animation.gsap';
import 'debug.addIndicators';

let controller = new ScrollMagic.Controller();

let widthBody = $('body').width();
if (widthBody > 767) {
  scroll();
}


function scroll() {
  // Главная страница Блок Портфолио
  if ($('section').is('.portfolio')) {
    let tlm = new TimelineMax()
      .add([ 
        TweenLite.to('#portfolio__block--1 .portfolio__block__image', 5, { y: -75 }),
      ]);
    let scene = new ScrollMagic.Scene({triggerElement: '#portfolio__block--1', duration: 1000, offset: 300})
      .setTween(tlm)
      //.addIndicators({name: 'Портфолио'}) // add indicators (requires plugin)
      .addTo(controller);
  }

  if ($('section').is('.portfolio')) {
    let tlm = new TimelineMax()
      .add([
        TweenMax.to('#portfolio__block--2 .portfolio__block__image', 2, { y: -75 }),
      ]);
    let scene = new ScrollMagic.Scene({triggerElement: '#portfolio__block--1', duration: 1000, offset: 300})
      .setTween(tlm)
      //.addIndicators({name: 'Портфолио'}) // add indicators (requires plugin)
      .addTo(controller);
  }

  if ($('section').is('.portfolio')) {
    let tlm = new TimelineMax()
      .add([
        TweenMax.to('#portfolio__block--3 .portfolio__block__image', 2, { y: -75 }),
      ]);
    let scene = new ScrollMagic.Scene({triggerElement: '#portfolio__block--3', duration: 1000, offset: 300})
      .setTween(tlm)
      //.addIndicators({name: 'Портфолио'}) // add indicators (requires plugin)
      .addTo(controller);
  }

  if ($('section').is('.portfolio')) {
    let tlm = new TimelineMax()
      .add([
        TweenMax.to('#portfolio__block--4 .portfolio__block__image', 2, { y: -75 }),
      ]);
    let scene = new ScrollMagic.Scene({triggerElement: '#portfolio__block--4', duration: 1000, offset: 300})
      .setTween(tlm)
      //.addIndicators({name: 'Портфолио'}) // add indicators (requires plugin)
      .addTo(controller);
  }
  if ($('section').is('.portfolio')) {
    let tlm = new TimelineMax()
      .add([
        TweenMax.to('#portfolio__block--5 .portfolio__block__image', 2, { y: -75 }),
      ]);
    let scene = new ScrollMagic.Scene({triggerElement: '#portfolio__block--5', duration: 1000, offset: 300})
      .setTween(tlm)
      //.addIndicators({name: 'Портфолио'}) // add indicators (requires plugin)
      .addTo(controller);
  }
  if ($('section').is('.portfolio')) {
    let tlm = new TimelineMax()
      .add([
        TweenMax.to('#portfolio__block--6 .portfolio__block__image', 2, { y: -75 }),
      ]);
    let scene = new ScrollMagic.Scene({triggerElement: '#portfolio__block--6', duration: 1000, offset: 300})
      .setTween(tlm)
      //.addIndicators({name: 'Портфолио'}) // add indicators (requires plugin)
      .addTo(controller);
  }
// Главная страница Блок Портфолио  

}
