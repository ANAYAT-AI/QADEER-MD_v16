FROM node:lts-buster
RUN git clone https://github.com/QADEER-XD/QADEER-MD_v16.git /root/anayat-khan
WORKDIR /root/qadeer-khan
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]


