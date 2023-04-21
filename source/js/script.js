if(localStorage.getItem('cookie') != 'true'){
    document.querySelector('.cookie').classList.add('active')
}

document.querySelector('.header-login').addEventListener('click',()=>{
    alert('Тут должна быть модалка')
})

document.querySelector('.join-container__link-login').addEventListener('click',()=>{
    alert('Тут должна быть модалка')
})

document.querySelector('.cookie-accept').addEventListener('click',()=>{
    localStorage.setItem('cookie','true')
    document.querySelector('.cookie').classList.remove('active')
    document.querySelector('.cookie').classList.add('deactive')
    setTimeout(() => {
        document.querySelector('.cookie').classList.add('deactive')
    }, 500);
})

function getFos(){
    document.querySelectorAll('.get-container input').forEach(el=>{
        if(el.value.length < 1){
            el.style.borderColor = '#FF0000'
            document.querySelector('.get-button').classList.add('deactive')
            setTimeout(() => {
                el.style.borderColor = '#5C5C5C'
                document.querySelector('.get-button').classList.remove('deactive')
            }, 3000);
        }
    })
    document.querySelectorAll('.get-container textarea').forEach(el=>{
        if(el.value.length < 1){
            el.style.borderColor = '#FF0000'
            document.querySelector('.get-button').classList.add('deactive')
            setTimeout(() => {
                el.style.borderColor = '#5C5C5C'
                document.querySelector('.get-button').classList.remove('deactive')
            }, 3000);
        }
    })
}
document.querySelectorAll('.get-container input').forEach(el=>el.addEventListener('input',()=>{
    if(el.value.length < 1){
        el.style.borderColor = '#FF0000'
        document.querySelector('.get-button').classList.add('deactive')
        setTimeout(() => {
            el.style.borderColor = '#5C5C5C'
            document.querySelector('.get-button').classList.remove('deactive')
        }, 3000);
    }
}))
document.querySelectorAll('.get-container textarea').forEach(el=>el.addEventListener('input',()=>{
    if(el.value.length < 1){
        el.style.borderColor = '#FF0000'
        document.querySelector('.get-button').classList.add('deactive')
        setTimeout(() => {
            el.style.borderColor = '#5C5C5C'
            document.querySelector('.get-button').classList.remove('deactive')
        }, 3000);
    }
}))

if(innerWidth < 750){
    document.querySelector('.mission img').src = '/source/image/missionPhoneMobile.png'
}


if(innerWidth < 800){
    document.querySelector('.integration-container-image').src = '/source/image/integrationPhone.png'
}