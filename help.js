window.addEventListener('load', function() { 
  console.log('All assets are loaded') 
  document.getElementById("makingTask").onclick = function(){
    if (confirm("Are you sure you would like to submit the task?")){
      event.preventDefault()

      var newTask = {
        "name" : document.getElementById("taskName").value,
        "user" : document.getElementById("name").value,
        "helpneeded": document.getElementById("address").value
      }
      // fetch("https://6rvpnnte.brev.dev/api/Form"+"?id=uuuuiiiiddddd", {method: "DELETE"})
      fetch("https://6rvpnnte.brev.dev/api/Form", {
        method: "POST",
        body:JSON.stringify(newTask)
      } );
      fetch("https://6rvpnnte.brev.dev/api/Form").then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    data.forEach(elem => {console.log(elem)})
  })

      console.log("I've been clicked")
    }
}
})
