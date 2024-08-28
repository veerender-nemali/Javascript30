const inputs = document.querySelectorAll(".settings input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";

  //documentElement = <html>
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
