/*
window.onload = function(){
  function diabeties()
  {
   const endpoint = 'http://20.252.33.64:80/api/v1/service/predict-diabetes/score';
   const key = 'crDbBjiIZb2mgOGcJQnT7BPFsR5R64QZ';

          const data = {
          "Inputs": {
              "input1": [
              {
                  'PatientID': 1882185,
                  'Pregnancies': 9,
                  'PlasmaGlucose': 104,
                  'DiastolicBloodPressure': 51,
                  'TricepsThickness': 7,
                  'SerumInsulin': 24,
                  'BMI': 27.36983156,
                  'DiabetesPedigree': 1.35047204699998,
                  'Age': 43,
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

          document.getElementById("button2").addEventListener("click", fetchData);
  }
}
*/
