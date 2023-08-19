function onFormSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Get form data
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const male = document.getElementById('male').checked;
    const female = document.getElementById('female').checked;
    const profileImage = document.getElementById('profileImage').files[0];
    const message = document.getElementById('message').value;
  
    // Create a new table row to display the data
    const table = document.getElementById('profileDisplay').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
  
    // Insert the data into the table cells
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
  
    cell1.innerHTML = fullName;
    cell2.innerHTML = email;
    cell3.innerHTML = website;
    cell4.innerHTML = male ? 'Male' : female ? 'Female' : '';
    cell5.innerHTML = profileImage ? `<img src="" alt="Profile Image" width="50" height="50">` : '';
    cell6.innerHTML = message;

    if (profileImage) {
        const reader = new FileReader();
        reader.onload = function () {
          const img = newRow.querySelector('img');
          img.src = reader.result;
        };
        reader.readAsDataURL(profileImage);
      }
  
    // Reset the form after submission
    document.getElementById('registrationForm').reset();
  }
  
  // Add event listener to the form submission
  document.getElementById('registrationForm').addEventListener('submit', onFormSubmit);
  