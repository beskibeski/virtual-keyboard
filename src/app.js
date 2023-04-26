window.onload = () => {
    addSmallKey();    
} 

//Create key
const addSmallKey = () => {
  const div = document.createElement("div");
  div.className = "keyboard__small-key";  
  document.body.append(div);   
  const divText = document.createElement("div");
  divText.className = "keyboard__letter";
  div.append(divText);
  divText.innerText = "A";
}
   