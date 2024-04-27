#!/usr/bin/env bash

set -euo pipefail

echo -n "$1" | cut -c 3- | xxd -r -p | openssl dgst -sha256 -keyform pem -sign contracts/test/keys/$2/private.pem | xxd -p | tr -d \\n
