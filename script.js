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
// function updateImageSrc() {
//     const img = document.getElementById('img__right__lines');
    
//     const screenWidth = window.innerWidth;

//     if (screenWidth <600) {
//         img.src = './assets/img_left_lines_desktop.svg'; // Замените на путь к маленькому изображению
//     } else {
//         img.src = './assets/img_left_lines_desktop.svg'; // Замените на путь к большому изображению
//     }
// }

// // Обновляем изображение при загрузке страницы
// updateImageSrc();

// // Обновляем изображение при изменении размера окна
// window.addEventListener('resize', updateImageSrc);