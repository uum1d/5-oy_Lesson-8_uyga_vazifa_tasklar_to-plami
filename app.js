let home = document.getElementById('home')
let task_1 = document.getElementById('task_1')
let task_2 = document.getElementById('task_2')
let task_3 = document.getElementById('task_3')
let task_4 = document.getElementById('task_4')
let btn_task_1 = document.getElementById('task-1')
let btn_task_2 = document.getElementById('task-2')
let btn_task_3 = document.getElementById('task-3')
let btn_task_4 = document.getElementById('task-4')
let input = document.getElementById('input')
let ul = document.getElementById('ul')
let button_btn = document.getElementById('button_btn')
let back = document.getElementById('back')
let back2 = document.getElementById('back2')
let back3 = document.getElementById('back3')
let back4 = document.getElementById('back4')
let compute_btn = document.getElementById('compute_btn')
let delete_btn = document.getElementById('delete_btn')
let text = document.getElementById('text')
let click = document.getElementById('click')

btn_task_1.addEventListener('click', () => {
    home.style.display = 'none'
    task_1.style.display = 'block'
    back.addEventListener('click', () => {
        home.style.display = 'block'
    task_1.style.display = 'none'
    })
})

const addList = () => {
    console.log( input.value )
    let button = document.createElement('button')
    let li = document.createElement('li')
    button.innerHTML = 'x'
    li.innerHTML = input.value
    ul.appendChild(li)
    li.appendChild(button)
    button.classList.add('delete_btn')
    input.value = ''
    saveData()
}
ul.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON'){
        event.target.parentElement.remove()
        saveData()
    }else if(event.target.tagName === 'LI'){
        event.target.classList.toggle("check")
        saveData()
    }
})
function saveData () {
    localStorage.setItem('data', ul.innerHTML)
}
function showTask (){
    ul.innerHTML = localStorage.getItem('data')
}
showTask()

btn_task_2.addEventListener('click', () => {
    home.style.display = 'none'
    task_2.style.display = 'block'
    back2.addEventListener('click', () => {
        home.style.display = 'block'
    task_2.style.display = 'none'
    })
})

compute_btn.addEventListener('click', () => {
    var textareaValue = document.getElementById('textarea').value.replace(/\n/g, ' ');
var wordCount = textareaValue.split(' ').length;
text.innerText = wordCount
})
delete_btn.addEventListener('click', () => {
    textarea.value = ''
})

btn_task_3.addEventListener('click', () => {
    home.style.display = 'none'
    task_3.style.display = 'block'
    back3.addEventListener('click', () => {
        home.style.display = 'block'
    task_3.style.display = 'none'
    })
})

click.addEventListener('click', () => {
        var textareaValue = document.getElementById('myTextarea').value;
        var inputValue = document.getElementById('myInput').value;
    
        if (textareaValue.includes(inputValue)) {
            alert('So\'z matnda bor');
        } else {
            alert('So\'z matnda yo\'q');
        }
})

btn_task_4.addEventListener('click', () => {
    home.style.display = 'none'
    task_4.style.display = 'block'
    back4.addEventListener('click', () => {
        home.style.display = 'block'
    task_4.style.display = 'none'
    })
})
function showFileSize() {
    var input = document.getElementById('myFile');
    if (input.files && input.files[0]) {
        var size = input.files[0].size / 1024; // KB ga o'tkazish
        alert('Fayl hajmi: ' + size.toFixed(2) + ' KB');
    }
}