let buttons = document.querySelectorAll(".btn-tag");
const tagOn = "btn-tag-on";

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (button.classList.contains(tagOn)) {
            button.classList.remove(tagOn);
        } else {
            button.classList.toggle(tagOn);
        }
    });
});


