var date=new Date()
var display_date="Date: "+date.toLocaleDateString() // dd/mm/yyyy

var predicted_emotion;

$(function(){
    $("#predict_button").click(function(){
        var input_data={
            "text":$("#text").val()
        }
        $.ajax({
            type:'POST',
            url:"/predict-emotion",
            data:JSON.stringify(input_data),
            dataType:"json",
            contentType:'application/json',
            success:function(result){
                prediction=result.prediction
                emoji_url=result.url

                $("#sentiment").html(predicted_emotion)
                $("#sentiment").css("display","block")

                $("#emoji_url").attr('src',emo_url)
                $("#emoji_url").css("display","block")

            },
            error:function(result){
                alert(result.responseJSON.message)
            }
        })
    })
})