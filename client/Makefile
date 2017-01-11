.PHONY: all
all: dist/bundle.js dist/react.js dist/react-dom.js dist/index.html

dist/bundle.js: $(wildcard *.tsx) $(wildcard *.ts) webpack.config.js
	npm run build

dist/react.js: ./node_modules/react/dist/react.min.js
	cp $< $@

dist/react-dom.js: ./node_modules/react-dom/dist/react-dom.min.js
	cp $< $@

dist/index.html: index.html
	cp $< $@
