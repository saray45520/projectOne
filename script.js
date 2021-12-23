
let textNotebg = document.getElementById('text-task')
let dateNotebg = document.getElementById('date-task')
let timeNotebg = document.getElementById('time-task')
let nodesElement = document.getElementById("nodes")




const addTask = () => {
    if (textNotebg.value === "" || dateNotebg.value === "" || timeNotebg.value === "") {
        alert("זהו שדה חובה")
        return
    }


    let newId = Math.floor(Math.random() * 10000)
    let newTask = {
        id: newId,
        text: textNotebg.value,
        date: dateNotebg.value,
        time: timeNotebg.value
    }


    let jsonArray = localStorage.getItem("task-list")
    let TaskList = JSON.parse(jsonArray)

    if (TaskList === null) {
        TaskList = []
    }

    TaskList.push(newTask)

    let toJson = JSON.stringify(TaskList)
    localStorage.setItem("task-list", toJson)


    loadTask()

}

const loadTask = () => {

    let jsonArray = localStorage.getItem("task-list")
    let TaskList = JSON.parse(jsonArray)

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

    if (TaskList === null) {
        return
    }
    let tatle = `<p></p>`
    //.innerHTML
    //onclick="removeTask(this)"
    for (let task of TaskList) {
        tatle += `
        <div class=" background-notpeg grid-container " >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" onclick="handleDeleteTaskById(${task.id})" height="16" fill="currentColor" class=" icon bi bi-x-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
             </svg>
            <div id=para" class=" body-nadse  ">
                    
                <p>  
                    task: ${task.text} <br>
                </p> 
                <p >   
                    date: ${task.date}<br>
                </p>
                <p> 
                    time: ${task.time}
                </p>
                <p> 
                 ${dateTime}
                </p>
            </div>
       </div>
        `

    }

    nodesElement.innerHTML = tatle

}
const clearTask = () => {
    textNotebg.value = ""
    dateNotebg.value = ""
    timeNotebg.value = ""
}
// const removeTask = (event) => {
//     event.parentElement.remove()
// }
const handleDeleteTaskById = (id) => {

    let jsonArray = localStorage.getItem("task-list")
    let TaskList = JSON.parse(jsonArray)
    let filteredTaskList = TaskList.filter(el => el.id !== id)
    TaskList = filteredTaskList
    let toJson = JSON.stringify(TaskList)
    localStorage.setItem("task-list", toJson)

    loadTask()
}



