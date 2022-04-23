



/* ==========POP-UP CODE ==============*/

const popup = document.querySelector('.popups')
const talentModal = document.querySelector('#talent-school')
const visualModal = document.querySelector('#visual-hype')
const eventModal = document.querySelector('#event-host')
const talent = document.querySelector('#talent')
const visual = document.querySelector('#visual')
const events = document.querySelector('#event')



talent.addEventListener('click', () => {
    popup.classList.remove('not-visible')
    popup.classList.add('visible')
    talentModal.style.display = "block"
})


visual.addEventListener('click', () => {
    popup.classList.remove('not-visible')
    popup.classList.add('visible')
    visualModal.style.display = "block"
})

events.addEventListener('click', () => {
    popup.classList.remove('not-visible')
    popup.classList.add('visible')
    eventModal.style.display = "block"
    
})  

popup.addEventListener('click', () => {
    popup.classList.toggle('not-visible')
    talentModal.style.display = "none"
    visualModal.style.display = "none"
    eventModal.style.display = "none"

})




