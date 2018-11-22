//2018.22.10 
//Даннный файл поможет справится с выравниванием
//
//
//Выравнивание по вертикали
//
//

var mass_outer = document.getElementsByClassName("outer-vert");
var mass_inner = document.getElementsByClassName("inner-vert")

for (i = 0; i<= mass_outer.length-1; i++)
{
    $(mass_inner[i]).css("margin-top",parseInt((mass_outer[i].offsetHeight- mass_inner[i].offsetHeight)/2);+"px");
}

//
