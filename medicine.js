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

// Function to get medicine recommendation based on condition
function getMedicineRecommendation(condition) {
  const medicine = diseaseMedicineMapping[condition.toLowerCase()];
  return medicine
    ? `For ${condition}, we recommend ${medicine}.`
    : "No specific recommendation available for this condition.";
}

// Handle Medicine Recommendation Form Submission
document
  .getElementById("medicineForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const condition = document.getElementById("condition").value.trim();

    if (!condition) {
      alert("Please enter the condition.");
      return;
    }

    const medicine = getMedicineRecommendation(condition);
    document.getElementById(
      "medicineResult"
    ).innerHTML = `<h2>Medicine Recommendation</h2><p>${medicine}</p>`;
  });
