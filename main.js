let chatButton = document.querySelector('.we-chat-button button')
let chatPopup = document.querySelector('.we-chat-popup')
let chatpopupClose = document.querySelector('.popup-close button')
let Showhide = (height, wihth, transition, visibility, opacity, buttonvisibility, buttonopacity, buttontransition) => {
    // chat popup hide and show
    chatPopup.style.height = height
    chatPopup.style.width = wihth
    chatPopup.style.transition = transition
    chatPopup.style.visibility = visibility
    chatPopup.style.opacity = opacity
    //----------chat button hide and show
    chatButton.style.visibility = buttonvisibility
    chatButton.style.opacity = buttonopacity
    chatButton.style.transition = buttontransition
}

// chat button click 
chatButton.addEventListener("click", (e) => {
    e.preventDefault()
    Showhide('450px', '400px', '.4s all ease-in-out', 'visible', '1', 'hidden', '0', '.4s all ease-in-out')
})
// close popup button click
chatpopupClose.addEventListener('click', (e) => {
    e.preventDefault()
    Showhide('0px', '0px', '.4s all ease-in-out', 'hidden', '0', 'visible', '1', '.4s all ease-in-out')

})