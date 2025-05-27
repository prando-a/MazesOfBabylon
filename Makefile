all:
	live-server --port=8000 --open=.

install:
	npm install -g live-server
	$(MAKE) all

# Makefile for local web server setup
#all:
#	ws
#install:
#	npm -g install local-web-server
