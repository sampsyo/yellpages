.PHONY: all
all: dist/bundle.js dist/react.js dist/react-dom.js dist/index.html

dist/bundle.js: $(wildcard *.ts) webpack.config.js
	npm run build

dist/react.js: ./node_modules/react/dist/react.js
	cp $< $@

dist/react-dom.js: ./node_modules/react/dist/react.js
	cp $< $@

dist/index.html: index.html
	cp $< $@
