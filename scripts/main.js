document.querySelector("#form").addEventListener("submit",formSubmit);
var userData=JSON.parse(localStorage.getItem("formList")) || [];

//var userData=[];
function formSubmit(){
   
    event.preventDefault();
    var user={
        name:document.querySelector("#name").value,
        email:form.email.value,
        address:form.address.value,
        amount:form.amount.value,
        

    };
   // formData.push(user);
    //console.log(formData);
    userData.push(user);
    console.log(userData)
    localStorage.setItem("formList",JSON.stringify(userData))
//   window.location.href="voucher.html"
}