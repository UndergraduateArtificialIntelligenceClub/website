#!/usr/bin/env ruby
require 'pp'
require File.join('./', File.dirname(__FILE__), '..','lib','maxcdn')

maxcdn = MaxCDN::Client.new(ENV['ALIAS'], ENV['KEY'], ENV['SECRET'])

puts 'GET /account.json'
pp maxcdn.get('/account.json')

puts 'GET /account.json/address'
pp maxcdn.get('/account.json/address')

puts 'GET /reports/stats.json/hourly'
pp maxcdn.get('/reports/stats.json/hourly')

