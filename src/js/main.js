import forms from './modules/forms';
import modals from './modules/modals';
import sliders from './modules/sliders';
import checkTextInputs from './modules/checkTextInputs';
import mask from './modules/mask';
import showMoreStyle from './modules/showMoreStyles';


window.addEventListener('DOMContentLoaded', () => {
   'use strict';
   modals();
   sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
   sliders('.main-slider-item', 'vertical');
   forms();
   checkTextInputs('[name="name"]');
   checkTextInputs('[name="message"]');
   mask('[name="phone"]');
   showMoreStyle('.button-transparent');

});

