$(document).ready(function(){
    var GSSurl = "https://spreadsheets.google.com/feeds/list/18j5b5XRHw_0k7xkO5BMfdN73zyGfnQSAfbeTkfMPDTg/1/public/basic?alt=json-in-script&callback=?";

    $.getJSON(GSSurl,function(data){
        var entry=data.feed.entry;

        for(var i in entry){
            var bNum = entry[i].title.$t,
            mName = entry[i].content.$t.match(/참가자이름: ([\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]+)/g)[0].split("참가자이름: ")[1];
            //pGame = entry[i].content.$t.match(/경기수: (\d+)/)[0].split("경기수: ")[1];
            $('.member__list').append('<li><span class="backnumber">' + bNum + '</span>'+ mName + '</li>');
        } 
    });    

    $.getJSON(GSSurl2,function(data){
        var entry=data.feed.entry;
        
        for(var i in entry){
            
            var sGame = entry[i].content.$t;

            console.log(sGame);
           
            //myTeam = entry[i].content.$t.match(/우리스코어: (\d+)/)[0].split("우리스코어: ")[1],
            //youTeam = entry[i].content.$t.match(/상대스코어: (\d+)/)[0].split("상대스코어: ")[1],
            //pName = entry[i].content.$t.match(/플레이멤버: ([\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]+)/g)[0].split("플레이멤버: ")[1];
            //pGame = entry[i].content.$t.match(/경기수: (\d+)/)[0].split("경기수: ")[1];

            //$('.info__detail').append('<div class="set-box"><p class="txt__set">' + sGame + ' GAME</p><ul class="playmember__list"><li>' + sGame + '</li></ul></div>');           
        } 
        
        
        
        

        

    });


});