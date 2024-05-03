let username;
document.getElementById('btn').onclick = function(){
    username = document.getElementById('input').value;
    document.getElementById('text').textContent = (`${username}`)

}