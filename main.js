const myform = document.querySelector('#my-form');
const amountInput = document.querySelector('#amount');
const descInput = document.querySelector('#desc');
const catInput = document.querySelector('#catogery');
const list = document.querySelector('#items');




myform.addEventListener('submit',onSubmit);
list.addEventListener('click',editExpense);
list.addEventListener('click',removeExpense);



function onSubmit(e)
{
  e.preventDefault();

  const li = document.createElement('li');

  var editbut = document.createElement('button');

  editbut.className = 'btn btn-danger btn-sm float-right edit';

  editbut.appendChild(document.createTextNode('Edit'));

  var delbut = document.createElement('button');

  delbut.className = 'del';

  delbut.appendChild(document.createTextNode('Delete'));

  console.log(catInput.value);

  li.appendChild(document.createTextNode(`${amountInput.value}: ${descInput.value}: ${catInput.value}`));

  li.appendChild(editbut);
  li.appendChild(delbut);

  list.appendChild(li);


  const obj = {
    amount : amountInput.value,
    desc : descInput.value,
    cat : catInput.value
  };

  const ser = JSON.stringify(obj);
  localStorage.setItem(amountInput.value,ser);
  
}

function editExpense(e)
{
  if(e.target.classList.contains('edit'))
  {
    if(confirm('Are You Sure to Edit?'))
    {
      var li = e.target.parentElement;
      list.removeChild(li);
    }
  }
}
function removeExpense(e)
{
  if(e.target.classList.contains('del'))
  {
    if(confirm('Are You Sure to Delete?'))
    {
      var li = e.target.parentElement;
      list.removeChild(li);
      amountInput.value=null;
      catInput.value=null;
      descInput.value=null;
    }
  }
}