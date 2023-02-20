import urllib.request
import json
import os
import ssl

def allowSelfSignedHttps(allowed):
    # bypass the server certificate verification on client side
    if allowed and not os.environ.get('PYTHONHTTPSVERIFY', '') and getattr(ssl, '_create_unverified_context', None):
        ssl._create_default_https_context = ssl._create_unverified_context

allowSelfSignedHttps(True) # this line is needed if you use self-signed certificate in your scoring service.

# Request data goes here
# The example below assumes JSON formatting which may be updated
# depending on the format your endpoint expects.
# More information can be found here:
# https://docs.microsoft.com/azure/machine-learning/how-to-deploy-advanced-entry-script
data =  {
    "Inputs": {
        "input1": [
              {
                  "PatientID": 1228510,
               "Pregnancies": 4,
               "PlasmaGlucose": 115,
               "DiastolicBloodPressure": 50,
               "TricepsThickness": 29,
               "SerumInsulin": 243,
               "BMI": 34.69215364,
               "DiabetesPedigree": 0.7411599259999999,
               "Age": 59
               }
               ]
               },
         "GlobalParameters": {}
         }

body = str.encode(json.dumps(data))

endpoint = 'http://20.252.33.64:80/api/v1/service/predict-diabetes/score'
key = 'crDbBjiIZb2mgOGcJQnT7BPFsR5R64QZ' # Replace this with the API key for the web service

# The azureml-model-deployment header will force the request to go to a specific deployment.
# Remove this header to have the request observe the endpoint traffic rules
headers = {'Content-Type':'application/json', 'Authorization':('Bearer '+ key)}

req = urllib.request.Request(endpoint, body, headers)

try:
  response = urllib.request.urlopen(req)

  result = response.read()
  json_result = json.loads(result)
  output = json_result["Results"]["WebServiceOutput0"][0]
  print('PatientID: {}\nDiabetesPrediction: {}\nProbability: {:.2f}'.format(output["PatientID"],
                                                                    output["DiabetesPrediction"],
                                                                    output["Probability"]))

  #print(result)
except urllib.error.HTTPError as error:
  print("The request failed with status code: " + str(error.code))

  # Print the headers - they include the requert ID and the timestamp, which are useful for debugging the failure
  print(error.info())
  print(error.read().decode("utf8", 'ignore'))
