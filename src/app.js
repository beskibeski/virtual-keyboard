// Global constants
const numberOfKeyboardRows = 5;
let lastCursorPosition = 0;

let isEnglish = true;
let isCapsLock = false;
let isShift = false;
let isControl = false;

let firstRowOfSymbols = [];
let secondRowOfSymbols = [];
let thirdRowOfSymbols = [];
let fourthRowOfSymbols = [];
let fifthRowOfSymbols = [];

let firstRowOfSymbolsForShift = [];
let secondRowOfSymbolsForShift = [];

const language = localStorage.getItem('mainLanguage');

function changeLanguage() {
  if (isEnglish) {
    firstRowOfSymbols = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
    secondRowOfSymbols = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'DEL'];
    thirdRowOfSymbols = ['Caps lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'ENTER'];
    fourthRowOfSymbols = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', ':', 'Up', 'Shift'];
    fifthRowOfSymbols = ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'Ctrl'];
    firstRowOfSymbolsForShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', ''];
    secondRowOfSymbolsForShift = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '/', 'DEL'];
    localStorage.setItem('mainLanguage', 'english');
  } else {
    firstRowOfSymbols = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
    secondRowOfSymbols = ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'DEL'];
    thirdRowOfSymbols = ['Caps lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'ENTER'];
    fourthRowOfSymbols = ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ':', 'Up', 'Shift'];
    fifthRowOfSymbols = ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'Ctrl'];
    firstRowOfSymbolsForShift = ['', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', ''];
    secondRowOfSymbolsForShift = ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'DEL'];
    localStorage.setItem('mainLanguage', 'russian');
  }
}

if (language === 'russian') {
  isEnglish = false;
} else {
  isEnglish = true;
}

changeLanguage();

// Create keyboard with textarea and help text

document.body.className = 'body';
const textArea = document.createElement('textarea');
textArea.className = 'keyboard__text-area';
document.body.prepend(textArea);
textArea.setAttribute('rows', '5');
textArea.setAttribute('cols', '50');
const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
const alternativeKeyboard = document.createElement('div');
alternativeKeyboard.className = 'keyboard__alternative';
document.body.append(keyboard);
keyboard.append(alternativeKeyboard);
const helpText = document.createElement('div');
helpText.className = 'keyboard__help-text';
document.body.append(helpText);
helpText.innerText = 'Windows keyboard. Switch language by Ctr + Alt';
textArea.focus();

// Create keyboard rows

function createKeyboardRows() {
  for (let i = 0; i < numberOfKeyboardRows; i += 1) {
    const div = document.createElement('div');
    div.className = 'keyboard__row';
    div.id = `${i}`;
    keyboard.append(div);
  }
}

createKeyboardRows();

// Create keyboard buttons

const keyboardRows = document.querySelectorAll('.keyboard__row');

function addFirstRowOfButtons() {
  firstRowOfSymbols.forEach((element) => {
    const div = document.createElement('div');
    div.className = 'keyboard__button';
    keyboardRows[0].append(div);
    const divText = document.createElement('div');
    divText.className = 'keyboard__letter';
    div.append(divText);
    divText.innerText = firstRowOfSymbols[firstRowOfSymbols.indexOf(element)];
  });
}

function addSecondRowOfButtons() {
  secondRowOfSymbols.forEach((element) => {
    const div = document.createElement('div');
    div.className = 'keyboard__button';
    keyboardRows[1].append(div);
    const divText = document.createElement('div');
    divText.className = 'keyboard__letter';
    div.append(divText);
    divText.innerText = secondRowOfSymbols[secondRowOfSymbols.indexOf(element)];
  });
}

function addThirdRowOfButtons() {
  thirdRowOfSymbols.forEach((element) => {
    const div = document.createElement('div');
    div.className = 'keyboard__button';
    keyboardRows[2].append(div);
    const divText = document.createElement('div');
    divText.className = 'keyboard__letter';
    div.append(divText);
    divText.innerText = thirdRowOfSymbols[thirdRowOfSymbols.indexOf(element)];
  });
}

function addFourthRowOfButtons() {
  fourthRowOfSymbols.forEach((element) => {
    const div = document.createElement('div');
    div.className = 'keyboard__button';
    keyboardRows[3].append(div);
    const divText = document.createElement('div');
    divText.className = 'keyboard__letter';
    div.append(divText);
    divText.innerText = fourthRowOfSymbols[fourthRowOfSymbols.indexOf(element)];
  });
}

