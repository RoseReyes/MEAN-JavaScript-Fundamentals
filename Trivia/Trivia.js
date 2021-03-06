$(document).ready(function questions(){

    var count = 0; //count for questions answered
    var score = 0; 

    $("#newquestions").hide(); //hide the container of questions to display the score equivalent upon load of document
    $.get("https://opentdb.com/api.php?amount=11&category=9", displayQuestions) // request list of questions using quiz API
    function displayQuestions(data){
        $(".category").append(`<h3 class="bg-warning">${data.results[0].category}</h3>`)
        for(let i = 0; i<data.results.length;i++){ // loop through the sets of questions
            var question = data.results[i].question;

            if(data.results[i].difficulty == "easy"){
                var points = 100;
            }
            else if(data.results[i].difficulty == "medium"){
                var points = 200;
            }
            else{
                var points = 300;
            }
            var selection = `<form><input type="radio" name="answer" value=`+points+`>${data.results[i].correct_answer}<br>`;
            for(let j = 0; j<data.results[i].incorrect_answers.length; j++){
                selection += `<input type="radio" name="answer" value=`+-points+`>${data.results[i].incorrect_answers[j]}<br>`;
            }
            selection += `</form>`;
            $("#questions").append(`<button id='question' class='btn btn-lg btn-primary'><p id='points'>${points}</p><p class='questioninfo'>${question}</p><p id='choices'>${selection}</p></button>`)
        }
        $(".questioninfo").hide();
        $("form").hide();
    }
    
    $(document).on("click", "#question", function startGame(){

        $(this).children("#points").hide();
        $(this).children(".questioninfo").show();
        $(this).children("form").show();
        $(document).off("click", "#question");

        $("input").unbind().click(function(){

            var answer = $(this).val();
            score += parseInt(answer);
            document.getElementById("score").innerHTML = `${score} points`;
            $(this).parents("#question").html("<p>Answered</p>").attr('class', "btn btn-lg btn-secondary");
            count++;
            if(count>10){ //if player answered all the questions link to generate new list of questions will be displayed
                $("#newquestions").show();
            }
            $(document).on("click", "#question",);
        });
    });
    // display new set of questions with existing score
    $("#newquestions").click(function(){

        $(".category").html("");
        $("#questions").html("");
        $("#newquestions").hide();
        count = 0;
        $.get("https://opentdb.com/api.php?amount=5&category=9", displayQuestions);

    });
});
