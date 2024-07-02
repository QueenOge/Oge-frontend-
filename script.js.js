const bioForm = document.getElementById('bio-form');
bioForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(bioForm);
  const bioData = {};
  formData.forEach((value, key) => {
    bioData[key] = value;
  });
  
  // Send the bio data to your backend API or do something else with it
  console.log(bioData);
});