
   let todoList = [];

  renderTodo()

  function renderTodo(){
    let todolistHTML ='';

  for (let i=0; i < todoList.length; i++){
    const taskobject = todoList[i];
    const name = taskobject.name
    const duedate = taskobject.duedate
    let html = `
    <div>${name}</div>
    <div>${duedate}</div>
    <button class="delete-butt"
    onclick="todoList.splice(${i}, 1); renderTodo();">
    Delete</button>`;
    todolistHTML += html;
    console.log(todolistHTML)
    

   }
  
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
      warning.innerHTML = " Don't forget to set a due date for your task.";
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
