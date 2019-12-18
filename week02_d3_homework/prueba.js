let argument = "Radar"
    let arr1 = [];
    for(let i= 0; i<argument.length; i++){
        arr1.push(argument[i])
        arr1[i]= arr1[i].toLowerCase()
    }
    console.log(arr1)
    let arr2=[];
    for(let i= argument.length-1; i>=0; i--){
        arr2.push(argument[i])
    }
    for(let i= 0; i<argument.length; i++){
        arr2[i]= arr2[i].toLowerCase()
     }
    console.log(arr2)
     let element=0
     if (arr1[element] != arr2[element]){
         console.log(false)
     }else{
         console.log(true)
    }
      

    