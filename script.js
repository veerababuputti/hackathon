// Smooth scrolling for the "Next" button
document
  .getElementById("nextButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById("mainApp").scrollIntoView({ behavior: "smooth" });
  });

// AI Diagnosis - Handling Symptoms Form
document
  .getElementById("diagnosisForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const symptoms = document.getElementById("symptoms").value.trim();

    // Check if the user input is valid
    if (!symptoms) {
      alert("Please enter your symptoms.");
      return;
    }

    // Simulate AI diagnosis (Replace this with your actual API call)
    const diagnosis = simulateAIDiagnosis(symptoms);

    // Display the diagnosis result
    document.getElementById("diagnosisResult").innerText = diagnosis.diagnosis;

    // Display the medicine recommendation
    document.getElementById("medicineResult").innerText = diagnosis.medicine;

    // Optionally, display a success message or further advice
    alert(
      "Diagnosis is complete. Please proceed with medicine recommendation or consultation."
    );
  });

// Medicine Recommendation - Handling Condition Form
document
  .getElementById("medicineForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const condition = document.getElementById("condition").value.trim();

    // Check if the user input is valid
    if (!condition) {
      alert("Please enter the condition.");
      return;
    }

    // Get medicine recommendation based on the condition
    const medicine = getMedicineRecommendation(condition);

    // Display the medicine recommendation
    document.getElementById("medicineResult").innerText = medicine;

    // Optionally, display a success message
    alert("Medicine recommendation is complete.");
  });

// Virtual Consultation - Handling Consultation Form
document
  .getElementById("consultationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById("firstName").value.trim();
    const contactNumber = document.getElementById("contactNumber").value.trim();
    const village = document.getElementById("village").value.trim();
    const email = document.getElementById("email").value.trim();
    const issue = document.getElementById("issue").value.trim();

    // Check if all fields are filled
    if (!firstName || !contactNumber || !village || !email || !issue) {
      alert("Please fill in all fields.");
      return;
    }

    // Simulate consultation request (Replace this with your actual API call)
    const consultationMessage = `
      Thank you, ${firstName}. 
      We have received your consultation request. 
      We will contact you at ${email} or ${contactNumber} shortly. 
      Your village: ${village}.
    `;

    // Display the consultation result
    document.getElementById("consultationResult").innerText =
      consultationMessage;

    // Optionally, display a success message
    alert("Your consultation request has been submitted.");
  });

// Mapping of diseases to recommended medicines
const diseaseMedicineMapping = {
  "common cold": "Paracetamol, Antihistamines, and Decongestants",
  flu: "Oseltamivir (Tamiflu), Paracetamol, and Ibuprofen",
  headache: "Ibuprofen, Aspirin, or Acetaminophen",
  "stomach ache": "Antacids, Pepto-Bismol, or Simethicone",
  allergies: "Antihistamines, Decongestants, or Corticosteroids",
  "sore throat": "Lozenges, Paracetamol, or Ibuprofen",
  fever: "Paracetamol or Ibuprofen",
  cough: "Dextromethorphan, Guaifenesin, or Cough suppressants",
  asthma: "Inhalers (e.g., Salbutamol), Steroids",
  "high blood pressure": "ACE inhibitors, Beta-blockers, Diuretics",
  diabetes: "Insulin, Metformin, Glibenclamide",
  cholesterol: "Statins, Fibrates",
  arthritis:
    "NSAIDs, Corticosteroids, Disease-modifying antirheumatic drugs (DMARDs)",
  depression: "Antidepressants (e.g., SSRIs, SNRIs, TCA)",
  anxiety: "Benzodiazepines, SSRIs",
  insomnia: "Melatonin, Benzodiazepine receptor agonists",
  "allergic rhinitis": "Antihistamines, Nasal Corticosteroids",
  sinusitis: "Decongestants, Nasal Steroids",
  bronchitis: "Antibiotics, Cough Syrups, Steroids",
  pneumonia: "Antibiotics, Antivirals, Steroids",
  tuberculosis: "Antitubercular drugs (e.g., Rifampin, Isoniazid)",
  "HIV/AIDS": "Antiretroviral therapy (ART)",
  hepatitis: "Antivirals, Interferon",
  gastroenteritis: "Oral Rehydration Salts (ORS), Anti-nausea drugs",
  eczema: "Topical Corticosteroids, Moisturizers",
  psoriasis: "Topical Corticosteroids, Phototherapy",
  acne: "Topical Retinoids, Benzoyl Peroxide",
  chickenpox: "Antihistamines, Calamine lotion",
  shingles: "Antiviral drugs (e.g., Acyclovir), Pain relievers",
  malaria:
    "Antimalarial drugs (e.g., Chloroquine, Artemisinin-based combination therapy)",
  tetanus: "Tetanus immunoglobulin, Antibiotics",
  meningitis: "Antibiotics, Antivirals",
  hepatitisC: "Antiviral drugs (e.g., Sofosbuvir, Ledipasvir)",
  livercirrhosis: "Liver transplant, Diuretics, Beta-blockers",
  gout: "Colchicine, NSAIDs, Allopurinol",
  "dengue fever": "Supportive care, Pain relievers (avoid NSAIDs)",
  typhoid: "Antibiotics (e.g., Ciprofloxacin)",
  "diabetic neuropathy": "Gabapentin, Pregabalin, Duloxetine",
  cancer: "Chemotherapy, Radiation, Immunotherapy",
  "skin cancer": "Surgical excision, Chemotherapy, Radiotherapy",
  // Continue the mapping as needed...
};

// Function to simulate AI diagnosis
function simulateAIDiagnosis(symptoms) {
  let diagnosis = "";
  let medicine = "";

  if (
    symptoms.toLowerCase().includes("runny nose") ||
    symptoms.toLowerCase().includes("sneezing")
  ) {
    diagnosis = "You might have a common cold.";
    medicine = diseaseMedicineMapping["common cold"];
  } else if (
    symptoms.toLowerCase().includes("fever") &&
    symptoms.toLowerCase().includes("body ache")
  ) {
    diagnosis = "You might have the flu.";
    medicine = diseaseMedicineMapping["flu"];
  } else if (symptoms.toLowerCase().includes("headache")) {
    diagnosis = "You might have a headache.";
    medicine = diseaseMedicineMapping["headache"];
  } else if (symptoms.toLowerCase().includes("stomach ache")) {
    diagnosis = "You might have a stomach ache.";
    medicine = diseaseMedicineMapping["stomach ache"];
  } else {
    diagnosis = "We recommend consulting a doctor for a precise diagnosis.";
    medicine = "Please consult a doctor for medicine recommendations.";
  }

  return { diagnosis, medicine };
}

// Function to get medicine recommendation based on condition
function getMedicineRecommendation(condition) {
  const medicine = diseaseMedicineMapping[condition.toLowerCase()];
  return medicine
    ? `For ${condition}, we recommend ${medicine}.`
    : "No specific recommendation available for this condition.";
}
