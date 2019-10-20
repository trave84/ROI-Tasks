const beforeHtml = new Date().getMilliseconds();

window.addEventListener("DOMContentLoaded", e => {
  const afterHtml = new Date().getMilliseconds();
  console.log(`Loading all HTML took: ${afterHtml - beforeHtml} milliseconds`);

  const form = document.getElementById("form-1");
  const formSuccess = document.getElementById("formSuccessMsg");
  const formFailure = document.getElementById("formFailureMsg");
  const loader = document.getElementById("loaderDiv");

  // Prepare UI Vars
  form.addEventListener("submit", e => {
    formSuccess.style.display = "none";
    formFailure.style.display = "none";

    loader.style.display = "block";
    // Do not auto-reload before storing data
    e.preventDefault();

    // Server lag  simulation to CRUD
    setTimeout(() => {
      let formElements = form.elements;

      for (var i = 0; i < formElements.length; i++) {
        localStorage.setItem(formElements[i].name, formElements[i].value);
      }
      // Replace but be able to navigate back in History
      window.location.assign("successPage.html");
    }, 2000);
  });
});
