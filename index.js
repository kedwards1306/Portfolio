document.getElementById('resume-link').addEventListener('click', function(event) {
    if (!confirm('Are you sure you want to download the resume?')) {
        event.preventDefault();
    }
});
