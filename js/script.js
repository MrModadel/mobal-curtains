let btnsopen = document.querySelectorAll('[data-open]');
let btnsclose = document.querySelectorAll('[data-close]');
let Effect = document.querySelector('.burger-effect');
let mabal = document.querySelector('.main__burger-mn')
btnsopen.forEach(btn => {
   btn.onclick = () => {
      Effect.style.display = "flex";
      mabal.style.display = 'block';
      setTimeout(i => {
         Effect.style.opacity = "1";
         mabal.style.opacity = '1';
         mabal.style.width = '33.333%';
      }, 300)
   }
})
btnsclose.forEach(btn => {
   btn.onclick = () => {
      Effect.style.opacity = "0";
      mabal.style.opacity = '0';
      mabal.style.width = '16%';
      setTimeout(i => {
         Effect.style.display = "none";
         mabal.style.display = 'none';
      }, 300)
   }
})

