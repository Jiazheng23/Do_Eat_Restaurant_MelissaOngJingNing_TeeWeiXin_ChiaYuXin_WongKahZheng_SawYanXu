window.onload = init;

function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Data passes initial validation tests");
      return false;
   }
   
   document.getElementById("e_payment").onclick = turnOnEwalletPayment;
   document.getElementById("card").onclick=turnOnCardPayment;
}

function turnOnEwalletPayment() {
   document.getElementById("phoneNumber").disabled=false;
   document.getElementById("pinNumber").disabled=false;
   document.getElementById("CardNumber").disabled=true;
   document.getElementById("expiryDate").disabled=true;
   document.getElementById("CW").disabled=true;
   document.getElementById("nameForCard").disabled=true;
}

function turnOnCardPayment() {
    document.getElementById("phoneNumber").disabled=true;
    document.getElementById("pinNumber").disabled=true;
    document.getElementById("CardNumber").disabled=false;
    document.getElementById("expiryDate").disabled=false;
    document.getElementById("CW").disabled=false;
    document.getElementById("nameForCard").disabled=false;
 }
 