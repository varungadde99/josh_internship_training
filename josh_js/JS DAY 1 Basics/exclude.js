var arr = [1,2,3,4,5,6,7,8];
var values = [1,3,4];

function exclude(arr,values){
    
    output = arr.filter( function( element_in_arr ) {
        return !values.includes( element_in_arr );
      } );
    console.log(output);
}

exclude(arr,values);