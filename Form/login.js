const submit = document.getElementById("submit");

form.addEventListener("submit", (e) => {
    //e.preventDefault();
});

submit.addEventListener("click",() => {
    submitForm();
});


function submitForm() {
    // Get form data
    const formData = new FormData(document.getElementById('loginForm'));

    // Display form data in the result div
    const resultDiv = document.getElementById('formResult');
    resultDiv.innerHTML = '';

    for (const [key, value] of formData.entries()) {
      resultDiv.innerHTML += `<p><strong>${key}:</strong> ${value}</p>`;
    }
  }
