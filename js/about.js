// 아코디언
const qna = document.querySelector('.qna-list')
const qnaQ = qna.querySelectorAll('.question')
console.log(qnaQ)

const aBtn = qna.querySelectorAll('span')


for(let item of qnaQ){
  item.addEventListener('click',()=>{
    for(let item of qnaQ){
      item.classList.remove('active')
    }
    item.classList.add('active')
  })
}