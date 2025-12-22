
   let todoList = [];

  renderTodo()

  function renderTodo(){
    let todolistHTML ='';
    todoList.forEach((taskobject,index)=>{
      
    const {name, duedate} = taskobject;
    let html = `
   <div class="todo-name">${name}</div>
    <div class="todo-date">${duedate}</div>
    <button class="delete-butt"
    onclick="todoList.splice(${index}, 1); renderTodo();">
    Delete</button> `;
    todolistHTML += html;
    console.log(todolistHTML)
})
  
   document.querySelector('.js-addtoweb').innerHTML = todolistHTML;
  } 
  //todo function html pull to js
   function todo(){
    let inputElement = document.querySelector('.js-input');
    const inputValue = inputElement.value.trim();
    console.log(inputValue);

    let duedateInput = document.querySelector('.js-duedate-input');
    const inputDuedate = duedateInput.value.trim();

    let warn = document.querySelector('.todo-warn');
    const warning = warn;

    if (inputDuedate==='' || inputValue===''){
      warning.innerHTML = " Please make sure to enter a task name and a due date.";
    }else{
       warning.innerHTML ='';

      todoList.push({
      name: inputValue,
      duedate: inputDuedate
    });
    }

    console.log(todoList)
    inputElement.value =''
    duedateInput.value =''
    
    renderTodo()
   }
    //document.querySelector('.js-addtoweb').innerHTML = todolistonWeb;

   function keyPress(event){
    if(event.key === 'Enter') {
      todo()
    }

   }
