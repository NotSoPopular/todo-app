if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}
const xhr=new XMLHttpRequest();
document.querySelectorAll('li').forEach(function(elements){
    elements.addEventListener('click',function(){
    let url='http://localhost:3000/todo'
    let text=elements.innerText;
    xhr.open("DELETE",url+'/'+text,true);
    xhr.send();
    location.reload();
})
})