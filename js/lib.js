$('ducument').ready(function(){
    loadPage();
});

function loadPage(){
    $('#logotype').click(function(){
        loadResum("resum.json");
    });
    $('#PyLink').click(function(){
        loadProjects('projectPy.json');
    });
    $('#CLink').click(function(){
        loadProjects('projectC.json');
    });
    $('#PixLink').click(function(){
        loadProjects('projectPix.json');
    });
    $('#JSLink').click(function(){
        alert("Данный раздел временно пуст");
    });
    loadResum("resum.json");
}

function loadProjects(nameJSON){
    $.getJSON(nameJSON, function (data){
        var out = '';
        alert("123");
        for (var key in data){
            out += '<div class="project">';
            out += '<img class="img_table" src="'+data[key].img+'" width="230" height="160">';
            out += '<p class="line_img"></p>'
            out += '<p class="nameProject">'+data[key].name+'</p>';
            if (data[key].desc.length < 170) out += '<p class="descProject">'+data[key].desc+'</p>';
            else out += '<p class="descProject">Описание слишком длинное</p>'
            out += '</div>';
        }
        $('.content').html(out);
    })
}

function loadResum(nameJSON){
    $.getJSON(nameJSON, function (data){
        var out = '';
        out += '<div class="resume">';
        out += '<p id="myName">'+data.name+'</p>';
        out += '<p id="myDate">'+data.date+'</p>';
        out += '<p id="myDesc">'+data.desc+'</p>';
        out += '<p id="myKnow">'+data.know+'</p>';
        out += '<p id="myExp">'+data.exp+'</p>';
        out += '<p id="myContact">'+data.contact+'</p>';
        out += '</div>';
        $('.content').html(out);
    })
}
