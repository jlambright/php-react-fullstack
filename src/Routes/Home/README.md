# Coding Exercise

Hello, Josh Lambright!

Below is a coding exercise that we believe will allow you to show off your amazing development skills!

We’re super excited to see what you come up with!

We expect it to take a few hours. We would ask that you make commits to a git repository every so often so that we can see how long it took. Here is what you need to do

1. Clone this repository locally and update the first line of this README with your name (so that it reads "Hello, YOUR NAME!"). Commit this change. This will serve as a starting timestamp
2. Complete the exercise below
3. Commit progress regularly
4. When you're done, upload your code to a personal GitHub account and email us the link.

## The Exercise

This is a simplified version of a piece of functionality we have in Breeze ChMS. Many of the churches we work with import their data from an existing system or a homegrown spreadsheet into Breeze. We provide tools for bulk importing of people, contribution, group and attendance records.
In this problem we're only going to consider two data types: People and Groups. A Person can be part of one Group.

For the People data type, each person can have a state of either 'active' or ‘archived’. The `id` for each data type is globally unique. As a result, if the id does not exist, create a new record, otherwise, update the existing record.

People columns:
  `id, first_name, last_name, email_address, status`

Group columns:
  `id, group_name`, `status`

Here’s an example:

```
id, first_name, last_name, email_address, status
1, "Alex", "Ortiz-Rosado", "alex@breezechms.com", "active"
2, "Jon", "VerLee", "jon@breezechms.com", "archived"
3, "Fred", "Flintstone", "fredflintstone@example.com", "active"
4, "Marie", "Bourne", "mbourne@example.com", "active"
5, "Wilma", "Flintstone", "wilmaflinstone@example.com", "active"
```

```
id, group_name, status
1, "Volunteers", "active"
2, "Elders", "active"
3, "Bible Study", "archived"
```

### Setup Help

*Help getting the code up and running:*

**Prerequisites**
- Docker & Docker Compose

- Clone the repository
  - `git clone git@github.com:BreezeChMS/coding-exercise-api-react.git && cd coding-exercise-api-react`
- Setup Laravel
  - `cp .env.example .env`
  - Edit .env with your mysql/mariadb connection information. 
- Build and Launch Docker Compose Environment (Based off [aschmelyun/docker-compose-laravel](https://github.com/aschmelyun/docker-compose-laravel)).
  - `docker-compose up -d`
- Setup Composer and Artisan
  - The following steps connect to local mysql database using root credentials
  - `docker-compose run --rm composer update`
  - `docker-compose run --rm artisan key:generate`
  - `docker-compose run --rm artisan migrate`
  - `docker-compose run --rm artisan db:seed`
- Once you see that the `nginx`, `node`, `php`, and `mariadb` containers are up and running,
 you should be good to go.
