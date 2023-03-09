import requests
import json
import os

# Set the Jira URL and API endpoint
jira_url = 'https://afridao.atlassian.net/rest/api/2/issue/'

# Set your Jira API credentials
user = 'lloydlox@yahoo.co.uk'
# Get the Jira API key from the environment variable
# apikey = os.environ['JIRA_API_KEY']
apikey= "xxxxxxxxxxxxxxxx"
issue_key= "UEP-123"
# # Define the fields for the new issue
# fields = {
#     'project': {'key': 'UEP'},
#     'issuetype': {'id': '10009'},
#     'summary': 'DEPLOY TO PRODUCTION',
#     'description': 'Creating of an issue using project keys and issue type names using the REST API',
#     # 'customfield_10000': 'Custom field value' # Example custom field
# }

# # Construct the JSON payload
# payload = {
#     'fields': fields
# }

# # Set the request headers
# headers = {
#     'Content-Type': 'application/json'
# }

# # Authenticate with the Jira API using your credentials
# auth = (user, apikey)

# # Send a POST request to create the new issue
# response = requests.post(jira_url, headers=headers, auth=auth, json=payload)

# # Check the response status code
# if response.status_code == 201:
#     print('Issue created successfully')
#     # Set up the API endpoint and headers
webhook_url = "https://afridao.atlassian.net/rest/webhooks/1.0/webhook"
webhook_headers = {"Content-Type": "application/json"}
    # Set up the webhook payload
webhook_payload = {
    "name": "First Filtered Jira to Github Webhook ",
    "url": "https://api.github.com/repos/zambezidao/urevise-frontend/dispatches",
    # "event_type": ["Jira Repository Dispatch Trigger"],
    "events": ["jira:issue_updated"],
    'excludeIssueDetails': False,
    # "jqlFilter": "assignee =lloyd AND status = Closed"
    'filters': {
        "issue-related-events-section": "Project = UEP AND resolution = Done AND issuekey = issue_key AND assignee = lloyd"
        # 'issue-related-events-section': True,
        # 'issue-related-events': {
        #     'event-types': ['issue_updated'],
        #     'issue-type-ids': ['10009'],
        #     'project-ids': ['UEP'],
        #     'issue-key': issue_key
        # }
    }

    # "filters": {
    #     "issue-related-events-section": {
    #         # "event-types": ["issue_updated"],
    #         "issue-related-event-properties": ["assignee", "status"],
    #         "issue-related-event-jql": "assignee = 'lloyd' AND status = Done"
    #     }
    # }
}
    # Convert the payload to a JSON string
json_payload = json.dumps(webhook_payload)

    # Send the API request to create the webhook
response = requests.post(webhook_url, data=json_payload, headers=webhook_headers, auth=("lloydlox@yahoo.co.uk", "mmmmmmm"))


    # Check the response status code
if response.status_code == 200:
    print("Webhook created successfully")
else:
        print("Error creating webhook. Response:", response.text)
    
# Set up the GitHub Repository Dispatch payload
github_payload =  {
    "event_type": "Jira Repository Dispatch Trigger"
}

# Convert the GitHub payload to a JSON string
github_json_payload = json.dumps(github_payload)

# Send the API request to trigger the GitHub Repository Dispatch webhook
github_webhook_url = "https://api.github.com/repos/zambezidao/urevise-frontend/dispatches"
github_webhook_headers = {
  'Authorization': 'Bearer mmmmmm',
  'Content-Type': 'text/plain'
}
github_webhook_response = requests.post(github_webhook_url, data=github_json_payload, headers=github_webhook_headers)

# Check the response status code
if github_webhook_response.status_code == 204:
    print("GitHub webhook triggered successfully")
else:
    print("Error triggering GitHub webhook. Response:", github_webhook_response.text)





