const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');

const body = document.body;

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if(theme){
    body.classList.add(theme);
    isSolar && body.classList.add('solar');
}

darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
}


lightButton.onclick = () => {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
}


solarButton.onclick = () => {
    if(body.classList.contains('solar')){
        body.classList.remove('solar');
        solarButton.style.cssText = '--bg-solar: var(--yellow)';
        solarButton.innerText = 'Solar'
        localStorage.removeItem('isSolar');
    } else {
        body.classList.add('solar');
        solarButton.style.cssText = '--bg-solar: white';
        solarButton.innerText = 'Normal'
        localStorage.setItem('isSolar', true);
    }
}