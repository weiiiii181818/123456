$(document).ready(function(){
    //建立currentQuiz, 儲存目前作答到第幾題
    var currentQuiz=null;
    //當按下按鈕後, 要做的事情放在這裡面
    $("#startButton").click(function()
    {
        //如果還沒開始就從這裡開始
        if(currentQuiz==null)
        {
            //目前作答到第0題
            currentQuiz=0;
            //顯示題目
            $("#question").text(questions[0].question);
            $("#options").empty();
            for(var x=0;x<questions[0].answers.length;x++)
            {
                $("#options").append("<input name='options' type='radio' value="+x+">"+"<label>"+questions[0].answers[x][0]+"</label><br><br>");
            }
            //將按鈕上的文字換成next或下一題
            $("#startButton").attr("value","Next");
        }
        else//如果已經開始作答就從這裡繼續
        {
            $.each($(":radio"),function(i,val){
                if(val.checked)
                {
                    if(isNaN(questions[currentQuiz].answers[i][1]))
                    {
                        var finalResult = questions[currentQuiz].answers[i][1];
                        $("#question").text(finalAnswers[finalResult][0]);
                        $("#options").empty();
                        $("#options").append(finalAnswers[finalResult][1]+"<br><br>");
                        currentQuiz=null;
                        $("#startButton").attr("value","重新開始");
                    }
                    else
                    {
                        currentQuiz=questions[currentQuiz].answers[i][1]-1;
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        for(var x=0;x<questions[currentQuiz].answers.length;x++)
                        {
                            $("#options").append("<input name='options' type='radio' value="+x+">"+"<label>"+questions[currentQuiz].answers[x][0]+"</label><br><br>");
                        }
                    }
                    return false;
                }
            })
        }
    });
    
});