# **S3 Folder Content Mover**

This Python script is a command-line utility for moving all files and sub-folders from a specified folder within an AWS S3 bucket to a new subfolder inside that same parent folder.

For example, you can use this script to move all contents from s3://my-bucket/data/ into s3://my-bucket/data/archive/.

The script performs a "move" operation by recursively copying each object to the new destination and then deleting the original object.

## **Prerequisites**

Before you can run this script, you will need the following:

1. **Python 3:** Ensure you have Python 3 installed on your system.  
2. **Boto3 Library:** This is the official AWS SDK for Python. You can install it using pip:  
   `pip install boto3`

3. **AWS Credentials:** The script needs AWS credentials to interact with your S3 bucket. The recommended way to configure them is by using the AWS CLI:  
   aws configure

   This will prompt you to enter your AWS Access Key ID, Secret Access Key, default region, and output format. The script will automatically use these credentials.

## **Required IAM Permissions**

The IAM user or role executing this script must have the following permissions on the specified S3 bucket:

```
* s3:ListBucket  
* s3:GetObject  
* s3:PutObject  
* s3:DeleteObject
```

Here is an example IAM policy snippet:

```json
{  
    "Version": "2012-10-17",  
    "Statement": \[  
        {  
            "Effect": "Allow",  
            "Action": \[  
                "s3:ListBucket"  
            \],  
            "Resource": \[  
                "arn:aws:s3:::\<YOUR\_BUCKET\_NAME\>"  
            \]  
        },  
        {  
            "Effect": "Allow",  
            "Action": \[  
                "s3:GetObject",  
                "s3:PutObject",  
                "s3:DeleteObject"  
            \],  
            "Resource": \[  
                "arn:aws:s3:::\<YOUR\_BUCKET\_NAME\>/\*"  
            \]  
        }  
    \]  
}
```

*Remember to replace \<YOUR\_BUCKET\_NAME\> with the actual name of your bucket.*

## **How to Use**

Run the script from your terminal and provide the required command-line arguments.

### **Syntax**

```bash
python s3_folder_mover.py <bucket_name> <source_folder> <dest_subfolder>
```

### **Arguments**

* bucket\_name: The name of the S3 bucket (e.g., my-production-bucket).  
* source\_folder: The source folder whose contents you want to move (e.g., appio).  
* dest\_subfolder: The name of the new subfolder where the contents will be moved (e.g., latest). This folder will be created inside the source\_folder.

### **Example**

Let's say you have the following structure in your bucket my-app-data:

```bash
s3://my-app-data/raw_logs/log_file_1.txt  
s3://my-app-data/raw_logs/log_file_2.txt  
s3://my-app-data/raw_logs/processed/
```

To move log_file_1.txt, log_file_2.txt, and the processed folder into a new folder called archive, you would run:

```bash
python s3_folder_mover.py my-app-data raw_logs archive
```

After the script completes, the new structure will be:

```bash
s3://my-app-data/raw_logs/archive/log_file_1.txt  
s3://my-app-data/raw_logs/archive/log_file_2.txt  
s3://my-app-data/raw_logs/archive/processed/  
```