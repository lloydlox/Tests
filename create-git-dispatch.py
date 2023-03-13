# import requests
# import json

# url = "https://api.github.com/repos/zambezidao/urevise-frontend/dispatches/"

# payload = json.dumps({
#   "event_type": "Jira Repository Dispatch Trigger"
# })
# headers = {
#   'Authorization': 'Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
#   'Content-Type': 'application/json'
# }

# response = requests.request("POST", url, headers=headers, data=payload)

# print(response.text)
# #  Check the response status code
# if response.status_code == 204:
#     print("GitHub webhook triggered successfully")
# else:
#     print("Error triggering GitHub webhook. Response:", response.text)


import requests
import json

url = "https://api.github.com/repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"

payload = {
    "ref": "topic-branch",
    # "inputs": {
    #     "name": "Mona the Octocat",
    #     "home": "San Francisco, CA"
    # }
}

headers = {
    "Authorization": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "Accept": "application/vnd.github.v3+json",
    "X-GitHub-Api-Version": "2022-11-28"
}

url = url.format(owner="zambezidao", repo="urevise-frontend", workflow_id="deploy-to-digitalocean.yml")
response = requests.post(url, json=payload, headers=headers)

if response.status_code == 204:
    print("Workflow dispatch triggered successfully")
else:
    print("Error triggering workflow dispatch. Response:", response.text)
