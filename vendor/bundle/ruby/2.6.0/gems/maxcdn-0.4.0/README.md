# MaxCDN REST Web Services Ruby Client

[![Build Status](https://travis-ci.org/MaxCDN/ruby-maxcdn.png?branch=master)](https://travis-ci.org/MaxCDN/ruby-maxcdn) &nbsp; [![Gem Version](https://badge.fury.io/rb/maxcdn.png)](http://badge.fury.io/rb/maxcdn)

## Installation

``` bash
gem install maxcdn
```

> Requires Ruby 2.3+ (see: [Travis](https://travis-ci.org/MaxCDN/ruby-maxcdn) for passing Ruby versions.)

#### With Bundler

```
bundle init
echo "gem 'maxcdn'" >> Gemfile
bundle install --path vendor/bundle
```

## Usage
```ruby
require 'maxcdn'

api = MaxCDN::Client.new("myalias", "consumer_key", "consumer_secret")

####
# Turn on debugging outputs
#
# api.debug = true

api.get("/account.json")
```

## Methods
It has support for `GET`, `POST`, `PUT` and `DELETE` OAuth 1.0a signed requests.

```ruby
# To create a new Pull Zone
api.post("/zones/pull.json", {'name' => 'test_zone', 'url' => 'http://my-test-site.com'})

# To update an existing zone
api.put("/zones/pull.json/1234", {'name' => 'i_didnt_like_test'})

# To delete a zone
api.delete("/zones/pull.json/1234")

# To purge a file (robots.txt) from cache
api.delete("/zones/pull.json/1234/cache", {"file" => "/robots.txt"})
```

### We now have a shortcut for Purge Calls!
```ruby
zone_id = 12345

# Purge Zone
api.purge(zone_id)

# Purge File
api.purge(zone_id, '/some_file')

# Purge Files
api.purge(zone_id, ['/some_file', '/another_file'])
```

#### Example: SSL Upload

```
max = MaxCDN::Client.new(alias, key, secret)
max.post("zones/pull/12345/ssl.json", {
  :ssl_crt => File.read("/path/to/server.crt").strip,
  :ssl_key  => File.read("/path/to/server.key").strip })
```

## Development Quick Start

``` bash
# get it
git clone git@github.com:<fork repo>/ruby-maxcdn.git

# setup
cd ruby-maxcdn
bundle install --path vendor/bundle

# unit tests
bundle exec ruby ./test/test.rb

# integration tests
export ALIAS=<your alias>
export KEY=<your key>
export SECRET=<your secret>
bundle exec ruby ./test/integration.rb # requires host's IP be whitelisted
```

# Change Log

##### 0.3.0

* Replace CurbFu with Faraday (#10).

##### 0.2.1

* Upgrade signet gem to allow for use with the faraday 0.9.x series (#7).
* See https://rubygems.org/gems/maxcdn/versions/0.2.1 for gem.

##### 0.1.5

* Issue #4: Fixing purge files by array to return a hash of status results.

##### 0.1.4

* Fixing bug where purging files purges entire zone.

##### 0.1.3

* Requested changes for debugging and development support. (See issue #2).

##### 0.1.2

* Fixing an issue with lib loading in `0.1.1`.

##### 0.1.1

* Fixing POST, DELETE and PUT to send data via request body.
* Adding debugging for CurbFu and Curl::Easy.
* Fixing/enhancing unit tests.
* Removing `secure_connection` handling, as all connections should be secure.
* Fixing [414 Request-URI Too Large](https://github.com/netdna/netdnarws-ruby/issues/10) from old [netdnarws-ruby](https://github.com/netdna/netdnarws-ruby) client.


##### 0.1.0

* Initial Release
