# This code sample uses the 'requests' library:
# http://docs.python-requests.org
import requests
from requests.auth import HTTPBasicAuth
import json

url = "https://afridao.atlassian.net/rest/api/2/issue/UEP-121/assignee"

auth = HTTPBasicAuth("lloydlox@yahoo.co.uk", "ATAAAAAAAAAAAAA")

headers = {
  "Accept": "application/json",
  "Content-Type": "application/json"
}

payload = json.dumps( {
  "accountId": "5b96c682b2b15c2bdfccc9b9"
} )

response = requests.request(
   "PUT",
   url,
   data=payload,
   headers=headers,
   auth=auth
)

# print(json.dumps(json.loads(response.text), sort_keys=True, indent=4, separators=(",", ": ")))
