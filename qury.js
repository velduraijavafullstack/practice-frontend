// // Make sure this code is executed after the DOM has loaded
// document.addEventListener('DOMContentLoaded', function() {
//   // Use querySelector to select the div with id 'referenceData'
//   const referenceDataDiv = document.querySelector('#referenceData');

//   // Use querySelector on the referenceDataDiv to select the p tag inside it
//   const paragraphContent = referenceDataDiv.querySelector('p').textContent;

//   // Now you can do something with the content of the p tag
//   console.log(paragraphContent);
// });
function handler(){
  let data=document.getElementById('referenceData')
  console.log(data)
}
