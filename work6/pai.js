function calculate(){
<<<<<<< HEAD
    let num = document.getElementById('num').value
    num = parseInt(num)&&Number(num)
    if(!isNaN(num)){
        document.getElementById('pai').value = pi(num)
    }

    
}
function factorial(n){
    let sum = 1
    for(let i=1;i<=n;++i){
        sum = i * sum; 
    }
    return sum
}
function oddFactorial(n){
    let sum = 1
    for(let i=1;i<=n;++i){
        sum *= (2 * i + 1);

}

return sum
    
}

function pi (num){
    let sum = 0;
    for(let i=0;i<=num;++i){
        let dividend = factorial(i)
        let divisor = oddFactorial(i)

        sum += dividend/divisor;

    }

return sum * 2
=======
    let num = document.getElementById('').value
    num = parseInt(num)&&Number(num)
    if(!isNaN(num)){
        document.getElementById('').value = pi()
    }
}
function factorial(n){
    let sum = 1
    for(let i=1;i>0;++i){
        Str +='<tr>'
    }
    return sum
}
function pi(num){
    let sum = 0
    for(let i=0;i<=num;++i){
        let dividend = factorial()
        let divisor = oddFactorial()
       
    }
    return sum = 2
>>>>>>> af90cb209ab768a4325bcd00455d1a332e4ba001

}
calculate()