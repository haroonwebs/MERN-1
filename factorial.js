if(2>3){
console.log("if part");
}else{
    console.log("true part");
}

const names= function(){
    f_name= "Haroon";
    l_name= "Talib";
   return [f_name, l_name]
}
const a= names()
console.log(a[0], a[1])


const array = [1, 3, 5, 6,7,8, 7]
const check =array.map(item =>{
     item =item *5
    return item
})

console.log(check)

