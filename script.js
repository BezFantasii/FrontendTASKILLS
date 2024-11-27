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
document.addEventListener('DOMContentLoaded', () => {
    const projectNames = document.querySelectorAll('.projects__name__name');
    const projectImage1 = document.querySelector('.projects__img1');
    const projectDescription = document.querySelector('.project__about'); // Селектор для текста под изображением
    const figmaButton = document.querySelector('.figma');

    // Устанавливаем первый проект как активный и задаем изображение и текст по умолчанию
    const firstProject = document.querySelector('#projects__name1');
    firstProject.classList.add('active');
    projectImage1.src = firstProject.getAttribute('data-image'); // Устанавливаем изображение по умолчанию
    projectDescription.textContent = firstProject.getAttribute('data-text'); // Устанавливаем текст по умолчанию

    projectNames.forEach(project => {
        project.addEventListener('click', () => {
            // Удаляем класс active у всех элементов
            projectNames.forEach(p => p.classList.remove('active'));

            // Добавляем класс active к текущему элементу
            project.classList.add('active');

            // Меняем изображение и текст в зависимости от выбранного проекта
            const newImageSrc = project.getAttribute('data-image');
            projectImage1.src = newImageSrc; // Меняем первую картинку

            const newText = project.getAttribute('data-text');
            projectDescription.textContent = newText; // Меняем текст
        });
    });

    // Убираем анимацию при клике на кнопку
    figmaButton.addEventListener('click', (event) => {
        // Убираем анимацию
        figmaButton.style.transition = 'none';

        // Делаем что-то при клике на кнопку (например, открытие ссылки)

        // Восстанавливаем анимацию через 1 миллисекунду
        setTimeout(() => {
            figmaButton.style.transition = ''; // Восстанавливаем анимацию
        }, 1);
    });
});