function addFifthRowOfButtons() {
  fifthRowOfSymbols.forEach((element) => {
    const div = document.createElement('div');
    div.className = 'keyboard__button';
    keyboardRows[4].append(div);
    const divText = document.createElement('div');
    divText.className = 'keyboard__letter';
    div.append(divText);
    divText.innerText = fifthRowOfSymbols[fifthRowOfSymbols.indexOf(element)];
  });
}

addFirstRowOfButtons();
addSecondRowOfButtons();
addThirdRowOfButtons();
addFourthRowOfButtons();
addFifthRowOfButtons();

// Create design of buttons

const buttons = document.querySelectorAll('.keyboard__button');

function createDesignOfButtons() {
  buttons.forEach((element) => {
    if (element.innerText === 'Space') {
      element.classList.add('keyboard__space_button');
    }
    if (element.innerText === 'Shift') {
      element.classList.add('keyboard__shift_button');
    }
    if (element.innerText === 'ENTER') {
      element.classList.add('keyboard__enter_button');
    }
    if (element.innerText === 'Caps lock') {
      element.classList.add('keyboard__caps-lock_button');
    }
    if (element.innerText === 'Tab') {
      element.classList.add('keyboard__tab_button');
    }
    if (element.innerText === 'Backspace') {
      element.classList.add('keyboard__backspace_button');
    }
    buttons[60].querySelector('.keyboard__letter').innerHTML = '←';
    buttons[62].querySelector('.keyboard__letter').innerHTML = '→';
    buttons[53].querySelector('.keyboard__letter').innerHTML = '↑';
    buttons[61].querySelector('.keyboard__letter').innerHTML = '↓';
  });
}

createDesignOfButtons();

// Create alternative keyboard design

function makeAlternativeKeyboard() {
  firstRowOfSymbolsForShift.forEach((element) => {
    const div = document.createElement('div');
    div.className = 'keyboard__button-alt';
    alternativeKeyboard.append(div);
    const divText = document.createElement('div');
    divText.className = 'keyboard__letter-alt';
    div.append(divText);
    divText.innerText = firstRowOfSymbolsForShift[firstRowOfSymbolsForShift.indexOf(element)];
  });
  const divText = document.createElement('div');
  divText.className = 'keyboard__button-alt-one';
  divText.innerText = '/';
  alternativeKeyboard.append(divText);
}

makeAlternativeKeyboard();

// Create keyboard events

function insertText(symbol) {
  if (textArea.selectionEnd === 0 && Number(symbol) < 10 && Number(symbol) > 0) {
    textArea.value = ' ';
  }
  lastCursorPosition = textArea.selectionStart;
  textArea.value = textArea.value.substring(textArea.value[0], textArea.selectionStart)
  + symbol + textArea.value.substring(
    textArea.selectionStart,
    textArea.value[textArea.value.length],
  );
  textArea.selectionEnd = lastCursorPosition + 1;
}

function makeLetterUpperCaseIfIsCapsLock(event, key, buttonNumber) {
  buttons[buttonNumber].classList.add('keyboard__button_active');
  event.preventDefault();
  if (isCapsLock) {
    insertText(buttons[buttonNumber].innerText);
  } else if (event.shiftKey || isShift) {
    insertText(buttons[buttonNumber].innerText);
    if (!event.shiftKey) {
      isShift = false;
      buttons[54].classList.remove('keyboard__button-letter_active');
      buttons[42].classList.remove('keyboard__button-letter_active');
    }
  } else {
    insertText(buttons[buttonNumber].innerText.toLowerCase());
    if (!event.shiftKey) {
      isShift = false;
      buttons[54].classList.remove('keyboard__button-letter_active');
      buttons[42].classList.remove('keyboard__button-letter_active');
    }
  }
}

function makeNewFunctionalityForTab(event, key, buttonNumber) {
  buttons[buttonNumber].classList.add('keyboard__button_active');
  event.preventDefault();
  insertText('\t');
}

