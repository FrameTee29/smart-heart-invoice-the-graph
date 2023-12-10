import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  Claim,
  OwnershipTransferRequested,
  OwnershipTransferred,
  Pay,
  TokensTransferred
} from "../generated/InvoiceFactory/InvoiceFactory"

export function createClaimEvent(
  _chainSelector: BigInt,
  _beneficiary: Address
): Claim {
  let claimEvent = changetype<Claim>(newMockEvent())

  claimEvent.parameters = new Array()

  claimEvent.parameters.push(
    new ethereum.EventParam(
      "_chainSelector",
      ethereum.Value.fromUnsignedBigInt(_chainSelector)
    )
  )
  claimEvent.parameters.push(
    new ethereum.EventParam(
      "_beneficiary",
      ethereum.Value.fromAddress(_beneficiary)
    )
  )

  return claimEvent
}

export function createOwnershipTransferRequestedEvent(
  from: Address,
  to: Address
): OwnershipTransferRequested {
  let ownershipTransferRequestedEvent = changetype<OwnershipTransferRequested>(
    newMockEvent()
  )

  ownershipTransferRequestedEvent.parameters = new Array()

  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferRequestedEvent
}

export function createOwnershipTransferredEvent(
  from: Address,
  to: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferredEvent
}

export function createPayEvent(
  _chainSelector: BigInt,
  _token: Address,
  _amount: BigInt,
  _receiver: Address
): Pay {
  let payEvent = changetype<Pay>(newMockEvent())

  payEvent.parameters = new Array()

  payEvent.parameters.push(
    new ethereum.EventParam(
      "_chainSelector",
      ethereum.Value.fromUnsignedBigInt(_chainSelector)
    )
  )
  payEvent.parameters.push(
    new ethereum.EventParam("_token", ethereum.Value.fromAddress(_token))
  )
  payEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  payEvent.parameters.push(
    new ethereum.EventParam("_receiver", ethereum.Value.fromAddress(_receiver))
  )

  return payEvent
}

export function createTokensTransferredEvent(
  messageId: Bytes,
  destinationChainSelector: BigInt,
  receiver: Address,
  token: Address,
  tokenAmount: BigInt,
  feeToken: Address,
  fees: BigInt
): TokensTransferred {
  let tokensTransferredEvent = changetype<TokensTransferred>(newMockEvent())

  tokensTransferredEvent.parameters = new Array()

  tokensTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "messageId",
      ethereum.Value.fromFixedBytes(messageId)
    )
  )
  tokensTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "destinationChainSelector",
      ethereum.Value.fromUnsignedBigInt(destinationChainSelector)
    )
  )
  tokensTransferredEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  tokensTransferredEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  tokensTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAmount",
      ethereum.Value.fromUnsignedBigInt(tokenAmount)
    )
  )
  tokensTransferredEvent.parameters.push(
    new ethereum.EventParam("feeToken", ethereum.Value.fromAddress(feeToken))
  )
  tokensTransferredEvent.parameters.push(
    new ethereum.EventParam("fees", ethereum.Value.fromUnsignedBigInt(fees))
  )

  return tokensTransferredEvent
}
