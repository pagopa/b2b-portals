aws_region        = "eu-south-1"
environment       = "prod"
github_repository = "pagopa/b2b-portals"

cdn_custom_headers = [
  {
    header   = "X-Robots-Tag"
    override = true
    value    = "noindex"
  },
]

dns_domain_name = {
  "b2bportals.pagopa.it" = {
    comment = "DNS domain for the b2b portals"
  }
}

nextjs_app_image_tag = "217c4927ca3c6fefd3ae332ded97831eee973b98"

cms_app_image_tag = "12cfab442db2c2e21ad83678d4894afb2d64d5c2"
