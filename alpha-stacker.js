var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];



function stackLetters () {
    var letters = "";
    for (var i = 0; i < alphabet.length; i ++) {
        letters += alphabet[i];
        if ((i + 1) % 3 === 0) {
            letters += " ";
        }
        console.log(letters);
    } 
}
stackLetters(alphabet);


