//hamburger

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
toggleButton.addEventListener('click', function(){
    navbarLinks.classList.toggle('active')
})

//FaQs accordion
const accordion = document.getElementsByClassName('content-container');
 for(i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click',function(){
    this.classList.toggle('active');
    })
 };

 //modal
 let openBtn = document.getElementById('submit-button');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');




openBtn.addEventListener('click',function(e){
    let typeOfRoom = document.querySelector('#room').value;
    let checkIn = document.getElementById('check-in').value;
    let checkOut = document.getElementById('check-out').value;
    document.getElementById('modal-check-in').innerText="Check-in-date: "+checkIn;
    document.getElementById('modal-check-out').innerText="check-out-date: "+checkOut;
    document.getElementById('modal-typeof-room').innerText="type of room: "+typeOfRoom;
    modalContainer.style.display = 'block';
    e.preventDefault();
    console.log(checkIn)
})

closeBtn.addEventListener('click',function(){
    modalContainer.style.display = 'none';
})
window.addEventListener('click',function(e){
    //if u dont use the object event then u won't be able to display modal when you click button
    if(e.target === modalContainer){
    modalContainer.style.display = 'none';
    }
}
)
function scrollToBookmark(bookmarkId) {
    const bookmarkElement = document.getElementById(bookmarkId);
    
    if (bookmarkElement) {
      bookmarkElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Bookmark with id "${bookmarkId}" not found.`);
    }
  }
