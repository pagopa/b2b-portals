[
  {
    "name": "cds-website-cms",
    "image": "${image}",
    "portMappings": [
      {
        "containerPort": 1337
      }
    ],
    "environmentFiles": [
                {    
                    "value": "arn:aws:s3:::${bucket_name}/.env",
                    "type": "s3"
                }
            ],
    "environment": [
      {
        "name": "NODE_ENV",
        "value": "production"
      },
      {
        "name": "DATABASE_HOST",
        "value": "${db_host}"
      },
      {
        "name": "BUCKET_NAME",
        "value": "${bucket_name}"
      },
      {
        "name": "DATABASE_USERNAME",
        "value": "${db_user}"
      }
    ],
    "secrets" : [
      {
        "name" : "DATABASE_PASSWORD",
        "valueFrom" : "${db_password_arn}"
      },
      {
        "name" : "GITHUB_TOKEN",
        "valueFrom" : "${github_token_arn}"
      },
      {
        "name": "ADMIN_JWT_SECRET",
        "valueFrom": "${admin_jwt_secret_arn}"
      }
    ]
  }
]