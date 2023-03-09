import requests
import json

# Set up authentication credentials
auth = ('lloydlox@yahoo.co.uk', 'AAAAAAAAAAAAAAAA')

# Set up the JQL query string
jql = 'assignee = "lloyd" AND status = "DONE"'

# Set up the API endpoint URL
url = 'https://afridao.atlassian.net/rest/api/2/search?jql=' + jql

# Make the API request and retrieve the JSON response
response = requests.get(url, auth=auth)
issues = json.loads(response.text)['issues']

# Print information about each issue in the response
for issue in issues:
    print('Issue key:', issue['key'])
    print('Issue summary:', issue['fields']['summary'])
    print('Issue status:', issue['fields']['status']['name'])
    # print('Issue assignee:', issue['fields']['assignee']['name'])
    print('---')
