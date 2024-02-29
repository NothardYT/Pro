var plus = document.getElementById("plus");
var number = document.getElementById("number");
var minus = document.getElementById("minus");
var num = 0;

plus.addEventListener('click', () => {
    num++;
    number.innerHTML = num;
    } );
    minus.addEventListener('click', () => {
        num--;
        number.innerHTML = num;
        });

        if (num > 5)
        {
            bigger.innerHTML("bigger than 5")
        }