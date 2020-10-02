window.addEventListener('load', function() { 
  console.log('All assets are loaded') 
  document.getElementById("makingTask").onclick = function(){
    event.preventDefault()

    var newTask = {
      "name" : document.getElementById("taskName").value,
      "user" : document.getElementById("name").value,
      "helpneeded": document.getElementById("address").value
    }

    fetch("https://6rvpnnte.brev.dev/api/Form", {method: "POST", body:JSON.stringify(newTask)} )
    fetch("https://6rvpnnte.brev.dev/api/Form").then(response => response.json())
.then(data => {
  console.log('Success:', data);
  data.forEach(elem => {console.log(elem)})
})

    console.log("I've been clicked")
  }
})

  // <div class="container">
  //   <label for="taskName" class="sr-only">Help Needed</label>
  //   <input type="text" id="taskName" class="form-control" placeholder="Task Name" required autofocus>
  //   <br></br>
  //   <label for="name" class="sr-only">Name</label>
  //   <input type="text" id="name" class="form-control" placeholder="Name" required>
  //   <br></br>
  //   <label for="address" class="sr-only">Address</label>
  //   <input type="text" id="address" class="form-control" placeholder="Address" required>
  //   <br></br>
  //   <button class="btn btn-lg btn-primary btn-block" type="button" id="makingTask">Create Task</button>
  // </div>
