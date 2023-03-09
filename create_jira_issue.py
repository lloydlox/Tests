import requests
import json
import os

# Set the Jira URL and API endpoint
jira_url = 'https://afridao.atlassian.net/rest/api/2/issue/'

# Set your Jira API credentials
user = 'lloydlox@yahoo.co.uk'
# Get the Jira API key from the environment variable
apikey = os.environ['JIRA_API_KEY']


#  Get the Github token
github_token = os.environ.get('TOKEN_GITHUB')


# Define the fields for the new issue
fields = {
    'project': {'key': 'UEP'},
    'issuetype': {'id': '10009'},
    'summary': 'DEPLOY TO PRODUCTION',
    'description': 'Creating of an issue using project keys and issue type names using the REST API',
    
}

# Construct the JSON payload
payload = {
    'fields': fields
}

#  Set up the JSON payload for the issue creation


# Set the request headers
headers = {
    'Content-Type': 'application/json'
}

# Authenticate with the Jira API using your credentials
auth = (user, apikey)

# Send a POST request to create the new issue
response = requests.post(jira_url, headers=headers, auth=auth, json=payload)

# Parse the JSON response to extract the issue key
# issue_key = json.loads(response.text)['key']
# 
# 
# response = requests.get('https://example.com/api/endpoint')
if response.ok:
    try:
        issue_key = json.loads(response.text)['key']
        # Do something with the issue_key
    except KeyError as e:
        print(f'Error: Key "{e.args[0]}" not found in response.')
else:
    print(f'Error: HTTP status code {response.status_code}')
    print(response.text)

# Set up the JSON payload for updating the issue
update_payload = json.dumps( {
  "accountId": "5b96c682b2b15c2bdfccc9b9"
} )
# update header
update_headers = {
  "Accept": "application/json",
  "Content-Type": "application/json"
}

# Set up the API endpoint URL for updating the issue
update_url = 'https://afridao.atlassian.net/rest/api/2/issue/{}/assignee'.format(issue_key)

# Make the API request to update the issue
update_response = requests.request(
   "PUT",
   update_url,
   data=update_payload,
   headers=update_headers,
   auth=auth
)
# update_response = requests.put(update_url, auth=auth, json=update_payload)

# Print the update response status code to verify that the update was successful
print(update_response.status_code)

# Check the response status code
if response.status_code == 201:
    print('Issue created successfully')
    #  Set up the API endpoint and headers
    webhook_url = "https://afridao.atlassian.net/rest/webhooks/1.0/webhook"
    webhook_headers = {"Content-Type": "application/json"}
    # Set up the webhook payload
    webhook_payload = {
        "name": "1st Jira to Github Webhook",
        "url": "https://api.github.com/repos/zambezidao/urevise-frontend/dispatches",
        # "event_type": ["Jira Repository Dispatch Trigger"],
        "events": ["jira:issue_updated"],
        'excludeIssueDetails': False,
    # "jqlFilter": "assignee =lloyd AND status = Closed"
        'filters': {
           "issue-related-events-section": "Project = UEP AND resolution = Done AND issuekey = issue_key AND assignee = lloyd"
    #     "events": ["jira:issue_updated"],
    #     "filters": {
    #         "issue-related-events-section": {
    #             "event-types": ["issue_updated"],
    #             # "issue-related-event-properties": ["assignee", "status"],
    #             # "issue-related-event-jql": "assignee = 'lloyd' AND status = Done"
    #             }
        }    
    }
    # # Convert the payload to a JSON string
    json_payload = json.dumps(webhook_payload)

    # # Send the API request to create the webhook
    response = requests.post(webhook_url, data=json_payload, headers=webhook_headers, auth= auth)


    # Check the response status code
    if response.status_code == 200:
        print("Webhook created successfully")
    else:
        print("Error creating webhook. Response:", response.text)
    
else:
    print('Failed to create issue: %s' % response.text)


# Set up the GitHub Repository Dispatch payload
github_payload =  {
    "event_type": "Jira Repository Dispatch Trigger"
}

# Convert the GitHub payload to a JSON string
github_json_payload = json.dumps(github_payload)

# Send the API request to trigger the GitHub Repository Dispatch webhook
github_webhook_url = "https://api.github.com/repos/zambezidao/urevise-frontend/dispatches"
github_webhook_headers = {
  'Authorization': f'Bearer {github_token}',
  'Content-Type': 'text/plain'
}
github_webhook_response = requests.post(github_webhook_url, data=github_json_payload, headers=github_webhook_headers)

# Check the response status code
if github_webhook_response.status_code == 204:
    print("GitHub webhook triggered successfully")
else:
    print("Error triggering GitHub webhook. Response:", github_webhook_response.text)
