/* commenting out on load event */
/* alert('Is this annonying?') */
// document.write('<h1>WTF?</h1>')

let userName = prompt();
const lastName = prompt();

const fullName = userName + " " + lastName;
// document.write(fullName);

const cars = ['honda', 'lamborghini', 'ferrari'];

let carsImage = [];

for(let i = 0 ; i < cars.length ; i++){
    const image = document.createElement('img')
    // carsImage[i] = new Image()
    image.src = `${cars[i]}.jpg`
    carsImage.push(image)
}

randomNumber = Math.floor(Math.random()*cars.length);
console.log('yes', randomNumber);

if (userName === "Harish") {
    document.write('<h1>' + 'Hi, ' + fullName + "! You've won a " + cars[randomNumber] +"!"+ '</h1>');
    document.querySelector('.container').append(carsImage[randomNumber])
}
else {
    document.write('<h1>' +'Hi, ' + fullName + '!' + '</h1>');
}