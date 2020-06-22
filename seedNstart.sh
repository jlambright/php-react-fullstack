#!/bin/bash

docker-compose exec app php artisan db:seed && yarn start
