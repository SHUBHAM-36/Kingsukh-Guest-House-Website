// Get the modal element
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById('popup-image');
var captionText = document.getElementById('caption');
var images = document.querySelectorAll('.gallery-images img');
var seeMoreBtn = document.getElementById("seeMoreBtn");
var closeBtn = document.querySelector(".close");

// When the user clicks on an image, open the modal and show that image
images.forEach(image => {
    image.addEventListener('click', function () {
        modal.style.display = "block";
        modalImg.src = this.src; // Set the clicked image's source to the modal
        captionText.innerHTML = `<h3>${this.getAttribute('data-name')}</h3><p>${this.getAttribute('data-description')}</p>`; // Set the caption text
    });
});

// When the user clicks on the "See More" button, open the modal with all images
seeMoreBtn.onclick = function() {
    modal.style.display = "flex"; // Display the modal in flex mode for centering content
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none"; // Hide the modal
}

// When the user clicks anywhere outside of the modal content, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none"; // Close the modal when clicking outside the modal content
  }
}


// Open booking form
function openForm(roomName) {
    document.getElementById("bookingForm").style.display = "flex";
    document.getElementById("room-name").textContent = roomName;
}

// Close booking form
function closeForm() {
    document.getElementById("bookingForm").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "none"; 
    document.getElementById("bookingFormContent").style.display = "block"; 
}

function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    document.getElementById("bookingFormContent").style.display = "none"; // Hide the form
    document.getElementById("thankYouMessage").style.display = "block"; // Show the thank you message
}



// Open reviews popup
function openReviews(roomName) {
    document.getElementById("reviewsPopup").style.display = "flex";
    document.getElementById("room-review-name").textContent = roomName;
}

// Close reviews popup
function closeReviews() {
    document.getElementById("reviewsPopup").style.display = "none";
}

function submitMessageForm(event) {
    event.preventDefault(); 
    document.querySelector('.message-form').style.display = "none"; // Hide the form
    document.getElementById('thankYouMessage').style.display = "block"; // Show thank you message
}

// Number animation for stats
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = 200; // Adjust speed here

        const increment = target / speed;

        if(count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target;
        }
    };
    
    updateCount();
});
