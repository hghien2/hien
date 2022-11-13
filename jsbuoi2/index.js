let result="";
for(let i=1;i<=11;i++){
    for(let j=1; j<=6;j++){
       if(i<=6){
        if(i>=7-i){
            result+="*";
        }else{
            result+=" ";
        }
       }else{
        if(j>=i - 5 ){
            result +="*";
        }else{
            result +=" ";
        }
       }
    }
    result +="\n";
}
console.log(result)