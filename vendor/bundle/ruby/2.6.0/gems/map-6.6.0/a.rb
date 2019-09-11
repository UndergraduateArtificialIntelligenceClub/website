require './lib/map.rb'
require 'yaml'

a = Map.new
a.set(:a, :b, "value")
a.set(:a,0,:c, "value")

p a
puts a.to_hash.to_yaml # fine
puts a.to_yaml # explode
