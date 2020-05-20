document.addEventListener('DOMContentLoaded', () =>{
  const form = document.querySelector("form");
  //User information
  const userNameInput = document.getElementById("name");
  userNameInput.focus();
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

   function validator(){
     const fullName = userNameInput.value;
     const email = userEmail.value;
     const ccNum = userCCNum.value;
     const Zip = userZip.value;
     const Cvv = userCvv.value;

     function isValidUserfullName(){
       //no blanks
        if(fullName){
          //console.log(fullName+ " name: TRUE needs work")
          const ttname = document.getElementById('ttname').style.display = "none";
        }else{
          //console.log(fullName+ " name: FALSE needs work?")
          const ttname = document.getElementById('ttname').style.display = "block";
        }
      }

     function isValidUseremail(){
       testemail = /[a-zA-Z0-9]+\@\w+\.[org|com|net]+/.test(email);
        if(testemail){
          //console.log(email+ " email: TRUE needs work")
          const ttemail = document.getElementById('ttemail').style.display = "none";
        }else{
          //console.log(email+ " email: FALSE needs work?")
          const ttemail = document.getElementById('ttemail').style.display = "block";
        }
      }

     function isValidUserccNum(){
       testccNum = /^\d{13,16}$/.test(ccNum);
        if(testccNum){
          //console.log(ccNum+ " ccNum: TRUE needs work")
          const ttccNum = document.getElementById('ttccNum').style.display = "none";
        }else{
          //console.log(ccNum+ " ccNum: FALSE needs work?")
          const ttccNum = document.getElementById('ttccNum').style.display = "block";
        }
      }

     function isValidUserZip(){
       testZip = /^\d{5}$/.test(Zip);
        if(testZip){
          //console.log(Zip+ " Zip: TRUE needs work")
          const ttZip = document.getElementById('ttZip').style.display = "none";
        }else{
          //console.log(Zip+ " Zip: FALSE needs work?")
          const ttZip = document.getElementById('ttZip').style.display = "block";
        }
      }

     function isValidUserCvv(){
       testCvv = /^\d{3}$/.test(Cvv);
        if(testCvv){
          //console.log(Cvv+ " Cvv: TRUE needs work")
          const ttCvv = document.getElementById('ttCvv').style.display = "none";
        }else{
          //console.log(Cvv+ " Cvv: FALSE needs work?")
          const ttCvv = document.getElementById('ttCvv').style.display = "block";
        }
      }
      isValidUserCvv()
      isValidUserZip()
      isValidUserccNum()
      isValidUseremail()
      isValidUserfullName()

   }

   //CVV ERROR HANDLER
   // function cvvError(){
   //   const cvvRegex = (/^\d{1,5}$/);
   //   let cvvResult = false;
   //   if (cvvRegex.test(cvv.value)) {
   //         cvvResult = true;
   //   } else {
   //     cvvResult = false;
   //   }
   //   if (cvvResult == true){
   //     cvv.style.borderColor = "green";
   //     totalCorrect += 1;
   //   } else if (cvvResult == false){
   //     cvv.style.borderColor = "red";
   //   };
   // }





  form.addEventListener('submit', (e) =>{
     e.preventDefault(userNameInput);
     e.preventDefault(userEmail);
     e.preventDefault(userCCNum);
     e.preventDefault(userZip);
     e.preventDefault(userCvv);
     //cvvError()
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
  //userCvv.addEventListener("input", createListener(isValidUserCvv));


  /**
   *
   * GET IT OFF THE BOTTOM
   *
   */
});
