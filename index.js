$(document).ready(function(){
    

    $('form').on('submit', function(e){
        e.preventDefault();
        const campoTarefa = $('#campo-tarefa').val();
        const newItem = $('<li></li>');

        $('#lista-tarefas').off('click', 'li');

        $('#lista-tarefas').on('click', 'li', function(){    //on reconhece o evento click no li
            $(this).toggleClass('risco-tarefa');   //o this se refere ao li 
            // o toggleClass me permite criar uma class sem precisar fazer isso no html
        })
    $(`
        <li >
            ${campoTarefa}
        </li>
    `).appendTo(newItem);
    $(newItem).appendTo('ul');
    
    $('#campo-tarefa').val('');

    });
})