function changeLanguageByButton() {
  textArea.focus();
  if (isControl) {
    if (isEnglish) {
      isEnglish = false;
    } else {
      isEnglish = true;
    }
    changeLanguage();
    const firstRowById = document.getElementById('0');
    for (let i = 0; i < firstRowById.querySelectorAll('.keyboard__letter').length; i += 1) {
      firstRowById.querySelectorAll('.keyboard__letter')[i].innerText = firstRowOfSymbols[i];
    }
    const secondRowById = document.getElementById('1');
    for (let i = 0; i < secondRowById.querySelectorAll('.keyboard__letter').length; i += 1) {
      secondRowById.querySelectorAll('.keyboard__letter')[i].innerText = secondRowOfSymbols[i];
    }
    const thirdRowById = document.getElementById('2');
    for (let i = 0; i < thirdRowById.querySelectorAll('.keyboard__letter').length; i += 1) {
      thirdRowById.querySelectorAll('.keyboard__letter')[i].innerText = thirdRowOfSymbols[i];
    }
    const fourthRowById = document.getElementById('3');
    for (let i = 0; i < fourthRowById.querySelectorAll('.keyboard__letter').length; i += 1) {
      fourthRowById.querySelectorAll('.keyboard__letter')[i].innerText = fourthRowOfSymbols[i];
    }
    const alternativeSymbolsKeyboard = document.querySelectorAll('.keyboard__letter-alt');
    for (let i = 0; i < alternativeSymbolsKeyboard.length; i += 1) {
      alternativeSymbolsKeyboard[i].innerText = firstRowOfSymbolsForShift[i];
    }
    createDesignOfButtons();
  }
}

function changeCapsLockColorIfActive() {
  if (isCapsLock) {
    isCapsLock = false;
    buttons[29].classList.remove('keyboard__button-letter_active');
  } else {
    isCapsLock = true;
    buttons[29].classList.add('keyboard__button-letter_active');
  }
}

function onMouseUp(element, buttonNumber, text, textRussian) {
  if (element.innerText === text || element.innerText === textRussian) {
    buttons[buttonNumber].classList.remove('keyboard__button_active');
  }
}

