FROM fusuf/whatsasena:latest

RUN git clone https://github.com/NitrossRoboto/Bot /root/Bot
WORKDIR /root/Bot/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
