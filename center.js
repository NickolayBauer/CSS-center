//2018.22.10 
//Даннный файл поможет справится с выравниванием
//
//Для работы необходим Jquery
//
//<script src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
//Выравнивание по вертикали
//
//
//

var mass_outer_vert = document.getElementsByClassName("outer-vert");
var mass_inner_vert = document.getElementsByClassName("inner-vert");

for (var i = 0; i <= mass_outer_vert.length - 1; i++)
{
    $(mass_inner_vert[i]).css("margin-top",parseInt((mass_outer_vert[i].offsetHeight- mass_inner_vert[i].offsetHeight)/2)+"px");
}

//Выравнивание по горизонтали
//
//
//

var mass_outer_hori = document.getElementsByClassName("outer-hori");
var mass_inner_hori = document.getElementsByClassName("inner-hori");

for (var i = 0; i <= mass_outer_hori.length - 1; i++)
{
    $(mass_inner_hori[i]).css("margin-left",parseInt((mass_outer_hori[i].offsetWidth- mass_inner_hori[i].offsetWidth)/2)+"px");
}
