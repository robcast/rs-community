# ResearchSpace Community
A repository for sharing code developed with ResearchSpace from web components, to template pages, back-end services, etc.

## TODO
* document existing app/extension mechanism
* extend current extension mechanism to support front-end components
* create extension template project with all necessary build dependencies and scripts
* create contribution guidance
* create CI pipeline for contrib packages


##WIP -- APP Mechanism###

The platform offers simple extension points to build, bundle and deploy lightweight "apps" along with the platform without the need of changing the platform binary or re-compiling the platform.
Sources of an "app" can be put under the source control and a packaged version of an "app" can be deployed as a docker container volume along with the platform.

An app is a customer or domain specific platform add-on and contain:

- Application and template pages
- Configuration: RDF namespaces, system settings, etc.
- Customizations for the look and feel, like CSS files, images, header and footer resources
- Custom backend JAVA components, like REST services and custom federation service implementations
- Custom web components to be used in templates and application pages
- Semantic resources: Queries, fields or diagrams

Building more advanced extensions requires usually access to the platform sources and include steps of compilation. The steps below describe how such simple apps can be bundled and deployed on the file system or docker eco-system.
