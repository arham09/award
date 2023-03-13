
# Award Web 

Award web for member id technical test, build with expressJS, reactJS and postgreSQL

## Requeirement

please make sure Docker & docker-compose is already installed if you want it to run via docker-compose or nodejs and postgresql if you want to run it manually

## Deployment

To run this project via docker

```bash
  docker-compose up
```

To run this project via nodejs

```bash
  $run backend  

  cd api-services
  cp .env.example .env

  npm install
  npm run migrate
  npm run seeds
  npm run start:local

  $run frontend
  cd award-web
  npm install
  npm run start
```


