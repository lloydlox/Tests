# import requests
# import json

# url = "https://afridao.atlassian.net/rest/api/2/automation/rule"
# username = "lloydlox@yahoo.co.uk"
# password = "Nokutenda10"

# data = {
#     "name": "My Automation Rule",
#     "projectKey": "UEP",
#     "event": "issue_created",
#     "status": "To Do",
#     "condition": {
#         "conditionType": "issue_type",
#         "params": {
#             "issueTypes": ["Bug"]
#         }
#     },
#     "action": {
#         "actionType": "transition_issue",
#         "params": {
#             "transitionName": "Start Progress"
#         }
#     }
# }

# json_data = json.dumps(data)

# response = requests.post(url, auth=(username, password), data=json_data, headers={"Content-Type": "application/json"})

# if response.status_code == 201:
#     print("Automation rule created successfully.")
# else:
#     print("Error creating automation rule.")

# ppppjjjjjjjjpppppppppppppppppppppppppppppppppppp

# import requests
# import json

# url = "https://afridao.atlassian.net/rest/api/2/automation/rule"
# api_token = "xxxxxxxxxxx"

# data = {
#     "name": "My Automation Rule",
#     "projectKey": "UEP",
#     "event": "issue_created",
#     "status": "To Do",
#     # "condition": {
#     #     "conditionType": "issue_type",
#     #     "params": {
#     #         "issueTypes": ["Bug"]
#     #     }
#     # },
#     # "action": {
#     #     "actionType": "transition_issue",
#     #     "params": {
#     #         "transitionName": "Start Progress"
#     #     }
#     # }
# }

# json_data = json.dumps(data)

# response = requests.post(url, headers={"Authorization": "Bearer " + api_token, "Content-Type": "application/json"}, data=json_data)

# if response.status_code == 201:
#     print("Automation rule created successfully.")
# else:
#     print("Error creating automation rule.")

# hhhhhhhhhhhhhhaahhhahahhahahhahahhahahahahahahhahahahhahahahhahahahahahahhhahahahahahahahahhahahahahahahahahahahhahahahahahahahhahahahahahhahahhahahhahahahahahahah

# from jira import JIRA
# import requests

# # Create a JIRA instance using your JIRA server URL and API token
# jira = JIRA(server='https://afridao.atlassian.net/rest/api/2/automation/rule', basic_auth=('lloydlox@yahoo.co.uk', "xxxxxxx"
# # Define the payload and headers for the API request
# url = "https://api.github.com/repos/zambezidao/urevise-frontend/dispatches"
# payload = "{\n    \"event_type\": \"Jira Repository Dispatch Trigger\"\n}"
# headers = {
#   'Authorization': 'Bearer gggggggggggggggg',
#   'Content-Type': 'text/plain'
# }

# # Make the API request
# response = requests.post(url, headers=headers, data=payload)

# # Create the global automation rule in Jira to trigger the API request
# jira.add_global_rule(name='GitHub Dispatch', event_type='Issue created', actions=[{'action': 'code', 'code': f'exec({response.text})'}])
# kxkkxkxkxkxkxkxkxkxkxkxkxkxkxkxkxkxkkxkxkxkkxkkxkxkxkkkkxkxkxkxkxkkxkxkxkxkkxkxkxkxkxkxkkxxkkxkxkkxkxkxkxkxkxkxkkxkkxkkxkxkxkxkxkkxkxkkxkxkxkxkxkxkxkxkxkkkxkkxkxkxkxxkxkxk

import requests
import json

url = "https://afridao.atlassian.net/rest/automation/1.0/rule"
api_token = "xxxxxx"


data = {
    "name": "My Rule",
    "event": "issue_created",
    "action": {
        "action": "none"
    }
}
# data = {
#     "name": "My Rule",
#     "description": "This is my rule",
#     "projectKey": "UEP",
    # "event": "issue_created",
    # "status": "To Do",
    # "issueType": "Task",
    # "action": {
    #     "action": "issue_transition",
    #     "params": {
    #         "transition": "Close Issue"
    #     }
    # }


json_data = json.dumps(data)

response = requests.post(url, headers={"Authorization": "Bearer " + api_token, "Content-Type": "application/json"}, data=json_data)

if response.status_code == 201:
    print("Automation rule created successfully.")
else:
    print("Error creating automation rule.")
