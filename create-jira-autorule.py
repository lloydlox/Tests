import requests
import json
import logging

# Enable debug logging for the requests library
logging.basicConfig(level=logging.DEBUG)

# Your script code here...

# Set the Jira API endpoint URL and credentials
jira_url = "https://afridao.atlassian.net"
api_token = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
headers = {
    "Authorization": f"Bearer {api_token}",
    "Content-Type": "application/json"
}

# Define the automation rule payload
payload = {
    "name": "My Automation Rule",
    "description": "This is a sample automation rule",
    "event": {
        "name": "issue_updated"
    },
    # "conditions": [
    #     {
    #         "condition": "status_changed",
    #         "params": {
    #             "from": "To Do",
    #             "to": "In Progress"
    #         }
    #     }
    # ],
    # "actions": [
    #     {
    #         "action": "comment",
    #         "params": {
    #             "comment": "This issue has been moved to In Progress"
    #         }
    #     }
    # ]
}

# Send the POST request to create the automation rule
url = "https://afridao.atlassian.net/rest/api/2/automation/rule"
# url = f"{jira_url}/rest/automation/1.0/rule"
response = requests.post(url, headers=headers, data=json.dumps(payload))

# Check the response status code and print the result
if response.status_code == 201:
    print("Automation rule created successfully!")
else:
    print("Error creating automation rule:", response.content)
