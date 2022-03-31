let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let tbody = document.querySelector('tbody')
let deleted = []
let completed = []
class ToDo{
    constructor(name,about){
        this.name=name
        this.about=about
        this.date=new Date()
    }
}
let time = new Date();
three.addEventListener('click',function(){
    tbody.insertAdjacentHTML('beforeend',
    `<tr>
        <td>${one.value}</td>
        <td>${two.value}</td>
        <td>${time}</td>
        <td><input type = "button" value = "Удалить событие" class = "Delete" </td>
        <td><input type = "button" value = "Выполнить событие" class = "Complete" </td>
    </tr>`)
    let deletedbody = document.querySelector('.deleted')
    let noevent = document.querySelectorAll('.Delete');
    noevent.forEach(item => item.addEventListener('click',function(){
        let trdelete = event.target.closest('tr');
        trdelete.remove();
        deletedbody.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${one.value}</td>
            <td>${two.value}</td>
            <td>${time}</td>
        </tr>`)
        one.value='';
        two.value='';
    }))

let completedbody = document.querySelector('.completed')
let yesevent = document.querySelectorAll('.Complete')
yesevent.forEach(item => item.addEventListener('click',function(){
    let trcomplete = event.target.closest('tr');
        trcomplete.remove();
        completedbody.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${one.value}</td>
            <td>${two.value}</td>
            <td>${time}</td>
        </tr>`)
        one.value='';
        two.value='';
}))
})