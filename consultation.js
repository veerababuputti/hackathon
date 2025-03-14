// Handle Virtual Consultation Form Submission
document
  .getElementById("consultationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const contactNumber = document.getElementById("contactNumber").value.trim();
    const village = document.getElementById("village").value.trim();
    const email = document.getElementById("email").value.trim();
    const issue = document.getElementById("issue").value.trim();

    if (!firstName || !contactNumber || !village || !email || !issue) {
      alert("Please fill in all fields.");
      return;
    }

    const consultationMessage = `
      Thank you, ${firstName}. 
      We have received your consultation request. 
      We will contact you through ${email} or ${contactNumber} shortly. 
      Your village: ${village}.
    `;

    document.getElementById(
      "consultationResult"
    ).innerHTML = `<h2>Consultation Result</h2><p>${consultationMessage}</p>`;
  });
