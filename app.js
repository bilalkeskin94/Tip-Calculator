 document.getElementById("button").addEventListener("click", function (e) {
     const bill = document.getElementById("bill").value;
     const tip = document.getElementById("tip").value;
     const numberOfPeople = document.getElementById("number-of-people").value;
     const tipTotal = document.getElementById("tip-total");
     const total = document.getElementById("total");
     let newTip = parseFloat((bill * tip) / 100 / numberOfPeople);
     let newTotal = parseFloat(bill) + parseFloat(newTip);
     console.log(newTotal);
     console.log(newTip);
     tipTotal.textContent = newTip;
     total.textContent = newTotal;
   })



