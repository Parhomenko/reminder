var myInput = document.querySelector('#add');

myInput.onclick = function () {
    var text = document.querySelector('#message').value;

    if (text != '') {
        var newLi = document.createElement('li');
        var newCheck = document.createElement('input');
        newCheck.type = 'checkbox';
        var newSpan = document.createElement('span');
        var newButton = document.createElement('input');
        newButton.type = 'button';
        newButton.setAttribute('value', 'delete');
        newButton.classList.add('delete');

        newLi.appendChild(newCheck);
        newLi.appendChild(newSpan);
        newLi.appendChild(newButton);


        newButton.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.removeChild(this.parentNode);
        })


        newCheck.addEventListener('click', function () {
            if (newCheck.checked) {
                newCheck.parentNode.classList.add('qqq');
            } else {
                newCheck.parentNode.classList.remove('qqq');
            }
        });

        newSpan.textContent = text;
        document.querySelector('.list').appendChild(newLi);
        document.querySelector('#message').value = '';
    }



    document.querySelector('#delete_checked').addEventListener('click', function(){
       var elements = document.getElementsByClassName('qqq');
        while(elements.length > 0){
          elements[0].parentNode.removeChild(elements[0]);
        }
    });




    document.querySelector('#delete_all').addEventListener('click', function(){
        document.querySelector('.list').innerHTML='';
    });



};