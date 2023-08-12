window.addEventListener('load', function() {
    // Initialize the plugin
    const phoneInput = document.getElementById('phoneInput');
    const iti = window.intlTelInput(phoneInput, {
      separateDialCode: true,
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js", // Link to the utils.js file
    });

    // Set the default country (Optional)
    iti.setCountry("lk");
  });

// form validity checker
function validate() {
  const fname = document.getElementById("fullname");
  const emailInput = document.getElementById("emailInput");
  const phoneInput = document.getElementById("phoneInput"); // Add this line to get the phone input element
  const email = emailInput.value.trim();

  // Regular expression to validate the email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const nameRegex = /^[A-Za-z\s]+$/;

  if (email === '' || fname.value === "" || phoneInput.value === "") {
    alert("Please enter all required information.");
  } else if (!emailRegex.test(email)) {
    alert("Invalid email address. Please enter a valid email.");
  } else if (!nameRegex.test(fname.value)) {
    alert("Enter name correctly.");
  } else {
    window.location.href = "paycard.html";
  }
};

// to save in local storage 

  document.addEventListener("DOMContentLoaded", function() {
    const nextbtn=document.getElementById("continuebtn");
    const tab = localStorage.getItem("userInputs");
    const obj = JSON.parse(tab);

    if (obj) {
        for (const key in obj) {
            const markup = `<tr>
            <th>${key}</th><td>${obj[key]}</td>
            </tr>`;
            document.getElementById("sumtab").innerHTML += markup;
         
         }
     }
     document.getElementById("fullname").addEventListener("keypress", function() {
      const fname = document.getElementById("fullname").value;
      document.getElementById("name").textContent = fname; 
    });
    document.getElementById("emailInput").addEventListener("keypress",function(){
      const mail=document.getElementById("emailInput").value;
      document.getElementById("mail").textContent=mail;
    });
    document.getElementById("phoneInput").addEventListener("keypress",function(){
      const tele=document.getElementById("phoneInput").value;
      document.getElementById("telenum").textContent=tele;
    });
    document.getElementById("geninpu").addEventListener("change", function() {
      const genderValue = document.getElementById("geninpu").value;
      document.getElementById("gender").textContent=genderValue;
    });
    nextbtn.addEventListener("click",function(evt){
      evt.preventDefault(); // to prevent submit
    const inputs={FULLNAME:document.getElementById("name").textContent ,EMAIL:document.getElementById("mail").textContent,TELEPHONENUMBER:document.getElementById("telenum").textContent,GENDER:document.getElementById("gender").textContent};
    secondUserInputs(inputs);
         
    function secondUserInputs(inputs){
       localStorage.setItem("inputs", JSON.stringify(inputs));
    }
  });
  });