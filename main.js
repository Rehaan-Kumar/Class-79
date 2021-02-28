var display_student_name_array = [];

function submit() {
  var name_1 = document.getElementById("student_1").value;
  var name_2 = document.getElementById("student_2").value;
  var name_3 = document.getElementById("student_3").value;
  var name_4 = document.getElementById("student_4").value;

  display_student_name_array.push(name_1);
  display_student_name_array.push(name_2);
  display_student_name_array.push(name_3);
  display_student_name_array.push(name_4);

  console.log(display_student_name_array);
  document.getElementById("Display_name").innerHTML=display_student_name_array;

  document.getElementById("submit").style.display="none";
  document.getElementById("sort").style.display="inline-block";
}

function sorting() {
    display_student_name_array.sort();
    console.log(display_student_name_array);
    document.getElementById("Display_name").innerHTML=display_student_name_array;  
}