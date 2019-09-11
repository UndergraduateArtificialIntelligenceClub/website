# -*- encoding: utf-8 -*-
# stub: middleman-cdn 0.3.2 ruby lib

Gem::Specification.new do |s|
  s.name = "middleman-cdn".freeze
  s.version = "0.3.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Leigh McCulloch".freeze]
  s.date = "2019-01-12"
  s.description = "Invalidate a specific set of files in your CloudFlare, AWS CloudFront, Rackspace, Fastly, or MaxCDN cache".freeze
  s.homepage = "https://github.com/leighmcculloch/middleman-cdn".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.0.6".freeze
  s.summary = "Invalidate CloudFlare, AWS CloudFront, Rackspace, Fastly, or MaxCDN cache after deployment".freeze

  s.installed_by_version = "3.0.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<fog-aws>.freeze, ["~> 1.4"])
      s.add_runtime_dependency(%q<cloudflare>.freeze, ["~> 3.2.1"])
      s.add_runtime_dependency(%q<fastly>.freeze, ["~> 1.1"])
      s.add_runtime_dependency(%q<maxcdn>.freeze, ["~> 0.1"])
      s.add_runtime_dependency(%q<ansi>.freeze, ["~> 1.5"])
      s.add_runtime_dependency(%q<activesupport>.freeze, [">= 4.1"])
      s.add_runtime_dependency(%q<httparty>.freeze, ["~> 0.13"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 0.9"])
      s.add_development_dependency(%q<rspec>.freeze, ["~> 3.0"])
      s.add_development_dependency(%q<coveralls>.freeze, ["~> 0.7"])
      s.add_development_dependency(%q<appraisal>.freeze, ["~> 2.1"])
      s.add_runtime_dependency(%q<middleman>.freeze, [">= 3.2"])
    else
      s.add_dependency(%q<fog-aws>.freeze, ["~> 1.4"])
      s.add_dependency(%q<cloudflare>.freeze, ["~> 3.2.1"])
      s.add_dependency(%q<fastly>.freeze, ["~> 1.1"])
      s.add_dependency(%q<maxcdn>.freeze, ["~> 0.1"])
      s.add_dependency(%q<ansi>.freeze, ["~> 1.5"])
      s.add_dependency(%q<activesupport>.freeze, [">= 4.1"])
      s.add_dependency(%q<httparty>.freeze, ["~> 0.13"])
      s.add_dependency(%q<rake>.freeze, ["~> 0.9"])
      s.add_dependency(%q<rspec>.freeze, ["~> 3.0"])
      s.add_dependency(%q<coveralls>.freeze, ["~> 0.7"])
      s.add_dependency(%q<appraisal>.freeze, ["~> 2.1"])
      s.add_dependency(%q<middleman>.freeze, [">= 3.2"])
    end
  else
    s.add_dependency(%q<fog-aws>.freeze, ["~> 1.4"])
    s.add_dependency(%q<cloudflare>.freeze, ["~> 3.2.1"])
    s.add_dependency(%q<fastly>.freeze, ["~> 1.1"])
    s.add_dependency(%q<maxcdn>.freeze, ["~> 0.1"])
    s.add_dependency(%q<ansi>.freeze, ["~> 1.5"])
    s.add_dependency(%q<activesupport>.freeze, [">= 4.1"])
    s.add_dependency(%q<httparty>.freeze, ["~> 0.13"])
    s.add_dependency(%q<rake>.freeze, ["~> 0.9"])
    s.add_dependency(%q<rspec>.freeze, ["~> 3.0"])
    s.add_dependency(%q<coveralls>.freeze, ["~> 0.7"])
    s.add_dependency(%q<appraisal>.freeze, ["~> 2.1"])
    s.add_dependency(%q<middleman>.freeze, [">= 3.2"])
  end
end
