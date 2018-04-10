# docker-compose-example

This is a quick example of a few services using docker-compose to showcase how easy it is to use.

# dependencies

* node/npm
* docker (or docker for mac)


# getting started

## API
* `cd api`
* `npm install`
* `./scripts/build.sh`

## UI
* `cd ui`
* `./scripts/build.sh`

## Docker compose
* make sure you're at the root of the project
* Edit the `docker-compose.yml` file and change line 6 to be the full path to the ui folder
* make sure both docker images show up when you type `docker images`
* type `docker-compose up` to spin up the docker services
* open http://localhost/index.html