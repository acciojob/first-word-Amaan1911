function firstWord(s) {
  // your code here
	let result = ""
	if(s.length==0){
		return s;
	}
		
	for(let i =0; i<s.length;i++){
		result+=s[i];
		if(s[i]==" ")
			break;
	}
	return result
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
