console.log('in js');
$(document).ready(onReady);
function onReady(){
    console.log('in jQuery');
    $('#addPlayersButton').on('click', inputPlayers)

    $.ajax({ // ajax go to server
        url: '/players',
        method: 'GET'//reqst to server

    }).then(function (response){
        // $('.ulPlayers').empty();
        response.forEach(function(players) {
            $('#playersBody').append(`
         <ul class= ulPlayers>
            <li class= playersNameOut>${players.name}</li>
        </ul>
          `);
        });
        // for (let i = 0; i < response.length; i++) {//response.foreach(wolfObject)=>
        //     console.log(response[i]);
        //     let players = response[i];

        //}
    });// end response function

}//end onReady

function inputPlayers(){
    // let newPlayers = $('#playersNameIn').val();
    // console.log('newplyaers:', newPlayers);
    let newPlayers = $('#playersNameIn').val()
    $.ajax({//use ajax, send them to the server
        url:'/new', 
        method: 'POST',
        data:{
            name: newPlayers, 
        }

    }).then(function(){
        $.ajax({ // ajax go to server
            url: '/players',
            method: 'GET'//reqst to server

        }).then(function (response) {
            $('.ulPlayers').empty();
            for (let i = 0; i < response.length; i++) {
                console.log(response[i]);
                let players = response[i];
                $('#playersBody').append(`
        <ul class= ulPlayers>
            <li class= playersNameOut>${players.name}</li>
        </ul>
        `);
            }
        })// end response function
    })//end ajax

};// end inputPlayers