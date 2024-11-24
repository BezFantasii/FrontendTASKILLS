const wrapper = document.querySelector('.header');
const layers = document.querySelectorAll('.box');

const handleParallax = (evt) => {
    try{
        //размер области просмотра
        const parallaxLeftOffset = wrapper.getBoundingClientRect().left;
        const parallaxTopOffset = wrapper.getBoundingClientRect().top;

        // координаты центра экрана
        const coordX = evt.clientX - parallaxLeftOffset - 0.5 * wrapper.offsetWidth;
        const coordY = evt.clientY - parallaxTopOffset - 0.5 *  wrapper.offsetHeight;
        layers.forEach((layer)=>{
        const layerSpeed = layer.dataset.speed;
        const x = - (coordX * layerSpeed).toFixed(2);
        const y = - (coordY * layerSpeed).toFixed(2);
        console.log(x, y, layerSpeed)
        layer.setAttribute('style', `transform: translate(${x/10}px, ${y/10}px);`)
        });
    } catch(e){
        console.log(e);
    }
};

const reset = () => {
  layers.forEach((layer)=>{
      layer.removeAttribute('style');
  });
}
 
wrapper.addEventListener('mousemove', handleParallax);
wrapper.addEventListener('mouseout', reset);