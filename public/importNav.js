fetch('nav.html').then(response => response.text()).then(data =>{
    document.getElementsByClassName('header')[0].innerHTML = data;
}).catch(error => {
    console.error("erro ao carregar o nav: ", error)
})