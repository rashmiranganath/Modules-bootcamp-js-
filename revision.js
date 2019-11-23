// function greet (name){
//     console.log("hi ",name);
// }

// function  name(callback){
//     // console.log ( "rashmi")
//     callback("rashmi")



// }
// var a=()=>  "rashmi";

// console.log(a());

// (()=>{
//     console.log("hai");
// })();

// name(greet);


const obj = {
    'name':'rashmi',
    'age' : 20,
    add:{banglore:'mysuru',
    sam:'ram'
}
}


// var clone = Object.assign({},obj)
// obj.name = "pooja"
// clone.address = "office"

// console.log(obj)
// console.log(clone)


const {name,add}= obj;

console.log(name,add)

