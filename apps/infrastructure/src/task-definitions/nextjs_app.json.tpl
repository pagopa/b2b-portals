[
  {
    "name": "nextjs-docker",
    "image": "${image}",
    "portMappings": [
      {
        "containerPort": ${container_port}
      }
    ],
    "environment": [
      {
        "name": "AWS_REGION",
        "value": "${aws_region}"
      },
      {
        "name": "DRAFT_MODE",
        "value": "true"
      },
      {
        "name": "STRAPI_API_BASE_URL",
        "value": "${strapi_api_url}"
      }
    ],
    "secrets" : [
      {
        "name": "STRAPI_API_TOKEN",
        "valueFrom": "${strapi_api_token}"
      }
    ]
  }
]