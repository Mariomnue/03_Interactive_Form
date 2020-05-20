//User information
const userName = document.getElementById("name").focus();
const userEmail = document.getElementById("mail")
const userTitle = document.getElementById("title")
//T-shirt information
const userSize = document.getElementById("size")
const userDesign = document.getElementById("design")
const userColor = document.getElementById("color")
//selected Activities
//1=3,2=4

//Payment information
const userPayment = document.getElementById("payment")//payment type CC, paypal, bitcoin
const userCCNum = document.getElementById("cc-num")
const userZip = document.getElementById("zip")
const userCvv = document.getElementById("cvv")
const userExpMonth = document.getElementById("exp-month")
const userExpYear = document.getElementById("exp-year")



 /**
  *
  * VALIDATION
  *
  */


//Can only contain uppercase and lowercase letters and spaces.
function isValidUserName(name){
  return /^[a-zA-Z]+$/.test(name);
}
//must contain a lowercase, an uppercase, and a number.
function isValidUserEmail(email){
  return //.test(email);
}
//Credit Card number must be between 13 and 16 digits.
function isValidUserCCNum(cc_num){
  return //.test(cc_num);
}
//Zipcode must be 5 digits.
function isValidUserZip(zip){
  return //.test(zip);
}
//CVV must be 3 digits.
function isValidUserCvv(cvv){
  return //.test(cvv);
}

/**
 *
 * ON SCREEN TOOL TIP
 *
 */


 /**
  *
  * SET UP EVENTS ///This section has been borrowed from Treehouse course, unit 3, Regular Expressions in JavaScript.
  *
  */

  function showOrHideTip(show, element) {
    // show element when show is true, hide when false
    if (show) {
      element.style.display = "inherit";
    } else {
      element.style.display = "none";
    }
  }

  function createListener(validator) {
    return e => {
      const text = e.target.value;
      const valid = validator(text);
      const showTip = text !== "" && !valid;
      const tooltip = e.target.nextElementSibling;
      showOrHideTip(showTip, tooltip);
    };
  }

console.log(userName)
//userName.addEventListener("input", createListener(isValidUserName));
//
// userEmail.addEventListener("input", createListener(isValidUserEmail));
//
// userCCNum.addEventListener("input", createListener(isValidUserCCNum));
//
// userZip.addEventListener("input", createListener(isValidUserZip));
//
// userCvv.addEventListener("input", createListener(isValidUserCvv));


/**
 *
 * GET IT OFF THE BOTTOM
 *
 */
