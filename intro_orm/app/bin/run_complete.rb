#!/usr/bin/env ruby
require_relative '../config/environment'

Tweet.create_table
TweetsApp.new.call
