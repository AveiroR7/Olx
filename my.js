let currentUserName;
let currentUserUid;

// signin popup
var signinBtn = document.getElementById("signinBtn");
var signinBtn_2 = document.getElementById("signinBtn_2");
var signinPopup = document.getElementById("signinPopup");
var closeSigninPopup = document.getElementById("closeSigninPopup");

function signinBtn_f() {
    signinPopup.style.display = "flex";
    signupPopup.style.display = "none";
}
signinBtn.onclick = () => {
    signinPopup.style.display = "flex";
    signupPopup.style.display = "none";
    sellPopup.style.display = "none";
    categoryPopup.style.display = "none";
}
signinBtn_2.onclick = () => {
    signinPopup.style.display = "flex";
    signupPopup.style.display = "none";
    sellPopup.style.display = "none";
    categoryPopup.style.display = "none";
}

// signup popup
var signupBtn = document.getElementById("signupBtn");
var signupPopup = document.getElementById("signupPopup");
var closeSignupPopup = document.getElementById("closeSignupPopup");

signupBtn.onclick = () => {
    signupPopup.style.display = "flex";
    signinPopup.style.display = "none";
    sellPopup.style.display = "none";
    categoryPopup.style.display = "none";
}

// category popup
var selectedCategory = '';
var sellBtn = document.getElementById("sellBtn");
var categoryPopup = document.getElementById("categoryPopup");
var closeCategoryPopup = document.getElementById("closeCategoryPopup");

sellBtn.onclick = () => {
    categoryPopup.style.display = "flex";
    sellPopup.style.display = "none";
    signupPopup.style.display = "none";
    signinPopup.style.display = "none";
}


// back category popup
var backCategoryPopup = document.getElementById("backCategoryPopup");

backCategoryPopup.onclick = () => {
    categoryPopup.style.display = "flex";
    sellPopup.style.display = "none";
    signupPopup.style.display = "none";
    signinPopup.style.display = "none";
}

// sell popup
var categoryForm = document.getElementById("categoryForm");
var categoryName = document.getElementById("categoryName");

categoryForm.onsubmit = () => {
    selectedCategory = document.querySelector("input[name='category']:checked");

    if (Boolean(selectedCategory) === true) {
        categoryName.innerText = `Category: ${selectedCategory.value}`;

        sellPopup.style.display = "flex";
        signupPopup.style.display = "none";
        signinPopup.style.display = "none";
        categoryPopup.style.display = "none";

        selectedCategory.checked = false;

        document.getElementById("warning").style.display = "none";
    } else {
        document.getElementById("warning").style.display = "block";
    }
    return false;
}


// window onclick
window.onclick = () => {
    if (event.target === signinPopup || event.target === closeSigninPopup || event.target === signupPopup || event.target === closeSignupPopup || event.target === closeSellPopup || event.target === closeCategoryPopup || event.target === closeAdDetailsPopup) {
        signupPopup.style.display = "none";
        signinPopup.style.display = "none";
        sellPopup.style.display = "none";
        categoryPopup.style.display = "none";
        adDetailsPopup.style.display = "none";
    }
}


function registration()
	{

		var Name = document.getElementById("Name").value;
		var signupEmail = document.getElementById("signupEmail").value;
		var signupName = document.getElementById("signupName").value;
		var signupPw= document.getElementById("signupPw").value;			
		var cpwd= document.getElementById("signupPw").value;
		
        //email id expression code
		var signupPw_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(Name=='')
		{
			alert('Please enter your name');
		}
		else if(!letters.test(Name))
		{
			alert('Name field required only alphabet characters');
		}
		else if(signupEmail=='')
		{
			alert('Please enter your user email id');
		}
		else if (!filter.test(signupEmail))
		{
			alert('Invalid email');
		}
		else if(signupName=='')
		{
			alert('Please enter the user name.');
		}
		else if(!letters.test(signupName))
		{
			alert('User name field required only alphabet characters');
		}
		else if(signupPw=='')
		{
			alert('Please enter Password');
		}
		else if(cpwd=='')
		{
			alert('Enter Confirm Password');
		}
		else if(!signupPw_expression.test(signupPw))
		{
			alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
		}
		else if(signupPw != cpwd)
		{
			alert ('Password not Matched');
		}
		else if(document.getElementById("cpwd").value.length < 6)
		{
			alert ('Password minimum length is 6');
		}
		else if(document.getElementById("cpwd").value.length > 12)
		{
			alert ('Password max length is 12');
		}
		else
		{				                            
               alert('Thank You');
			   
		}
	}


	function clearFunc()
	{
		document.getElementById("Name").value="";
		document.getElementById("signupEmail").value="";
		document.getElementById("signupName").value="";
		document.getElementById("signupPw").value="";
		document.getElementById("cpwd").value="";
	}
