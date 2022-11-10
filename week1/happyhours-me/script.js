const friends = ["Harish", "Neeraj", "Manoj", "Sam", "Tom"];
const bar = ["Paradiso", "Hanky Panky", "Sips", "Little Red Door", "Juliana", "BKK Social Club"];

const randomNumber = Math.floor(Math.random()*bar.length);

document.write('<h1>You should visit ' + '<strong>' + bar[randomNumber] + '</strong>' + " with " + '<strong>' + friends[randomNumber] + '</strong>' + '</h1>');