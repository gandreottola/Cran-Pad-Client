#!/bin/bash

curl "http://localhost:4741/ideas" \
  --include \
  --request POST \
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
