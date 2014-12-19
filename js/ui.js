var myInput = document.querySelector('#add');

myInput.onclick = function () {
    var newLi = document.createElement('li');
    var newSpan = document.createElement('span');
    var newCheck = document.createElement('input');
    newCheck.type = 'checkbox';
    var newButton= document.createElement('input');
    newButton.type = 'button';
    newButton.setAttribute('value','delete');
    newButton.classList.add('delete');

    newLi.appendChild(newSpan);
    newLi.appendChild(newCheck);
    newLi.appendChild(newButton);

    var text = document.querySelector('#message').value;

    if(text != ''){
        newSpan.textContent = text;
        document.querySelector('.list').appendChild(newLi);
        document.querySelector('#message').value = '';
    }

    newButton.addEventListener('click', function(event){
        event.target.parentNode.parentNode.removeChild(this.parentNode);
    })



    newCheck.addEventListener('click', function(){
        if (newCheck.checked) {
            newCheck.classList.add('qqq');
            newCheck.parentNode.style.textDecoration='line-through';
        } else {
            newCheck.classList.remove('qqq');
            newCheck.parentNode.style.textDecoration='none';
        }
    });




};

