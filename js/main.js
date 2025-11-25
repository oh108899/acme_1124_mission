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
btt.addEventListener('click',(e)=>{
  e.preventDefault();
  window.scrollTo({
    top:0,
    left:0,
    behavior:'smooth'});
})

//슬라이드
const tester = document.querySelector('.testimonial');
const testerUl = tester.querySelector('ul');
const testerLi = testerUl.querySelectorAll('li');
const pbt = tester.querySelector('.prev');
const nbt = tester.querySelector('.next');
let curIdx = 0;

function move(idx){
  testerUl.style.left = idx * -100 + '%';
  curIdx = idx;
}
nbt.addEventListener('click',()=>{
  let next = (curIdx + 1)% testerLi.length;
  move(next);
})
pbt.addEventListener('click',()=>{
  let next = (curIdx - 1 + testerLi.length)% testerLi.length;
  move(next);
})

