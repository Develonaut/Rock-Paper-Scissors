/*
Author: Created by Ryan McHenry, ryanmmchenry@gmail.com,
Visit my personal site: www.develonaut.com
*/
var userChoice = prompt("Do you choose Rock, Paper or Scissors?"); 
var computerChoice = Math.random(); 
if (computerChoice < 0.34) { 
    computerChoice = "Rock"; 
} else if(computerChoice <= 0.67) { 
    computerChoice = "Paper"; 
} else { 
    computerChoice = "Scissors"; 
} 
var compare = function (choice1, choice2) { 
    if (choice1 === choice2) { 
        return "The result is a tie!"; 
    } 
    if (choice1 === "Rock") { 
        if (choice2 ==="Scissors") { 
            return "The Computer chose Scissors! You win!"; 
        } else { 
            return "The Computer chose Paper! The Computer wins!"; 
        } 
    } 
    else if (choice1 === "Paper") { 
        if (choice2 === "Rock") { 
            return "The Computer chose Rock! You win!"; 
        } else { 
            return "The computer chose Scissors! The Computer wins!"; 
        } 
    } 
    if (choice1 === "Scissors") { 
        if (choice2 === "Rock") { 
            return "The computer chose Rock! The Computer wins!"; 
        } else { 
            return "The Computer chose Paper! You win!"; 
        } 
    } 
}; 
confirm(compare(userChoice, computerChoice)); { 
    var r=confirm("Do you want to play again?"); 
    if (r==true) { 
        window.location.reload(); 
    } else { 
    } 
}
