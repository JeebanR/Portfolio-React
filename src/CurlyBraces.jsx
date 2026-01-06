//All Curly braces use this functin will hold
function UseaseOfCurlyBraces(){
    let name = "Jeeban kumar rout";
    let a= 100;
    let b = 69;
    let userObj ={
        name:"JK rout",
        gender:"Male",
        email:"jeebanrout.sex.gmail.com",
        phnNo:"+919969696969"
    }

    function sum(){
        return `Sum is ${a+b}`;
    }
    function operation(val1, val2, op){
        switch(op){
            case "+":return val1+val2;
            case "-":return val1-val2;
            case "*": return val1*val2;
            case "/":return val1/val2;
            default: return val1%val2;
        }
    }

    return (
            <div>
        
        <h1>The user name is {name}</h1>
        <h1>{sum()}</h1>
        <h1>{operation(50, 40, "u")}</h1>
        <h1>{userObj.name}</h1>
    </div>
    )
}

export default UseaseOfCurlyBraces;