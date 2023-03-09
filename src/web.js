
/*document.getElementById("button1").addEventListener("click", diabeties);

function diabeties()
{
      const endpoint = 'https://20.252.33.64:443/api/v1/service/predict-diabetes/score';
      const key = 'crDbBjiIZb2mgOGcJQnT7BPFsR5R64QZ';
      
      const data = {
      Inputs: {
          input1: [
          {
              PatientID: 1882185,
              Pregnancies: 9,
              PlasmaGlucose: 104,
              DiastolicBloodPressure: 51,
              TricepsThickness: 7,
              SerumInsulin: 24,
              BMI: 27.36983156,
              DiabetesPedigree: 1.35047204699998,
              Age: 43,
          },
          ],
      },
      "GlobalParameters": {}
      };

      const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key}`
      };

      const fetchData = async () => {
      try {
          const response = await fetch(endpoint, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(data)
          });
          const result = await response.json();
          const output = result.Results.WebServiceOutput0[0];
          console.log(`PatientID: ${output.PatientID}\nDiabetesPrediction: ${output.DiabetesPrediction}\nProbability: ${output.Probability.toFixed(2)}`);
      } catch (error) {
          console.error(`The request failed with status code: ${error.status}`);
          console.error(error);
      }

      };
      
}
*/
/*const data = {
  "Inputs": {
    "input1": [
      {
        "PatientID": 1882185,
        "Pregnancies": 9,
        "PlasmaGlucose": 104,
        "DiastolicBloodPressure": 51,
        "TricepsThickness": 7,
        "SerumInsulin": 24,
        "BMI": 27.36983156,
        "DiabetesPedigree": 1.3504720469999998,
        "Age": 43
      }
    ]
  },
  "GlobalParameters": {}
};

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer crDbBjiIZb2mgOGcJQnT7BPFsR5R64QZ'
  },
  body: JSON.stringify(data)
};

fetch('http://20.252.33.64/api/v1/service/predict-diabetes/score', options)
  .then(response => {
    console.log(`statusCode: ${response.status}`);
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
*/

/*const https = require('https');

const data =  {
  "Inputs": {
    "input1": [
      {
        "PatientID": 1882185,
        "Pregnancies": 9,
        "PlasmaGlucose": 104,
        "DiastolicBloodPressure": 51,
        "TricepsThickness": 7,
        "SerumInsulin": 24,
        "BMI": 27.36983156,
        "DiabetesPedigree": 1.3504720469999998,
        "Age": 43
      }
    ]
  },
  "GlobalParameters": {}
};

const postData = JSON.stringify(data);

const options = {
  hostname: '20.252.33.64',
  port: 80,
  path: '/api/v1/service/predict-diabetes/score',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': postData.length,
    'Authorization': 'Bearer ' + crDbBjiIZb2mgOGcJQnT7BPFsR5R64QZ,
  }
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    const result = JSON.parse(data);
    const prediction = result.Results.output1[0]["Scored Labels"];
    getDiabetesResults(prediction);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(postData);
req.end();

function getDiabetesResults(prediction) {
  const diabetesResults = document.getElementById("diabetes-results");
  if (prediction === "0") {
    diabetesResults.innerHTML = "You do not have diabetes.";
  } else {
    diabetesResults.innerHTML = "You have diabetes.";
  }
}*/
