from flask import Flask, request, Response
from http import HTTPStatus
import requests
import json

app = Flask(__name__)

@app.route("/", methods=["GET"])
def home_path():
    return Response("This is homepath")

@app.route("/curl", methods=["GET", "POST"])
def curl_path():
    try:
        args = request.args
        headers = {**dict(request.headers) , **json.loads(args.get("headers", "{}"))}
        method = str.upper(args.get("method", "GET")) 
        if method not in ["GET", "POST"]:
            return Response(response='{"error": "method not supported"}', status=HTTPStatus.METHOD_NOT_ALLOWED)

        if "req" not in args:
            return Response(status=HTTPStatus.NO_CONTENT)
            
        res = requests.request(method=method,url=args["req"], headers=headers, data=request.data)
        return res.text
    except Exception as e:
        return Response(json.dumps(str(e)), status=HTTPStatus.INTERNAL_SERVER_ERROR)

if __name__ == "__main__":
    app.run(host="localhost", port=3000, debug=True)