
function quote(){
    var a = Math.floor(Math.random() * (12 - 0)) + 0;
    var result = '';
    var quote = ['I just wanna stay in that lavender haze. (Lavender Haze)',
    "I have this thing where I get older, but just never wiser. (Anti-Hero)",
    "Lately I've been dressin' for revenge. (Vigilante S--t)",
    "It's me, hi, I'm the problem, it's me. (Anti-Hero)",
    "I found myself running home to your sweet nothings. (Sweet Nothing)",
    "He wanted a bride, I was making my own name. (Midnight Rain)",
    "The jokes weren't funny, I took the money. (You're On Your Own, Kid)",
    "I don't remember who I was / Before you painted all my nights / A color I've searched for since. (Question...)",
    "Puttin someone first only works when you're in their top five. (Bejeweled)",
    "Karma is my boyfriend. (Karma)",
    "What if I told you I'm a mastermind? (Mastermid)",
    "I'm so in love that I might stop breathing. (Paris)",
    "No one sees when you lose when you're playing solitaire. (Dear Raeder)"]
    return result= quote[a];
}
function randomquote(){
    var a = document.getElementById('output').value = quote();
    return a;
}

function myFunction() {
    var copyText = document.getElementById('output');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
}
  
function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}
  
