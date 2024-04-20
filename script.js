document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.ct');
    const incrementBtn = document.querySelector('.Increment');
    const decrementBtn = document.querySelector('.Decrement');
    const clearBtn = document.querySelector('.clear');
    const errorMessage = document.querySelector('.msg');

    let count = 0;

    function updateDisplay() {
        display.textContent = count;
        updateButtons();
    }

    function updateButtons() {
        if (count === 0) {
            clearBtn.style.display = 'none';
            decrementBtn.disabled = true;
            errorMessage.textContent = '';
        } else {
            clearBtn.style.display = 'block';
            decrementBtn.disabled = false;
        }
    }

    incrementBtn.addEventListener('click', function() {
        count++;
        updateDisplay();
    });

    decrementBtn.addEventListener('click', function() {
        if (count > 0) {
            count--;
            updateDisplay();
        } else {
            errorMessage.textContent = 'Cannot decrement below 0!';
        }
    });

    clearBtn.addEventListener('click', function() {
        count = 0;
        updateDisplay();
    });
});
