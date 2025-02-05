function firstWord(s) {
    let result = "";
    let started = false;

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== " ") {
            result += s[i];
            started = true;
        } else if (started) {
            break;
        }
    }

    return result;
}

//




const s = prompt("Enter String:")
alert(firstWord(s));
