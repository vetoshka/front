FROM ubuntu:20.04
ENV TZ=Europe/Kiev
ADD lab3 /usr/lab3
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezoneRUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt-get update && apt install sudo
RUN apt-get install -y apache2
RUN sudo apt-get update
RUN sudo apt install -y nodejs
RUN sudo apt install -y npm
RUN cd /usr/lab3/src
RUN npm install
RUN npm install json-server
RUN apt-get clean
VOLUME ["D:\docker\ubuntu_vol"]
EXPOSE 3307
CMD apachectl -D FOREGROUND
CMD ["npm", "start"]