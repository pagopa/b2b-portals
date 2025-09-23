import boto3
import argparse
import sys

def move_s3_folder_contents(bucket_name, source_folder, dest_subfolder):
    """
    Moves all files and folders from a source folder to a destination subfolder within the same S3 bucket.

    :param bucket_name: The name of the S3 bucket.
    :param source_folder: The source folder path (e.g., 'appio').
    :param dest_subfolder: The name of the subfolder to move contents into (e.g., 'latest').
    """
    s3_client = boto3.client('s3')

    # Ensure source folder ends with a slash
    if not source_folder.endswith('/'):
        source_folder += '/'

    # Construct the full destination folder path
    destination_folder = f"{source_folder.rstrip('/')}/{dest_subfolder}/"

    print(f"Starting move operation...")
    print(f"Bucket: {bucket_name}")
    print(f"From: {source_folder}")
    print(f"To: {destination_folder}")
    print("-" * 30)

    try:
        # List all objects within the source folder
        paginator = s3_client.get_paginator('list_objects_v2')
        pages = paginator.paginate(Bucket=bucket_name, Prefix=source_folder)

        objects_to_move = []
        for page in pages:
            if "Contents" in page:
                for obj in page["Contents"]:
                    # Exclude the source folder itself if it appears as an object
                    if obj['Key'] == source_folder:
                        continue
                    # Exclude objects that are already in the destination folder
                    if not obj['Key'].startswith(destination_folder):
                         objects_to_move.append(obj)


        if not objects_to_move:
            print("No objects found in the source folder to move.")
            return

        print(f"Found {len(objects_to_move)} objects to move.")

        for obj in objects_to_move:
            old_key = obj['Key']
            # Get the relative path of the object from the source folder
            relative_path = old_key[len(source_folder):]
            new_key = f"{destination_folder}{relative_path}"

            # 1. Copy the object to the new location
            print(f"Copying '{old_key}' to '{new_key}'")
            s3_client.copy_object(
                Bucket=bucket_name,
                CopySource={'Bucket': bucket_name, 'Key': old_key},
                Key=new_key
            )

            # 2. Delete the original object
            print(f"Deleting '{old_key}'")
            s3_client.delete_object(
                Bucket=bucket_name,
                Key=old_key
            )
            print("-" * 20)


        print("\nMove operation completed successfully!")

    except Exception as e:
        print(f"An error occurred: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description="Move all contents of an S3 folder to a specified subfolder within it."
    )
    parser.add_argument('bucket_name', help="The name of the S3 bucket.")
    parser.add_argument('source_folder', help="The source folder whose contents will be moved (e.g., 'appio').")
    parser.add_argument('dest_subfolder', help="The name of the destination subfolder (e.g., 'latest').")

    args = parser.parse_args()

    move_s3_folder_contents(args.bucket_name, args.source_folder, args.dest_subfolder)
