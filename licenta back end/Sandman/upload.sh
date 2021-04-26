docker build -f WebController/Dockerfile -t sandman-herokuu .
docker tag sandman-herokuu registry.heroku.com/sandman-heroku/web
docker push registry.heroku.com/sandman-heroku/web
heroku container:release web --app sandman-heroku