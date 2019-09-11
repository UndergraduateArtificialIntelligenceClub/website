# -*- encoding: utf-8 -*-
# stub: middleman-dotenv 2.0.0 ruby lib

Gem::Specification.new do |s|
  s.name = "middleman-dotenv".freeze
  s.version = "2.0.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Karl Freeman".freeze]
  s.date = "2016-02-10"
  s.description = "Dotenv for Middleman".freeze
  s.email = ["karlfreeman@gmail.com".freeze]
  s.homepage = "https://github.com/karlfreeman/middleman-dotenv".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 1.9.3".freeze)
  s.rubygems_version = "3.0.6".freeze
  s.summary = "Dotenv for Middleman".freeze

  s.installed_by_version = "3.0.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<middleman-core>.freeze, [">= 4.0"])
      s.add_runtime_dependency(%q<dotenv>.freeze, [">= 2.0"])
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.5"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_development_dependency(%q<kramdown>.freeze, [">= 0.14"])
      s.add_development_dependency(%q<rubocop>.freeze, ["~> 0.19"])
      s.add_development_dependency(%q<pry>.freeze, [">= 0"])
      s.add_development_dependency(%q<yard>.freeze, [">= 0"])
    else
      s.add_dependency(%q<middleman-core>.freeze, [">= 4.0"])
      s.add_dependency(%q<dotenv>.freeze, [">= 2.0"])
      s.add_dependency(%q<bundler>.freeze, ["~> 1.5"])
      s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_dependency(%q<kramdown>.freeze, [">= 0.14"])
      s.add_dependency(%q<rubocop>.freeze, ["~> 0.19"])
      s.add_dependency(%q<pry>.freeze, [">= 0"])
      s.add_dependency(%q<yard>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<middleman-core>.freeze, [">= 4.0"])
    s.add_dependency(%q<dotenv>.freeze, [">= 2.0"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.5"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_dependency(%q<kramdown>.freeze, [">= 0.14"])
    s.add_dependency(%q<rubocop>.freeze, ["~> 0.19"])
    s.add_dependency(%q<pry>.freeze, [">= 0"])
    s.add_dependency(%q<yard>.freeze, [">= 0"])
  end
end
