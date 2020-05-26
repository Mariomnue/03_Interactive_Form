document.addEventListener('DOMContentLoaded', () =>{
  const form = document.querySelector("form");
  //User information
  const userNameInput = document.getElementById("name");
  userNameInput.focus();
  const userEmail = document.getElementById("mail")
  const userTitle = document.getElementById("title")//Job roll

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
   * Job Roll  needs work
   *
   */
  //userTitle
  //Make the other-title field only appear when other is selected
  const otherTitle = document.getElementById("other-title")
  document.getElementById("other-title").style.display = "none";
      function setOtherTitle(){
        if(userTitle.value != 'other'){
          document.getElementById("other-title").style.display = "none";
        }
      }

      function turnOnOtherTitle(){
      setOtherTitle();//reset the optional title
        if(userTitle.value === 'other'){
           document.getElementById("other-title").style.display = "block";
           otherTitle.focus();
        }
       }

    userTitle.addEventListener("click", (e) =>{
        turnOnOtherTitle();
        if(userTitle.value === "other"){
          return otherTitle.value;
        }else{
          return userTitle.value;
        }

    });


  /**
   *
   * T-Shirt Info
   *
   */

///set the color selector to "Please select a T-shirt theme"
  function colorInit(){
    //create the dead color selector, give it a value, then select it.
       colorControl = userColor.insertBefore(document.createElement('option'),userColor.firstElementChild);
       colorControl.text = "Please select a T-shirt theme";
       userColor[0].selected = true;
    //hide all the colors until design has been selected.
      for(let i=0; i<userColor.length; i++){
        userColor[i].hidden = true;
      }
  }
  colorInit();//run the init;

  function colorReset(){
    userColor[0].selected = true;
    for(let i=0; i<userColor.length; i++){
     userColor[i].hidden = true;
    }
  }

//select a design to release the color options for that shirt.
   userDesign.addEventListener('click', (e) =>{

     if(userDesign[0].selected){
       colorReset();
     }
     if(userDesign[1].selected){
       //colors available are cornflowerblue, darkslategrey, Gold
        userColor[0].hidden = true;//'Please select t-shirt theme'
        userColor[1].hidden = false;//cornflowerblue
        userColor[2].hidden = false;//darkslategrey
        userColor[3].hidden = false;//gold
        userColor[4].hidden = true;//tomato
        userColor[5].hidden = true;//steelblue
        userColor[6].hidden = true;//dim grey
        userColor[1].selected = true;
//console.log('puns: ' +userDesign.value)
      }else if(userDesign[2].selected){
      //colors available are tomato, Steel Blue, Dim Gray
        userColor[0].hidden = true;
        userColor[1].hidden = true;
        userColor[2].hidden = true;
        userColor[3].hidden = true;
        userColor[4].hidden = false;
        userColor[5].hidden = false;
        userColor[6].hidden = false;
        userColor[4].selected = true;
     }
   });

     /**
      *
      * Activities
      *
      */
//let otherTitle = document.getElementById("other-title").style.display = "none";
//otherTitle.placeholder = "Your Job Roll";

   //do not allow selection of duplicate times;
      const checkboxes = document.querySelectorAll('.activities input');
      let total = 0;

      let runningTotal = document.getElementById("totalCost").style.display = "block";
      runningTotal.value = "Total: "
console.log("runningTotal: " +total+ " needs more work");


       document.querySelector('.activities').addEventListener('change', (e) => {
         const clicked = e.target;
         const clickedType = clicked.getAttribute('data-day-and-time');
           total = 0;
           for(let j=0; j<checkboxes.length; j++){
             if(checkboxes[j].checked){
              total += parseInt(checkboxes[j].getAttribute('data-cost'));
             }
           }
console.log("total: " + total);
//console.log(checkboxes[2].text)
         for(let i=0; i<checkboxes.length; i++){
           let themAttr = checkboxes[i].getAttribute('data-day-and-time');//for each
           if(clickedType === themAttr && clicked !== checkboxes[i]){
             if(clicked.checked){
               checkboxes[i].disabled = true;
             }else{
               checkboxes[i].disabled = false;
             }
           }
         }
       })



   /**
    *
    * Payment Info
    *
    */
//select one payment method, display appropriate section
function paymentInfoReset(){
    document.getElementById('credit-card').style.display = "none";
    document.getElementById('paypal').style.display = "none";
    document.getElementById('bitcoin').style.display = "none";
  }
paymentInfoReset()//init the payment information section

    userPayment.addEventListener('click', (e) =>{
    if(userPayment.value === 'credit card'){
      paymentInfoReset();
      document.getElementById('credit-card').style.display = "block";
    }else if(userPayment.value === 'paypal'){
      paymentInfoReset();
      document.getElementById('paypal').style.display = "block";
    }else if(userPayment.value === 'bitcoin'){
      paymentInfoReset()
      document.getElementById('bitcoin').style.display = "block";
    }
  });



   /**
    *
    * VALIDATION - text fields
    *
    */

    // if (!cvvIsValid && creditPayment) {
    //         console.log('invalid cvv');
    //         document.querySelector('#cvv-error').style.display = 'inherit';
    //     } else {
    //         document.querySelector('#cvv-error').style.display = 'none';
    //     };

//////////    START HERE  /////////////////

   function validator(){
     const fullName = userNameInput.value;
     const email = userEmail.value;
     //const ccNum = userCCNum.value;
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
      //must be a valid email
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
      //must be 13 to 16 digits
     function isValidUserccNum(){
       const ccNum = userCCNum.value;
       testccNum = /^\d{13,16}$/.test(ccNum);
        if(testccNum){
          //console.log(ccNum+ " ccNum: TRUE needs work")
          const ttccNum = document.getElementById('ttccNum').style.display = "none";
        }else{
          //console.log(ccNum+ " ccNum: FALSE needs work?")
          const ttccNum = document.getElementById('ttccNum').style.display = "block";
        }
      }
      //must be 5 digits
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
      //must be 3 digits
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
      isValidUserfullName()
      isValidUseremail()
      isValidUserccNum()
      isValidUserZip()
      isValidUserCvv()
   }

  form.addEventListener('submit', (e) =>{
     e.preventDefault(userNameInput);
     e.preventDefault(userEmail);
     e.preventDefault(userCCNum);
     e.preventDefault(userZip);
     e.preventDefault(userCvv);
     validator();
     //validatorAll();
//  console.log('userNameInput: '+userNameInput.value+ " userEmail: " +userEmail.value+ " userTitle: " +userTitle.value);
   });







  /**
   *
   * GET IT OFF THE BOTTOM
   *
   */
});
