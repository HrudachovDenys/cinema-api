## To start the api do the following

### `docker-compose build`
### `docker-compose up api`

## After a successful start, you need to initialize the database with test data. To do this, do the following

### `docker-compose exec -it <CONTAINER_ID> sh`
### `npm run seed`

## CONTAINER_ID can be obtained with the following command

### `docker ps`