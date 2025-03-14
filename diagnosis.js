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

// Handle Disease Diagnosis Form Submission
document
  .getElementById("diagnosisForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const symptoms = document.getElementById("symptoms").value.trim();

    if (!symptoms) {
      alert("Please enter your symptoms.");
      return;
    }

    const diagnosis = simulateAIDiagnosis(symptoms);
    document.getElementById(
      "diagnosisResult"
    ).innerHTML = `<h2>Diagnosis Result</h2><p>${diagnosis.diagnosis}</p>`;
    document.getElementById(
      "medicineResult"
    ).innerHTML = `<h2>Medicine Recommendation</h2><p>${diagnosis.medicine}</p>`;
  });
