document.addEventListener("DOMContentLoaded", () => {
  // Field Vars
  const datePicker = document.getElementById("dobInput");
  datePicker.max = new Date().toISOString().split("T")[0];
  document.getElementById("fNameInput").addEventListener("blur", validateNames);
  document.getElementById("lNameInput").addEventListener("blur", validateNames);
  document.getElementById("emailInput").addEventListener("blur", validateEmail);
  document.getElementById("dobInput").addEventListener("blur", validateDob);

  function validateNames(e) {
    let currEl = e.target;
    let nextChild = currEl.parentNode.children[2];

    if (!e.target.value) {
      currEl.classList.add("alertedField");
      nextChild.style.display = "block";
      return false;
    } else {
      currEl.classList.remove("alertField");
      nextChild.style.display = "none";
      return false;
    }
  }

  function validateEmail(e) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let currEl = e.target;
    let nextChild = currEl.parentNode.children[2];

    if (!re.test(e.target.value)) {
      currEl.classList.add("alertedField");
      nextChild.style.display = "block";
      return false;
    } else {
      currEl.classList.remove("alert");
      nextChild.style.display = "none";
      return false;
    }
  }

  function validateDob(e) {
    let currEl = e.target;
    let nextChild = currEl.parentNode.children[2];

    if (!e.target.value) {
      currEl.classList.add("alertedField");
      nextChild.style.display = "block";
      return false;
    } else {
      currEl.classList.remove("alert");
      nextChild.style.display = "none";
      return false;
    }
  }
});
