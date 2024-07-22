function Submit()
{
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username.trim()!== '' && password.trim()!== '')
    {
        var result = document.getElementById('successMessage');
        result.style.display = 'block';
        setTimeout(function() {
            location.reload();
        }, 2000);
    }
}