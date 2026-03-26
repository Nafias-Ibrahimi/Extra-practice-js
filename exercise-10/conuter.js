const h1 = document.createElement('h1');
h1.textContent = 'Real-time Character Counter';
document.body.appendChild(h1);
document.body.style=`
  display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-color:lightblue;
`

const textarea = document.createElement('textarea');
textarea.id = 'myTextarea';
textarea.placeholder = 'Type something ...';
document.body.appendChild(textarea);
textarea.setAttribute('style',`width:300px; height:100px; padding:10px; 
    
    font-size:16px;margin-bottom:10px`);

const div = document.createElement('div');
div.id = 'counter';
div.textContent = 'Characters: 0';
document.body.appendChild(div);

const counter = document.querySelector('#counter');

textarea.addEventListener('input', () => {
  const length = textarea.value.length;
  counter.textContent = `Characters: ${length}`;
  counter.setAttribute('style',`margin-top:10px; font-weight:bold;`)
});
