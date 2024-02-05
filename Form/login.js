const submit = document.getElementById("submit");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

submit.addEventListener("click",() => {
    submitForm();
});


function submitForm() {
    const formData = new FormData(document.getElementById('loginForm'));
    const resultDiv = document.getElementById('formResult');
    resultDiv.innerHTML = '';

    for (const [key, value] of formData.entries()) {
      resultDiv.innerHTML += `<p><strong>${key}:</strong> ${value}</p>`;
    }
  }
