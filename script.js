
function Love() {
    var name1 = prompt("Enter the first name:");
    var name2 = prompt("Enter the second name:");
    var calc = Math.floor(Math.random() * 100) + 1;
    alert("Your love score = " + calc + "%");
}

function BMI() {
    var height = Math.random() + 1.5;
    var weight = Math.floor(Math.random() * 131) + 50;
    var calc = weight / Math.pow(height, 2);
    if(calc >= 13 && calc <= 18){ //якщо ІМТ в діапазоні від 13 до 19
        console.log("Худощавість ");// Вивести в консоль це речення
    }
    else if( calc >= 19 && calc <= 24){
        console.log("Нормальний ІМТ");
    }
    else if( calc >= 25 && calc <= 29){
        console.log("Лишня вага");
    }
    else if( calc >= 30 && calc <= 34){
        console.log("Ожиріння І-ступеня");
    }
    else if( calc >= 35 && calc <= 39){
        console.log("Ожиріння ІІ-ступеня");
    }
    else {
        console.log("Ожиріння ІІІ-ступеня");
    }
}

function coffee(){
    var names = Array("Олег", "Всеволод", "Лілія", "Ганна", "Андрій", "Анатолій", "Софія", "Юлія");
    var name = names[Math.floor(Math.random()*names.length)];
    console.log(name);
}
function numbers(){
    for(var k = 100; k > 0; k--){
        if (k % 5 === 0){
            if (k % 3 === 0){
                console.log("VsevolodSheiko");
            }
        }
        else if (k % 5 === 0){
            console.log("Sheiko");
        }
        else if (k % 3 === 0){
            console.log("Vsevolod");
        }
        else{
            console.log(k);
        }
    }
}
function bottles(){
    var k = 99;
    while (k !== -1){
        if (k === 0){
            console.log("No more bottles of beer on the wall, no more bottles of beer.");
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
        }
        else{
            console.log(k + " bottle of beer on the wall");
            console.log(k + " bottle of beer,");
            console.log("Take one down, pass it around,");
            console.log(k - 1 + " bottle of beer on the wall.");
        }
    k--;
    }
}
function passImage() {
    const random1 = Math.floor(Math.random() * 6) + 1; //Генерую рандомне число та привязую його до змінної
    document.getElementById('player1').innerHTML = '<img src="images/Untitled-'+random1+'.jpg" border="0" />'; //змінню блок, що отримав по айді, відповідно згенерованому числу 
    const random2 = Math.floor(Math.random() * 6) + 1; //Генерую рандомне число та привязую його до змінної
    document.getElementById('player2').innerHTML = '<img src="images/Untitled-'+random2+'.jpg" border="0" />'; //змінню блок, що отримав по айді, відповідно згенерованому числу 
    if (random1 > random2){ //Якщо перше згенероване число більше за інше
        document.getElementById("winner").innerHTML = "Player # 1 is winner!"; //змінити блок з айді winner на відповідний текст
    }
    else if (random1 < random2){//Якщо друге згенероване число більше за інше
        document.getElementById("winner").innerHTML = "Player # 2 is winner!";//змінити блок з айді winner на відповідний текст
    }
    else{//Якщо числа однакові
        document.getElementById("winner").innerHTML = "Draw!";//змінити блок з айді winner на відповідний текст
    }
  } 
passImage();