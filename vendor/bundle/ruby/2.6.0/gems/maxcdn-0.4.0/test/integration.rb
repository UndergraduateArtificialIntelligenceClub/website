#!/usr/bin/env ruby
require "json"
require "minitest/autorun"
require "minitest/reporters"
require "./lib/maxcdn"

Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new

if (ENV["ALIAS"].nil? or ENV["KEY"].nil? or ENV["SECRET"].nil?)
  abort "Please export ALIAS, KEY and SECRET with your credentials and ensure that you're test host's IP is whitelisted."
end

class Client < Minitest::Test

  def setup
    @max  = MaxCDN::Client.new(ENV["ALIAS"], ENV["KEY"], ENV["SECRET"])
    @max.debug = true if ENV['DEBUG']

    @time = Time.now.to_i.to_s
  end

  def test_get
    [ "account.json",
      "account.json/address",
      "users.json",
      "zones.json"
    ].each do |end_point|
      key = end_point.include?("/") ? end_point.split("/")[1] : end_point.gsub(/\.json/, "")

      assert @max.get(end_point)["data"][key], "get #{key} with data"
    end
  end

  def test_get_logs
      assert @max.get("v3/reporting/logs.json")["next_page_key"], "get next_page_key with data"
  end

  def test_post_and_delete

    zone = {
      :name => @time,
      :url  => "http://www.example.com"
    }

    zid = @max.post("zones/pull.json", zone)["data"]["pullzone"]["id"]
    assert zid, "post id"

    assert_equal 200, @max.delete("zones/pull.json/#{zid}")["code"], "delete (warning: manually delete zone #{zid} at https://cp.maxcdn.com/zones/pull)."
  end

  def test_put
    name = @time + "_put"
    assert_equal name, @max.put("account.json", { :name => name })["data"]["account"]["name"], "put"
  end

  def test_purge
    zones = @max.get("zones/pull.json")["data"]["pullzones"]
    zone = zones[zones.length-1]["id"]
    assert_equal 200, @max.purge(zone)["code"], "purge"

    popularfiles = @max.get("reports/popularfiles.json")["data"]["popularfiles"]
    assert_equal 200, @max.purge(zone, popularfiles[0]["uri"])["code"], "purge file"

    files = [popularfiles[0]["uri"], popularfiles[1]["uri"]]
    expected = {files[0]=>{"code"=>200},files[1]=>{"code"=>200}}
    assert_equal expected, @max.purge(zone, files), "purge files"
  end
end
