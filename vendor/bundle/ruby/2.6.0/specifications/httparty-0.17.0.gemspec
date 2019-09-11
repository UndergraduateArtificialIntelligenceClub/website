# -*- encoding: utf-8 -*-
# stub: httparty 0.17.0 ruby lib

Gem::Specification.new do |s|
  s.name = "httparty".freeze
  s.version = "0.17.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["John Nunemaker".freeze, "Sandro Turriate".freeze]
  s.date = "2019-04-20"
  s.description = "Makes http fun! Also, makes consuming restful web services dead easy.".freeze
  s.email = ["nunemaker@gmail.com".freeze]
  s.executables = ["httparty".freeze]
  s.files = ["bin/httparty".freeze]
  s.homepage = "https://github.com/jnunemaker/httparty".freeze
  s.licenses = ["MIT".freeze]
  s.post_install_message = "When you HTTParty, you must party hard!".freeze
  s.required_ruby_version = Gem::Requirement.new(">= 2.0.0".freeze)
  s.rubygems_version = "3.0.6".freeze
  s.summary = "Makes http fun! Also, makes consuming restful web services dead easy.".freeze

  s.installed_by_version = "3.0.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<multi_xml>.freeze, [">= 0.5.2"])
      s.add_runtime_dependency(%q<mime-types>.freeze, ["~> 3.0"])
    else
      s.add_dependency(%q<multi_xml>.freeze, [">= 0.5.2"])
      s.add_dependency(%q<mime-types>.freeze, ["~> 3.0"])
    end
  else
    s.add_dependency(%q<multi_xml>.freeze, [">= 0.5.2"])
    s.add_dependency(%q<mime-types>.freeze, ["~> 3.0"])
  end
end
