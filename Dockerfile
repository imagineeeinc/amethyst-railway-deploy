FROM node:16

WORKDIR /

COPY index.js ./

RUN apt install gcc

CMD ["node", "index.js"]
