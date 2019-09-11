# -*- encoding: utf-8 -*-
# stub: font-awesome-middleman 4.2.1 ruby lib

Gem::Specification.new do |s|
  s.name = "font-awesome-middleman".freeze
  s.version = "4.2.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Cristian Ferrari, Miguel Michelson".freeze]
  s.date = "2014-09-23"
  s.description = "font-awesome-middleman provides the Font-Awesome web fonts and stylesheets as a Middleman engine.".freeze
  s.email = ["cristianferrarig@gmail.com, miguelmichelson@gmail.com".freeze]
  s.homepage = "".freeze
  s.rubygems_version = "3.0.6".freeze
  s.summary = "Font-Awesome web fonts and stylesheets as a Middleman engine".freeze

  s.installed_by_version = "3.0.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<middleman-core>.freeze, [">= 3.0.0"])
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.1"])
      s.add_development_dependency(%q<rspec>.freeze, ["~> 2.6.0"])
    else
      s.add_dependency(%q<middleman-core>.freeze, [">= 3.0.0"])
      s.add_dependency(%q<bundler>.freeze, ["~> 1.1"])
      s.add_dependency(%q<rspec>.freeze, ["~> 2.6.0"])
    end
  else
    s.add_dependency(%q<middleman-core>.freeze, [">= 3.0.0"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.1"])
    s.add_dependency(%q<rspec>.freeze, ["~> 2.6.0"])
  end
end
