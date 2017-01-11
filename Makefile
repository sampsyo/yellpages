.PHONY: client
client:
	cd $@ ; yarn
	cd $@ ; npm run build
