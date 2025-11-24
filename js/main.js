// 백투탑
const btt = document.querySelector('#btt');

window.addEventListener('scroll',()=>{
  let sc = window.scrollY;
  if(sc >= 200){
    btt.classList.add('active');
  }else{
    btt.classList.remove('active');
  }
})