import requests
import json

# Set up authentication credentials
auth = ('your-jira-username', 'your-jira-api-token')

# Set up the JSON payload for the issue creation
payload = {
    "fields": {
        "summary": "Example issue summary",
        "description": "Example issue description",
        "assignee": {
            "name": "John Smith"
        },
        "status": {
            "name": "In Progress"
        }
    }
}

# Set up the API endpoint URL for issue creation
url = 'https://your-jira-url/rest/api/2/issue'

# Make the API request to create the issue
response = requests.post(url, auth=auth, json=payload)

# Parse the JSON response to extract the issue key
issue_key = json.loads(response.text)['key']

# Print the issue key
print('Created issue:', issue_key)

