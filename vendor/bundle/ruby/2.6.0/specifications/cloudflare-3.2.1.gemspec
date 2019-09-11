# -*- encoding: utf-8 -*-
# stub: cloudflare 3.2.1 ruby lib

Gem::Specification.new do |s|
  s.name = "cloudflare".freeze
  s.version = "3.2.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Marcin Prokop".freeze, "Samuel Williams".freeze]
  s.date = "2018-06-09"
  s.email = ["marcin@prokop.co".freeze, "samuel.williams@oriontransfer.co.nz".freeze]
  s.homepage = "https://github.com/b4k3r/cloudflare".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.0.0".freeze)
  s.rubygems_version = "3.0.6".freeze
  s.summary = "A Ruby wrapper for the Cloudflare API.".freeze

  s.installed_by_version = "3.0.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<rest-client>.freeze, ["~> 2.0.2"])
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.3"])
      s.add_development_dependency(%q<rake>.freeze, [">= 0"])
      s.add_development_dependency(%q<rspec>.freeze, ["~> 3.6"])
    else
      s.add_dependency(%q<rest-client>.freeze, ["~> 2.0.2"])
      s.add_dependency(%q<bundler>.freeze, ["~> 1.3"])
      s.add_dependency(%q<rake>.freeze, [">= 0"])
      s.add_dependency(%q<rspec>.freeze, ["~> 3.6"])
    end
  else
    s.add_dependency(%q<rest-client>.freeze, ["~> 2.0.2"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.3"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<rspec>.freeze, ["~> 3.6"])
  end
end
