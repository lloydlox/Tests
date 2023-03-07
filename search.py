import requests
import json

# Set up authentication credentials
auth = ('lloydlox@yahoo.co.uk', 'ATATT3xFfGF0F26BSb05l4W0qlSyjcNShqstsDjZOCpHz4pgzXQZ4KacyCUr8B29CDApcx9v9Vuk7ngB5G9ps2RUj9K1lClq1t-0o5XI_eM2ktVTcVWdqye0Db90f2dCseOIPldkJtdxOnqqZm1o6c9FgbZbL5e9M3HwkUVo4iNgp7PqNtHhMWg=D02EA5AB')

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
