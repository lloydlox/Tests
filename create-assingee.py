# This code sample uses the 'requests' library:
# http://docs.python-requests.org
import requests
from requests.auth import HTTPBasicAuth
import json

url = "https://afridao.atlassian.net/rest/api/2/issue/UEP-121/assignee"

auth = HTTPBasicAuth("lloydlox@yahoo.co.uk", "ATATT3xFfGF0F26BSb05l4W0qlSyjcNShqstsDjZOCpHz4pgzXQZ4KacyCUr8B29CDApcx9v9Vuk7ngB5G9ps2RUj9K1lClq1t-0o5XI_eM2ktVTcVWdqye0Db90f2dCseOIPldkJtdxOnqqZm1o6c9FgbZbL5e9M3HwkUVo4iNgp7PqNtHhMWg=D02EA5AB")

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
