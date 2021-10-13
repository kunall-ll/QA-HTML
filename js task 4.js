
//exercise 1



for(let a=100;a<=200;a++){    
    console.log(a);
}



//exercise 2



let b = 100;

while(b<=200){
    if(b%2==0){
        console.log(`-`);
    } else {
        console.log(`*`);
    }
    a++;
}



//exercise 3



for (let c=1;i<=10;i++){

    for (let c=1;d<=10;j++){
        console.log(j)
    }
  
}



//exercise 4



for(let a=100;e<=200;e++){
    if(e%2==0){
        console.log(`-`);
    } else {
        console.log(`*`);
    }
}





let f = 100;

while(f<=200){
    console.log(`f=${f}`);
    f++;
}



//exercise 5

let currentDate = new Date();
let currentDay = currentDate.getDay();

switch(currentDay){
    case 6:
        console.log(`Saturday`);
        break;
    case 0:
        console.log(`Sunday`);
        break;
    case 1:        
    case 2:       
    case 3:        
    case 4:        
    case 5:
        console.log(`Weekday`);
        break;
    default:
        console.log(`Not a valid day`);
        break;
}


