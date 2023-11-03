[
  {
    "name": "cms-docker",
    "image": "${image}",
    "portMappings": [
      {
        "containerPort": ${container_port}
      }
    ],
    "environment": [
      {
        "name": "NODE_ENV",
        "value": "production"
      },
      {
        "name": "DATABASE_CLIENT",
        "value": "${db_client}"
      },
      {
        "name": "DATABASE_HOST",
        "value": "${db_host}"
      },
      {
        "name": "DATABASE_NAME",
        "value": "${db_name}"
      },
      {
        "name": "AWS_BUCKET",
        "value": "${bucket_name}"
      },
      {
        "name": "DATABASE_USERNAME",
        "value": "${db_user}"
      },
      {
        "name": "DATABASE_SSL",
        "value": "false"
      },
      {
        "name": "DATABASE_PORT",
        "value": "5432"
      },
      {
        "name": "DATABASE_SCHEMA",
        "value": "public"
      },
      {
        "name": "AWS_REGION",
        "value": "${aws_region}"
      },
      {
        "name": "AWS_ACCESS_KEY_ID",
        "value": "${access_key_id}"
      },
      {
        "name": "AWS_ACCESS_SECRET",
        "value": "${access_key_secret}"
      }
    ],
    "secrets" : [
      {
        "name" : "DATABASE_PASSWORD",
        "valueFrom" : "${db_password_arn}"
      },
      {
        "name": "ADMIN_JWT_SECRET",
        "valueFrom": "${admin_jwt_secret_arn}"
      },
      {
        "name": "APP_KEYS",
        "valueFrom": "${app_keys}"
      },
      {
        "name": "API_TOKEN_SALT",
        "valueFrom": "${api_token_salt}"
      },
      {
        "name": "TRANSFER_TOKEN_SALT",
        "valueFrom": "${transfer_token_salt}"
      },
      {
        "name": "JWT_SECRET",
        "valueFrom": "${jwt_secret}"
      }
    ]
  }
]