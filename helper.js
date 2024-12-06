const the_animation = document.querySelectorAll('.animation')

const observer = new IntersectionObserver(x => {
    x.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            else {
                entry.target.classList.remove('scroll-animation')
            }
        
    })
}, { threshold: 0.5});
//
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
  } 

  const the_animation2 = document.querySelectorAll('.animation2')

const observer2 = new IntersectionObserver(x => {
    x.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation2')
        }
            else {
                entry.target.classList.remove('scroll-animation2')
            }
        
    })
}, { threshold: 0.5});
//
  for (let i = 0; i < the_animation2.length; i++) {
   const elements = the_animation2[i];

    observer2.observe(elements);
  }


  const the_animation3 = document.querySelectorAll('.icon-wrapper')

const observer3 = new IntersectionObserver(x => {
    x.forEach(y => {
        if (y.isIntersecting) {
            y.target.classList.add('scroll-animation3')
        } else {
            y.target.classList.remove('scroll-animation3')
            }
        
    })
}, { threshold: 0.5});
//
  for (let i = 0; i < the_animation3.length; i++) {
   const elements = the_animation3[i];

    observer3.observe(elements);

    //let spans = document.querySelectorAll('span')
  //let [first, second, third, fourth, fifth, sixth] = spans
  let text = document.querySelector('.infoText')
  let info = document.querySelector('.types')
  let categoryBtns = Array.from(document.querySelectorAll('.dropdown a')).slice(0, 3)
  categoryBtns.forEach(x => x.addEventListener('click', show)) 
  function show(e){
    let i = categoryBtns.indexOf(e.target)
    if(i !== -1){
      info.style.display = 'block'
    }
    if(i === 0){
     text.textContent = 'Веганите не ядат никакви животински продукти, докато вегетарианците не ядат месо, но ядат продукти, които идват от животни (като млечни продукти, яйца и мед). Веганите и вегетарианците избират да следват тези начини на хранене по здравословни причини, религиозни ограничения или морални ценности относно животните.'
    info.style.height = '320px'
    }
    if(i === 1){
     text.textContent = 'Лакто вегетарианците ядат млечни продукти, но без яйца, месо, птици или морски дарове. Ово вегетарианците ядат яйца, но без млечни продукти, месо, птици или морски дарове.'
     info.style.height = '180px'
    }
    if(i === 2){
     text.textContent = 'Песко вегетарианците или пескатарианците технически не отговарят на общото определение за вегетарианци. Хората, които спазват тази полу-вегетарианска диета, ядат риба и други морски дарове, но не и домашни птици или месо.'
     info.style.height = '220px'
  }
}
let btn = document.querySelector('.closeX')
btn.addEventListener('click', () => {
  document.querySelector('.types').style.display = 'none'
})
  }

  const animateP = e => {

    const textInTimer = 1000, textOutTimer = 800
    const txts = e.children
    const txtsLen = txts.length
    let index = 0
  
    const animateSpan = () => {
      for (let i = 0; i < txtsLen; i++)
        txts[i].classList.remove("text-in", "text-out")
      txts[index].classList.add("text-in")
  
      setTimeout(function () {
        txts[index].classList.add("text-out")
      }, textOutTimer)
  
      setTimeout(function () {
        if (index == txtsLen - 1)
          index = 0
        else
          index++
        animateSpan()
      }, textInTimer)
    }
  
    animateSpan()
  }
  
  document.querySelectorAll(".animate-text").forEach(e => {
    animateP(e)
  })