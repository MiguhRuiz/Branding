FROM node:8
WORKDIR /opt/Branding
RUN apt-get -y update && apt-get -y --no-install-recommends install git-core && apt-get install -y --no-install-recommends ca-certificates
RUN ls
RUN git clone https://github.com/MiguhRuiz/Branding.git .

RUN npm install
RUN npm run build

EXPOSE 5000
RUN npm start
