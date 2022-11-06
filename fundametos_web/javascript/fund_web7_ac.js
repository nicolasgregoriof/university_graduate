/* 
O objetivo deste script é criar um array que deve armazenar informações de três times de seus esportes preferidos, 
exibindo essas informações na página. As informações que devem compor os elementos da lista são:

Tipo de modalidade do time. Por exemplo: Basquete, Futebol, Vôlei.
Nome do time. Por exemplo: Lakers, São Paulo, Nestlé.
A quantidade de jogadores do time. Por exemplo: 6, 12, 6.
Cor predominante do time. Por exemplo: dourado, vermelho, azul.

Modalidade - Nome - Qtde Jog - Cor - Brazao

Mostrar na página web:

1 - O array (com todas as informações).
2 - Escolha uma cor predominante (if) e mostre:
✔ a modalidade;
✔ o time;
✔ a quantidade de jogadores;
✔ a imagem do Brasão.
'<img src="cruzeiro.png">',
*/

function time(){
    var times = ['Vôlei','Sada Cruzeiro','12','Azul',
                'Futebol','Cruzeiro','11','Azul Marinho',
                'Basquete','Franca Basquete','6','Vermelho'];
    return times;
}

function body(){
    var time_temp1 = time();
    document.write(time_temp1);
}

function display(x){
    var time_temp2 = time();
    if(x==0){
        var modtime = time_temp2[0];
        var nametime = time_temp2[1];
        var qtdetime = time_temp2[2];
        document.getElementById('in_here').innerHTML = '<br>'+'<font color="#0000FF">' +'A modalidade do seu time é '+modtime+'. Seu time preferido é '+nametime+
        '.Este time possui '+qtdetime+' jogadores. Olhe o lindo brasão do time logo abaixo!'+'</br>'+'<img src="sada.png">'+'</font>';
    }
    else if(x==1){
        var modtime = time_temp2[4];
        var nametime = time_temp2[5];
        var qtdetime = time_temp2[6];
        document.getElementById('in_here').innerHTML = '<br>'+'<font color="#0B0B61">'+'A modalidade do seu time é '+modtime+'. Seu time preferido é '+nametime+
        '.Este time possui '+qtdetime+' jogadores. Olhe o lindo brasão do time logo abaixo!'+'</br>'+'<img src="cruzeiro.png">'+'</font>';
    }
    else if(x==2){
        var modtime = time_temp2[8];
        var nametime = time_temp2[9];
        var qtdetime = time_temp2[10];
        document.getElementById('in_here').innerHTML = '<br>'+'<font color="#B40404">' +'A modalidade do seu time é '+modtime+'. Seu time preferido é '+nametime+
        '.Este time possui '+qtdetime+' jogadores. Olhe o lindo brasão do time logo abaixo!'+'</br>'+'<img src="franca.png">'+'</font>';
    }
}