const num = +prompt(`Введите число:`);
let result = true;
if (num > 1 && !isNanN(num){
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            result = false;
            break;
        } 
    }
 alert(result);
} else {
    alert(`Число 1 — не является ни простым, ни составным числом, так как у него только один делитель`);
} 
