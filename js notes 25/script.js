const emojis = document.querySelectorAll('#emojis');
const feedbackButton = document.getElementsByClassName('feedback')[0]; // Select the feedback button


emojis.forEach((emoji) => {
    emoji.addEventListener('click', function() {
        emojis.forEach((eachEmoji) => eachEmoji.classList.remove('active')); 
        emoji.classList.add('active');
        selectedEmoji = emoji.textContent; 
    });
});

feedbackButton.addEventListener('click', function() {
    if (selectedEmoji) {


        Swal.fire({
            title: `Thank you For FeedBack ${selectedEmoji}`,
            icon: "success",
            draggable: true
          });

    
    } else {
        Swal.fire({
            icon: "error",
            title: "Please Select First Emoji's",
          });

    }
});  