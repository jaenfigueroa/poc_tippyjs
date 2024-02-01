import './style.css'

import tippy, {followCursor} from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
// import 'tippy.js/themes/translucent.css'

import './gradient-custom.css'

tippy('#myButton', {
  // content: "I'm a Tippy tooltip!",
  content: '<strong>Bolded <span style="color: yellow;">content</span></strong>',
  allowHTML: true,

  // placement: 'left-start',
  // arrow: true,
  animation: 'scale',
  theme: 'gradient-custom',
  // trigger: 'focus',
  // interactive: true,
  // delay: 500, // ms
  followCursor: true,
  plugins: [followCursor],
});