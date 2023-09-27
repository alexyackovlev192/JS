let a1 = a2 = a3 = Math.floor(Math.random() * 100);
console.log("a: " + a1);

a1 = ((a1 > 10 ? a1 : a1 * 2) > 5 ? (2 * a1) + 1 : (a1 < 3 ? 1 : 2 * (a1 - 2)) > 4 ? 5 : (a1 % 2 == 0 ? 6 : 7));

/// 1 Вариант ///
if (a2 > 10) 
    if (a2 > 5) 
        a2 = 2 * a2 + 1;
    else if (a2 < 3) 
        if (1 > 4) 
            a2 = 5;
        else if (a2 % 2 == 0) 
            a2 = 6;
        else
            a2 = 7;
    else if (2 * (a2 - 2) > 4) 
        a2 = 5;
        else if (a2 % 2 == 0)
            a2 = 6;
        else
            a2 = 7;
else 
    if (2 * a2 > 5) 
        a2 = 2 * a2 + 1;
    else if (a2 < 3) 
        if (1 > 4) 
            a2 = 5;
        else if (a2 % 2 == 0) 
            a2 = 6;
        else
            a2 = 7;      
    else if (2 * (a2 - 2) > 4) 
        a2 = 5;
        else if (a2 % 2 == 0) 
            a2 = 6;
        else
            a2 = 7;


/// 2 Вариант ///
if (a3 > 10)  
    a3 = 2 * a3 + 1;
else if (2 * a3 > 5) 
        a3 = 2 * a3 + 1;
    else if (a3 < 3) 
        switch (a3 % 2) {
            case 0: 
                a3 = 6;
                break;
            case 1:
                a3 = 7;
                break;
        }
    else if (2 * (a3 - 2) > 4) 
        a3 = 5;
    else 
        switch (a3 % 2) {
            case 0: 
                a3 = 6;
                break;
            case 1:
                a3 = 7;
                break;
        }

console.log("1: " + a1 + "\n" + "2: " + a2 + "\n" + "3: " + a3);


// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()