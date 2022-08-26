import { getAddress } from '@ethersproject/address'
import { sanctionedAddresses } from './index'

describe('sanctionedAddresses', () => {
  it('contains all checksummed addresses', () => {
    for (const address of sanctionedAddresses) {
      expect(getAddress(address)).toEqual(address)
    }
  })
})
