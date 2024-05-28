
var getul=document.getElementById('ul')
function abc(){
    var acb=document.getElementById('inp')
    var li=document.createElement('li')
    var liTxt=document.createTextNode(acb.value)
    li.appendChild(liTxt)
    getul.appendChild(li)
    acb.value=''
    var dltbtn=document.createElement('button')
    var dltbtntxt=document.createTextNode('Delete')
    dltbtn.appendChild(dltbtntxt)
    li.appendChild(dltbtn)
    dltbtn.setAttribute('onclick','del(this)')
    var editBtn=document.createElement('button')
    var editBtnTxt=document.createTextNode('Edit')
    editBtn.appendChild(editBtnTxt)
    li.appendChild(editBtn)
    editBtn.setAttribute('onclick','editfunction(this)')
    dltbtn.setAttribute("class","btn btn-danger aaa")
    editBtn.setAttribute("class","btn btn-info aaa" )

    //console.log(li)
}
function ca(){
    getul.innerHTML =''
}

function del(e){
    e.parentNode.remove()
}
function editfunction(e){
    var a=prompt('Enter Edit Value',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=a
    
    //console.log(e.parentNode.firstChild)

}