$('ducument').ready(function(){
    loadPage();
});

function loadRemoute(){
    console.log('test1');
    $.getJSON('remoute.json', function(data){
        console.log(data);
        var out = '';
        for (var key in data){
            console.log(data);
            out += '<div class="day">';
            out += '<p class="day_name">'+ key +'<p>';
            out += '</div>';
        }
        $('.days').html(out);
    });
}

function loadPage(){
    $('#diary').click(function(){
        alert("Данный раздел временно пуст");
    });
    $('#education').click(function(){
        alert("Данный раздел временно пуст");
    });
    $('#progress').click(function(){
        alert("Данный раздел временно пуст");
    });
    $('#remoute').click(function(){
        loadRemoute();
    });
}
