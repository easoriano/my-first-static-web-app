from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    # Your Python code here
    endpoint = 'http://20.252.33.64:80/api/v1/service/predict-diabetes/score'
    key = 'crDbBjiIZb2mgOGcJQnT7BPFsR5R64QZ'

    import urllib.request
    import json
    import os

    data =  {
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
            "GlobalParameters": {
                
            }
    }
    body = str.encode(json.dumps(data))


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
    except urllib.error.HTTPError as error:
        print("The request failed with status code: " + str(error.code))
        # Print the headers - they include the requert ID and the timestamp, which are useful for debugging the failure
        print(error.info())
        print(error.read().decode("utf8", 'ignore'))
    return render_template("DiabetesTest2_JS_M.html", output=output)

if __name__ == "__main__":
    app.run()
