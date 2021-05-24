let num = 0

for ( num = 0; num < 101; num++) {

    if (num % 15 === 0){
        console.log('clap and stamp') 
     } else if (num % 5 === 0){
        console.log('stamp')
     }else if (num % 3 === 0){
        console.log('clap') 
     }else {
        console.log(num)
     }
     
}
