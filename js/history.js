var GSSurl = "https://spreadsheets.google.com/feeds/list/1L2bagzTWcQxts2YRzbtnL886-NpPoUZrNfxOLnv9bSI/1/public/basic?alt=json-in-script&callback=?";



$.getJSON(GSSurl,function(data){
    var entry=data.feed.entry;

    for(var i in entry){

        var bNum = entry[i].title.$t,
        mName = entry[i].content.$t.slice(3, 7),
        pGame = entry[i].content.$t.match(/경기수: (\d+)/)[0].split("경기수: ")[1],
        tPoint = entry[i].content.$t.match(/공격포인트: (\d+)/)[0].split("공격포인트: ")[1],
        myGoal = entry[i].content.$t.match(/골: (\d+)/)[0].split("골: ")[1],
        myAs = entry[i].content.$t.match(/도움: (\d+)/)[0].split("도움: ")[1];

        $(".member__list li:first-child").append("<li><p id='#bnum' class='b-num'>" + bNum + "</p> <p id='#mName' class='name'>" + mName + "</p> <p id='#pGame' class='pgame'>" + pGame + "</p> <p id='#tPoint' class='tpoint'>" + tPoint + "</p> <p id='#myGoal' class='mygoal'>" + myGoal + "</p> <p id='#myAs' class='myas'>" + myAs + "</p>");

        //console.log(entry[i].content.$t.match(/경기수: (\d+)/)[0].split("경기수: ")[1]);
    } 

});