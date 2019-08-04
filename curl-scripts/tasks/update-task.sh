#!/bin/bash

curl "http://localhost:4741/tasks/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"\
  --data '{
    "task": {
      "start_date": "'"${STARTDATE}"'",
      "end_date": "'"${ENDDATE}"'",
      "priority": "'"${PRIORITY}"'",
      "description": "'"${DESCRIPTION}"'"
    }
  }'

echo
