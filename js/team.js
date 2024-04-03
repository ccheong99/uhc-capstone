document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth > 600) {
        // Grayscale all member photos except Claire's
        grayscaleAllExcept("claire");

        // Select Claire as default member
        selectMember("claire");

        // Add event listeners to all member selections
        const memberSelections = document.querySelectorAll(".member-selection");
        memberSelections.forEach(member => {
            member.addEventListener("click", function() {
                const memberId = member.id.split("-")[1];
                selectMember(memberId);
            });
        });
    }
});

function selectMember(memberId) {
    // Deselect previously selected member
    const previouslySelectedMember = document.querySelector(".selected");
    if (previouslySelectedMember) {
        const prevMemberId = previouslySelectedMember.id.split("-")[1];
        grayscaleImage(prevMemberId, true);
        hideDescription(prevMemberId + "-description");
        previouslySelectedMember.classList.remove("selected");
    }

    // Select the clicked member
    const selectedMember = document.getElementById("member-" + memberId);
    grayscaleImage(memberId, false);
    showDescription(memberId + "-description");
    selectedMember.classList.add("selected");
}

function grayscaleAllExcept(memberId) {
    const allMembers = document.querySelectorAll(".member-selection");
    allMembers.forEach(member => {
        const currMemberId = member.id.split("-")[1];
        if (currMemberId !== memberId) {
            grayscaleImage(currMemberId, true);
        }
    });
}

function grayscaleImage(memberId, grayscale) {
    const img = document.querySelector("#member-" + memberId + " .member-img");
    if (grayscale) {
        img.src = "img/" + memberId + "-bw.png";
    } else {
        img.src = "img/" + memberId + ".png";
    }
}

function showDescription(descriptionId) {
    const description = document.getElementById(descriptionId);
    description.style.display = "block";
}

function hideDescription(descriptionId) {
    const description = document.getElementById(descriptionId);
    description.style.display = "none";
}
