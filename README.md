# Modularity My Pages

My pages React frontend plugin. Built with react, typescript and webpack.

## Development

The project uses webpack to both serve hot reload and automatically export files to the /dist folder on save.
This will keep the wordpress environment updated with the latest changes and make development easier.

To get started follow these steps:
1. Clone repository to the wordpress plugins folder and follow the normal steps for adding a modularity plugin to a page.
2. Install dependencies with npm install
3. Add certificate files (.cert / .key) to source/js/assets/certificates
4. Run project with npm run build
5. Browse to the wordpress page where the plugin is activated.

There is no way to run the plugin as a standalone right now.

## Api endpoint to get field configuration

rest_url('ModularityMyPages/v1/GetFieldConfiguration/{{MODULE_ID}}'); 
