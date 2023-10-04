function showALLData()
{
   table.innerHTML = ``
   //get data from localstorage and store to contaclist array
   //we must to use JSON.parse, because data as string, we need convert to array
   contactList = JSON.parse(localStorage.getItem('listItem')) ??[]

   //looping data and show data in table
   contactList.forEach(function(vaLue, i){
    var table = document.getElementById('table')
    table.innerHTML +=`
    <tr>
    <td>${i+1}</td>
    <td>${vaLue.name}</td>
    <td>${vaLue.age}</td>
    <td>${vaLue.address}</td>
    <td>${vaLue.phone}</td>
    <td>
<button class="btn btn-sm btn-success" onclick="find(${vaLue.id})">
<i class="fa fa-edit"></i>
</button> 
    </td>
    <td>
    <button class="btn btn-sm btn-danger" onclick="removeData(${vaLue.id})">
    <i class="fa fa-trash"></i>
    </button> 
        </td>
    </tr>`
   })
}