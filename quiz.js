

function calculateResult() {
	document.getElementById("time").style.display='none';
	result=0
	answer1=document.getElementById("right-answer1").checked;
	if(answer1) {
		result=result+3
	} 
	else if (document.querySelector('input[name="question-1"]:checked') != null){
		result=result-1
	}
	
	answer2=document.getElementById("right-answer2").checked;
	if(answer2) {
		result=result+3
	}
	else if (document.querySelector('input[name="question-2"]:checked') != null){
		result=result-1	
	}
	answer3=document.getElementById("right-answer3").checked;
	if(answer3) {
		result=result+3
	}
	else if (document.querySelector('input[name="question-3"]:checked') != null){
		result=result-1
	}
	answer4=document.getElementById("right-answer4").checked;
	if(answer4) {
		result=result+3
	}
	else if (document.querySelector('input[name="question-4"]:checked') != null){
		result=result-1
	}
	answer5=document.getElementById("right-answer5").checked;
	if(answer5) {
		result=result+3
	}
	else if (document.querySelector('input[name="question-5"]:checked') != null){
		result=result-1
	}

	if(result>2) {
		document.getElementById("green").style.display='block';
		document.getElementById("red").style.display='none';
		document.getElementById("happy").style.display='block';
		document.getElementById("sad").style.display='none';
	}
	else{
		document.getElementById("green").style.display='none';
		document.getElementById("red").style.display='block';
		document.getElementById("sad").style.display='block';
		document.getElementById("happy").style.display='none';
	}
	
	document.getElementById("test-result").style.display='block';
	document.getElementById("questions").style.display='none';
	document.getElementById("score").innerHTML=result;
	
}
function clearAllOptions(){
	inputs=document.querySelectorAll('input[type="radio"]')
	var i=0;
	while(i<inputs.length){
		inputs[i].checked=false;
        i++;
 	}
 	alert("All options cleared succesfully!!!!")
}
myArray=["one","two","three","four","five"];
// alert(myArray[0]);
// alert(myArray[1]);
// alert(myArray[2]);
// alert(myArray[3]);
//for(count=0; count<myArray.length; count++) {
//count>=-20
count=0;
while( count<myArray.length ) {
	//alert(myArray[count]);
	count++;
}
//arrayLength=myArray.length;
//arrayLength=arrayLength-1;
lastArrayItem=myArray[myArray.length-1];
//alert("Answer4 - The last item of the array is  "+lastArrayItem);