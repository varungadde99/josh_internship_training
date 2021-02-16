var arr = [1,2,3,4,5];
let search = 2;
let frequency = 0 ;

function findFrequency(arr,search){
    arr.forEach(element => {
        if(element === search)
            frequency++;
    });
}

findFrequency(arr,search);
console.log(frequency);