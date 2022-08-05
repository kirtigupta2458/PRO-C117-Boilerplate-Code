var date = new Date()
let display_date= "Date:" + date.toLocaleDateString()

//Load HTML DOM
$(document).ready(function () {
    $("#display_date").html(display_date)
})

let predicted_emotion;

//jQuery selector and click action

$(function () {
    $("#predict_button").click(function () {
        //AJAX call

        $.ajax({
            
            
              {
                
                // Result Received From Flask ----->JavaScript
                
                // Display Result Using JavaScript----->HTML
                
            },
            //Error function
            
        });
    });
})

