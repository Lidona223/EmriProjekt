function formConatct(event){
    event.preventDefault()
    let firstName= document.getElementById("firstname").value
   let lastName= document.getElementById("lastname").value
   let email= document.getElementById("email").value
   let Contact= document.getElementById("Contact").value
   let alert= document.getElementById("alert")
   alert.style.display="block"
   alert.textContent="Thank you"+firstName+" "+ lastName+"."
}
