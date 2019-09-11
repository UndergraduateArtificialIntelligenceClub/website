#!/usr/bin/env ruby
require "pp"
require File.join("./", File.dirname(__FILE__), "..","lib","maxcdn")

arg = ARGV.shift

if ENV["ALIAS"].nil? or ENV["KEY"].nil? or ENV["SECRET"].nil? or (!arg.nil? and !arg.match(/hourly|daily|monthly/))
  puts <<-EOU
Usage: report.rb [hourly|daily|monthly]

  Report types only cover summary.

  Add credentials to your environment like so:

  $ export ALIAS=<alias>
  $ export KEY=<key>
  $ export SECRET=<secret>
  $ ./report.rb

  Or by adding to the script call:

  $ ALIAS=<alias> KEY=<key> SECRET=<secret> ./report.rb
EOU
end

maxcdn = MaxCDN::Client.new(ENV["ALIAS"], ENV["KEY"], ENV["SECRET"])

report = arg.nil? ? "" : "/#{arg}"

maxcdn.get("/zones/pull.json")["data"]["pullzones"].each do |zone|
  # title
  puts "Zone report for: #{zone["name"]} (#{zone["url"]})"

  # summary
  maxcdn.get("/reports/#{zone["id"]}/stats.json#{report}")["data"]["summary"].each do |k, v|
    puts " - #{k}: #{v}"
  end

  # popularfiles
  puts " "
  puts "Popular Files:"
  maxcdn.get("/reports/#{zone["id"]}/popularfiles.json?page_size=10")["data"]["popularfiles"].each do |file|
    puts " - url: #{file["uri"]}"
    puts "   - hits: #{file["hit"]}"
    puts "   - size: #{file["size"]}"
  end

  puts " "
end

