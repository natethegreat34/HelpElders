function fun1(){
  document.write(5 + 6);
  var visible = false;
  var t = document.getElementById("position").value;
  document.write(t);
  if (t.equals("Elderly")){
    visible = false;
  }
  if (t.equals("Volunteer")){
    visible = true;
  }

  if(visible){
    document.write(5 + 6);
  }
}
