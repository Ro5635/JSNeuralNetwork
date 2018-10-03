# A Neural Network Play Around

This is a play around with creating a neural network, this is a simple one that deduces if a point is above or below a straight line in the form y=mx+c.
It is structured as a Node Express API which produces a SVG with the runs results, this is made available on web interface via the nginx docker service.

Next steps are to make this work with curves, which I believe will mean making the neural network multi-layered. Also to switch to Typescript and to replace the web UI with Angular.

This project is just me playing around with machine learning, I have really no idea what I am doing.

The web interface is made available on port 8085 as per the docker-compose environment.


webinterface: {localhost|dockerMachine IP}:8085 (eg http://localhost:8085)
Neural Net API: {localhost|dockerMachine IP}:5635 (eg http://localhost:5635)

You can specify the equasion of the line that you want the network to train against, it will then display a visual showing the use
of the generated network.

Inspired by the excellent tutorial series by Mattias Johansson of [Fun Fun Function Youtube Channel]: https://youtu.be/o98qlvrcqiU
