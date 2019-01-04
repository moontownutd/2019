$(document).ready(function(){
    $.getJSON(GSSurl,function(data){
        var entry=data.feed.entry;

        for(var i in entry){
            var bNum = entry[i].title.$t,
            mName = entry[i].content.$t.match(/참가자이름: ([\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]+)/g)[0].split("참가자이름: ")[1],
            pGameMem = entry[i].content.$t.match(/게임2: (\w+)/)[0].split("게임2: ")[1];

            
            console.log(pGameMem);

            //pGame = entry[i].content.$t.match(/경기수: (\d+)/)[0].split("경기수: ")[1];
            
            
            $('.member__list').append('<li><span class="backnumber">'
            + bNum
            + '</span>'
            + mName
            + '</li>');
        } 
    });
});