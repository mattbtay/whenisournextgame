$(document).ready(function(){

var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1UbUmFSyn7sEeTS7hJ0H9kpzgU1196RYyIo6CFTwPtVY/pubhtml';

function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {
    //alert("Successfully processed!")
    console.log(data);
    //console.log(data[9].Day);
    //console.log(data.length);

    	


   for (var i = 0; i < data.length; i++) {
      
        var today = moment();
        

       var gameDay = data[i].Day,
            gameString = data[i].gameDate + ', ' + data[i].Start
            gameDate = moment(gameString, 'YYYY-MM-DDThh:mm').toISOString();
            gameTime = data[i].Start,
            gameTeam = data[i].Home,
            gameResult = data[i].Result,
            gamePlayerPicture = data[i].gamePlayerPhoto;
            //alert(gameDate);

      if( moment().isSame(gameDate )){
        $('.gameDay').html(gameDay);
          $('.gameDate').html(gameDate);
          $('.gameTime').html(gameTime);
          $('.gameTeam').html(gameTeam);

        break; 

      } else if ( moment().isBefore(gameDate) ){


          $('.gameDate').html(moment(gameDate).format('dddd, MMMM DD'));
          var newTime = moment(gameTime, 'hh:mm').format('h:mm');
          $('.gameTime').html(newTime);
          $('.gameTeam').html(gameTeam);
          $('#gamePlayerPicture').prop('src', gamePlayerPicture);


          var lastGameResult = data[i].length - 2;
        console.log(lastGameResult);
         //var prevGame = data[lastGameResult].Result;
            $('.gameResult').html(lastGameResult);
          
          console.log(gamePlayerPicture);
          break;

        }


        

    }// end loop


   	

  }// end table


	init();





});






