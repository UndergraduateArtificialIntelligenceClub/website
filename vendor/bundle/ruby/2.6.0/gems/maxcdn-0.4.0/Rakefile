#!/usr/bin/env rake
require "bundler/gem_tasks"
require "rake/testtask"

Rake::TestTask.new(:test) do |t|
  t.libs << "test"
  t.test_files = FileList['test/*_test.rb']
  t.verbose = true
end

Rake::TestTask.new(:integration) do |t|
  t.libs << "test"
  t.test_files = FileList['test/integration.rb']
  t.verbose = true
end

desc "Run benchmarks"
task :benchmark do
  require "./test/benchmark"
end

task :default => :test
