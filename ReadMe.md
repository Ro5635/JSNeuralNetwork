# A Neural Network Play Around

This is a play around with creating a neural network, this is a simple one that deduces if a point is above the line y=x or below it.
It is structured as a Node Express API which supplied a SVG with the runs results, this is made avalible on web interface via the nginx docker service.


The web interface is made avalible on port 8085 as per the docker-compose environment.

webinterface: {localhost|dockerMachine IP}:8085 (eg http://localhost:8085)
Neural Net API: {localhost|dockerMachine IP}:5635 (eg http://localhost:5635)


Inspired by the excellent tutorial series by Mattias Johansson of [Fun Fun Function Youtube Channel](https://youtu.be/o98qlvrcqiU)
