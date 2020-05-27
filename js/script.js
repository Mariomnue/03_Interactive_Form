document.addEventListener('DOMContentLoaded', () =>{
  const form = document.querySelector("form");
  //User information
  const userNameInput = document.getElementById("name");
  userNameInput.focus();
  const userEmail = document.getElementById("mail")
  let userTitle = document.getElementById("title")//Job roll

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
  //Make the other-title field only appear when other is selected;
  const otherTitle = document.getElementById("other-title")
  let usersTitle;
  otherTitle.style.display = "none";
//reset other to display none;
      function setOtherTitle(){
        if(userTitle.value != 'other'){
          otherTitle.style.display = "none";
        }
      }
//show other option text input if other is selected and focus;
      function turnOnOtherTitle(){
        setOtherTitle();//reset the optional title
        if(userTitle.value === 'other'){
           otherTitle.style.display = "block";
           otherTitle.focus();
        }
       }
//Job Roll event listeners
    userTitle.addEventListener("click", (e) =>{
        //turnOnOtherTitle();
        if(userTitle.value === "other"){
          turnOnOtherTitle();
          return;// otherTitle.value;
        }else{
          usersTitle = userTitle.value;
          return usersTitle;
        }
    });
    otherTitle.addEventListener("blur", (e) =>{
      usersTitle = otherTitle.value;
      return usersTitle;
    })

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

//do not allow selection of duplicate items/times;
      const checkboxes = document.querySelectorAll('.activities input');
      let total = 0;
      document.querySelector('.activities').addEventListener('change', (e) => {
        const clicked = e.target;
        const clickedType = clicked.getAttribute('data-day-and-time');
        total = 0;
           for(let j=0; j<checkboxes.length; j++){
             if(checkboxes[j].checked){
              total += parseInt(checkboxes[j].getAttribute('data-cost'));
              let costText = document.getElementById('totalCost')
              costText.style.display = "block";
              costText.innerHTML = "Total: $" +total;
             }
           }
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
    * VALIDATION
    *
    */


  const userError = document.querySelector('#user-error');
    userError.style.display = 'none';
  const emailError = document.querySelector('#email-error');
    emailError.style.display = 'none';
  const activitiesError = document.querySelector('#activities-error');
    activitiesError.style.display = 'none';
  const paymentError = document.querySelector('#payment-error');
    paymentError.style.display = 'none';
  const cardError = document.querySelector('#card-error');
    cardError.style.display = 'none';
  const zipError = document.querySelector('#zip-error');
    zipError.style.display = 'none';
  const cvvError = document.querySelector('#cvv-error');
    cvvError.style.display = 'none';


   function validator(){
     const fullName = userNameInput.value;
     const email = userEmail.value;
     const ccNum = userCCNum.value;
     const Zip = userZip.value;
     const Cvv = userCvv.value;

     function isValidUserfullName(){
//no blanks
        if(fullName){
          const ttname = document.getElementById('ttname').style.display = "none";
          userError.style.display = 'none';
        }else{
          const ttname = document.getElementById('ttname').style.display = "block";
          userError.style.display = 'block';
        }
      }
//must be a valid email
     function isValidUseremail(){
       testemail = /[a-zA-Z0-9]+\@\w+\.[org|com|net]+/.test(email);
        if(testemail){
          const ttemail = document.getElementById('ttemail').style.display = "none";
          emailError.style.display = 'none';
        }else{
          const ttemail = document.getElementById('ttemail').style.display = "block";
          emailError.style.display = 'block';
        }
      }
//defaults to fs-js-dev but has "other" field
      function isValidTitle(){
        if(userTitle && userTitle.value != "other"){
          return userTitle.value;
        }else{
          return usersTitle;//otherTitle
        }
      }

      function isValidActivities(){
        if(total>0){
          activitiesError.style.display = 'none';
          return true;
        }else{
          activitiesError.style.display = 'block';
          return false;
        }
      }

//must select payment type;
      function isValidPayment(){
        if(userPayment.value === 'select method'){
          paymentError.style.display = "block"
        }else{
          paymentError.style.display = "none"
//must be 13 to 16 digits
          function isValidUserccNum(){
            const ccNum = userCCNum.value;
            testccNum = /^\d{13,16}$/.test(ccNum);
             if(testccNum){
               const ttccNum = document.getElementById('ttccNum').style.display = "none";
               cardError.style.display = 'none';
             }else{
               const ttccNum = document.getElementById('ttccNum').style.display = "block";
               cardError.style.display = 'block';
             }
           }
//must be 5 digits
          function isValidUserZip(){
            testZip = /^\d{5}$/.test(Zip);
             if(testZip){
               const ttZip = document.getElementById('ttZip').style.display = "none";
               zipError.style.display = 'none';
             }else{
               const ttZip = document.getElementById('ttZip').style.display = "block";
               zipError.style.display = 'block';
             }
           }
           //must be 3 digits
          function isValidUserCvv(){
            testCvv = /^\d{3}$/.test(Cvv);
             if(testCvv){
               const ttCvv = document.getElementById('ttCvv').style.display = "none";
               cvvError.style.display = 'none';
             }else{
               const ttCvv = document.getElementById('ttCvv').style.display = "block";
               cvvError.style.display = 'block';
             }
           }
           isValidUserccNum()
           isValidUserZip()
           isValidUserCvv()
        }
      }

      isValidUserfullName()
      isValidUseremail()
      isValidTitle()
      isValidActivities()
      isValidPayment()
   }

  form.addEventListener('submit', (e) =>{
     e.preventDefault(userNameInput);
     e.preventDefault(userEmail);
     e.preventDefault(userCCNum);
     e.preventDefault(userZip);
     e.preventDefault(userCvv);
     validator();
   });

  /**
   *
   * GET IT OFF THE BOTTOM
   *
   */
});
