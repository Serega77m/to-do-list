// Selection of  elements

const buttonCreate = document.querySelector('button');
const modal = document.querySelector('.modal');
const wrapper = document.querySelector('.wrapper');
const content = document.querySelector('.content');
const create = document.querySelector('#create');
const title = document.querySelector('#title-field');
const priority = document.querySelector ('#priority-modal');
const listTasks = document.querySelector ('.list-tasks');
const taskButton = document.querySelector('.task__button');
const buttonMore = document.querySelector ('.more');
const dropDown = document.querySelector ('.dropdown');
const dropDownContent = document.querySelector('.dropdown-content');
const done = document.querySelector('.done');
const edit = document.querySelector('.edit');
const deleteTask = document.querySelector('.delete');
const taska = document.querySelector('.task');
const cancel = document.querySelector ('#cancel');
const priorityFirst = document.getElementById('priority');
const status = document.querySelector ('#status');



// Events 

buttonCreate.addEventListener ('click',showModal);
wrapper.addEventListener ('click',offModal);
create.addEventListener ('click',createButton);
cancel.addEventListener('click',offModal);

// Filter Priority of Task

priorityFirst.addEventListener ('change',() => {
    let priorityAll = document.querySelectorAll('.priority_of_task')
        priorityAll.forEach((elem)=>{
            if (priorityFirst.value === 'all'|| elem.textContent === priorityFirst.value) {
                elem.closest('.task').style.display ='flex'
            } else {
                elem.closest('.task').style.display ='none'
            } 
            })
})

// Filter Status of  Task

status.addEventListener ('change', ()=>{
    let allTask = document.querySelectorAll('.task');
        allTask.forEach((elem)=> {
            if (status.value === 'done' && elem.style.backgroundColor != 'grey' ) {
                elem.style.display ='none'
            } else if (status.value === 'open' && elem.style.backgroundColor === 'grey') {
                elem.style.display ='none'
            } else  {
                elem.style.display ='flex'
            }

         })
        })


// Create New Task
function createButton () {
    
    // Creating new elements
    
    const fragment = document.createDocumentFragment();
    let newTask =  document.createElement ('div');
    let newTitle = document.createElement ('div');
    let newDescription = document.createElement ('div');
    let newPriority = document.createElement ('div');
    let newButtonMore = document.createElement ('button');
    let newTaskButton = document.createElement ('div');
    let newDropDown = document.createElement ('div');
    let dropDownContent = document.createElement ('div');
    let dropLinkDone = document.createElement ('a');
    let dropLinkEdit = document.createElement ('a');
    let dropLinkDelete = document.createElement ('a');
    let checkMark = document.createElement ('div');

    // Append the elements

    dropDownContent.append (dropLinkDone,dropLinkEdit,dropLinkDelete);
    newDropDown.append(newButtonMore,dropDownContent)
    newTaskButton.append(newPriority,newDropDown);
    newTask.append(newTitle,newDescription,newTaskButton,checkMark);

    // Asign a text to a new element
   
    dropLinkDone.textContent = 'done';
    dropLinkEdit.textContent = 'edit';
    dropLinkDelete.textContent = 'delete';
    newButtonMore.textContent = '...';
    newTitle.textContent = title.value;
    newDescription.textContent = description.value;
    newPriority.textContent = priority.value;

    // Asign a  class to a new element

    newTask.className = "task";
    newTitle.className = "task__title";
    newDescription.className = "task__description";
    newPriority.className = "priority_of_task";
    newTaskButton.className="task__button";
    newButtonMore.className="more";
    newDropDown.className = "dropdown";
    dropDownContent.className = "dropdown-content";
    checkMark.className = 'checkMark';
    dropLinkDone.className = "done";
    dropLinkEdit.className = "edit";
    dropLinkDelete.className ="delete";
    
    // Append new task 

    fragment.append(newTask);
    listTasks.append(fragment);
   
    //  Events dropdown menu  

    dropLinkDelete.addEventListener ('click',()=> newTask.remove() )
    dropLinkEdit.addEventListener ('click', editModal);
    dropLinkDone.addEventListener ('click',()=> {
        checkMark.style.visibility='visible';
        newTask.style.backgroundColor = 'grey';
    })
    offModal () 
    
    // Search

    const title228 = document.querySelector ('#search-field');
    title228.addEventListener ('input', ()=>{
        let val = title228.value.trim().toLowerCase();
        let taskList = document.querySelectorAll ('.task__title');
        if (val != '') {
            taskList.forEach((elem) => {
                if (elem.textContent.toLowerCase().search(val)==-1) {
                    elem.closest('.task').style.display ='none';
                }
                else {
                    elem.closest('.task').style.display ='flex';
                }
            })
        }
                else {
                    taskList.forEach ((elem)=>{
                    elem.closest('.task').style.display ='flex';
                    })
                }
               
    })
   
    // Edit task

    function editModal () {
        modalEdit.style.visibility = 'visible';
        wrapper.style.visibility = 'visible';
        modalInputEdit.value = title.value;
        descriptionEdit.value = description.value;
        const createEdit = document.querySelector('#createEdit');
        const cancelModalEdit = document.querySelector('#cancel-Edit')
        cancelModalEdit.addEventListener ('click',offModal) 
        createEdit.addEventListener ('click', () => {
            modalEdit.style.visibility = 'hidden';
            wrapper.style.visibility = 'hidden';
            let parentTask = newTitle.closest('.task');
            parentTask.childNodes[0].textContent = modalInputEdit.value;
            parentTask.childNodes[1].textContent =  descriptionEdit.value;
            parentTask.childNodes[2].firstChild.textContent = priorityEdit.value;
            title.value =  parentTask.childNodes[0].textContent;
            description.value = parentTask.childNodes[1].textContent;
            priority.value =parentTask.childNodes[2].firstChild.textContent;
            })
        }
    }
    





const modalInput =document.querySelector('#title-field');
const description = document.querySelector('#description-field');
const modalInputEdit =document.querySelector('#title-field-Edit');
const descriptionEdit = document.querySelector('#description-field-Edit');
const modalEdit = document.querySelector ('.modalEdit');
const priorityEdit = document.querySelector ('#priority-modal-Edit');                         



function showModal () {
	modal.style.visibility = 'visible';
    wrapper.style.visibility = 'visible';
    modalInput.value = '';
    description.value = '';
}

function offModal () {
	modal.style.visibility = 'hidden';
    wrapper.style.visibility = 'hidden';
    modalEdit.style.visibility ='hidden';
 
}



