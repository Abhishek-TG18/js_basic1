const arr =[1,2,999,56,"abhi",134,"PW"];
let flag=0;
arr.forEach(val => {
   if (typeof val=="string" && flag==0) {
    console.log("Found the First String :",val);
    flag =1;
   }
       
    
    
        
});