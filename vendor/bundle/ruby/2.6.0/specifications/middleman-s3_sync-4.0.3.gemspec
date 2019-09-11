# -*- encoding: utf-8 -*-
# stub: middleman-s3_sync 4.0.3 ruby lib

Gem::Specification.new do |s|
  s.name = "middleman-s3_sync".freeze
  s.version = "4.0.3"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Frederic Jean".freeze, "Will Koehler".freeze]
  s.date = "2016-05-10"
  s.description = "Only syncs files that have been updated to S3.".freeze
  s.email = ["fred@fredjean.net".freeze]
  s.homepage = "http://github.com/fredjean/middleman-s3_sync".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.0.6".freeze
  s.summary = "Tries really, really hard not to push files to S3.".freeze

  s.installed_by_version = "3.0.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<middleman-core>.freeze, [">= 4.0.0"])
      s.add_runtime_dependency(%q<middleman-cli>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<unf>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<fog-aws>.freeze, [">= 0.1.1"])
      s.add_runtime_dependency(%q<map>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<parallel>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<ruby-progressbar>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<ansi>.freeze, ["~> 1.5.0"])
      s.add_development_dependency(%q<rake>.freeze, [">= 0"])
      s.add_development_dependency(%q<pry>.freeze, [">= 0"])
      s.add_development_dependency(%q<pry-byebug>.freeze, [">= 0"])
      s.add_development_dependency(%q<rspec>.freeze, [">= 3.0.0"])
      s.add_development_dependency(%q<rspec-its>.freeze, [">= 0"])
      s.add_development_dependency(%q<rspec-mocks>.freeze, [">= 0"])
      s.add_development_dependency(%q<timerizer>.freeze, [">= 0"])
      s.add_development_dependency(%q<travis>.freeze, [">= 0"])
      s.add_development_dependency(%q<travis-lint>.freeze, [">= 0"])
    else
      s.add_dependency(%q<middleman-core>.freeze, [">= 4.0.0"])
      s.add_dependency(%q<middleman-cli>.freeze, [">= 0"])
      s.add_dependency(%q<unf>.freeze, [">= 0"])
      s.add_dependency(%q<fog-aws>.freeze, [">= 0.1.1"])
      s.add_dependency(%q<map>.freeze, [">= 0"])
      s.add_dependency(%q<parallel>.freeze, [">= 0"])
      s.add_dependency(%q<ruby-progressbar>.freeze, [">= 0"])
      s.add_dependency(%q<ansi>.freeze, ["~> 1.5.0"])
      s.add_dependency(%q<rake>.freeze, [">= 0"])
      s.add_dependency(%q<pry>.freeze, [">= 0"])
      s.add_dependency(%q<pry-byebug>.freeze, [">= 0"])
      s.add_dependency(%q<rspec>.freeze, [">= 3.0.0"])
      s.add_dependency(%q<rspec-its>.freeze, [">= 0"])
      s.add_dependency(%q<rspec-mocks>.freeze, [">= 0"])
      s.add_dependency(%q<timerizer>.freeze, [">= 0"])
      s.add_dependency(%q<travis>.freeze, [">= 0"])
      s.add_dependency(%q<travis-lint>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<middleman-core>.freeze, [">= 4.0.0"])
    s.add_dependency(%q<middleman-cli>.freeze, [">= 0"])
    s.add_dependency(%q<unf>.freeze, [">= 0"])
    s.add_dependency(%q<fog-aws>.freeze, [">= 0.1.1"])
    s.add_dependency(%q<map>.freeze, [">= 0"])
    s.add_dependency(%q<parallel>.freeze, [">= 0"])
    s.add_dependency(%q<ruby-progressbar>.freeze, [">= 0"])
    s.add_dependency(%q<ansi>.freeze, ["~> 1.5.0"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<pry>.freeze, [">= 0"])
    s.add_dependency(%q<pry-byebug>.freeze, [">= 0"])
    s.add_dependency(%q<rspec>.freeze, [">= 3.0.0"])
    s.add_dependency(%q<rspec-its>.freeze, [">= 0"])
    s.add_dependency(%q<rspec-mocks>.freeze, [">= 0"])
    s.add_dependency(%q<timerizer>.freeze, [">= 0"])
    s.add_dependency(%q<travis>.freeze, [">= 0"])
    s.add_dependency(%q<travis-lint>.freeze, [">= 0"])
  end
end
