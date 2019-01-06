$(document).ready(function(){
    $('#btnRank').on('click', function(){
        GSSurl = "https://spreadsheets.google.com/feeds/list/1L2bagzTWcQxts2YRzbtnL886-NpPoUZrNfxOLnv9bSI/1/public/basic?alt=json-in-script&orderby=column:순위&reverse=true&callback=?";
    });
    
    $.getJSON(GSSurl,function(data){
        var entry=data.feed.entry;
    
        for(var i in entry){
    
            var eCon = entry[i].content.$t,
            myRank = entry[i].title.$t,
            bNum = eCon.match(/등번호: (\d+)/)[0].split("등번호: ")[1],
            mName = eCon.match(/이름: ([\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]+)/g)[0].split("이름: ")[1],
            rankScore = eCon.match(/파워랭킹: (\d+)/)[0].split("파워랭킹: ")[1],
            pDay = eCon.match(/참석일수: (\d+)/)[0].split("참석일수: ")[1],
            pGame = eCon.match(/경기수: (\d+)/)[0].split("경기수: ")[1],
            gPoint = eCon.match(/승점: (\d+)/)[0].split("승점: ")[1],
            myWin = eCon.match(/승: (\d+)/)[0].split("승: ")[1],
            myDraw = eCon.match(/무: (\d+)/)[0].split("무: ")[1],
            myLose = eCon.match(/패: (\d+)/)[0].split("패: ")[1],
            winnerRate = eCon.match(/개인승률: (\d+([.]\d{0,2}))/)[0].split("개인승률: ")[1],
            myGoal = eCon.match(/득점: (\d+)/)[0].split("득점: ")[1],
            myAs = eCon.match(/도움: (\d+)/)[0].split("도움: ")[1],
            mySave = eCon.match(/세이브: (\d+)/)[0].split("세이브: ")[1];

            $(".member__list li:first-child").append("<li><p id='myRank' class='rank'>"
            + myRank + "</p><p id='bNum' class='b-num'>"
            + bNum + "</p><p id='mName' class='name'>"
            + mName + "</p><p id='rankScore' class='rankscore'>"
            + rankScore + "</p><p id='pDay' class='pday'>"
            + pDay + "</p><p id='pGame' class='pgame'>"
            + pGame + "</p><p id='gPoint' class='gpoint'>"
            + gPoint + "</p><p id='myWin' class='win'>"
            + myWin + "</p><p id='myDraw' class='draw'>"
            + myDraw + "</p><p id='myLose' class='lose'>"
            + myLose + "</p><p id='winnerRate' class='wr'>"
            + winnerRate + "%</p><p id='myGoal' class='mygoal'>"            
            + myGoal + "</p><p id='myAs' class='myas'>"            
            + myAs + "</p><p id='mySave' class='mysave'>"            
            + mySave + "</p></li>");
    
            //console.log(entry[i].content.$t.match(/경기수: (\d+)/)[0].split("경기수: ")[1]);
        } 
    
    });
});