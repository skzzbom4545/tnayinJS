var arr = [85,12,22,37,44,3,18,26,23,45,34,52,31,17,28,20]
for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i])
    }
}



var arr = [3,33,23,56,85,45,29,67,24,32]
for(var i = arr.length -1; i >= 0; i--){
    console.log(arr[i])
}



var arr = [32,21,58,91,26,19,28,4]
 var j = 0;
 for(var i = 0; i < arr.length; i++){
    j = j + arr[i];
 }
 console.log(j)




 var arr = [15,16,25,9,15,26,85,4,68,38]
 var zuyg = 0;
 var kent = 0
 for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        zuyg = zuyg + arr[i];
    }else{
        kent = kent + arr[i];
    }
 }
 console.log(zuyg);
 console.log(kent);




 var arr = [52,18,45,7,66,16,49,5,52,33,16]
 var zuyg = 0;
 var kent = 0
 for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        zuyg = zuyg + arr[i];
    }else{
        kent = kent + arr[i];
    }
 }
 if(zuyg > kent){
    console.log("Mec e zuyg tveri gumary", zuyg);
 }else if(kent > zuyg){
    console.log("Mec e kent tveri gumary", kent);
 }else{
    console.log("Tvern irar havasar en", zuyg);
 }