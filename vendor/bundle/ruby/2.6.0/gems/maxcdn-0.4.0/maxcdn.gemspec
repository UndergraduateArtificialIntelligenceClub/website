# -*- encoding: utf-8 -*-
require File.expand_path('../lib/maxcdn/version', __FILE__)

Gem::Specification.new do |gem|
  gem.name = "maxcdn"
  gem.homepage = "http://www.maxcdn.com"
  gem.version = MaxCDN::VERSION
  gem.license = "MIT"
  gem.files = `git ls-files`.split($\)
  gem.require_paths = ['lib']
  gem.summary = %Q{A Rest Client For MaxCDN Rest Web Services}
  gem.description = %Q{A Rest Client For MaxCDN Rest Web Services}
  gem.email = "joshua@mervine.net"
  gem.authors = ["Joshua P. Mervine"]
  gem.add_dependency 'signet', '~> 0.7'
  gem.add_dependency 'faraday', '~> 0.9'
  gem.add_dependency 'net-http-persistent', '~> 2.9'
  gem.add_dependency 'addressable', '~> 2.4'
end
