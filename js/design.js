document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth > 600) {
        // Select IMMEDIATE AND DIRECT as default
        var defaultPrinciple = document.getElementById("principle1");
        defaultPrinciple.classList.add("selected");
        // Make background red for selected circle
        defaultPrinciple.querySelector(".circle").style.backgroundColor = "#EF3B42";
        // Change text color to white for selected circle
        defaultPrinciple.querySelector(".circle").style.color = "white";
        // Remove border for selected circle
        defaultPrinciple.querySelector(".circle").style.border = "none";
        var defaultDescription = document.getElementById("principle1-description");
        defaultDescription.style.display = "block";

        // Set initial background colors for other circles to grey
        var principles = document.querySelectorAll(".principle-selection:not(#principle1)");
        principles.forEach(function(principle) {
            principle.querySelector(".circle").style.backgroundColor = "#E0E0E0";
            principle.querySelector(".circle").style.color = "#B9B9B9";
            principle.querySelector(".circle").style.border = "1px dotted #B9B9B9";
        });

        // Selecting principles
        var principles = document.querySelectorAll(".principle-selection");
        principles.forEach(function(principle) {
            principle.addEventListener("click", function() {
                // Remove selected class from all principles
                principles.forEach(function(item) {
                    item.classList.remove("selected");
                    // Make background grey for unselected circles
                    item.querySelector(".circle").style.backgroundColor = "#E0E0E0";
                    // Change text color to #B9B9B9 for unselected circles
                    item.querySelector(".circle").style.color = "#B9B9B9";
                    // Add dotted border for unselected circles
                    item.querySelector(".circle").style.border = "1px dotted #B9B9B9";
                });
                // Add selected class to clicked principle
                principle.classList.add("selected");

                // Hide all descriptions
                var descriptions = document.querySelectorAll(".principle-description");
                descriptions.forEach(function(description) {
                    description.style.display = "none";
                });

                // Show description for selected principle
                var principleId = principle.id;
                var selectedDescription = document.getElementById(principleId + "-description");
                selectedDescription.style.display = "block";

                // Make background red for selected circle
                principle.querySelector(".circle").style.backgroundColor = "#EF3B42";
                // Change text color to white for selected circle
                principle.querySelector(".circle").style.color = "white";
                // Remove border for selected circle
                principle.querySelector(".circle").style.border = "none";
            });
        });
    }

    /*const trigger = document.querySelector('.design-deep-dive-trigger');
    const deepDiveSection = document.getElementById('design-deep-dive');

    trigger.addEventListener('click', function() {
        if (deepDiveSection.style.display === 'none' || deepDiveSection.style.display === '') {
            deepDiveSection.style.display = 'block';
        } else {
            deepDiveSection.style.display = 'none';
        }
    });*/

});
