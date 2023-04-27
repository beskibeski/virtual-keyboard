//Global constants
const numberOfKeyboardRows = 5;

const firstRowOfSymbols = ["`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"];
const secondRowOfSymbols = ["Tab","Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "DEL"];
const thirdRowOfSymbols = ["Caps lock","A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "ENTER"];
const fourthRowOfSymbols = ["Shift","Z", "X", "C", "V", "B", "N", "M", ".", ",", "/", "Up", "Shift"];
const fifthRowOfSymbols = ["Ctrl","Win", "Alt", "Space", "Alt", "Ctrl", "Left", "Down", "Right", "Ctrl"];

//Create keyboard with textarea

document.body.className = "body";
const textArea = document.createElement("textarea");
textArea.className = "keyboard__text-area";
document.body.append(textArea);
textArea.setAttribute("rows","5");
textArea.focus();
const keyboard = document.createElement("div");
keyboard.className = "keyboard"; 
document.body.append(keyboard);

//Create keyboard textarea


//Create keyboard rows

function createKeyboardRows() {  
  for(let i = 0; i < numberOfKeyboardRows; i++) {
    const div = document.createElement("div");
    div.className = "keyboard__row";
    keyboard.append(div);        
  }   
}

createKeyboardRows();
//Create keyboard buttons

const keyboardRows = document.querySelectorAll(".keyboard__row");

function addFirstRowOfButtons() {
    firstRowOfSymbols.forEach(element => {
      const div = document.createElement("div");
      div.className = "keyboard__button";  
      keyboardRows[0].append(div);   
      const divText = document.createElement("div");
      divText.className = "keyboard__letter";
      div.append(divText);
      divText.innerText = firstRowOfSymbols[firstRowOfSymbols.indexOf(element)];
    })
  }

function addSecondRowOfButtons() {
  secondRowOfSymbols.forEach(element => {
    const div = document.createElement("div");
    div.className = "keyboard__button";  
    keyboardRows[1].append(div);   
    const divText = document.createElement("div");
    divText.className = "keyboard__letter";
    div.append(divText);
    divText.innerText = secondRowOfSymbols[secondRowOfSymbols.indexOf(element)];
  })
}

function addThirdRowOfButtons() {
  thirdRowOfSymbols.forEach(element => {
    const div = document.createElement("div");
    div.className = "keyboard__button";  
    keyboardRows[2].append(div);   
    const divText = document.createElement("div");
    divText.className = "keyboard__letter";
    div.append(divText);
    divText.innerText = thirdRowOfSymbols[thirdRowOfSymbols.indexOf(element)];
  })
}

function addFourthRowOfButtons() {
  fourthRowOfSymbols.forEach(element => {
    const div = document.createElement("div");
    div.className = "keyboard__button";  
    keyboardRows[3].append(div);   
    const divText = document.createElement("div");
    divText.className = "keyboard__letter";
    div.append(divText);
    divText.innerText = fourthRowOfSymbols[fourthRowOfSymbols.indexOf(element)];
  })
}

function addFifthRowOfButtons() {
  fifthRowOfSymbols.forEach(element => {
    const div = document.createElement("div");
    div.className = "keyboard__button";  
    keyboardRows[4].append(div);   
    const divText = document.createElement("div");
    divText.className = "keyboard__letter";
    div.append(divText);
    divText.innerText = fifthRowOfSymbols[fifthRowOfSymbols.indexOf(element)];
  })   
}

//Create design of buttons

function createDesignOfButtons() {
  const buttons = document.querySelectorAll(".keyboard__button");

  buttons.forEach(element => {
    if(element.innerText === "Space") {
      element.classList.add("keyboard__space_button")
    }
    if(element.innerText === "Shift") {
      element.classList.add("keyboard__shift_button")
    }
    if(element.innerText === "ENTER") {
      element.classList.add("keyboard__enter_button")
    }
    if(element.innerText === "Caps lock") {
      element.classList.add("keyboard__caps-lock_button")
    }
    if(element.innerText === "Tab") {
      element.classList.add("keyboard__tab_button")
    }
    if(element.innerText === "Backspace") {
      element.classList.add("keyboard__backspace_button")
    }
    if(element.innerText === "Left") {
      element.querySelector(".keyboard__letter").innerHTML = "&larr;"
    }
    if(element.innerText === "Right") {
      element.querySelector(".keyboard__letter").innerHTML = "&rarr;"
    }
    if(element.innerText === "Up") {
      element.querySelector(".keyboard__letter").innerHTML = "&uarr;"
    }
    if(element.innerText === "Down") {
      element.querySelector(".keyboard__letter").innerHTML = "&darr;"
    }
  })

}
 



addFirstRowOfButtons();
addSecondRowOfButtons();
addThirdRowOfButtons();
addFourthRowOfButtons();
addFifthRowOfButtons();
createDesignOfButtons();
