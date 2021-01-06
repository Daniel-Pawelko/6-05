// starting a listener
document.getElementById('button-id').addEventListener('click', checkAge)
// defining output variable
const output = document.getElementById('output-id')
function checkAge () {
  // defining variables
  const date = new Date()
  const newDate = date.getDay()
  const age = parseInt(document.getElementById('input-id-age').value)
  // checking age and day of the week
  if (isNaN(age) || age < 0) {
    output.innerHTML = 'Please enter a valid positive intiger'
  } else if (newDate >= 1 && newDate <= 5) {
    if (age >= 6 && age <= 18) {
      output.innerHTML = 'Time to go to school'
    } else if (age > 18) {
      output.innerHTML = 'Time to go to work'
    } else if (age < 6) {
      output.innerHTML = 'Your a baby'
    }
    console.log('today is a weekday')
  } else if (newDate === 0 || newDate === 6) {
    output.innerHTML = 'ITS THE WEEKEND! RELAX!'
    console.log('Time to relax')
  }
}
