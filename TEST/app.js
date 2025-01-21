const input = document.getElementsByClassName('input-box')[0];
const add = document.getElementsByClassName('add')[0];
const outputLst = document.getElementsByClassName('output-list')[0];
const description = document.getElementsByClassName('input-box-description')[0];

add.addEventListener('click', function() {

    const taskCount = outputLst.children.length;

    if (taskCount >= 5) {
        Swal.fire({
            title: 'Error!',
            text: 'You have reached the maximum number of tasks (5)',
            icon: 'error',
            confirmButtonText: 'Cool'
        });
        return; // Stop the function from continuing if the limit is reached
    }

    if (input.value === "" || description.value === "") {
        Swal.fire({
            title: 'Warning!',
            text: 'Please provide both title and description.',
            icon: 'warning',
            confirmButtonText: 'Okay'
        });
        return; // Stop the function if either input is empty
    }














    
    const div = document.createElement('div');
    div.classList.add('task');

    const adding = document.createElement('input');
    adding.type = 'checkbox';
    adding.classList.add('list');
    div.appendChild(adding);

    // Create a label for the checkbox
    const label = document.createElement('label');
    label.classList.add('text');
    label.innerText = input.value; 
    div.appendChild(label); 

    // Create a description paragraph
    const labelDescription = document.createElement('p');
    labelDescription.classList.add('text1');
    labelDescription.innerText = description.value;
    div.appendChild(labelDescription);

    const addbtn = document.createElement('button');
    addbtn.classList.add('remove');
    addbtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    div.appendChild(addbtn);

    const pendingComplete = document.createElement('p');
    pendingComplete.classList.add('pendingComplete')
    pendingComplete.innerText = 'Pending';
    div.appendChild(pendingComplete)

    const taskNum1 = document.createElement('p');
    taskNum1.classList.add('TaskNo');
    taskNum1.innerText = `Task no: ${outputLst.childNodes.length}`;  // you can also this (taskNum1.children.length + 1)  
    div.appendChild(taskNum1);
    console.log(outputLst.childNodes);
    // console.log(outputLst.children.length + 1) 
    // the explanation if you use the children.length + 1 is
    // if there not yet task it will become 0
    
    // i used childnode becuases look at html there's a space between <div> </div>
    // there space in middle in div so it convert as a text so it add lenght 1




    addbtn.addEventListener('click', function() {
        adding.checked = true; // Mark the checkbox as checked
        label.style.textDecoration = 'line-through';
        labelDescription.style.textDecoration = 'line-through';
        div.style.opacity = '0.4'; 
        div.style.transition = 'opacity 0.5s ease-out'; 
        div.style.opacity = '0'; 

        setTimeout(() => {
            
            outputLst.removeChild(div);


            // Re-number tasks after removal
            renumberTasks();
        }, 500); 


        

        if(adding) {
            pendingComplete.innerText = 'Complete'
            pendingComplete.style.backgroundColor = ' rgb(10, 174, 10) '
        } else {
            pendingComplete.innerText = 'Pending';
        }
    });














    adding.addEventListener('click', function() {
        if (adding.checked) {
            label.style.textDecoration = 'line-through'; 
            labelDescription.style.textDecoration = 'line-through';
            div.style.opacity = '0.4';
            div.style.color = 'white';
            pendingComplete.innerText = 'Complete'
            pendingComplete.style.backgroundColor = ' rgb(10, 174, 10) ';
        } else {
            label.style.textDecoration = 'none'; 
            labelDescription.style.textDecoration = 'none';
            div.style.opacity = '1';
            div.style.color = 'white';
            pendingComplete.innerText = 'Pending';
            pendingComplete.style.width = '50px';
            pendingComplete.style.backgroundColor = '#e59633';
        }
    });

    // Append the task to the output list
    outputLst.appendChild(div);

    // Clear input fields
    input.value = "";
    description.value = ""; // Clear the description 
    



        console.log(outputLst.children)

        const ee = outputLst.children;
        console.log(ee.length)
});





// Function to re-number the tasks after a task is removed
function renumberTasks() {
    const tasks = outputLst.children;
    for (let i = 0; i < tasks.length; i++) { 
        const taskNum1 = tasks[i].getElementsByClassName('TaskNo')[0];
        taskNum1.innerText = `Task no: ${i + 1}`; // Reassign the task number
    }

}

// i =  0 task = 1,  0 + 1 output innertext = 1
// i = 1 task = 2 , 1 + 1 output innertext = 2
// i = 2 task = 3 , 2 + 1 output innertext = 3
// and so on
