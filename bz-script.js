const BZForm = {
  formFields: document.querySelectorAll(".wpforms-field"),
  init: () => {
    if (!BZForm.formFields[0]) {
      return;
    }
    BZForm.formFields.forEach((field) => {
      let input =
        field.querySelector("input") || field.querySelector("textarea");

      if (input) {
        // Add focus state to the parent input element
        input.addEventListener("focus", () => {
          field.classList.add("focus");
        });

        // Remove focus state from the parent input element
        input.addEventListener("blur", () => {
          field.classList.remove("focus");
        });

        // Add filled state to the parent input element
        input.addEventListener("input", () => {
          if (input.value !== "") {
            field.classList.add("active");
          } else {
            field.classList.remove("active");
          }
        });
      }
    });
  },
};

document.addEventListener("DOMContentLoaded", () => {
  BZForm.init();
});
