const form = document.querySelector('form')
const ol = document.querySelector('ol')
const arr1 = []
function handler1(event){
    event.preventDefault()
    const form = event.target
    const inputUserName= form.user.value
    checkText(inputUserName)
}
function checkText(value) {
    if(value===''){
        alert('Line is empty!')
    } else{
        addToDoc(value, arr1)
    }
}
function addToDoc(value, arr){
    arr.push(value)
    const li = document.createElement('li')
    li.textContent = value
    ol.className ='createOl'
    ol.append(li)
    console.log(arr);
}
form.addEventListener('submit', handler1)