document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    const li = document.createElement('li');
    li.textContent = `${name} - ${phone}`;
    
    document.getElementById('contact-list').appendChild(li);

    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
});
