console.log('in js');
$(document).ready(onReady);
function onReady(){
    console.log('in jQuery');
    $('#addPlayersButton').on('click', inputPlayers)
    
    $.ajax({ // ajax go to server
        url: '/players',
        method: 'GET'//reqst to server
        
    }).then(function (response){
        
        $('.ulPlayers').empty();
        response.forEach(function(players) {
            $('.ulPlayers').append(`
            <li class= playersNameOut>${players.name}</li>
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
    let newPlayers = $('#playersNameIn').val();
    $('#playersNameIn').val('');//cannot empty(), have to use val('')
    // $('.ulPlayers').empty();
    $.ajax({//use ajax, send them to the server
        url:'/players', 
        method: 'POST',
        data:{
            name: newPlayers, 
         }

    }).then(function(){
        getAllPlayers();
        });
}
function getAllPlayers(){
        $.ajax({ // ajax go to server
            url: '/players',
            method: 'GET'//reqst to server

        }).then(function (response) {
            $('.ulPlayers').empty();
            $('#dropDownPlayer').empty();
            $('#dropDownOpponent').empty();
            for (let i = 0; i < response.length; i++) {
                console.log(response[i]);
                let players = response[i];
                $('.ulPlayers').append(`  
                 <li class= playersNameOut>${players.name}</li>       
                 `);

                
                $('#dropDownPlayer').append(`
                <option>${players.name}</option>
                `);
                // 
                
                $('#dropDownOpponent').append(`
                <option>${players.name}</option>
                `)
                // 
            }
        })// end response function
    //end ajax
};