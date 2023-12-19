function firstWord(s) {
  // your code here
	if(s.length===0||(s.length===1 && s.charAt(0)===" ")) return "";
	let ans="";
	for(let i=0;i<s.length;i++){
    debugger
		if(s.charAt(i)===" "){
			 ans=s.slice(i+1);
		}
		else{
			break;
		}
	}
	if(ans.length===0){
		let res=s.split(" ");
	return res[0];
	}
	else{
		let res=ans.split(" ");
		return res[0];
	}
}
// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
