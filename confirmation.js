
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

// local storage 

document.addEventListener("DOMContentLoaded", function() {
	const tab2 = localStorage.getItem("userInputs");
	const tab3= localStorage.getItem("inputs");
	const obj2=JSON.parse(tab3);
	const obj1 = JSON.parse(tab2);
  
	if (obj2) {
		for (const key in obj2) {
			const markup = `<tr>
			<th>${key}</th><td>${obj2[key]}</td>
			</tr>`;
			document.getElementById("summery").innerHTML += markup;
		 }
	}
	if (obj1){
		for (const key in obj1) {
			const markup = `<tr>
			<th>${key}</th><td>${obj1[key]}</td>
			</tr>`;
			document.getElementById("summery").innerHTML += markup;
		 
		}
    }
  });

