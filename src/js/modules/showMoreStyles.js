import { getResourse } from '/Code Program/Art Project/src/js/services/requests';

const showMoreStyle = (trigger, styles) => {
   const btn = document.querySelector(trigger);

   btn.addEventListener('click', () => {
      // getResourse('http://localhost:3000')
      //    .then(res => console.log(res));
      console.log("hh");
   });
};

export default showMoreStyle;