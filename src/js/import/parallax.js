import Parallax from 'parallax-js';

if($('div').is('.scene')) {
  let scene1 = $('.scene').get(0);
  let parallaxInstance1 = new Parallax(scene1, {
    relativeInput: true
  });
}
