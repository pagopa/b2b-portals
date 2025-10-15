variable "location" {
  type    = string
  default = "West Europe"
}

variable "env" {
  type    = string
  default = "appio"
}

variable "github" {
  type = object({
    org        = string
    repository = string
  })
  default = {
    org        = "pagopa"
    repository = "b2b-portals"
  }
}