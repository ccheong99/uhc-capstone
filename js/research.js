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