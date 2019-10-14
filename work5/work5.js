Str = '<table border="1">'
for(let i=9;i>0;--i){
    Str += '<tr>'
    for(var j=i;j>0;--j){
        Str += '<td>&nbsp;</td>'
        
}
Str +='</tr>'
}
Str += '</table>'
document.getElementById('table2').innerHTML = Str

Str = '<table border="1">'
for(let i=1;i<10;++i){
    Str += '<tr>'
    for(var j=1;j<10;++j){
        Str += '<td>&nbsp;</td>'
        
}
Str +='</tr>'
}
Str += '</table>'
document.getElementById('table1').innerHTML = Str

Str = '<table border="1">'
for(let i=9;i>0;--i){
    Str += '<tr>'
    for(var j=i;j>0;--j){
        Str += '<td>' + j + '*' + i + '=' + ( j * i) + '</td>'
        
}
Str +='</tr>'
}
Str += '</table>'
document.getElementById('table3').innerHTML = Str