function addPhysicalKeyboardButtonsClickHandler() {
  document.addEventListener('keydown', (event) => {
    switch (event.code) {
      case 'Backquote':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 0);
        break;
      case 'Digit1':
        buttons[1].classList.add('keyboard__button_active');
        if (textArea.selectionEnd === 0) {
          textArea.value = ' ';
        }
        if (isShift) {
          event.preventDefault();
          insertText('!');
        }
        break;
      case 'Digit2':
        buttons[2].classList.add('keyboard__button_active');
        if (textArea.selectionEnd === 0) {
          textArea.value = ' ';
        }
        if (isShift) {
          event.preventDefault();
          insertText('@');
        }
        break;
      case 'Digit3':
        buttons[3].classList.add('keyboard__button_active');
        if (textArea.selectionEnd === 0) {
          textArea.value = ' ';
        }
        if (isShift) {
          event.preventDefault();
          insertText('#');
        }
        break;
      case 'Digit4':
        buttons[4].classList.add('keyboard__button_active');
        if (textArea.selectionEnd === 0) {
          textArea.value = ' ';
        }
        if (isShift) {
          event.preventDefault();
          insertText('$');
        }
        break;
      case 'Digit5':
        buttons[5].classList.add('keyboard__button_active');
        if (textArea.selectionEnd === 0) {
          textArea.value = ' ';
        }
        if (isShift) {
          event.preventDefault();
          insertText('%');
        }
        break;
      case 'Digit6':
        buttons[6].classList.add('keyboard__button_active');
        if (textArea.selectionEnd === 0) {
          textArea.value = ' ';
        }
        if (isShift) {
          event.preventDefault();
          insertText('^');
        }
        break;
      case 'Digit7':
        buttons[7].classList.add('keyboard__button_active');
        if (textArea.selectionEnd === 0) {
          textArea.value = ' ';
        }
        if (isShift) {
          event.preventDefault();
          insertText('&');
        }
        break;
      case 'Digit8':
        buttons[8].classList.add('keyboard__button_active');
        if (textArea.selectionEnd === 0) {
          textArea.value = ' ';
        }
        break;
      case 'Digit9':
        buttons[9].classList.add('keyboard__button_active');
        if (textArea.selectionEnd === 0) {
          textArea.value = ' ';
        }
        if (isShift) {
          event.preventDefault();
          insertText('(');
        }
        break;
      case 'Digit0':
        buttons[10].classList.add('keyboard__button_active');
        if (isShift) {
          event.preventDefault();
          insertText(')');
        }
        break;
      case 'Minus':
        buttons[11].classList.add('keyboard__button_active');
        break;
      case 'Equal':
        buttons[12].classList.add('keyboard__button_active');
        break;
      case 'Backspace':
        buttons[13].classList.add('keyboard__button_active');
        break;
      case 'Tab':
        makeNewFunctionalityForTab(event, event.code, 14);
        break;
      case 'KeyQ':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 15);
        break;
      case 'KeyW':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 16);
        break;
      case 'KeyE':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 17);
        break;
      case 'KeyR':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 18);
        break;
      case 'KeyT':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 19);
        break;
      case 'KeyY':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 20);
        break;
      case 'KeyU':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 21);
        break;
      case 'KeyI':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 22);
        break;
      case 'KeyO':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 23);
        break;
      case 'KeyP':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 24);
        break;
      case 'BracketLeft':
        buttons[25].classList.add('keyboard__button_active');
        break;
      case 'BracketRight':
        buttons[26].classList.add('keyboard__button_active');
        break;
      case 'Backslash':
        buttons[27].classList.add('keyboard__button_active');
        break;
      case 'Delete':
        buttons[28].classList.add('keyboard__button_active');
        break;
      case 'CapsLock':
        changeCapsLockColorIfActive();
        break;
      case 'KeyA':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 30);
        break;
      case 'KeyS':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 31);
        break;
      case 'KeyD':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 32);
        break;
      case 'KeyF':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 33);
        break;
      case 'KeyG':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 34);
        break;
      case 'KeyH':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 35);
        break;
      case 'KeyJ':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 36);
        break;
      case 'KeyK':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 37);
        break;
      case 'KeyL':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 38);
        break;
      case 'Semicolon':
        buttons[39].classList.add('keyboard__button_active');
        if (!isEnglish) {
          event.preventDefault();
          insertText(';');
        }
        break;
      case 'Quote':
        buttons[40].classList.add('keyboard__button_active');
        if (!isEnglish) {
          event.preventDefault();
          insertText('\'');
        }
        break;
      case 'Enter':
        buttons[41].classList.add('keyboard__button_active');
        break;
      case 'ShiftLeft':
        buttons[42].classList.add('keyboard__button-letter_active');
        isShift = true;
        break;
      case 'KeyZ':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 43);
        break;
      case 'KeyX':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 44);
        break;
      case 'KeyC':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 45);
        break;
      case 'KeyV':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 46);
        break;
      case 'KeyB':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 47);
        break;
      case 'KeyN':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 48);
        break;
      case 'KeyM':
        makeLetterUpperCaseIfIsCapsLock(event, event.code, 49);
        break;
      case 'Comma':
        buttons[50].classList.add('keyboard__button_active');
        if (isEnglish) {
          event.preventDefault();
          insertText(',');
        }
        break;
      case 'Period':
        buttons[51].classList.add('keyboard__button_active');
        if (isEnglish) {
          event.preventDefault();
          insertText('.');
        }
        break;
      case 'Slash':
        buttons[52].classList.add('keyboard__button_active');
        event.preventDefault();
        insertText(':');
        break;
      case 'ArrowUp':
        buttons[53].classList.add('keyboard__button_active');
        break;
      case 'ShiftRight':
        buttons[54].classList.add('keyboard__button-letter_active');
        break;
      case 'ControlLeft':
        buttons[55].classList.add('keyboard__button_active');
        isControl = true;
        break;
      case 'MetaLeft':
        buttons[56].classList.add('keyboard__button_active');
        isShift = true;
        break;
      case 'AltLeft':
        buttons[57].classList.add('keyboard__button_active');
        event.preventDefault();
        changeLanguageByButton();
        break;
      case 'Space':
        buttons[58].classList.add('keyboard__button_active');
        break;
      case 'AltRight':
        buttons[59].classList.add('keyboard__button_active');
        event.preventDefault();
        changeLanguageByButton();
        break;
      case 'ArrowLeft':
        buttons[60].classList.add('keyboard__button_active');
        break;
      case 'ArrowDown':
        buttons[61].classList.add('keyboard__button_active');
        break;
      case 'ArrowRight':
        buttons[62].classList.add('keyboard__button_active');
        break;
      case 'ControlRight':
        buttons[63].classList.add('keyboard__button_active');
        isControl = true;
        break;
      default:
        break;
    }
  });

  document.addEventListener('keyup', (event) => {
    switch (event.code) {
      case 'Backquote':
        buttons[0].classList.remove('keyboard__button_active');
        break;
      case 'Digit1':
        buttons[1].classList.remove('keyboard__button_active');
        break;
      case 'Digit2':
        buttons[2].classList.remove('keyboard__button_active');
        break;
      case 'Digit3':
        buttons[3].classList.remove('keyboard__button_active');
        break;
      case 'Digit4':
        buttons[4].classList.remove('keyboard__button_active');
        break;
      case 'Digit5':
        buttons[5].classList.remove('keyboard__button_active');
        break;
      case 'Digit6':
        buttons[6].classList.remove('keyboard__button_active');
        break;
      case 'Digit7':
        buttons[7].classList.remove('keyboard__button_active');
        break;
      case 'Digit8':
        buttons[8].classList.remove('keyboard__button_active');
        break;
      case 'Digit9':
        buttons[9].classList.remove('keyboard__button_active');
        break;
      case 'Digit0':
        buttons[10].classList.remove('keyboard__button_active');
        break;
      case 'Minus':
        buttons[11].classList.remove('keyboard__button_active');
        break;
      case 'Equal':
        buttons[12].classList.remove('keyboard__button_active');
        break;
      case 'Backspace':
        buttons[13].classList.remove('keyboard__button_active');
        break;
      case 'Tab':
        buttons[14].classList.remove('keyboard__button_active');
        break;
      case 'KeyQ':
        buttons[15].classList.remove('keyboard__button_active');
        break;
      case 'KeyW':
        buttons[16].classList.remove('keyboard__button_active');
        break;
      case 'KeyE':
        buttons[17].classList.remove('keyboard__button_active');
        break;
      case 'KeyR':
        buttons[18].classList.remove('keyboard__button_active');
        break;
      case 'KeyT':
        buttons[19].classList.remove('keyboard__button_active');
        break;
      case 'KeyY':
        buttons[20].classList.remove('keyboard__button_active');
        break;
      case 'KeyU':
        buttons[21].classList.remove('keyboard__button_active');
        break;
      case 'KeyI':
        buttons[22].classList.remove('keyboard__button_active');
        break;
      case 'KeyO':
        buttons[23].classList.remove('keyboard__button_active');
        break;
      case 'KeyP':
        buttons[24].classList.remove('keyboard__button_active');
        break;
      case 'BracketLeft':
        buttons[25].classList.remove('keyboard__button_active');
        break;
      case 'BracketRight':
        buttons[26].classList.remove('keyboard__button_active');
        break;
      case 'Backslash':
        buttons[27].classList.remove('keyboard__button_active');
        break;
      case 'Delete':
        buttons[28].classList.remove('keyboard__button_active');
        break;
      case 'KeyA':
        buttons[30].classList.remove('keyboard__button_active');
        break;
      case 'KeyS':
        buttons[31].classList.remove('keyboard__button_active');
        break;
      case 'KeyD':
        buttons[32].classList.remove('keyboard__button_active');
        break;
      case 'KeyF':
        buttons[33].classList.remove('keyboard__button_active');
        break;
      case 'KeyG':
        buttons[34].classList.remove('keyboard__button_active');
        break;
      case 'KeyH':
        buttons[35].classList.remove('keyboard__button_active');
        break;
      case 'KeyJ':
        buttons[36].classList.remove('keyboard__button_active');
        break;
      case 'KeyK':
        buttons[37].classList.remove('keyboard__button_active');
        break;
      case 'KeyL':
        buttons[38].classList.remove('keyboard__button_active');
        break;
      case 'Semicolon':
        buttons[39].classList.remove('keyboard__button_active');
        break;
      case 'Quote':
        buttons[40].classList.remove('keyboard__button_active');
        break;
      case 'Enter':
        buttons[41].classList.remove('keyboard__button_active');
        break;
      case 'ShiftLeft':
        buttons[42].classList.remove('keyboard__button-letter_active');
        buttons[54].classList.remove('keyboard__button-letter_active');
        isShift = false;
        break;
      case 'KeyZ':
        buttons[43].classList.remove('keyboard__button_active');
        break;
      case 'KeyX':
        buttons[44].classList.remove('keyboard__button_active');
        break;
      case 'KeyC':
        buttons[45].classList.remove('keyboard__button_active');
        break;
      case 'KeyV':
        buttons[46].classList.remove('keyboard__button_active');
        break;
      case 'KeyB':
        buttons[47].classList.remove('keyboard__button_active');
        break;
      case 'KeyN':
        buttons[48].classList.remove('keyboard__button_active');
        break;
      case 'KeyM':
        buttons[49].classList.remove('keyboard__button_active');
        break;
      case 'Comma':
        buttons[50].classList.remove('keyboard__button_active');
        break;
      case 'Period':
        buttons[51].classList.remove('keyboard__button_active');
        break;
      case 'Slash':
        buttons[52].classList.remove('keyboard__button_active');
        break;
      case 'ArrowUp':
        buttons[53].classList.remove('keyboard__button_active');
        break;
      case 'ShiftRight':
        buttons[54].classList.remove('keyboard__button-letter_active');
        buttons[42].classList.remove('keyboard__button-letter_active');
        isShift = false;
        break;
      case 'ControlLeft':
        buttons[55].classList.remove('keyboard__button_active');
        isControl = false;
        break;
      case 'MetaLeft':
        buttons[56].classList.remove('keyboard__button_active');
        break;
      case 'AltLeft':
        buttons[57].classList.remove('keyboard__button_active');
        break;
      case 'Space':
        buttons[58].classList.remove('keyboard__button_active');
        break;
      case 'AltRight':
        buttons[59].classList.remove('keyboard__button_active');
        break;
      case 'ArrowLeft':
        buttons[60].classList.remove('keyboard__button_active');
        break;
      case 'ArrowDown':
        buttons[61].classList.remove('keyboard__button_active');
        break;
      case 'ArrowRight':
        buttons[62].classList.remove('keyboard__button_active');
        break;
      case 'ControlRight':
        buttons[63].classList.remove('keyboard__button_active');
        isControl = false;
        break;
      default:
        break;
    }
  });
}

