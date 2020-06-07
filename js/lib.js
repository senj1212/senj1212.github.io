$('ducument').ready(function(){
    loadPage();
});

function loadPage(){
    $('#PyLink').click(function(){
        loadPy();
    });
    $('#CLink').click(function(){
        loadC();
    });
    $('#LuaLink').click(function(){
        alert("Данный раздел временно пуст");
    });
    $('#JSLink').click(function(){
        alert("Данный раздел временно пуст");
    });
}

function loadPy(){
    $.getJSON('projectPy.json', function (data){
        console.log("1");
        var out = '';
        for (var key in data){
            out += '<div class="project">';
            out += '<img src="'+data[key].img+'">';
            out += '<p>'+data[key].name+'</p>';
            out += '<p>'+data[key].desc+'</p>';
            out += '</div>';
        }
        $('#tables').html(out);
    })
}

function loadC(){
    console.log("2");
    $.getJSON('projectC.json', function (data){
        var out = '';
        for (var key in data){
            out += '<div class="project">';
            out += '<img src="'+data[key].img+'">';
            out += '<p>'+data[key].name+'</p>';
            out += '<p>'+data[key].desc+'</p>';
            out += '</div>';
        }
        $('#tables').html(out);
    })
}
