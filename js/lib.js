$('ducument').ready(function(){
    loadPage();
});

function loadPage(){
    $('#PyLink').click(function(){
        loadProjects('projectPy.json');
    });
    $('#CLink').click(function(){
        loadProjects('projectC.json');
    });
    $('#LuaLink').click(function(){
        alert("Данный раздел временно пуст");
    });
    $('#JSLink').click(function(){
        alert("Данный раздел временно пуст");
    });
}

function loadProjects(nameJSON){
    $.getJSON(nameJSON, function (data){
        var out = '';
        for (var key in data){
            out += '<div class="project">';
            out += '<img class="img_table" src="'+data[key].img+'" width="230" height="160">';
            out += '<p class="line_img"></p>'
            out += '<p class="nameProject">'+data[key].name+'</p>';
            out += '<p class="descProject">'+data[key].desc+'</p>';
            out += '</div>';
        }
        $('.table').html(out);
    })
}
