##Continuous intergration and deployment with Github, Travis, and Heroku

##Deploy to Heroku
1.  `git init`
1.  `heroku create`
1.  `git push heroku master`
1.  Set up db on heroku `heroku addons:create heroku-postgresql:hobby-dev`
1.  Update knexfile.js with production env
1.  Push to heroku `git push heroku master`
1. create migrations and seed files
1.  migrations `heroku run knex migrate:latest`
1.  seeds `heroku run knex seed:run`
1.  `heroku restart`
