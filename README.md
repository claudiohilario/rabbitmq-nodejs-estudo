# RabbitMQ nodejs estudo
* https://www.rabbitmq.com/getstarted.html

## Pull da imagem e subir container

```sh
docker pull rabbitmq
docker run -d --hostname my-rabbit --name some-rabbit-mgt -p 8090:15672 -p 5672:5672 rabbitmq:3-management
```

## Dados de acesso via web
* **Link:** http://localhost:8090
* **Username:** guest
* **Password:** guest
