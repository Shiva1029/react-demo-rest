### Using

* React 16
* Webpack 3
* React Router 4
* SASS
* Babel Cli
* Hot Module Reloading
* Jest 22
* Enzyme 3 for testing

### To run
Make sure you have git, node and npm installed globally and accessible through the command line.

* Clone

```
git clone https://github.com/Shiva1029/react-demo-rest.git
cd react-demo
```

* Then install the dependencies:

```
npm i
```

* Run development server:

```
npm start
```


* Or you can run development server with [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard):

```
npm run dev
```
Make sure chrome web-security is disabled or else you will see CORS issue
Open the web browser to `http://localhost:8888/`

### To test
To run unit tests:

```
npm test
```

Tests come bundled with:

* Jest
* Enzyme
* React Test Utils
* React Test Renderer

### To build the production package

```
npm run build
```

### Running build locally

```
npm run serve:build
```
Open the web browser to `http://localhost:8080/`

### Eslint
There is a `.eslint.rc` config for eslint ready with React plugin.

To run linting, run:

```
npm run lint
```

To fix

```
npm run lint:fix
```

### Nginx Config

Here is an example Nginx config:

```
server {
	# ... root and other options

	gzip on;
	gzip_http_version 1.1;
	gzip_types text/plain text/css text/xml application/javascript image/svg+xml;

	location / {
		try_files $uri $uri/ /index.html;
	}

	location ~ \.html?$ {
		expires 1d;
	}

	location ~ \.(svg|ttf|js|css|svgz|eot|otf|woff|jpg|jpeg|gif|png|ico)$ {
		access_log off;
		log_not_found off;
		expires max;
	}
}
```
[Github Page](https://shiva1029.github.io/react-demo/)

* Works on latest versions of IE, Edge, Chrome, Firefox and Safari.
