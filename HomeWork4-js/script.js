"use strict";

let mas=['hello', 'world', 23, '23', null];

function filterBy(arr,typeofvalue) {
    let newarr=[];
    arr.forEach(item=>{
        if(typeof(item)!==typeofvalue.toLowerCase())
            newarr.push(item);
    });
    return newarr;
}

let newarr=filterBy(mas,"String");
console.log(newarr);
