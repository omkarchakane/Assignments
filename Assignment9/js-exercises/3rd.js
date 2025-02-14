function modifyArray(arr) {
    arr.push("New Element"); 
    arr.pop();  
    return arr;
}

console.log(modifyArray(["A", "B", "C"])); 
