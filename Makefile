cljs:
	npm install shadow-cljs -save; shadow-cljs init;
	mkdir src; cd src; mkdir core; cd core; touch fn.cljs;

build:
	shadow-cljs release core && shadow-cljs release web && npm publish
