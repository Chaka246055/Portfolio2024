let showActiveButton = document.getElementById(show-active);

// 
function shoowActiveTask(){
 let task = document.getElementsByClassName("task");
 for (let i=0; i<tasks.length; i++){
  if (tasks[i].classlist.contains("completed")){
   task[i].computedStyleMap.display= "none";
  }else{
   task[i].style.discplay= "block";
  }
 }
}

showActiveButton.addEventListener('click', showActiveTasks);