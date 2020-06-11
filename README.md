# UAIS
[![MIT license](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://github.com/UndergraduateArtificialIntelligenceClub/website/blob/master/LICENSE)
[![Webiste](https://img.shields.io/website?down_color=red&down_message=down&up_color=green&up_message=up&url=https%3A%2F%2Fuais.dev)](https://uais.dev/)
![Compile Website](https://github.com/UndergraduateArtificialIntelligenceClub/website/workflows/Compile%20Website/badge.svg)
![Middleman Version](https://img.shields.io/gem/v/middleman?label=middleman)
![Pull Requests Closed](https://img.shields.io/github/issues-pr-closed/UndergraduateArtificialIntelligenceClub/website)

If you have any **feature requests**, please **open an issue** with the `enhancement` label.
If you would like to **contribute**, please **contact** either [@NickNissen](https://github.com/NickNissen) or [@giancarlopernudisegura](https://github.com/giancarlopernudisegura) on [slack](https://albertaundergradai.slack.com) on the `#website` channel.

## Development Environment Setup
The website is made with [Middleman](https://middlemanapp.com/), a static site generator written in [Ruby](https://www.ruby-lang.org/).

### Install Ruby
#### Windows
Go to [rubyinstaller.org](https://rubyinstaller.org/).
#### Ubuntu
```sh
sudo apt-get install ruby
```
#### Arch Linux
```sh
sudo pacman -S ruby
```

### Install Middleman
```sh
gem install middleman
```

### Install Bundler
```sh
sudo gem install middlman
bundle install
```

### Use Middleman
```sh
bundle exec middleman
```

### Middleman Robots Fix
You may encounter an error when trying to run middleman:
```
/var/lib/gems/2.5.0/gems/middleman-robots-1.3.5/lib/middleman-robots/extension.rb:26:in `initialize': Permission denied @ rb_sysopen - /var/lib/gems/2.5.0/gems/middleman-robots-1.3.5/tmp/robots/robots.txt (Errno::EACCES)
```
Fix:
```sh
sudo chmod -R +777 /var/lib/gems/2.5.0/gems/middleman-robots-1.3.5/
```

## Website Development Priorities
For a more information, check out **Tasks** under the **Projects** tab.
- Projects application form
- Onborading checklist

## Dreams
- annonymized voting
