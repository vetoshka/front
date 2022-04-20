FROM ubuntu:20.04
ENV TZ=Europe/Kiev
ADD lab3 /usr/lab3
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezoneRUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt-get update && apt install sudo
RUN apt-get install -y apache2
RUN sudo apt-get update
RUN sudo apt install curl
RUN curl -s https://deb.nodesource.com/setup_16.x | sudo bash
RUN sudo apt install nodejs -y
WORKDIR /usr/lab3
RUN npm install
RUN npm install json-server
RUN apt-get clean
VOLUME ["D:\docker\ubuntu_vol"]
EXPOSE 3307
CMD npm start
CMD apachectl -D FOREGROUND