[
  {
    "name": "nextjs-docker",
    "image": "${image}",
    "portMappings": [
      {
        "containerPort": ${container_port}
      }
    ],
    "logConfiguration": {
      "logDriver": "awslogs",
      "options": {
        "awslogs-group": "nextjs-ecs-task",
        "awslogs-region": "eu-south-1",
        "awslogs-stream-prefix": "nextjs"
      }
    },
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