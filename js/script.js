const sectionElement = document.querySelector('section#myContainer');

for (i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
        let divElement = document.createElement('div');
        divElement.classList.add('My_item_FizzBuzz');
        divElement.append('FizzBuzz');
        sectionElement.appendChild(divElement);
    }else if(i % 3 == 0){
        console.log('Fizz');
        let divElement = document.createElement('div');
        divElement.classList.add('My_item_fizz');
        divElement.append('Fizz');
        sectionElement.appendChild(divElement);
    }else if(i % 5 == 0){
        console.log('Buzz');
        let divElement = document.createElement('div');
        divElement.classList.add('My_item_Buzz');
        divElement.append('Buzz');
        sectionElement.appendChild(divElement);
    }else{
        console.log(i);
        let divElement = document.createElement('div');
        divElement.classList.add('My_item_number');
        divElement.append(i);
        sectionElement.appendChild(divElement);
    }
}