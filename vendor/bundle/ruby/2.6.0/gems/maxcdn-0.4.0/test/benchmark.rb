#!/usr/bin/env ruby
if (ENV["ALIAS"].nil? or ENV["KEY"].nil? or ENV["SECRET"].nil?)
  abort "Please export ALIAS, KEY and SECRET with your credentials and ensure that you're test host's IP is whitelisted."
end

require 'benchmark'
require "./lib/maxcdn"

@time = Time.now.to_i.to_s

puts "Running benchmarks as follows in order:"
puts " "
puts " maxcdn.get('zones/pull.json')"
puts " maxcdn.get('reports/popularfiles.json')"
puts " maxcdn.get('v3/reporting/logs.json')"
puts " maxcdn.post('zones/pull.json', { :name => 'NAM', :url => 'URL' })"
puts " maxcdn.put('account.json', { :name => 'NAME' })"
puts " maxcdn.delete('zones/pull.json/ZONEID')"
puts " maxcdn.purge('ZONEID')"
puts " maxcdn.purge('ZONEID', 'FILE')"
puts " maxcdn.purge('ZONEID', [ 'FILE1','FILE2' ])"
puts " "

Benchmark.bm do |mark|

  maxcdn = MaxCDN::Client.new(ENV["ALIAS"], ENV["KEY"], ENV["SECRET"])

  mark.report("get   :") do
    zones = maxcdn.get("zones/pull.json")["data"]["pullzones"]
    @pullzone = zones[zones.length-1]["id"]
  end

  mark.report("get   :") do
    @popularfiles = maxcdn.get("reports/popularfiles.json")["data"]["popularfiles"]
  end

  mark.report("get   :") do
    @popularfiles = maxcdn.get("v3/reporting/logs.json")["next_page_key"]
  end

  @zone = {
    :name => @time,
    :url  => "http://www.example.com"
  }

  mark.report("post  :") do
    @zoneid = maxcdn.post("zones/pull.json", @zone)["data"]["pullzone"]["id"]
  end

  mark.report("put   :") do
    maxcdn.put("account.json", { :name => @time })
  end

  mark.report("delete:") do
    maxcdn.delete("zones/pull.json/#{@zoneid}")
  end

  mark.report("purge :") do
    maxcdn.purge(@pullzone)
  end

  mark.report("purge :") do
    maxcdn.purge(@pullzone, @popularfiles[0]["uri"])
  end

  mark.report("purge :") do
    maxcdn.purge(@pullzone, [ @popularfiles[0]["uri"], @popularfiles[1]["uri"] ])
  end
end
