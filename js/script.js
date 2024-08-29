document.addEventListener('DOMContentLoaded', function() {
    // Greet the user with their name
    const userName = prompt('Enter your name:');
    document.getElementById('userName').textContent = userName || 'Guest';

    // Form validation and submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const pesan = document.getElementById('pesan').value;  // Ensure this is correctly referenced
        const currentTime = new Date().toLocaleString();

        // Display output in empty-box 
        document.getElementById('output').innerHTML = `
            <p style="margin-bottom: 2rem;" >Current time: ${currentTime}</p>
            <p>Nama: ${name}</p>
            <p>Tanggal Lahir: ${dob}</p>
            <p>Jenis Kelamin: ${gender}</p>
            <p>Pesan: ${pesan}</p>
        `;
    });
});
