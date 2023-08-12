// summery table
document.addEventListener("DOMContentLoaded",function(){
    const selecteddate = document.getElementById("selectdate");
    const totalpay = document.getElementById("totalpay");
    const continuebtn = document.querySelector(".btn");
    
    // to clear the local storage
    localStorage.clear();

    // price data
    const prices={
        "SL Adult": { normal: 4, peak: 6 },
        "SL Child": { normal: 2, peak: 3 },
        "Foreigner Adult":{normal:10,peak:13},
        "Foreigner Child": { normal: 5, peak: 8 },
        "Infant": { normal: 0, peak: 0 } //infants are free
    };
     //peak hours
     const peak=[4,5,6,9,10,11];

      function updatesummary(){
        const date = selecteddate.value;
        const checkedItem = document.querySelector(".checked");
        const ticket=[
            // Format: [Ticket Category, Quantity]
            ["SL Adult",parseInt(document.getElementById("sladult").value)],
            ["SL Child",parseInt(document.getElementById("slchild").value)],
            ["Foreigner Adult",parseInt(document.getElementById("foreignadult").value)],
            ["Foreigner Child",parseInt(document.getElementById("foreignchild").value)],
            ["Infant",parseInt(document.getElementById("infant").value)]
        ];

        const tablebody = document.getElementById("ticketbody");
        tablebody.innerHTML=""; // to add inner things to html of table

        // calculate total 
        let total = 0;

        //create table 
        for (const [category,quantity] of ticket ){
            if (quantity>0){
                const row = tablebody.insertRow();
                const cellcategory = row.insertCell();
                const celldate=row.insertCell();
                const cellTime = row.insertCell();
                const cellduration = row.insertCell();
                const cellquantity = row.insertCell();
                const cellprice = row.insertCell();

                const normalprice = prices[category].normal*quantity*duration;
                const peakprice = peak.includes(checkedItem ? parseInt(checkedItem.querySelector(".item-text").getAttribute("value")) : 0) ? prices[category].peak * quantity- normalprice : 0;

                const price = normalprice + peakprice;

                cellcategory.innerHTML= category;
                celldate.innerHTML = date;
                cellTime.innerHTML = checkedItem ? checkedItem.querySelector(".item-text").textContent : "";
                cellduration.innerHTML=`${duration} hours`;
                cellquantity.innerHTML= quantity;
                cellprice.innerHTML=`$${price}`;

                total+=price;
            }
        }
        totalpay.innerHTML = `$${total}`;
        continuebtn.disabled = total === 0;
        // enable the continue btn if total > 0
     }
    

     //event listners
     selecteddate.addEventListener("change",updatesummary);
     document.querySelectorAll(".item").forEach(item => item.addEventListener("click", updatesummary));
     document.getElementById("sladult").addEventListener("click",updatesummary);
     document.getElementById("slchild").addEventListener("click",updatesummary);
     document.getElementById("foreignadult").addEventListener("click",updatesummary);
     document.getElementById("foreignchild").addEventListener("click",updatesummary);
     document.getElementById("infant").addEventListener("click",updatesummary);
     

     // to load default when loading
     window.onload=init;
     function init(){
        foreignadult.value=1;
        const currentDate = new Date().toISOString().slice(0, 10);
           // Set the input field value to the current date
          selecteddate.value = currentDate;
          updatesummary();
          const timeSlotToSelect = document.getElementById("timeslot1");
        if (timeSlotToSelect) {
            timeSlotToSelect.click();
        }
     }
     
    // update summary table
    updatesummary();
    // for the inc button and dec button of the guest
    document.querySelectorAll(".inc").forEach(btn => {
        btn.addEventListener("click", function() {
            const input = btn.parentElement.querySelector(".input-filled");
            input.value = parseInt(input.value) + 1;
            updatesummary();
        });
    });

    document.querySelectorAll(".dec").forEach(btn => {
        btn.addEventListener("click", function() {
            const input = btn.parentElement.querySelector(".input-filled");
            const value = parseInt(input.value);
            input.value = value > 0 ? value - 1 : 0;
            updatesummary();
        });
    });
    // Time duration
    const selectbtn = document.querySelector(".select-btn");
    const items = document.querySelectorAll(".item");
    let duration=0;

    selectbtn.addEventListener("click", () => {
        selectbtn.classList.toggle("open");
    });

    items.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("checked");

            let checked = document.querySelectorAll(".checked");
            let btnText = document.querySelector(".btn-text");

            if (checked && checked.length > 0) {
                duration = 1; // Set the duration to 1 hour if a time slot is selected
                btnText.innerText =`${checked.length} Time Duration selected`;

                
            }else {
                duration = 0; 
                btnText.innerText = "Select Time";
            }

            updatesummary(); // Call the updatesummary function when an item is clicked


        // local storage
        continuebtn.addEventListener("click", function (event) {
            event.preventDefault(); // to prevent submit
           
        const userinputs ={
            SELECTEDDATE:selecteddate.value,
            SLADULT: parseInt(document.getElementById("sladult").value),
            SLCHILD: parseInt(document.getElementById("slchild").value),
            FOREINERADULT: parseInt(document.getElementById("foreignadult").value),
            FOREINERCHILD: parseInt(document.getElementById("foreignchild").value),
            INFANT: parseInt(document.getElementById("infant").value),
            DURATION: duration+" hour",
            TIME:item.lastElementChild.innerText,
            TOTAL:totalpay.innerHTML            
         };
            saveUserInputs(userinputs);
         
         function saveUserInputs(userinputs){
            localStorage.setItem("userInputs", JSON.stringify(userinputs));
         }
         

         window.location.href ="details.html";
         
    });
    window.onload = init;
  
  
});
});
});

