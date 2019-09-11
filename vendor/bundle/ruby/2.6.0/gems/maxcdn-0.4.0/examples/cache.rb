#!/usr/bin/env ruby
require "pp"
require File.join("./", File.dirname(__FILE__), "..","lib","maxcdn")

zoneid = ARGV.shift
files  = ARGV.clone

if ENV["ALIAS"].nil? or ENV["KEY"].nil? or ENV["SECRET"].nil?
  puts <<-EOU
Usage: cache.rb zoneid [files...]

  Add credentials to your environment like so:

  $ export ALIAS=<alias>
  $ export KEY=<key>
  $ export SECRET=<secret>
  $ bundle exec ruby cache.rb 12345 ./master.css ./another.css

  Or by adding to the script call:

  $ ALIAS=<alias> KEY=<key> SECRET=<secret> bundle exec ruby cache.rb \
        12345 ./master.css ./another.css
EOU
end

maxcdn = MaxCDN::Client.new(ENV["ALIAS"], ENV["KEY"], ENV["SECRET"])

if zoneid.nil?

  maxcdn.get("/zones/pull.json")["data"]["pullzones"].map { |z| z["id"] }.each do |zid|
    puts "Purging zone #{zid}"
    pp maxcdn.purge(zid)
  end

else

  puts "Purging zone #{zoneid}"
  if files.empty?
    pp maxcdn.purge(zoneid)
  else
    pp maxcdn.purge(zoneid, files)
  end

end
