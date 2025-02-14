function variableScope() {
    var a = "I am var";  
    let b = "I am let"; 
    const c = "I am const"; 

    if (true) {
        var d = "Var inside block";  
        let e = "Let inside block";  
        const f = "Const inside block"; 
    }

    console.log(a, b, c);
    console.log(d); 
    
}

variableScope();
