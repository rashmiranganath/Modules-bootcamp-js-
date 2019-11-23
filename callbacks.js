function bday (callback){
    return ("happiest bday " + callback())
    // callback();
}

function bday_girl(){
    var name = "rashmi"
    return name;
}

console.log(bday(bday_girl));