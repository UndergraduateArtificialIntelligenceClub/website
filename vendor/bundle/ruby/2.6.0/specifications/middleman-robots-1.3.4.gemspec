# -*- encoding: utf-8 -*-
# stub: middleman-robots 1.3.4 ruby lib

Gem::Specification.new do |s|
  s.name = "middleman-robots".freeze
  s.version = "1.3.4"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Yuya Matsushima".freeze]
  s.date = "2018-07-05"
  s.description = "middleman-robots create robots.txt includes Allow or Disallow and sitemap path.".freeze
  s.email = ["terra@e2esound.com".freeze]
  s.homepage = "https://github.com/yterajima/middleman-robots".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.2.0".freeze)
  s.rubygems_version = "3.0.6".freeze
  s.summary = "Generate robots.txt by config.rb.".freeze

  s.installed_by_version = "3.0.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<middleman-cli>.freeze, [">= 4.0"])
      s.add_runtime_dependency(%q<middleman-core>.freeze, [">= 4.0"])
      s.add_development_dependency(%q<aruba>.freeze, [">= 0.14.3"])
      s.add_development_dependency(%q<bundler>.freeze, [">= 1.16"])
      s.add_development_dependency(%q<capybara>.freeze, [">= 2.18.0"])
      s.add_development_dependency(%q<cucumber>.freeze, [">= 3.1.0"])
      s.add_development_dependency(%q<rake>.freeze, [">= 12.3"])
      s.add_development_dependency(%q<rubocop>.freeze, [">= 0.52.1"])
    else
      s.add_dependency(%q<middleman-cli>.freeze, [">= 4.0"])
      s.add_dependency(%q<middleman-core>.freeze, [">= 4.0"])
      s.add_dependency(%q<aruba>.freeze, [">= 0.14.3"])
      s.add_dependency(%q<bundler>.freeze, [">= 1.16"])
      s.add_dependency(%q<capybara>.freeze, [">= 2.18.0"])
      s.add_dependency(%q<cucumber>.freeze, [">= 3.1.0"])
      s.add_dependency(%q<rake>.freeze, [">= 12.3"])
      s.add_dependency(%q<rubocop>.freeze, [">= 0.52.1"])
    end
  else
    s.add_dependency(%q<middleman-cli>.freeze, [">= 4.0"])
    s.add_dependency(%q<middleman-core>.freeze, [">= 4.0"])
    s.add_dependency(%q<aruba>.freeze, [">= 0.14.3"])
    s.add_dependency(%q<bundler>.freeze, [">= 1.16"])
    s.add_dependency(%q<capybara>.freeze, [">= 2.18.0"])
    s.add_dependency(%q<cucumber>.freeze, [">= 3.1.0"])
    s.add_dependency(%q<rake>.freeze, [">= 12.3"])
    s.add_dependency(%q<rubocop>.freeze, [">= 0.52.1"])
  end
end
