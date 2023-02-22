import requests
import json
import os

# Set the Jira URL and API endpoint
jira_url = 'https://afridao.atlassian.net/rest/api/2/issue/'

# Set your Jira API credentials
user = 'lloydlox@yahoo.co.uk'
# Get the Jira API key from the environment variable
apikey = os.environ['JIRA_API_KEY']

# Define the fields for the new issue
fields = {
    'project': {'key': 'UEP'},
    'issuetype': {'id': '10009'},
    'summary': 'READY TO DEPLOY TO PRODUCTION',
    'description': 'Creating of an issue using project keys and issue type names using the REST API',
    # 'customfield_10000': 'Custom field value' # Example custom field
}

# Construct the JSON payload
payload = {
    'fields': fields
}

# Set the request headers
headers = {
    'Content-Type': 'application/json'
}

# Authenticate with the Jira API using your credentials
auth = (user, apikey)

# Send a POST request to create the new issue
response = requests.post(jira_url, headers=headers, auth=auth, json=payload)

# Check the response status code
if response.status_code == 201:
    print('Issue created successfully')
    # Set up the API endpoint and headers
    api_url = "https://afridao.atlassian.net/rest/webhooks/1.0/webhook"
    headers = {"Content-Type": "application/json"}
    # Set up the webhook payload
    webhook_payload = {
        "name": "My Webhook",
        "url": "https://api.github.com/repos/zambezidao/urevise-frontend/dispatches",
        "event_type": ["Jira Repository Dispatch Trigger"]
    }
    # Convert the payload to a JSON string
    json_payload = json.dumps(webhook_payload)

    # Send the API request to create the webhook
    response = requests.post(api_url, data=json_payload, headers=headers, auth=("username", "password"))


    # Check the response status code
    if response.status_code == 200:
        print("Webhook created successfully")
    else:
        print("Error creating webhook. Response:", response.text)
    
else:
    print('Failed to create issue: %s' % response.text)





