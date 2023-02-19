import requests
import json
import os

# Set the Jira URL and API endpoint
url = 'https://afridao.atlassian.net/rest/api/2/issue/'

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
response = requests.post(url, headers=headers, auth=auth, json=payload)

# Check the response status code
if response.status_code == 201:
    print('Issue created successfully')
else:
    print('Failed to create issue: %s' % response.text)
