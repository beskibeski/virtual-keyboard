//Global constants
const numberOfKeyboardRows = 5;

const firstRowOfSymbols = ["`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"];
const secondRowOfSymbols = ["Tab","Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "DEL"];
const thirdRowOfSymbols = ["Caps lock","A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "ENTER"];
const fourthRowOfSymbols = ["Shift","Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Up", "Shift"];
const fifthRowOfSymbols = ["Ctrl","Win", "Alt", "Space", "Alt", "Left", "Down", "Right", "Ctrl"];

//Create keyboard with textarea and help text

document.body.className = "body";
const textArea = document.createElement("textarea");
textArea.className = "keyboard__text-area";
document.body.prepend(textArea);
textArea.setAttribute("rows","5");
const keyboard = document.createElement("div");
keyboard.className = "keyboard"; 
document.body.append(keyboard);
const helpText = document.createElement("div");
helpText.className = "keyboard__help-text";
document.body.append(helpText);
helpText.innerText = "Windows keyboard. Switch language by Shift + Alt";
textArea.focus();
let isCapsLock = false;
let isShift = false;

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


addPhysicalKeyboardButtonsClickHandler();

function addPhysicalKeyboardButtonsClickHandler() {     
  document.addEventListener('keydown', (event) => {      
    switch(event.code){
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
        makeNewFunctionalityForTab(event, event.code, 14);
      break;
      case "KeyQ":
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 15);
      break;
      case "KeyW":
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 16);
      break;
      case "KeyE":
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 17);
      break;
      case "KeyR":
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 18);
      break;
      case "KeyT":
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 19);
      break;
      case "KeyY":
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 20);
      break;
      case "KeyU": 
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 21);
      break;
      case "KeyI":
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 22);
      break;
      case "KeyO":
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 23);
      break;
      case "KeyP":
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 24);
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
        changeCapsLockColorIfActive();            
      break;
      case "KeyA":            
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 30);
      break;
      case "KeyS":                
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 31);
      break;
      case "KeyD":                
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 32);
      break;
      case "KeyF":                
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 33);
      break;
      case "KeyG":                
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 34);
      break;
      case "KeyH":                
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 35);
      break;
      case "KeyJ":                
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 36);
      break;
      case "KeyK":                
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 37);
      break;
      case "KeyL":                
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 38);
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
        buttons[42].classList.add("keyboard__button-letter_active");
      break;
      case "KeyZ":                
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 43);
      break;
      case "KeyX":                
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 44);
      break;
      case "KeyC":                
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 45);
      break;
      case "KeyV":                
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 46);
      break;
      case "KeyB":                
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 47);
      break;
      case "KeyN":                
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 48);
      break;
      case "KeyM":                
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 49);
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
      case "ShiftRight":                
        buttons[54].classList.add("keyboard__button-letter_active");
      break;
      case "ControlLeft":                
        buttons[55].classList.add("keyboard__button_active");
      break;
      case "MetaLeft":                
        buttons[56].classList.add("keyboard__button_active");
      break;
      case "AltLeft":                
        buttons[57].classList.add("keyboard__button_active");
        event.preventDefault();
        textArea.focus();
      break;
      case "Space":                
        buttons[58].classList.add("keyboard__button_active");
      break;
      case "AltRight":                
        buttons[59].classList.add("keyboard__button_active");
        event.preventDefault();
        textArea.focus();
      break;      
      case "ArrowLeft":                
        buttons[60].classList.add("keyboard__button_active");
      break;
      case "ArrowDown":                
        buttons[61].classList.add("keyboard__button_active");
      break;
      case "ArrowRight":                
        buttons[62].classList.add("keyboard__button_active");
      break;
      case "ControlRight":                
        buttons[63].classList.add("keyboard__button_active");
      break;
    }  
  });
  
  document.addEventListener('keyup', (event) => {
    switch(event.code){
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
        buttons[42].classList.remove("keyboard__button-letter_active");
        buttons[54].classList.remove("keyboard__button-letter_active");
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
      case "ShiftRight":                        
        buttons[54].classList.remove("keyboard__button-letter_active");
        buttons[42].classList.remove("keyboard__button-letter_active");        
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
      case "ArrowLeft":                
        buttons[60].classList.remove("keyboard__button_active");
      break;
      case "ArrowDown":                
        buttons[61].classList.remove("keyboard__button_active");
      break;
      case "ArrowRight":                
        buttons[62].classList.remove("keyboard__button_active");
      break;
      case "ControlRight":                
        buttons[63].classList.remove("keyboard__button_active");
      break;
    }  
  });
}

function makeLetterUpperCaseIfIsCapsLock(event, key, buttonNumber) {
  buttons[buttonNumber].classList.add("keyboard__button_active");
  event.preventDefault();
  if(isCapsLock) {  
    textArea.value += key[3]; 
  }
  else {
    if(event.shiftKey || isShift){
      textArea.value += key[3];       
    }
    else{
      textArea.value += key[3].toLowerCase();
    } 
  }
}

//TODO right implementation
function makeNewFunctionalityForTab(event, key, buttonNumber) {
  buttons[buttonNumber].classList.add("keyboard__button_active");
  event.preventDefault();
  textArea.value += "  "; 
}

//Create virtual keyboard click handler

