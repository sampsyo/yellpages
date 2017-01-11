.PHONY: all
all: build/client.js build/client.js.map build/react.js build/react-dom.js \
	build/index.html

build/client.js: client.tsx
	npm run build

build/react.js: ./node_modules/react/dist/react.min.js
	cp $< $@

build/react-dom.js: ./node_modules/react-dom/dist/react-dom.min.js
	cp $< $@

build/index.html: index.html
	cp $< $@
