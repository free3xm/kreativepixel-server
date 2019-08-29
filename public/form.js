let modal = document.querySelector(".modal");
let btnModal = document.querySelector(".modal button");
btnModal.onclick = () => {
  modal.classList.remove("modalActive");
}
function formSubmit(e, form){
  event.preventDefault();
  fetch("https://free3xm.herokuapp.com/", {
    method:"POST",
    headers: {
        'Content-Type': 'application/json'
      },
    body : JSON.stringify({
      name: form.formName.value,
      email: form.formEmail.value,
      text: form.formText.value })
  })
  .then(function(response){
    return response;
  }).then(function(data){
    modal.classList.add("modalActive");
    modal.childNodes[0].innerHTML = "Messege sent.<br>Thank You!";
  }).catch(function(err){
    modal.classList.add("modalActive");
    modal.childNodes[0].innerHTML = "Server is busy.<br>Sorry...";
  })
  return false;
}
