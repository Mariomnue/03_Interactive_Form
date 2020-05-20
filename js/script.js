document.addEventListener('DOMContentLoaded', () =>{

  //User information
  const userNameInput = document.getElementById("name");
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

  const submitButton = document.querySelector('button');




   /**
    *
    * VALIDATION
    *
    */


  // //Can only contain uppercase and lowercase letters and spaces.
  // function isValidUserName(name){
  //   return /^[a-zA-Z]+$/.test(name);
  // }
  //must contain a lowercase, an uppercase, and a number.
  function isValidEmail(email){
    return /[a-zA-Z0-9]+\@\w+\.[org|com|net]+/.test(email);
// [a-zA-Z0-9]+\@\w+\.[org, com, net]+
//     mary@gmail.com
//     dk43@junl
//     jfdkKA34@gmal.com
//     jfdkal jfdka @ cmail.com
//     A423a@mail.org
//     fjkdaJKL453@anywhere.net
//     Netmary43@home.org


  }
  // //Credit Card number must be between 13 and 16 digits.
  function isValidUserCCNum(cc_num){
    let check = /\d{13}/.test(cc_num);
    alert(check)
    return check;
  }
  //Zipcode must be 5 digits.
  function isValidUserZip(Zip){
    return /\d{5}/.test(Zip);
  }
  //CVV must be 3 digits.
  function isValidUserCvv(Cvv){
    return /\d{3}/.test(Cvv);
  }




  /**
   *
   * VALIDATION
   *
   */

   function validator(){
     const userName = userNameInput.value;
     const email = userEmail.value;
     const ccNum = userCCNum.value;
     const Zip = userZip.value;
     const Cvv = userCvv.value;

     if(userName === ''){
       console.log(userName)
       const ttname = document.getElementById('ttname').style.display = "block";
     }

     if(isValidEmail){//returns true of false;
      console.log(email+ " needs work");
       const ttemail = document.getElementById('ttemail').style.display = "block";
     }else{
       const ttemail = document.getElementById('ttemail').style.display = "none";
     }

     if(isValidUserCCNum){
       console.log(ccNum+ " needs work")
       const ttccNum = document.getElementById('ttccNum').style.display = "block";
     }else{
       const ttccNum = document.getElementById('ttccNum').style.display = "none";
     }

     if(isValidUserZip){
       console.log(isValidUserZip+ " needs work")
       const ttZip = document.getElementById('ttZip').style.display = "block";
     }else{
       const ttZip = document.getElementById('ttZip').style.display = "none";
     }

     if(isValidUserCvv){
       console.log(Cvv+ "TRUE needs work")
       const ttCvv = document.getElementById('ttCvv').style.display = "none";
     }else{
       console.log(Cvv+ "FALSE needs work?")
       const ttCvv = document.getElementById('ttCvv').style.display = "block";
     }

   }







   submitButton.addEventListener('click', (e) =>{
     e.preventDefault();
     validator();
   });






  /**
   *
   * SET UP EVENTS ///This section has been borrowed from Treehouse course, unit 3, Regular Expressions in JavaScript.
   *
   */


    // function showOrHideTip(show, element) {
    //   // show element when show is true, hide when false
    //   if (show) {
    //     element.style.display = "inherit";
    //   } else {
    //     element.style.display = "none";
    //   }
    // }
    //
    // function createListener(validator) {
    //   return e => {
    //     const text = e.target.value;
    //     const valid = validator(text);
    //     const showTip = text !== "" && !valid;
    //     const tooltip = e.target.nextElementSibling;
    //     showOrHideTip(showTip, tooltip);
    //   };
    // }


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
});
