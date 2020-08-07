const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
const output = [];
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
    

}
console.log(output);

 const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

function square(element){
    return element * element;
}

const square = element => element* element;

const square = x => x*x;

console.log(square);

const result = numbers.map(function(element){
    return element* element;
})
 const result = numbers.map(x=>x*x);
console.log(result);

const result = numbers.filter(x => x 4);

console.log(result);



const result = numbers.find(x => x > 4);

console.log(result);


