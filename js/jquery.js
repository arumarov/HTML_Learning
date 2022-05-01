let userName = prompt("Как вас зовут?", "Введите имя");

function printName(){
    console.log(`Привет, ${userName}`)
    alert(`Привет, ${userName}`)
}
printName(userName)