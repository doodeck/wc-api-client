# wc-api-client — UI application to the WooCommerce (Wordpress) REST API

## Clone not Fork

Cloned from https://github.com/angular/angular-seed

Why it's not forked? There can be only one fork of any foreign github repo per user. I long used up that limit, after all cloning the seed application is the first thing you'd do when you start a new project.

## Getting Started

To get you started you can simply clone the wc-api-client repository and install the dependencies:

### Prerequisites

You need git to clone the wc-api-client repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test wc-api-client. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone wc-api-client

Clone the wc-api-client repository using [git][git]:

```
git clone https://github.com/doodeck/wc-api-client.git
cd wc-api-client
```

If you just want to start a new project without the wc-api-client commit history then you can do:

```bash
git clone --depth=1 https://github.com/doodeck/wc-api-client.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
wc-api-client changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.

## Enable WooCommerce plugin API

Login to Wordpress as the user with administrative proviledges. Go to Plugins->Installed Plugins. In the WooCommerce plugin click Settings. In the General section find the entry API and check the box next to "Enable the REST API".

Then select the user which you will use for API access. GO to Users->All Users.

Depending on the user's role (Administrator/Shop Manager/Customer) the API will be capable to access different kind of information, depending on the access rights. Edit the chosen user. Scroll all the way down to "WooCommerce API Keys" section. Check the box "Generate API Key", then click "Update User". You will see "Consumer Key:" and "Consumer Secret:" fields, this is what you must copy in the corresponding "Consumer key/secret:" fields of the wc-api-application.


## Serving the Application Files

While angular is client-side-only technology and it's possible to create angular webapps that
don't require a backend server at all, we recommend serving the project files using a local
webserver during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr,
etc to function properly when an html page is opened via `file://` scheme instead of `http://`.


### Running the App during Development

The wc-api-client project comes preconfigured with a local development webserver.  It is a node.js
tool called [http-server][http-server].  You can start this webserver with `npm start` but you may choose to
install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.



## Contact

