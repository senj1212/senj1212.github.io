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
        var out = '';
        console.log(data);
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
