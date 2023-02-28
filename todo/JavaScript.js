var $lista = document.querySelector('ul');
var $atividades = document.querySelector('#atividades');
var $botao = document.querySelector('#myButton');

$botao.addEventListener('click' ,  addAtividade);


function addAtividade() {
    let item = document.createElement('li');
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox';

    let itemText = document.createTextNode($atividades.value);
    item.appendChild(itemText);
    item.appendChild(checkbox);

    //checkbox.innerHTML = $atividades.value;
    item.addEventListener('click', function (e) {
        item.classList.toggle('marked');
    });
    $lista.appendChild(item);
    // checkbox.appendChild(item);
    // $lista.innerHTML += item; 
    $atividades.value = '';
    $atividades.focus();
}

$atividades.addEventListener('keyup', function(e){
    if (e.keyCode === 13) {
        addAtividade()
    }
})



