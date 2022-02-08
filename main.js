const prompt = require('prompt-sync')();


let choice =prompt("Do you want to combine or deconstruct [c/d]? ");


//Combine
if (choice == "c" ){
    
    let color1 = prompt("First color: ");
    let color2 = prompt("Second color: ");

    if(color1 =="red" || color2 =="red"){
        if(color1 =="yellow" || color2 =="yellow"){
            console.log("orange");
        }
        else if(color1 =="blue" || color2 =="blue"){
            console.log("purple");
        }
        else{
            console.log("ERROR");
        }
    }
    else if(color1 =="blue" && color2 =="yellow"){
        console.log("green");
    }
    else{
        console.log("ERROR");
    }
}

//Deconstruct
else if (choice =="d"){
    
        let color = prompt("Choose color to deconstruct: ");
        
        if(color == "purple"){
            
            console.log("red + blue");
        }
        else if(color =="orange"){

            console.log("red + yellow");
        }
        else if(color =="green"){

            console.log("blue + yellow");
        }
        else{
            console.log("ERROR");
        }
    }
   
else{
    console.log("ERROR")
}
