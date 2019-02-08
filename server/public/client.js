console.log('in js');
$(document).ready(onReady);
function onReady(){
    console.log('in jQuery');
    $('#addPlayersButton').on('click', inputPlayers)

    $.ajax({ // ajax go to server
        url: '/players',
        method: 'GET'//reqst to server

    }).then(function (response){
        $('#ulPlayers').empty();

        for (let i = 0; i < response.length; i++) {//response.foreach(wolfObject)=>
            console.log(response[i]);
            let players = response[i];
        $('#playersBody').append(`
        <ul class= ulPlayers>
            <li class= playersNameOut>${players.name}</li>

        </ul>
        `);
        }
    })// end response function

};//end onReady

function inputPlayers(){
    let newPlayers = $('#playersNameIn').val();
    console.log(newPlayers);
    
};// end inputPlayers