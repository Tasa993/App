let addBtn= document.getElementById('add');
let todoInput=document.getElementById('input');
let list=document.getElementById('list');
let btnClr = document.getElementById("clear");
let liItem = "";
let todoList = [];
let form = document.getElementById("form");
let number=1;


addBtn.addEventListener('click', addTodo);
btnClr.addEventListener("click", clearList);
list.addEventListener('click', checked);




function addTodo()
{
    if(todoInput.value==="")
    {
        alert("You must enter some value!");
    }
    else
    {
        let text = todoInput.value;
        const item=document.createElement('li');

        item.id='li-${number}';
        number++;

        const label=document.createElement('label');
        label.id='text';
        label.innerText=text;

        const button1=document.createElement('button');
        button1.classList.add('button1');
        button1.innerText='x';
        button1.addEventListener('click',del);


        const button2=document.createElement('button');
        button2.classList.add('button2');
        button2.innerText='edit';
        button2.addEventListener('click',edit);

        const time=document.createElement('input');
        time.classList.add('time');
        time.id="input-time";
        time.value="06:30";
        time.type="time";


        item.appendChild(time);
        item.appendChild(label);
        item.appendChild(button1);
        item.appendChild(button2);

        list.appendChild(item);
        liItem = {item: text, checked: false};
        todoList.push(liItem);
        form.reset();
    }


}

function clearList()
{
    todoList = [];
    list.innerHTML = "";
    list.style.borderTop = "";
}
function checked(event)
{
  if(event.target.tagName==='LI')
  {
      event.target.classList.toggle('checked');
  }
}
function del()
{

    for(let i=0;i<todoList.length; i++)
    {
            let k=this.parentElement;
            k.style.display = "none";
    }

}
function edit()
{

    for(let i=0;i<todoList.length; i++)
    {

            let k=this.parentElement;
            let label1=k.querySelector("label");

            todoInput.value=label1.innerText;
            k.style.display = "none";

    }
}