addPhysicalKeyboardButtonsClickHandler();

// Create virtual keyboard click handler

function onMouseDown(element, buttonNumber, text, textRussian) {
  element.addEventListener('mouseleave', () => {
    onMouseUp(element, buttonNumber, text, textRussian);
  });
  if (element.innerText === text || element.innerText === textRussian) {
    buttons[buttonNumber].classList.add('keyboard__button_active');
    if (text === 'Backspace') {
      /* if(Number(textArea.value[2]) > 0 && Number(textArea.value[2])
       < 10 && textArea.selectionEnd === 1){
        textArea.selectionEnd = 1;
        textArea.selectionStart = 1;
        return;
      } */
      lastCursorPosition = textArea.selectionStart;
      textArea.value = textArea.value.substring(
        textArea.value[0],
        textArea.selectionStart - 1,
      ) + textArea.value.substring(
        textArea.selectionStart,
        textArea.value[textArea.value.length],
      );
      textArea.selectionEnd = lastCursorPosition - 1;
      if (textArea.selectionStart === 0) {
        textArea.selectionEnd = 0;
      }
    } else if ((text === 'DEL')) {
      lastCursorPosition = textArea.selectionStart;
      textArea.value = textArea.value.substring(textArea.value[0], textArea.selectionStart)
      + textArea.value.substring(textArea.selectionStart
      + 1, textArea.value[textArea.value.length]);
      textArea.selectionEnd = lastCursorPosition;
    } else if ((text === 'Tab')) {
      insertText('\t');
    } else if ((text === 'ENTER')) {
      insertText('\n');
    } else if ((text === 'Caps lock')) {
      buttons[buttonNumber].classList.remove('keyboard__button_active');
      changeCapsLockColorIfActive();
    } else if ((text === 'Space')) {
      insertText(' ');
    } else if (!isCapsLock && !isShift) {
      if (isEnglish) {
        insertText(text.toLowerCase());
      } else {
        insertText(textRussian.toLowerCase());
      }
    } else if (isEnglish) {
      insertText(text);
      if (isShift) {
        isShift = false;
        buttons[54].classList.remove('keyboard__button-letter_active');
        buttons[42].classList.remove('keyboard__button-letter_active');
      }
    } else {
      insertText(textRussian);
      if (isShift) {
        isShift = false;
        buttons[54].classList.remove('keyboard__button-letter_active');
        buttons[42].classList.remove('keyboard__button-letter_active');
      }
    }
  }
}

