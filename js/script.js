document.addEventListener('DOMContentLoaded', () =>{
	const form = document.querySelector("form");
	//User information
	const userNameInput = document.getElementById("name");
		userNameInput.focus();
	//let userNameOutput;
	const userEmail = document.getElementById("mail")
	//let userEmailOutput;
	let userTitle = document.getElementById("title")//Job roll

	//T-shirt information
	const userSize = document.getElementById("size")
	const userDesign = document.getElementById("design")
	const userColor = document.getElementById("color")

	//Payment information
	const userPayment = document.getElementById("payment")//payment type CC, paypal, bitcoin
		userPayment[1].selected;//show credit card by default;
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
	const otherTitle = document.getElementById("other-title");
		otherTitle.style.display = "none";
	let usersTitle;
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

	 const labelColor = document.getElementById('tShirtColor')//make color field hidden
	 	labelColor.style.display = 'none';

///set the color selector to "Please select a T-shirt theme"
//tShirtColor
	function colorInit(){
		userColor.style.display = "none";
		labelColor.style.display = 'none';
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
		userColor.style.display = "none";
		labelColor.style.display = 'none';
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
				colorReset();
				userColor.style.display = "block";
				labelColor.style.display = 'block';
				userColor[1].hidden = false;//cornflowerblue
				userColor[2].hidden = false;//darkslategrey
				userColor[3].hidden = false;//gold
				userColor[1].selected = true;
			}else if(userDesign[2].selected){
				colorReset();
				userColor.style.display = "block";
				labelColor.style.display = 'block';
				userColor[4].hidden = false;//tomato
				userColor[5].hidden = false;//steelblue
				userColor[6].hidden = false;//dim grey
				userColor[4].selected = true;
		 }
	 });

		 /**
			*
			* Activities
			*
			*/

			//selected Activities
			//1=3,2=4 match, user cannot select both.
			const jsframeworks = document.querySelector("label[for='jsframeworks'");
			const jslibs = document.querySelector("label[for='jslibs'");
			const express = document.querySelector("label[for='express'");
			const node = document.querySelector("label[for='node'");

//do not allow selection of duplicate items/times;
			const checkboxes = document.querySelectorAll('.activities input');
			let total = 0;
			document.querySelector('.activities').addEventListener('change', (e) => {//listeners
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
					 let themLabel = checkboxes[i].getAttribute('name');
					 let matchingNode = checkboxes[i].getAttribute('name');
					 if(clickedType === themAttr && clicked !== checkboxes[i]){//same date and time & NOT the clicked element
						 if(clicked.checked){
							 checkboxes[i].disabled = true;//dim the matching checkbox;
							 if(matchingNode === checkboxes[i].name){//gray the matching
								 if(matchingNode === "express"){
									  express.style.color = 'gray';
								 }
								 if(matchingNode === "jsframeworks"){
									  jsframeworks.style.color = 'gray';
								 }
								 if(matchingNode === "jslibs"){
									  jslibs.style.color = 'gray';
								 }
								 if(matchingNode === "node"){
									  node.style.color = 'gray';
								 }
							 }
						 }else{
							 checkboxes[i].disabled = false;
							 if(matchingNode === "express"){
									express.style.color = 'black';
							 }
							 if(matchingNode === "jsframeworks"){
									jsframeworks.style.color = 'black';
							 }
							 if(matchingNode === "jslibs"){
									jslibs.style.color = 'black';
							 }
							 if(matchingNode === "node"){
									node.style.color = 'black';
							 }
						 }
					 }
				 }
			 })


	 /**
		*
		* Payment Info
		*
		*/
////credit card selected by default;
//select one payment method, display appropriate section
	function paymentInfoReset(){
		creditCard = document.getElementById('credit-card');//onStage ccNum zip cvv
			creditCard.style.display = "block";
		paypal = document.getElementById('paypal');//onStage description
			paypal.style.display = "none";
		bitcoin = document.getElementById('bitcoin');//onStage description
			bitcoin.style.display = "none";
	}
	paymentInfoReset()//init the payment information section
//error messages below
	function resetErrorMsg(){
		creditCard.style.display = "none";
		paymentError.style.display = 'none';
		paypal.style.display = "none";
		bitcoin.style.display = "none";
		cardError.style.display = 'none';
		zipError.style.display = 'none';
		cvvError.style.display = 'none';
	}

		userPayment.addEventListener('click', (e) =>{//listeners
		if(userPayment.value === 'credit card'){
			paymentInfoReset();
			creditCard.style.display = "block";
		}else if(userPayment.value === 'select method'){
			paymentInfoReset();
			resetErrorMsg();
		}else if(userPayment.value === 'paypal'){
			paymentInfoReset();
			resetErrorMsg();
			paypal.style.display = "block";
		}else if(userPayment.value === 'bitcoin'){
			paymentInfoReset();
			resetErrorMsg();
			bitcoin.style.display = "block";
		}
	});



	 /**
		*
		* VALIDATION
		*
		*/

