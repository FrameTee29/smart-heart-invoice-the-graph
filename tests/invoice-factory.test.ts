import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { Claim } from "../generated/schema"
import { Claim as ClaimEvent } from "../generated/InvoiceFactory/InvoiceFactory"
import { handleClaim } from "../src/invoice-factory"
import { createClaimEvent } from "./invoice-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _chainSelector = BigInt.fromI32(234)
    let _beneficiary = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newClaimEvent = createClaimEvent(_chainSelector, _beneficiary)
    handleClaim(newClaimEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Claim created and stored", () => {
    assert.entityCount("Claim", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Claim",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_chainSelector",
      "234"
    )
    assert.fieldEquals(
      "Claim",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_beneficiary",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
