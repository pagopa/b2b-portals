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

dns_delegate_records = {
  prod = [
    "ns-1673.awsdns-17.co.uk",
    "ns-1032.awsdns-01.org",
    "ns-921.awsdns-51.net",
    "ns-275.awsdns-34.com"
  ]
}