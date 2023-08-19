let list1=[]
let list2=[]
let list3=[]
let list4=[]
let n =1
let x=0
function add_row(){
  let addrown=document.getElementById("table")
  let newrow=addrown.insertRow(n)
  list1[x]= document.getElementById("first_name").value;
  list2[x]= document.getElementById("last_name").value;
  list3[x]= document.getElementById("email").value;

  let cell1 = newrow.insertCell(0);
  let cell2= newrow.insertCell(1);
  let cell3= newrow.insertCell(2);

  cell1.innerHTML = list1[x]
  cell2.innerHTML = list2[x]
  cell3.innerHTML = list3[x]

  n++;
  x++;
}
document.getElementById("submit").addEventListener("click",
function(Event){
  event.preventDefault()
});