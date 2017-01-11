.PHONY: client server all

all: client server

client:
	cd $@ ; yarn
	cd $@ ; npm run build

server:
	cd $@ ; yarn
	cd $@ ; npm run build
