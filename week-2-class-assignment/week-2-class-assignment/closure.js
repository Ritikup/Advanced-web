function closure(){
    let val =1;
    return function(){
        return val++;
    }
}

const nextval=closure();
console.log(nextval)