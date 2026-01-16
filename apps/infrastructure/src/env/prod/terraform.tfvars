aws_region        = "eu-south-1"
environment       = "prod"
github_repository = "pagopa/b2b-portals"

cdn_custom_headers = [
  {
    header   = "X-Robots-Tag"
    override = true
    value    = "noindex"
  },
  {
    header   = "Server"
    override = true
    value    = "None"
  }
]

dns_domain_name = {
  "b2bportals.pagopa.it" = {
    comment = "DNS domain for the b2b portals"
  }
}

nextjs_app_image_tag = "630c195a2f6988be442e9e86c898ffb2538ee94a"

cms_app_image_tag = "bea1de1836c63f536d27e0cb106d71d4f013642b"
