const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

// Selectors
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case"); 
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById('symbols')

const getRandomData = (dataSet) =>{
    return dataSet[Math.floor(Math.random()*dataSet.length)];
}

const generatePassword = (password = "")=>{
    if(upperInput.checked){
        password +=getRandomData(upperSet);
    }
    if(lowerInput.checked){
        password +=getRandomData(lowerSet);
    }
    if(numberInput.checked){
        password +=getRandomData(numberSet);
    }
    if(symbolInput.checked){
        password +=getRandomData(symbolSet);
    }
    if(password.length <=totalChar.value){
        return generatePassword(password);   //recursion
    }
    passBox.innerText=truncateString(password, totalChar.value);
}

//for excecuting the function
generatePassword();

document.getElementById("btn").addEventListener("click", function(){
    generatePassword();
})

//for removing extra elements we will be using the truncate function

function truncateString(str,num){
    if(str.length > num){
        let substr = str.substring(0,num);
        return substr;
    }
    else{
        return str;
    }
}