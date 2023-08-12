var form_1 = document.querySelector(".form_1");
var form_2 = document.querySelector(".form_2");
var form_3 = document.querySelector(".form_3");


var form_1_btns = document.querySelector(".form_1_btns");
var form_2_btns = document.querySelector(".form_2_btns");
var form_3_btns = document.querySelector(".form_3_btns");


var form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
var form_3_back_btn = document.querySelector(".form_3_btns .btn_back");

var form_2_progessbar = document.querySelector(".form_2_progessbar");
var form_3_progessbar = document.querySelector(".form_3_progessbar");

var btn_done = document.querySelector(".btn_done");
var modal_wrapper = document.querySelector(".modal_wrapper");
var shadow = document.querySelector(".shadow");

form_2_back_btn.addEventListener("click", function(){
	form_1.style.display = "block";
	form_2.style.display = "none";

	form_1_btns.style.display = "flex";
	form_2_btns.style.display = "none";

	form_2_progessbar.classList.remove("active");
});

form_2_next_btn.addEventListener("click", function(){
	form_2.style.display = "none";
	form_3.style.display = "block";

	form_3_btns.style.display = "flex";
	form_2_btns.style.display = "none";

	form_3_progessbar.classList.add("active");
});

form_3_back_btn.addEventListener("click", function(){
	form_2.style.display = "block";
	form_3.style.display = "none";

	form_3_btns.style.display = "none";
	form_2_btns.style.display = "flex";

	form_3_progessbar.classList.remove("active");
});

btn_done.addEventListener("click", function(){
	modal_wrapper.classList.add("active");
})

shadow.addEventListener("click", function(){
	modal_wrapper.classList.remove("active");
})

// pay button 
function confirmfunction(){
    location.replace("./confirmation.html")
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
			document.getElementById("sumtab1").innerHTML += markup;
		 }
	}
	if (obj1){
		for (const key in obj1) {
			const markup = `<tr>
			<th>${key}</th><td>${obj1[key]}</td>
			</tr>`;
			document.getElementById("sumtab1").innerHTML += markup;
		 
		}
    }

    // validate form 

    var btn = document.getElementById("btnnext");
        const cardnum = document.getElementById("cardnumber");
        const expidate = document.getElementById("expirarydate");
        const cvvnum = document.getElementById("cvv");
        const name = document.getElementById("namecard");
       
        btn.addEventListener("click", function() {
            if (cardnum.value === "" || expidate.value === "" || cvvnum.value === "" || name.value === "") {
                alert("Fill The Blanks");
            }
            else if(!/^[0-9]{4}\s?-\s?[0-9]{4}\s?-\s?[0-9]{4}\s?-\s?[0-9]{4}$/.test(cardnum.value)){
              alert("Enter Card Number correctly");
            }
            else if(!/^[0-9]{2}\/[0-9]{2}$/.test(expidate.value)){
              alert("Enter expiray date Correctly");
            }
            else if(!/^[0-9]{3}$/.test(cvvnum.value)){
              alert("Enter CVV correctly");
            }
            else if(!/^[A-Za-z\s]+$/.test(name.value)){
              alert("Enter Name correctly");

            }
            else {
              form_1.style.display = "none";
              form_2.style.display = "block";
            
              form_1_btns.style.display = "none";
              form_2_btns.style.display = "flex";
            
              form_2_progessbar.classList.add("active");
            }
            
          }
        )}
);

   
 

