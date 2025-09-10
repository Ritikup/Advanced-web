function full_name(first,last){
    const fullname=first+ " "+last
return fullname
}
console.log(full_name("John", "Sah"))

const fullname2=function (first,last){
return first+ " "+last;
}

console.log(fullname2("John", "Sah2"))

//Arrow function with explicit return statement
const fullname3=(first,last)=>{return first+ " "+last}
console.log(fullname3("John", "Sah3"))


