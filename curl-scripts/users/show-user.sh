#!/bin/bash

curl --include "http://localhost:4741/users/${ID}" \
    --request GET \
    --header "Authorization: Token token=$TOKEN"

echo
