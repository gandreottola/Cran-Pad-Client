#!/bin/bash

curl "http://localhost:4741/ideas/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"\
  --data '{
    "idea": {
      "name": "'"${NAME}"'",
      "category": "'"${CATEGORY}"'",
      "description": "'"${DESCRIPTION}"'",
      "date": "'"${DATE}"'"
    }
  }'

echo
