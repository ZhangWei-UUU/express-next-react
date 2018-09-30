FROM node:10.4.1
RUN mkdir /mainApp
WORKDIR /mainApp
COPY . /mainApp
RUN yarn
CMD [ "yarn", "start" ]