const saveThem=localStorage.getItem('them') || 'light';
document.body.className=saveThem;
const button=document.getElementById('toggleBtn');
button.addEventListener('click' ,() =>{
    const currentThem=document.body.className;
    const newTheme=currentThem === 'light' ? 'dark' : 'light';
    document.body.className=newTheme;
    localStorage.setItem('theme' , newTheme)
} )