function addVirtualKeyboardButtonsClickHandler() { 
  buttons.forEach(element => {    
    element.addEventListener("mousedown", (e) => {      
      onMouseDown(element, 0, "`");      
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 1, "1");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 2, "2");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 3, "3");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 4, "4");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 5, "5");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 6, "6");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 7, "7");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 8, "8");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 9, "9");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 10, "0");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 11, "-");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 12, "=");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 13, "Backspace");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 0, "`");      
    })    
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 1, "1");
    })    
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 2, "2");
    })    
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 3, "3");
    })    
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 4, "4");
    })    
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 5, "5");
    })    
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 6, "6");
    })    
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 7, "7");
    })    
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 8, "8");
    })    
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 9, "9");
    })    
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 10, "0");
    })    
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 11, "-");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 12, "=");
    })    
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 13, "Backspace");
    })    
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 14, "Tab");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 15, "Q");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 16, "W");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 17, "E");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 18, "R");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 19, "T");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 20, "Y");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 21, "U");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 22, "I");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 23, "O");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 24, "P");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 25, "[");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 26, "]");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 27, "\\");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 28, "DEL");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 14, "Tab");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 15, "Q");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 16, "W");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 17, "E");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 18, "R");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 19, "T");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 20, "Y");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 21, "U");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 22, "I");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 23, "O");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 24, "P");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 25, "[");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 26, "]");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 27, "\\");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 28, "DEL");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 29, "Caps lock");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 30, "A");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 31, "S");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 32, "D");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 33, "F");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 34, "G");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 35, "H");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 36, "J");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 37, "K");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 38, "L");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 39, ";");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 40, "''");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 41, "ENTER");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 29, "Caps lock");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 30, "A");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 31, "S");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 32, "D");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 33, "F");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 34, "G");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 35, "H");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 36, "J");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 37, "K");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 38, "L");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 39, ";");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 40, "'");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 41, "ENTER");
    })
    element.addEventListener("mousedown", (e) => {
      if(element.innerText === "Shift" && element.previousSibling === null) {
        if(!isShift) {
          buttons[42].classList.add("keyboard__button-letter_active");
          isShift = true;
        }
        else {
          buttons[42].classList.remove("keyboard__button-letter_active");
          isShift = false;
        }        
      }
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 43, "Z");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 44, "X");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 45, "C");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 46, "V");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 47, "B");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 48, "N");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 49, "M");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 50, ",");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 51, ".");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 52, "/");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 53, "↑");
    })
    element.addEventListener("mousedown", (e) => {
      if(element.innerText === "Shift" && element.nextSibling === null) {
        if(!isShift) {
          buttons[54].classList.add("keyboard__button-letter_active");
          isShift = true;
        }
        else {
          buttons[54].classList.remove("keyboard__button-letter_active");
          isShift = false;
        }
      }
    })   
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 43, "Z");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 44, "X");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 45, "C");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 46, "V");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 47, "B");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 48, "N");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 49, "M");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 50, ",");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 51, ".");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 52, "/");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 53, "↑");
    })    
    element.addEventListener("mousedown", (e) => {      
      if(element.innerText === "Ctrl" && element.previousSibling === null) {
        buttons[55].classList.add("keyboard__button_active");        
      }
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 56, "Win");
    })
    element.addEventListener("mousedown", (e) => {
      if(element.innerText === "Alt" && element.nextSibling.innerText === "Space") {
        buttons[57].classList.add("keyboard__button_active");        
      }
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 58, "Space");
    })
    element.addEventListener("mousedown", (e) => {
      if(element.innerText === "Alt" && element.previousSibling.innerText === "Space") {
        buttons[59].classList.add("keyboard__button_active");        
      }
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 60, "←");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 61, "↓");
    })
    element.addEventListener("mousedown", (e) => {
      onMouseDown(element, 62, "→");
    })
    element.addEventListener("mousedown", (e) => {      
      if(element.innerText === "Ctrl" && element.nextSibling === null) {
        buttons[63].classList.add("keyboard__button_active");        
      }
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 55, "Ctrl");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 56, "Win");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 57, "Alt");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 58, "Space");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 59, "Alt");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 60, "←");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 61, "↓");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 62, "→");
    })
    element.addEventListener("mouseup", (e) => {
      onMouseUp(element, 63, "Ctrl");
    })
  })
}

function onMouseDown(element, buttonNumber, text) {
  element.addEventListener("mouseleave", (e) => {
    onMouseUp(element, buttonNumber, text);
    e.stopPropagation();
  })
  if(element.innerText === text) {   
    buttons[buttonNumber].classList.add("keyboard__button_active");
    if(text === "Backspace") {      
      textArea.value = textArea.value.substring(0, textArea.value.length - 1);
    }
    else if((text === "DEL")) {
      textArea.value = textArea.value.substring(0, textArea.value.length - 1);
    }
    else if((text === "Tab")) {
      textArea.value += "  ";
    }
    else if((text === "Caps lock")) {
      buttons[buttonNumber].classList.remove("keyboard__button_active");
      changeCapsLockColorIfActive();      
    }
    else if((text === "Space")) {
      textArea.value += " ";
    }    
    else {      
      if(!isCapsLock && !isShift) {        
        textArea.value += text.toLowerCase();
      }      
      else {      
        textArea.value += text;                  
      }
    }         
  } 
}

function changeCapsLockColorIfActive() {
  if(isCapsLock) {
    isCapsLock = false;
    buttons[29].classList.remove("keyboard__button-letter_active");    
  }
  else{
    isCapsLock = true;
    buttons[29].classList.add("keyboard__button-letter_active");      
  }
}

function onMouseUp(element, buttonNumber, text) {
  if(element.innerText === text){
    buttons[buttonNumber].classList.remove("keyboard__button_active");      
  } 
}

addVirtualKeyboardButtonsClickHandler(); 

//Keep focus on textarea

textArea.addEventListener('focusout', (e) => {
  textArea.focus();
})