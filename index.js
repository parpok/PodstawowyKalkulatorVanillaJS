const liczba1 = document.getElementById('num1');
const liczba2 = document.getElementById('num2');
const l1 = parseFloat(liczba1.value);
const l2 = parseFloat(liczba2.value);

    function dodawanie(){
        const result = l1 + l2;
        
        console.log("click " + result)
        return  document.getElementById("wynik").innerHTML = result;
    }
    function odejmowanie(){
        const result = l1 - l2;
        
        console.log("click" + result);
        return document.getElementById("wynik").innerHTML = result;
    }
    function mnozenie(){
        const result = l1 * l2;
        
        console.log("click " + result)
        return document.getElementById("wynik").innerHTML = result;
    }
    function dzielenie(){
        const result = l1 / l2;

        console.log("click " + result)
        return document.getElementById("wynik").innerHTML = result;
    }


const dodaj = document.getElementById('dodaj')?.addEventListener('click', dodawanie);
const odejmij = document.getElementById('odejmij')?.addEventListener('click', odejmowanie);
const pomnoz = document.getElementById('pomnoz')?.addEventListener('click', mnozenie);
const podziel = document.getElementById('podziel')?.addEventListener('click', dzielenie);

