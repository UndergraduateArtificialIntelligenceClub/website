#!/usr/bin/env ruby
require "minitest/autorun"
require "minitest/reporters"

require "./lib/ext/hash"

class Client < Minitest::Test
  def test_to_params_basic
    assert_equal "foo=bar", { "foo" => "bar" }.to_params
    assert_equal "foo=bar&bar=foo", { :foo => "bar", :bar => "foo" }.to_params
  end

  def test_to_params_escape
    assert_equal "foo%20bar=bar%20boo", { "foo bar" => "bar boo" }.to_params
  end

  def test_to_params_array
    assert_equal "foo[0]=bar&foo[1]=boo", { "foo" => [ "bar", "boo" ] }.to_params
    assert_equal "foo[0]=bar&foo[1]=boo", { :foo => [ :bar, :boo ] }.to_params
  end

  def test_case_indifferent_delete
    original_hash = {
      # using realistic content types to test real use cases
      "content-type"       => "1",
      "X-Forwarded-For"    => "2",
      "CACHE-CONTROL"      => "3"
    }

    assert_equal "1", original_hash.case_indifferent_delete("CONTENT-TYPE"), "delete 'CONTENT-TYPE'"
    refute original_hash.has_key?("content-type"), "deleted 'content-type'"

    assert_equal "3", original_hash.case_indifferent_delete("cache-control"), "delete 'cache-control'"
    refute original_hash.has_key?("CACHE-CONTROL"), "delete 'CACHE-CONTROL'"
  end

  def test_case_indifferent_merge
    original_hash = {
      # using realistic content types to test real use cases
      "content-type"       => "1",
      "X-Forwarded-For"    => "2",
      "CACHE-CONTROL"      => "3",
      "unchanged-original" => "4"
    }

    new_hash = {
      # using realistic content types to test real use cases
      "Content-Type"      => "5",
      "X-FORWARDED-FOR"   => "6",
      "cache-control"     => "7",
      "new-header"        => "8"
    }

    assert original_hash.case_indifferent_merge(new_hash)

    assert_equal "4", original_hash["unchanged-original"] ,"unchanged-original"
    assert_equal "5", original_hash["content-type"]       ,"content-type"
    assert_equal "6", original_hash["X-Forwarded-For"]    ,"X-Forwarded-For"
    assert_equal "7", original_hash["CACHE-CONTROL"]      ,"CACHE-CONTROL"
    assert_equal "8", original_hash["new-header"]         ,"new-header"
  end

end
