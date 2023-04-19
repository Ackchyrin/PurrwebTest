// Я не вижу смысла тут раздеять js её очень мало

if(localStorage.getItem('cookie') != 'true'){
    document.querySelector('.cookie').classList.add('active')
}

document.querySelector('.header-login').addEventListener('click',()=>{
    alert('Тут должна быть модалка')
})


// По идее нужно сделать true в json
document.querySelector('.cookie-accept').addEventListener('click',()=>{
    localStorage.setItem('cookie',true)
    document.querySelector('.cookie').classList.remove('active')
    document.querySelector('.cookie').classList.add('deactive')
    setTimeout(() => {
        document.querySelector('.cookie').classList.add('deactive')
    }, 500);
})
