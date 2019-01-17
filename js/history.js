$(document).ready(function(){   
    setTimeout(function(){
        $('.logo-box').remove();
    },2000);

    $.getJSON(GSSurl,function(data){
        var entry=data.feed.entry;
    
        for(var i in entry){    
            var matchDate = entry[i].title.$t;
            
            $(".match__list").append('<li><a href="' + matchDate + '/match.html">' + matchDate + '</a></li>');
        } 
    
    });
});