function onMouseDownAlternative(element, buttonNumber, text, textAlternative) {
  element.addEventListener('mouseleave', (e) => {
    onMouseUp(element, buttonNumber, text, textAlternative);
    e.stopPropagation();
  });
  if (element.innerText === text || element.innerText === textAlternative) {
    buttons[buttonNumber].classList.add('keyboard__button_active');
    if (isShift) {
      if (buttonNumber <= 12) {
        insertText(firstRowOfSymbolsForShift[buttonNumber]);
      } else {
        insertText(secondRowOfSymbolsForShift[buttonNumber - firstRowOfSymbolsForShift.length]);
      }
      isShift = false;
      buttons[54].classList.remove('keyboard__button-letter_active');
      buttons[42].classList.remove('keyboard__button-letter_active');
    } else {
      insertText(text);
      isShift = false;
      buttons[54].classList.remove('keyboard__button-letter_active');
      buttons[42].classList.remove('keyboard__button-letter_active');
    }
  }
}

function addVirtualKeyboardButtonsClickHandler() {
  buttons.forEach((element) => {
    element.addEventListener('mousedown', () => {
      if (!isEnglish) {
        onMouseDown(element, 0, '`', 'Ё');
      }
      if (isEnglish) {
        onMouseDownAlternative(element, 0, '`', '~');
      }
    });
    element.addEventListener('mousedown', () => {
      onMouseDownAlternative(element, 1, '1', '!');
    });
    element.addEventListener('mousedown', () => {
      onMouseDownAlternative(element, 2, '2', '@');
    });
    element.addEventListener('mousedown', () => {
      onMouseDownAlternative(element, 3, '3', '#');
    });
    element.addEventListener('mousedown', () => {
      onMouseDownAlternative(element, 4, '4', '$');
    });
    element.addEventListener('mousedown', () => {
      onMouseDownAlternative(element, 5, '5', '%');
    });
    element.addEventListener('mousedown', () => {
      onMouseDownAlternative(element, 6, '6', '^');
    });
    element.addEventListener('mousedown', () => {
      onMouseDownAlternative(element, 7, '7', '&');
    });
    element.addEventListener('mousedown', () => {
      onMouseDownAlternative(element, 8, '8', '*');
    });
    element.addEventListener('mousedown', () => {
      onMouseDownAlternative(element, 9, '9', '(');
    });
    element.addEventListener('mousedown', () => {
      onMouseDownAlternative(element, 10, '0', ')');
    });
    element.addEventListener('mousedown', () => {
      onMouseDownAlternative(element, 11, '-', '_');
    });
    element.addEventListener('mousedown', () => {
      onMouseDownAlternative(element, 12, '=', '+');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 13, 'Backspace');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 0, '`', 'Ё');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 1, '1');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 2, '2');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 3, '3');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 4, '4');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 5, '5');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 6, '6');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 7, '7');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 8, '8');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 9, '9');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 10, '0');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 11, '-');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 12, '=');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 13, 'Backspace');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 14, 'Tab');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 15, 'Q', 'Й');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 16, 'W', 'Ц');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 17, 'E', 'У');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 18, 'R', 'К');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 19, 'T', 'Е');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 20, 'Y', 'Н');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 21, 'U', 'Г');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 22, 'I', 'Ш');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 23, 'O', 'Щ');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 24, 'P', 'З');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 25, '[', 'Х');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 26, ']', 'Ъ');
    });
    element.addEventListener('mousedown', () => {
      onMouseDownAlternative(element, 27, '\\', '/');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 28, 'DEL');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 14, 'Tab');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 15, 'Q', 'Й');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 16, 'W', 'Ц');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 17, 'E', 'У');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 18, 'R', 'К');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 19, 'T', 'Е');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 20, 'Y', 'Н');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 21, 'U', 'Г');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 22, 'I', 'Ш');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 23, 'O', 'Щ');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 24, 'P', 'З');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 25, '[', 'Х');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 26, ']', 'Ъ');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 27, '\\');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 28, 'DEL');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 29, 'Caps lock');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 30, 'A', 'Ф');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 31, 'S', 'Ы');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 32, 'D', 'В');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 33, 'F', 'А');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 34, 'G', 'П');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 35, 'H', 'Р');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 36, 'J', 'О');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 37, 'K', 'Л');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 38, 'L', 'Д');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 39, ';', 'Ж');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 40, '\'', 'Э');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 41, 'ENTER');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 29, 'Caps lock');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 30, 'A', 'Ф');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 31, 'S', 'Ы');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 32, 'D', 'В');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 33, 'F', 'А');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 34, 'G', 'П');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 35, 'H', 'Р');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 36, 'J', 'О');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 37, 'K', 'Л');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 38, 'L', 'Д');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 39, ';', 'Ж');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 40, '\'', 'Э');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 41, 'ENTER');
    });
    element.addEventListener('mousedown', () => {
      if (element.innerText === 'Shift' && element.previousSibling === null) {
        if (!isShift) {
          buttons[42].classList.add('keyboard__button-letter_active');
          isShift = true;
        } else if (buttons[42].classList.contains('keyboard__button-letter_active')) {
          buttons[42].classList.remove('keyboard__button-letter_active');
          if (!buttons[54].classList.contains('keyboard__button-letter_active')) {
            isShift = false;
          } else {
            isShift = true;
          }
        } else {
          buttons[42].classList.add('keyboard__button-letter_active');
        }
      }
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 43, 'Z', 'Я');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 44, 'X', 'Ч');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 45, 'C', 'С');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 46, 'V', 'М');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 47, 'B', 'И');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 48, 'N', 'Т');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 49, 'M', 'Ь');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 50, ',', 'Б');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 51, '.', 'Ю');
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 52, ':', ':');
    });
    element.addEventListener('mousedown', () => {
      if (element.innerText === '↑') {
        buttons[53].classList.add('keyboard__button_active');
        if (textArea.selectionStart !== 0) {
          if (textArea.selectionEnd - 65 < 0) {
            textArea.selectionEnd = 0;
          } else {
            textArea.selectionEnd -= 65;
          }
        }
      }
    });
    element.addEventListener('mousedown', () => {
      if (element.innerText === 'Shift' && element.nextSibling === null) {
        if (!isShift) {
          buttons[54].classList.add('keyboard__button-letter_active');
          isShift = true;
        } else if (buttons[54].classList.contains('keyboard__button-letter_active')) {
          buttons[54].classList.remove('keyboard__button-letter_active');
          if (!buttons[42].classList.contains('keyboard__button-letter_active')) {
            isShift = false;
          } else {
            isShift = true;
          }
        } else {
          buttons[54].classList.add('keyboard__button-letter_active');
        }
      }
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 43, 'Z', 'Я');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 44, 'X', 'Ч');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 45, 'C', 'С');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 46, 'V', 'М');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 47, 'B', 'И');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 48, 'N', 'Т');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 49, 'M', 'Ь');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 50, ',', 'Б');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 51, '.', 'Ю');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 52, ':');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 53, '↑');
    });
    element.addEventListener('mousedown', () => {
      if (element.innerText === 'Ctrl' && element.previousSibling === null) {
        if (!isControl) {
          buttons[55].classList.add('keyboard__button-letter_active');
          isControl = true;
        } else if (buttons[55].classList.contains('keyboard__button-letter_active')) {
          buttons[55].classList.remove('keyboard__button-letter_active');
          if (!buttons[63].classList.contains('keyboard__button-letter_active')) {
            isControl = false;
          } else {
            isControl = true;
          }
        } else {
          buttons[55].classList.add('keyboard__button-letter_active');
        }
      }
    });
    element.addEventListener('mousedown', () => {
      if (element.innerText === 'Win') {
        buttons[56].classList.add('keyboard__button_active');
      }
    });
    element.addEventListener('mousedown', () => {
      if (element.innerText === 'Alt' && element.nextSibling.innerText === 'Space') {
        buttons[57].classList.add('keyboard__button_active');
        changeLanguageByButton();
      }
    });
    element.addEventListener('mousedown', () => {
      onMouseDown(element, 58, 'Space');
    });
    element.addEventListener('mousedown', () => {
      if (element.innerText === 'Alt' && element.previousSibling.innerText === 'Space') {
        buttons[59].classList.add('keyboard__button_active');
        changeLanguageByButton();
      }
    });
    element.addEventListener('mousedown', () => {
      if (element.innerText === '←') {
        buttons[60].classList.add('keyboard__button_active');
        if (textArea.selectionStart !== 0) {
          textArea.selectionStart -= 1;
          textArea.selectionEnd -= 1;
        }
      }
    });
    element.addEventListener('mousedown', () => {
      if (element.innerText === '↓') {
        buttons[61].classList.add('keyboard__button_active');
        if (textArea.selectionStart !== textArea.value.length) {
          textArea.selectionStart += 60;
        }
      }
    });
    element.addEventListener('mousedown', () => {
      if (element.innerText === '→') {
        buttons[62].classList.add('keyboard__button_active');
        if (textArea.selectionStart !== textArea.value.length) {
          textArea.selectionStart += 1;
        }
      }
    });
    element.addEventListener('mousedown', () => {
      if (element.innerText === 'Ctrl' && element.nextSibling === null) {
        if (!isControl) {
          buttons[63].classList.add('keyboard__button-letter_active');
          isControl = true;
        } else if (buttons[63].classList.contains('keyboard__button-letter_active')) {
          buttons[63].classList.remove('keyboard__button-letter_active');
          if (!buttons[55].classList.contains('keyboard__button-letter_active')) {
            isControl = false;
          } else {
            isControl = true;
          }
        } else {
          buttons[63].classList.add('keyboard__button-letter_active');
        }
      }
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 56, 'Win');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 57, 'Alt');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 58, 'Space');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 59, 'Alt');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 60, '←');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 61, '↓');
    });
    element.addEventListener('mouseup', () => {
      onMouseUp(element, 62, '→');
    });
  });
}

// Keep focus on textarea

addVirtualKeyboardButtonsClickHandler();

textArea.addEventListener('focusout', () => {
  textArea.focus();
});
