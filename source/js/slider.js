const slider = document.querySelector('.slider')
let slideItem = document.querySelectorAll('.slider-item')
const colSlider = 2 // вот тут менять количество
let sliderWidth = window.getComputedStyle(slideItem[0].querySelector('img')).getPropertyValue('width').replace(/[^0-9]/g,"")
const gapSlider = 30
sliderWidth = Number(sliderWidth) + gapSlider
if(slideItem.length  % colSlider == 0){
    for (let index = slideItem.length-colSlider; index < slideItem.length; index++) {
        document.querySelector('.slider-container').insertBefore(slideItem[index].cloneNode(true),document.querySelector('.slider-container').firstChild)
    }
    for (let index = 0; index < colSlider; index++) {
        document.querySelector('.slider-container').appendChild(slideItem[index].cloneNode(true))
    }
}else{
    // Если тут ни чего нету я не придумал как сделать грамотно деление на слайды, например при 6 слайдах и отображение 4 он должен показывать 4 и 2, в тестовом задание про это не говорится но сделать нужно
}
slideItem = document.querySelectorAll('.slider-item')
const sliderContainer = document.querySelector('.slider-container')
const prevSlide = document.querySelector('.slider-prev')
const nextSlide = document.querySelector('.slider-next')
const paginationContainer =  document.querySelector('.slider-pagination')
const slidetStep = sliderWidth*colSlider
const delay = 500
let tekSliderWidth = slidetStep
let tekSliderStep = 0
let lastElement = ''
let firstElement = ''
let isActive = false
slider.style.width = sliderWidth*colSlider+'px'
sliderContainer.style.width = sliderWidth*slideItem.length+'px'
sliderContainer.style.gap = gapSlider+'px'
sliderContainer.style.transform = 'translateX(-'+slidetStep+'px)'
setTimeout(() => {
    sliderContainer.style.transition = 'transform '+(delay/1000)+'s ease-in-out'
}, 0);

nextSlide.addEventListener('click',()=>{
    if(!isActive){
        isActive = true
        if(tekSliderWidth < sliderWidth*slideItem.length - slidetStep*2){
            sliderContainer.style.transform = 'translateX(-'+(Number(tekSliderWidth)+Number(slidetStep))+'px)'
            tekSliderWidth = sliderContainer.style.transform.replace(/[^0-9]/g,"")
            tekSliderStep = tekSliderStep + 1
        }else{
            sliderContainer.style.transition = 'none'
            sliderContainer.style.transform = 'translateX(0px)'
            setTimeout(() => {
                sliderContainer.style.transition = 'transform '+(delay/1000)+'s ease-in-out'
                sliderContainer.style.transform = 'translateX(-'+slidetStep+'px)'
            }, 0);
            tekSliderWidth = slidetStep
            tekSliderStep = 0
        }
        setTimeout(() => {
            isActive = false
            setActiveButton(tekSliderStep)
        }, delay);
    }
})

prevSlide.addEventListener('click',()=>{
    if(!isActive){
        isActive = true
        if(tekSliderWidth > slidetStep){
            sliderContainer.style.transform = 'translateX(-'+(tekSliderWidth-slidetStep)+'px)'
            tekSliderWidth = sliderContainer.style.transform.replace(/[^0-9]/g,"")
            tekSliderStep = tekSliderStep - 1
        }
        else{
            sliderContainer.style.transition = 'none'
            sliderContainer.style.transform = 'translateX(-'+(sliderWidth*slideItem.length-slidetStep)+'px)'
            tekSliderWidth = sliderWidth*slideItem.length-slidetStep
            setTimeout(() => {
                sliderContainer.style.transition = 'transform '+(delay/1000)+'s ease-in-out'
                sliderContainer.style.transform = 'translateX(-'+(tekSliderWidth-slidetStep)+'px)'
            }, 0);
            tekSliderWidth = sliderWidth*slideItem.length-slidetStep
            tekSliderStep = paginationContainer.querySelectorAll('button').length-1
        }
    setTimeout(() => {
        isActive = false
        setActiveButton(tekSliderStep)
    }, delay);
    }
})

for (let index = 0; index < ((slideItem.length-(colSlider*2))/colSlider); index++){
    paginationContainer.appendChild(document.createElement('button'))
}
paginationContainer.querySelector('button').classList.add('active')

paginationContainer.querySelectorAll('button').forEach((el,index)=>el.addEventListener('click',()=>{
    if(!el.classList.contains('active')){
        paginationContainer.querySelectorAll('button').forEach((el=>el.classList.remove('active')))
        el.classList.add('active')
        tekSliderWidth = (index+1)*slidetStep
        sliderContainer.style.transform = 'translateX(-'+tekSliderWidth+'px)'
    }
}));

function setActiveButton(x){
    paginationContainer.querySelectorAll('button').forEach((el=>el.classList.remove('active')))
    paginationContainer.querySelectorAll('button')[x].classList.add('active');
}

// про то что не делать на кнопках там же всего 7 строчек не вижу не чего тяжёлого

// document.addEventListener('keydown',(event)=>{
//     if(event.code === 'ArrowLeft'){
//         prevSlide.click()
//     }else if(event.code === 'ArrowRight'){
//         nextSlide.click()
//     }
// })
  
//на счёт перетаскивание там нужно что то типо драг анд дроп и проверка куда ближе обратно вернуть или дальше скроллить
// понадобится слушатели мыши mouseleave,mouseup,mousedown,mousemove и что то типо getBoundClientRect()
// вроде так пишется
