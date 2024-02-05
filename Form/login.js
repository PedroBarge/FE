document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    var formElements = document.getElementById("loginForm").elements;
  
    for (var i = 0; i < formElements.length; i++) {
      var element = formElements[i];
  
      if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
  
        if (element.tagName.toLowerCase() === "input") {
          var label = document.querySelector('label[for="' + element.id + '"]');
          if (label) {
            label.classList.remove("hidden");
          }
        }
      }
    }
  
    var formData = document.getElementById("data");
    formData.innerHTML = "Form Data: " + JSON.stringify(serializeForm(formElements), null, 2);
    formData.classList.remove("hidden");
  });
  
  function serializeForm(formElements) {
    var formData = {};
    for (var i = 0; i < formElements.length; i++) {
      var element = formElements[i];
      if (element.type !== "submit") {
        formData[element.name] = element.value;
      }
    }
    return formData;
  }
  