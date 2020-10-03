window.addEventListener('load', function(){
  fetch("https://6rvpnnte.brev.dev/api/Form").then(response => response.json())
  .then(data => {
  console.log('Success:', data);
    Object.keys(data).forEach(key=> {
    var task = data[key]
    var node = document.createElement("LI");
    node.onclick = function(){
      console.log(task.name)
      console.log(key)
      fetch("https://6rvpnnte.brev.dev/api/Form"+ "?id="+key , {method: "DELETE"})
      node.style.display="none"
    }
    var textnode = document.createTextNode("| Task: " + task.name + " | Name: " + task.user + " | Address: " + task.helpneeded+ " |");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node)
    // var button = document.createElement("button");
    //  document.getElementById("myList").appendChild(button);
    //  button.addEventListener ("click", function() {
    //  document.getElementById("myList").removeChild(node);
    //  document.getElementById("myList").removeChild(button);
  })
  })

})
