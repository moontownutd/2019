$(document).ready(function(){   
    setTimeout(function(){
        $('.logo-box').remove();
    },2000);

    $.getJSON(GSSurl,function(data){
        var entry=data.feed.entry;
    
        for(var i in entry){    
            var matchNum = entry[i].title.$t,
            eCon = entry[i].content.$t,
            matchDate = eCon.match(/날짜: (\d+)/)[0].split("날짜: ")[1],
            youTeam = eCon.match(/상대팀: ([\w|\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]+)/g)[0].split("상대팀: ")[1].replace("_", " "),
            myResult = eCon.match(/결과: ([?|\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]+)/g)[0].split("결과: ")[1],
            goPlace = eCon.match(/장소: ([\w|\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]+)/g)[0].split("장소: ")[1];
            
            $(".match__list").append('<li><a href="'
            + matchDate + '/match.html"><span id="num" class="num">'
            + matchNum + '</span><span id="yTeam" class="yteam">'
            + youTeam + '</span><span id="titDate" class="tit__date">'
            + matchDate + '</span><span id="myResult" class="result">'
            + myResult + '</span><span id="goPlace" class="place">'
            + goPlace + '</span></a></li>');
        } 
    
    });
});