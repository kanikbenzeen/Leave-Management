
let sick, casual, paid;

function increasesick() {
    var value = parseInt(document.getElementById('sick').value, 10 || 0);
    value = isNaN(value) ? 0 : value;
    value > 6 ? value = 6 : '';
    value++;
    document.getElementById('sick').value = value;

  }
  
  function decreasesick() {
    var value = parseInt(document.getElementById('sick').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('sick').value = value;
    sick = value
  }

  function increasecasual() {
    var value = parseInt(document.getElementById('casual').value, 10);
    value = isNaN(value) ? 0 : value;
    value > 6 ? value = 6 : '';
    value++;
    document.getElementById('casual').value = value;
    casual = value
  }
  
  function decreasecasual() {
    var value = parseInt(document.getElementById('casual').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('casual').value = value;
    casual = value
  }
  
  function increasepaid() {
    var value = parseInt(document.getElementById('paid').value, 10);
    value = isNaN(value) ? 0 : value;
    value > 14 ? value = 14 : '';
    value++;
    document.getElementById('paid').value = value;
    paid = value
  }
  
  function decreasepaid() {
    var value = parseInt(document.getElementById('paid').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('paid').value = value;
    paid = value
  }

  function submit(){
    var sick = parseInt(document.getElementById('sick').value)
    var paid = parseInt(document.getElementById('paid').value)
    var casual = parseInt(document.getElementById('casual').value)
    var reqBody = {
      sick: sick,
      paid: paid,
      casual: casual
    }
    // console.log(reqBody);
    fetch('http://localhost:8000/api', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(reqBody),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  