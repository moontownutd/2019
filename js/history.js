$(document).ready(function(){   
    setTimeout(function(){
        $('.logo-box').remove();
    },2000);

    $.getJSON(GSSurl,function(data){
        var entry=data.feed.entry;
    
        for(var i in entry){    
            var matchDate = entry[i].title.$t,
            eCon = entry[i].content.$t,
            youTeam = eCon.match(/상대팀: ([\D|\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]+)/g)[0].split("상대팀: ")[1];
            
            $(".match__list").append('<li><a href="' + matchDate + '/match.html"><span id="num" class="num"></span><span id="titDate" class="tit__date">' + matchDate + '</span><span id="yTeam" class="yteam">' + youTeam + '</span></a></li>');
        } 
    
    });
});