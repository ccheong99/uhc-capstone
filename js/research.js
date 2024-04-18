function toggleExpand(button) {
    var listItem = button.closest('.list-item');
    var listItemText = listItem.querySelector('.list-item-text');
    var listItemNumber = listItem.querySelector('.list-item-number');
    var listItemTag = listItem.querySelector('.list-item-tag');
    var HiddenContent = listItem.querySelector('.hidden-content');
    
    if (button.src.endsWith('expand-button-white.png')) {
        button.src = 'img/collapse-button.png';
        listItem.style.backgroundColor = 'white';
        listItemText.style.color = 'black';
        listItemNumber.style.color = 'black';
        listItemTag.style.backgroundColor = '#EF3B42';
        listItemTag.style.color = 'white';
        HiddenContent.style.display = 'flex';
    } else {
        button.src = 'img/expand-button-white.png';
        listItem.style.backgroundColor = '#EF3B42';
        listItemText.style.color = 'white';
        listItemNumber.style.color = 'white';
        listItemTag.style.backgroundColor = 'white';
        listItemTag.style.color = '#EF3B42';
        listItemTag.style.display = 'block';
        HiddenContent.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.overlay');
    const popups = document.querySelectorAll('.popup');

    const processBoxes = document.querySelectorAll('.process-box');

    processBoxes.forEach(function(processBox, index) {
        processBox.addEventListener('click', function() {
            // Show overlay
            overlay.style.display = 'block';

            // Show the specific popup
            popups[index].style.display = 'block';

            // Prevent scrolling on background
            document.body.style.overflow = 'hidden';
        });
    });

    // Close the specific popup when overlay is clicked
    overlay.addEventListener('click', function() {
        closePopups();
    });

    // Add event listeners to close buttons within each popup
    const closeButtons = document.querySelectorAll('.popup .close-button');
    closeButtons.forEach(function(closeButton) {
        closeButton.addEventListener('click', function() {
            closePopups();
        });
    });

    function closePopups() {
        overlay.style.display = 'none';
        popups.forEach(function(popup) {
            popup.style.display = 'none';
        });
        document.body.style.overflow = 'auto'; // Enable scrolling on background
    }
});


