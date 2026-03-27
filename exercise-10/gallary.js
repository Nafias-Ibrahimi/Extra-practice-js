//making h1
const h1 = document.createElement('h1');
h1.textContent = 'Gallery Viewer';
document.body.appendChild(h1);

// making image
const img = document.createElement('img');
img.id = 'galleryImage';
img.alt = 'Gallery Image';
document.body.appendChild(img);
// making div
const div = document.createElement('div');
div.className = 'controls';
document.body.appendChild(div);

// before button
const prevBtn = document.createElement('button');
prevBtn.id = 'prevBtn';
prevBtn.textContent = 'Previous';
div.appendChild(prevBtn);

//next  button 
const nextBtn = document.createElement('button');
nextBtn.id = 'nextBtn';
nextBtn.textContent = 'Next';
div.appendChild(nextBtn);

// lists of images
const images = [
  'https://images.pexels.com/photos/5490982/pexels-photo-5490982.jpeg',
  'https://images.pexels.com/photos/1450476/pexels-photo-1450476.png',
  'https://images.pexels.com/photos/309183/pexels-photo-309183.jpeg'
];

let currentIndex = 0;
img.src = images[currentIndex];

// event button
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  img.src = images[currentIndex];
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  img.src = images[currentIndex];
});

// style with js
document.body.style.cssText = `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  background-color: #f4f4f4;
`;

img.style.cssText = `
  width: 400px;
  height: 250px;
  object-fit: cover;
  border: 2px solid #333;
  margin-bottom: 20px;
`;

div.style.cssText = `
  display: flex;
  justify-content: center;
`;

prevBtn.style.cssText = `
  margin: 0 10px;
  padding: 10px 20px;
  cursor: pointer;
`;

nextBtn.style.cssText = `
  margin: 0 10px;
  padding: 10px 20px;
  cursor: pointer;
`;
