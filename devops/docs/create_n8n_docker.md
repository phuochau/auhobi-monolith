docker volume create bbb_n8n_data

docker run -it --rm --name n8n -p 5678:5678 -v bbb_n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n

* to connect local database server, use

HOST: host.docker.internal