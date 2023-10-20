# Useful Strapi info

This file describes some key points about Strapi that may help when first approaching the technology or while testing.

## On launch
Upon running ```npm run dev``` will do 3 things:
1. Generate a JWT secret and place it into .env (unless it already exists);
2. Build the admin panel's UI (if it wasnt' built already);
3. Run the server at the address specified in the .env file (currently localhost:1337).

## Database
The current Strapi project utilizes a temporary SQLite file as DB.
It will be auto-generated on launch at ./.tmp/data.db

As such, data created inside the CMS will not be permanent and is meant for testing purposes only.
If you wish to share data with others, the best option is to manually copy and send the data.db file.

## Media Library
By default Strapi will save any media uploaded to the ./public/upload folder.
This means that no media will be pushed to Github.

As is the case for the database, if you wish to share media with others, the best option is to manually copy and send the /upload folder's contents.

## Content Type Builder
It's crucial to remember that adding content types and components through the use of the "Content Type Builder" will alter the project's code (specifically the /src folder).

## Updating code
After updating the project's code and before running ```npm run dev``` it is advisable to run the ```npm run build``` command to rebuild the admin panel's UI in case any of the changes affected it.