.PHONY: client server all serve

all: client server

client:
	cd $@ ; yarn
	make -C $@

server:
	cd $@ ; yarn
	cd $@ ; npm run build

serve: all
	cd server ; npm run serve
