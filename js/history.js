$(document).ready(function(){

    var GSSurl = "https://spreadsheets.google.com/feeds/list/18j5b5XRHw_0k7xkO5BMfdN73zyGfnQSAfbeTkfMPDTg/1/public/basic?alt=json-in-script&callback=?";

    $.getJSON(GSSurl,function(data){
        var entry=data.feed.entry;

        for(var i in entry){

            var bNum = entry[i].title.$t,
            mName = entry[i].content.$t.match(/참가자이름: ([\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]+)/g)[0].split("참가자이름: ")[1];
            /*pGame = entry[i].content.$t.match(/경기수: (\d+)/)[0].split("경기수: ")[1],
            tPoint = entry[i].content.$t.match(/공격포인트: (\d+)/)[0].split("공격포인트: ")[1],
            myGoal = entry[i].content.$t.match(/골: (\d+)/)[0].split("골: ")[1],
            myAs = entry[i].content.$t.match(/도움: (\d+)/)[0].split("도움: ")[1];*/
        
        console.log(mName);
        console.log(typeof mName);
        } 

    });


});