$(document).ready(function(){

var correctAnswers = 0
var wrongAnswers = 0
var counter = 5    

$("#quiz").hide()
$("#correct").hide()
$("#wrong").hide()
$("#timerr").hide()
 

function start() {

    var newCounter = $("#timer").val()
            
            $("#start").click(function(){
                $(this).hide()
                $("#quiz").show()
                $("#timerr").show()  
                
                setInterval(function(){
                    
                    if (counter > 0) {

                        counter--;
                    }
                    
                    $("#timer").text(counter)

                    if (counter === 0) {
                        $("#correct").show()
                        $("#wrong").show()
                        $("#timerr").hide()
                        $("#quiz").hide()
                        // Cannot figure out how to refernce which answer is selected and .text how many
                        // correct/wrong answers into the html.
                        function answerChecker() {

                            var correctAnswers = 0
                            var wrongAnswers = 0
                            
                            var q1 = document.forms["1"]["q1"].value
                            var q2 = document.forms["2"]["q2"].value
                            var q3 = document.forms["3"]["q3"].value
                            var q4 = document.forms["4"]["q4"].value
                           
                            alert(q1)
                            $("#wro").text(wrongAnswers)
                            $("#corr").text(correctAnswers)

                            if ($("#right").is(":selected") === true) {
                                
                                correctAnswers++;
                            }
    
                            else {
                            
                                wrongAnswers++;
                            }
                        }
                        answerChecker()
                
                        
                    }
                
                }, 1000);
                 
                
                
            });
        }
        start()

function quiz() {
    


}


});


