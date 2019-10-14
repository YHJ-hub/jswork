Str = '<table border="1">'
for(let i=9;i>0;--i){
    Str += '<td>'
    for(var j=i;j>0;--j){
        Str += '<td>&nbsp;</td>'
}
Str +='</tr>'
}
Str += '</table>'
document.getElementById('table2').innerHTML = Str
