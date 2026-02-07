function getResult() {
  const id = document.getElementById("pid").value;

  if (!id) {
    alert("❌ Please enter a Project ID!");
    return;
  }

  // Open local PDF file
  window.open("report_project_5.pdf", "_blank");
}


