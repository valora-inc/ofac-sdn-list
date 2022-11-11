# ofac-sdn-list

Checksum addresses on the OFAC SDN list.

## Usage

```
import { sanctionedAddresses } from '@valora/ofac-sdn-list'
// Or whatever your favorite checksum address helper function is.
import { getAddress } from '@ethersproject/address'

if (sanctionedAddresses.has(getAddress(address))) {
  console.log('SDN address')
}
```

## Publishing

Run:

```
yarn release
```

And follow the directions.
