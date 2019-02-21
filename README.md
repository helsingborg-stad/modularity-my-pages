# Modularity My Pages

My pages React frontend plugin. Built with react, typescript and webpack.

## Development

The project uses webpack to both serve hot reload and automatically export files to the /dist folder on save.
This will keep the wordpress environment updated with the latest changes and make development easier.

To get started follow these steps:
1. Clone repository to the wordpress plugins folder and follow the normal steps for adding a modularity plugin to a page.
2. Install dependencies with npm install
3. Run project with npm run build
4. Browse to the wordpress page where the plugin is activated.

There is no way to run the plugin as a standalone right now.

The project has an .env-file to manage environment variables. For this you need the <a href="https://www.npmjs.com/package/dotenv">dotenv-plugin</a>.

The variables you need to set for the project is:
- HOST (The url for you wordpress-installation)
- API_URL (The url for the my-pages-api)

## Api endpoint to get field configuration

rest_url('ModularityMyPages/v1/GetFieldConfiguration/{{MODULE_ID}}'); 

## Payment 

The payment step of this project is done with Paynova. The official docs can be found at http://developers.paynova.com/docs.
This solution uses their hosted checkout to send the user to their payment site and then redirects the user back to us.

Testdata for simulating payments on their payment site can be found at http://developers.paynova.com/docs/testing.

# My-pages-api

This is the api for the Modularity-my-pages project. It handles all server side logic and integrations with other apis to connect with Bankid, Navet and Paynova. 

## Development

This api is built on Node.js and Express and is created with this <a href="https://github.com/helsingborg-stad/labs-node-js-boilerplate">boilerplate</a>. For instructions on how to run the project and other tech-related information please visit the link.

The specific .env-parameters required for this project are:


AUTHSECRET (jwt secret for creating tokens)

NAVETBANKIDAPIURL (url for the navet-bankid api)
PAYMENTAPIURL (url for the payment api)

DBHOST (host for the database)
DBPORT (port for the database)
DBUSER (username for connecting)
DBPASSWORD (password for connecting)
DBNAME (name of the database)
