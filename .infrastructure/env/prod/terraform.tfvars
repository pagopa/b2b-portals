aws_region        = "eu-south-1"
environment       = "prod"
github_repository = "pagopa/b2b-portals"

cdn_custom_headers = [
  {
    header   = "X-Robots-Tag"
    override = true
    value    = "noindex"
  }
]

dns_domain_name = {
  "b2bportals.pagopa.it" = {
    comment = "DNS domain for the b2b portals"
  }
} 