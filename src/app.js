//Global constants
const numberOfKeyboardRows = 5;

const firstRowOfSymbols = ["`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"];
const secondRowOfSymbols = ["Tab","Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "DEL"];
const thirdRowOfSymbols = ["Caps lock","A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "ENTER"];
const fourthRowOfSymbols = ["Shift","Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Up", "Shift"];
const fifthRowOfSymbols = ["Ctrl","Win", "Alt", "Space", "Alt", "Ctrl", "Left", "Down", "Right", "En\nRu"];

//Create keyboard with textarea

document.body.className = "body";
const textArea = document.createElement("textarea");
textArea.className = "keyboard__text-area";
document.body.prepend(textArea);
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

addFirstRowOfButtons();
addSecondRowOfButtons();
addThirdRowOfButtons();
addFourthRowOfButtons();
addFifthRowOfButtons();

//Create design of buttons

const buttons = document.querySelectorAll(".keyboard__button");

function createDesignOfButtons() {
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

createDesignOfButtons();

//Create physical keyboard events

function addButtonsClickHandler() {
  document.addEventListener('keydown', (e) => {
    textArea.focus();
    switch(e.code){
      case "Backquote":            
        buttons[0].classList.add("keyboard__button_active");
      break;
      case "Digit1":               
        buttons[1].classList.add("keyboard__button_active");
      break;
      case "Digit2":                
        buttons[2].classList.add("keyboard__button_active");
      break;
      case "Digit3":               
        buttons[3].classList.add("keyboard__button_active");
      break;
      case "Digit4":                
        buttons[4].classList.add("keyboard__button_active");
      break;
      case "Digit5":               
        buttons[5].classList.add("keyboard__button_active");
      break;
      case "Digit6":                
        buttons[6].classList.add("keyboard__button_active");
      break;
      case "Digit7":               
        buttons[7].classList.add("keyboard__button_active");
      break;
      case "Digit8":                
        buttons[8].classList.add("keyboard__button_active");
      break;
      case "Digit9":                
        buttons[9].classList.add("keyboard__button_active");
      break;
      case "Digit0":                
        buttons[10].classList.add("keyboard__button_active");
      break;
      case "Minus":                
        buttons[11].classList.add("keyboard__button_active");
      break;
      case "Equal":                
        buttons[12].classList.add("keyboard__button_active");
      break;
      case "Backspace":                
        buttons[13].classList.add("keyboard__button_active");
      break;
      case "Tab":                
        buttons[14].classList.add("keyboard__button_active");
      break;
      case "KeyQ":                
        buttons[15].classList.add("keyboard__button_active");
      break;
      case "KeyW":                
        buttons[16].classList.add("keyboard__button_active");
      break;
      case "KeyE":                
        buttons[17].classList.add("keyboard__button_active");
      break;
      case "KeyR":                
        buttons[18].classList.add("keyboard__button_active");
      break;
      case "KeyT":                
        buttons[19].classList.add("keyboard__button_active");
      break;
      case "KeyY":                
        buttons[20].classList.add("keyboard__button_active");
      break;
      case "KeyU":                
        buttons[21].classList.add("keyboard__button_active");
      break;
      case "KeyI":                
        buttons[22].classList.add("keyboard__button_active");
      break;
      case "KeyO":                
        buttons[23].classList.add("keyboard__button_active");
      break;
      case "KeyP":                
        buttons[24].classList.add("keyboard__button_active");
      break;
      case "BracketLeft":                
        buttons[25].classList.add("keyboard__button_active");
      break;
      case "BracketRight":                
        buttons[26].classList.add("keyboard__button_active");
      break;
      case "Backslash":                
        buttons[27].classList.add("keyboard__button_active");
      break;
      case "Delete":                
        buttons[28].classList.add("keyboard__button_active");
      break;
      case "CapsLock":                
        buttons[29].classList.add("keyboard__button_active");
      break;
      case "KeyA":                
        buttons[30].classList.add("keyboard__button_active");
      break;
      case "KeyS":                
        buttons[31].classList.add("keyboard__button_active");
      break;
      case "KeyD":                
        buttons[32].classList.add("keyboard__button_active");
      break;
      case "KeyF":                
        buttons[33].classList.add("keyboard__button_active");
      break;
      case "KeyG":                
        buttons[34].classList.add("keyboard__button_active");
      break;
      case "KeyH":                
        buttons[35].classList.add("keyboard__button_active");
      break;
      case "KeyJ":                
        buttons[36].classList.add("keyboard__button_active");
      break;
      case "KeyK":                
        buttons[37].classList.add("keyboard__button_active");
      break;
      case "KeyL":                
        buttons[38].classList.add("keyboard__button_active");
      break;
      case "Semicolon":                
        buttons[39].classList.add("keyboard__button_active");
      break;
      case "Quote":                
        buttons[40].classList.add("keyboard__button_active");
      break;
      case "Enter":                
        buttons[41].classList.add("keyboard__button_active");
      break;
      case "ShiftLeft":                
        buttons[42].classList.add("keyboard__button_active");
      break;
      case "KeyZ":                
        buttons[43].classList.add("keyboard__button_active");
      break;
      case "KeyX":                
        buttons[44].classList.add("keyboard__button_active");
      break;
      case "KeyC":                
        buttons[45].classList.add("keyboard__button_active");
      break;
      case "KeyV":                
        buttons[46].classList.add("keyboard__button_active");
      break;
      case "KeyB":                
        buttons[47].classList.add("keyboard__button_active");
      break;
      case "KeyN":                
        buttons[48].classList.add("keyboard__button_active");
      break;
      case "KeyM":                
        buttons[49].classList.add("keyboard__button_active");
      break;
      case "Comma":                
        buttons[50].classList.add("keyboard__button_active");
      break;
      case "Period":                
        buttons[51].classList.add("keyboard__button_active");
      break;
      case "Slash":                
        buttons[52].classList.add("keyboard__button_active");
      break;
      case "ArrowUp":                
        buttons[53].classList.add("keyboard__button_active");
      break;
      case "RightShift":                
        buttons[54].classList.add("keyboard__button_active");
      break;
      case "ControlLeft":                
        buttons[55].classList.add("keyboard__button_active");
      break;
      case "MetaLeft":                
        buttons[56].classList.add("keyboard__button_active");
      break;
      case "AltLeft":                
        buttons[57].classList.add("keyboard__button_active");
      break;
      case "Space":                
        buttons[58].classList.add("keyboard__button_active");
      break;
      case "AltRight":                
        buttons[59].classList.add("keyboard__button_active");
      break;
      case "ControlRight":                
        buttons[60].classList.add("keyboard__button_active");
      break;
      case "ArrowLeft":                
        buttons[61].classList.add("keyboard__button_active");
      break;
      case "ArrowDown":                
        buttons[62].classList.add("keyboard__button_active");
      break;
      case "ArrowRight":                
        buttons[63].classList.add("keyboard__button_active");
      break;
    }  
  });
  
  document.addEventListener('keyup', (e) => {
    switch(e.code){
      case "Backquote":     
        buttons[0].classList.remove("keyboard__button_active"); 
      break;
      case "Digit1":               
        buttons[1].classList.remove("keyboard__button_active");
      break;
      case "Digit2":                
        buttons[2].classList.remove("keyboard__button_active");
      break;
      case "Digit3":               
        buttons[3].classList.remove("keyboard__button_active");
      break;
      case "Digit4":                
        buttons[4].classList.remove("keyboard__button_active");
      break;
      case "Digit5":               
        buttons[5].classList.remove("keyboard__button_active");
      break;
      case "Digit6":                
        buttons[6].classList.remove("keyboard__button_active");
      break;
      case "Digit7":               
        buttons[7].classList.remove("keyboard__button_active");
      break;
      case "Digit8":                
        buttons[8].classList.remove("keyboard__button_active");
      break;
      case "Digit9":                
        buttons[9].classList.remove("keyboard__button_active");
      break;
      case "Digit0":                
        buttons[10].classList.remove("keyboard__button_active");
      break;
      case "Minus":                
        buttons[11].classList.remove("keyboard__button_active");
      break;
      case "Equal":                
        buttons[12].classList.remove("keyboard__button_active");
      break;
      case "Backspace":                
        buttons[13].classList.remove("keyboard__button_active");
      break;
      case "Tab":                
      buttons[14].classList.remove("keyboard__button_active");
        break;
      case "KeyQ":                
        buttons[15].classList.remove("keyboard__button_active");
      break;
      case "KeyW":                
        buttons[16].classList.remove("keyboard__button_active");
      break;
      case "KeyE":                
        buttons[17].classList.remove("keyboard__button_active");
      break;
      case "KeyR":                
        buttons[18].classList.remove("keyboard__button_active");
      break;
      case "KeyT":                
        buttons[19].classList.remove("keyboard__button_active");
      break;
      case "KeyY":                
        buttons[20].classList.remove("keyboard__button_active");
      break;
      case "KeyU":                
        buttons[21].classList.remove("keyboard__button_active");
      break;
      case "KeyI":                
        buttons[22].classList.remove("keyboard__button_active");
      break;
      case "KeyO":                
        buttons[23].classList.remove("keyboard__button_active");
      break;
      case "KeyP":                
        buttons[24].classList.remove("keyboard__button_active");
      break;
      case "BracketLeft":                
        buttons[25].classList.remove("keyboard__button_active");
      break;
      case "BracketRight":                
        buttons[26].classList.remove("keyboard__button_active");
      break;
      case "Backslash":                
        buttons[27].classList.remove("keyboard__button_active");
      break;
      case "Delete":                
        buttons[28].classList.remove("keyboard__button_active");
      break;
      case "CapsLock":                
        buttons[29].classList.remove("keyboard__button_active");
      break;
      case "KeyA":                
        buttons[30].classList.remove("keyboard__button_active");
      break;
      case "KeyS":                
        buttons[31].classList.remove("keyboard__button_active");
      break;
      case "KeyD":                
        buttons[32].classList.remove("keyboard__button_active");
      break;
      case "KeyF":                
        buttons[33].classList.remove("keyboard__button_active");
      break;
      case "KeyG":                
        buttons[34].classList.remove("keyboard__button_active");
      break;
      case "KeyH":                
        buttons[35].classList.remove("keyboard__button_active");
      break;
      case "KeyJ":                
        buttons[36].classList.remove("keyboard__button_active");
      break;
      case "KeyK":                
        buttons[37].classList.remove("keyboard__button_active");
      break;
      case "KeyL":                
        buttons[38].classList.remove("keyboard__button_active");
      break;
      case "Semicolon":                
        buttons[39].classList.remove("keyboard__button_active");
      break;
      case "Quote":                
        buttons[40].classList.remove("keyboard__button_active");
      break;
      case "Enter":                
        buttons[41].classList.remove("keyboard__button_active");
      break;
      case "ShiftLeft":                
        buttons[42].classList.remove("keyboard__button_active");
      break;
      case "KeyZ":                
        buttons[43].classList.remove("keyboard__button_active");
      break;
      case "KeyX":                
        buttons[44].classList.remove("keyboard__button_active");
      break;
      case "KeyC":                
        buttons[45].classList.remove("keyboard__button_active");
      break;
      case "KeyV":                
        buttons[46].classList.remove("keyboard__button_active");
      break;
      case "KeyB":                
        buttons[47].classList.remove("keyboard__button_active");
      break;
      case "KeyN":                
        buttons[48].classList.remove("keyboard__button_active");
      break;
      case "KeyM":                
        buttons[49].classList.remove("keyboard__button_active");
      break;
      case "Comma":                
        buttons[50].classList.remove("keyboard__button_active");
      break;
      case "Period":                
        buttons[51].classList.remove("keyboard__button_active");
      break;
      case "Slash":                
        buttons[52].classList.remove("keyboard__button_active");
      break;
      case "ArrowUp":                
        buttons[53].classList.remove("keyboard__button_active");
      break;
      case "RightShift":                
        buttons[54].classList.remove("keyboard__button_active");
      break;
      case "ControlLeft":                
        buttons[55].classList.remove("keyboard__button_active");
      break;
      case "MetaLeft":                
        buttons[56].classList.remove("keyboard__button_active");
      break;
      case "AltLeft":                
        buttons[57].classList.remove("keyboard__button_active");
      break;
      case "Space":                
        buttons[58].classList.remove("keyboard__button_active");
      break;
      case "AltRight":                
        buttons[59].classList.remove("keyboard__button_active");
      break;
      case "ControlRight":                
        buttons[60].classList.remove("keyboard__button_active");
      break;
      case "ArrowLeft":                
        buttons[61].classList.remove("keyboard__button_active");
      break;
      case "ArrowDown":                
        buttons[62].classList.remove("keyboard__button_active");
      break;
      case "ArrowRight":                
        buttons[63].classList.remove("keyboard__button_active");
      break;
    }  
  });
}

addButtonsClickHandler();