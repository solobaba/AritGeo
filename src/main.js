
const aritGeo = (arr) =>
{
    //To show that an array is neither arithmetic nor geometric
    let sequence = -1;

    //To check if the array parameter is not more then one
    if (arr.length <= 1) return true;

    //To check for an empty array
    if (arr == ![]) return false;
    
    //To check for the geometry by finding the common factor
    let indexOne = arr[1], geometry = indexOne/arr[0], i;
    for (i = 2; i < arr.length; ++i) {
        if ((indexOne *= geometry) == arr[i]){
            sequence = "Geometric";
        }
        else{
            sequence = -1;
            break;
        }
    }
    if (sequence == "Geometric")
        return sequence;

    //To check if the number is arithmetric by finding the lowest common factor
    indexOne = arr[1], arith = indexOne - arr[0], i;
    for (i = 2; i < arr.length; ++i) {
        if ((indexOne += arith) == arr[i]){
            sequence = "Arithmetic";
        }
        else {
            sequence = -1;
            break;
        }
    }
    return sequence;
}
module.exports={
	aritGeo: aritGeo
}