//White boxed messages appear at bottom to display errors
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
	const register = document.querySelector('#register');
		register.style.display = 'none';

//small red text appears above text fields
	const ttname = document.getElementById('ttname');
		ttname.style.display = "none";
	const ttemail = document.getElementById('ttemail');
		ttemail.style.display = "none";
	const ttemail2 = document.getElementById('ttemail2');
		ttemail.style.display = "none";
	const ttccNum = document.getElementById('ttccNum');
		ttccNum.style.display = "none";
	const ttccNum2 = document.getElementById('ttccNum2');
		ttccNum2.style.display = "none";
	const ttZip = document.getElementById('ttZip');
		ttZip.style.display = "none";
	const ttCvv = document.getElementById('ttCvv');
		ttCvv.style.display = "none";


	let cnt = 0;// global var used to count the number of valid elements

	 function validator(){
		 cnt = 0;
		 const fullName = userNameInput.value;
		 const email = userEmail.value;
		 const ccNum = userCCNum.value;
		 const Zip = userZip.value;
		 const Cvv = userCvv.value;

		 function isValidUserfullName(){
//no blanks
				if(fullName){
					ttname.style.display = "none";
					userError.style.display = 'none';
					return true;
				}else{
					ttname.style.display = "block";
					userError.style.display = 'block';
					return false;
				}
			}
//must be a valid email
		 function isValidUseremail(){
			 testemail = /[a-zA-Z0-9]+\@\w+\.[org|com|net]+/.test(email);
				if(testemail){
					ttemail2.style.display = "none";//show the format
					ttemail.style.display = "none";
					emailError.style.display = 'none';
					return true;
				}else{
					ttemail2.style.display = "block";
					//ttemail.style.display = "block";
					emailError.style.display = 'block';
					return false;
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
//must select at least one activity;
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
				if(userPayment.value === 'bitcoin' || userPayment.value === 'paypal'){
					paymentError.style.display = "none";
					return true;
				}else if(userPayment === 'select method'){
					paymentError.style.display = "block";
				}else if(userPayment.value === 'credit card'){
					paymentError.style.display = "none";
//must be 13 to 16 digits
					function isValidUserccNum(){
						const ccNum = userCCNum.value;
						testccNum = /^\d{13,16}$/.test(ccNum);
						 if(testccNum){
							 ttccNum.style.display = "none";
							 ttccNum2.style.display = "none";
							 cardError.style.display = 'none';
							 return true;
						 }else if(ccNum.length != 0 && ccNum.length < 13 || ccNum.length > 16){
							 ttccNum2.style.display = "block";
							 ttccNum.style.display = "none";
							 cardError.style.display = 'block';
							 return false;
						 }else{
							 ttccNum.style.display = "block";
							 ttccNum2.style.display = "none";
							 cardError.style.display = 'block';
							 return false;
						 }
					 }
//must be 5 digits
					function isValidUserZip(){
						testZip = /^\d{5}$/.test(Zip);
						 if(testZip){
							 ttZip.style.display = "none";
							 zipError.style.display = 'none';
							 return true;
						 }else{
							 ttZip.style.display = "block";
							 zipError.style.display = 'block';
							 return false;
						 }
					 }
//must be 3 digits
					function isValidUserCvv(){
						testCvv = /^\d{3}$/.test(Cvv);
						 if(testCvv){
							 ttCvv.style.display = "none";
							 cvvError.style.display = 'none';
							 return true;
						 }else{
							 ttCvv.style.display = "block";
							 cvvError.style.display = 'block';
							 return false;
						 }
					 }
					 if(isValidUserccNum() && isValidUserZip() && isValidUserCvv()){
						 return true;
					 }else{
						 return false;//ccNum || zip || cvv error
					 }
				}
			}
			if(isValidUserfullName()){
				cnt += 1;
			}
			if(isValidUseremail()){
				cnt += 1;
			}
			if(isValidTitle()){
				cnt += 1;
			}
			if(isValidActivities()){
				cnt += 1;
			}
			if(isValidPayment()){
				cnt += 1;
			}
			return cnt;
	 }//end validator


	 /**
		*
		* EVENT LISTENERS
		*
		*/


	form.addEventListener('submit', (e) =>{
		 e.preventDefault(userNameInput);
		 e.preventDefault(userEmail);
		 e.preventDefault(userCCNum);
		 e.preventDefault(userZip);
		 e.preventDefault(userCvv);
		 let cntVal = validator();//call to validator
 		 if(cntVal === 5){
			  document.getElementById('register').style.display = "block";
//Make the register button go away.
				document.querySelector('button').hidden = true;
		  }
	 });

	 userEmail.addEventListener('keyup', (e) =>{
				const email = userEmail.value;
				testemail = /[a-zA-Z0-9]+\@\w+\.[org|com|net]+/.test(email);
				if(testemail){
					ttemail.style.display = "none";
					emailError.style.display = 'none';
				}else{
					ttemail.style.display = "block";
					emailError.style.display = 'block';
				}

		})

	/**
	 *
	 * GET IT OFF THE BOTTOM
	 *
	 */
});
