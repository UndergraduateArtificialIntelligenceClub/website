# Activate and configure extensions

activate :dotenv, env: '.ENV'

# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :gzip
  
end

activate :minify_html
activate :imageoptim

activate :directory_indexes


# S3_Sync
activate :s3_sync do |s3_sync|
  s3_sync.bucket                     = ENV['bucket']
  s3_sync.region                     = ENV['region']    # The AWS region for your bucket.
  s3_sync.aws_access_key_id          = ENV['aws_access_key_id']
  s3_sync.aws_secret_access_key      = ENV['aws_secret_access_key']
  s3_sync.delete                     = false # We delete stray files by default.
  s3_sync.after_build                = false # We do not chain after the build step by default.
  s3_sync.prefer_gzip                = true
  s3_sync.path_style                 = true
  s3_sync.reduced_redundancy_storage = false
  s3_sync.acl                        = 'public-read'
  s3_sync.encryption                 = false
  s3_sync.prefix                     = ''
  s3_sync.version_bucket             = false
  s3_sync.index_document             = 'index.html'
  s3_sync.error_document             = 'index.html'
end

# Robots.txt and sitemap.xml
activate :robots, 
  rules: [
    { user_agent: '*', allow: %w[/] }
  ],
  sitemap: 'https://uais/sitemap.xml'

  set :url_root, 'https://uais.dev'

activate :search_engine_sitemap

