import requests
import json
import os

# Set the Jira URL and API endpoint
jira_url = 'https://afridao.atlassian.net/rest/api/2/issue/'

# Set your Jira API credentials
user = 'webservices@zambezidao.com'
# Get the Jira API key from the environment variable
apikey = os.environ['JIRA_API_KEY']


#  Get the Github token
github_token = os.environ.get('TOKEN_GITHUB')


# Define the fields for the new issue
fields = {
    'project': {'key': 'ZDTP'},
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
  "accountId": "64124f69af3b93d8ecf203aa"
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
else:
    print('Failed to create issue: %s' % response.text)    