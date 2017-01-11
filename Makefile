.PHONY: client server all

all: client server

client:
	make -C client

server:
	cd $@ ; yarn
	cd $@ ; npm run build
