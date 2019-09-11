# -*- encoding: utf-8 -*-
# stub: maxcdn 0.4.0 ruby lib

Gem::Specification.new do |s|
  s.name = "maxcdn".freeze
  s.version = "0.4.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Joshua P. Mervine".freeze]
  s.date = "2018-05-23"
  s.description = "A Rest Client For MaxCDN Rest Web Services".freeze
  s.email = "joshua@mervine.net".freeze
  s.homepage = "http://www.maxcdn.com".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.0.6".freeze
  s.summary = "A Rest Client For MaxCDN Rest Web Services".freeze

  s.installed_by_version = "3.0.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<signet>.freeze, ["~> 0.7"])
      s.add_runtime_dependency(%q<faraday>.freeze, ["~> 0.9"])
      s.add_runtime_dependency(%q<net-http-persistent>.freeze, ["~> 2.9"])
      s.add_runtime_dependency(%q<addressable>.freeze, ["~> 2.4"])
    else
      s.add_dependency(%q<signet>.freeze, ["~> 0.7"])
      s.add_dependency(%q<faraday>.freeze, ["~> 0.9"])
      s.add_dependency(%q<net-http-persistent>.freeze, ["~> 2.9"])
      s.add_dependency(%q<addressable>.freeze, ["~> 2.4"])
    end
  else
    s.add_dependency(%q<signet>.freeze, ["~> 0.7"])
    s.add_dependency(%q<faraday>.freeze, ["~> 0.9"])
    s.add_dependency(%q<net-http-persistent>.freeze, ["~> 2.9"])
    s.add_dependency(%q<addressable>.freeze, ["~> 2.4"])
  end
end
