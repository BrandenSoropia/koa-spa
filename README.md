# koa-spa
A Sequelize backed Koa server with a React Redux single page application boilerplate. With Docker.

Work in Progress - Coming Soon :) (will be tagged once functional)

Some workflows are inspired by mezod's [koa redux boilerplate](https://github.com/mezod/boilerplate-koa-redux-react) however koa-spa is a full-stack boilerplate that includes an API layer, an ORM layer, connections to redux, continuous integration and more...

## Environment Preparation

Copy `env.template` into `env` and populate as necessary. Then `source env`.

## Docker Workflow

To run development workflow:

```bash
cd server
npm install
docker-compose build
docker-compose up
```

To run production workflow (executed by drone on tests):

```bash
cd server
docker-compose -f docker-compose-prod.yml build
docker-compose -f docker-compose-prod.yml up
```

As well, if you are not using Docker Beta, you will need to change the `command`
for the `server` `service` in `docker-compose.yml` to `nodemon --legacy-watch
app.js`.
