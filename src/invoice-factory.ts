import {
  Claim as ClaimEvent,
  OwnershipTransferRequested as OwnershipTransferRequestedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Pay as PayEvent,
  TokensTransferred as TokensTransferredEvent
} from "../generated/InvoiceFactory/InvoiceFactory"
import {
  Claim,
  OwnershipTransferRequested,
  OwnershipTransferred,
  Pay,
  TokensTransferred
} from "../generated/schema"

export function handleClaim(event: ClaimEvent): void {
  let entity = new Claim(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._chainSelector = event.params._chainSelector
  entity._beneficiary = event.params._beneficiary

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferRequested(
  event: OwnershipTransferRequestedEvent
): void {
  let entity = new OwnershipTransferRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePay(event: PayEvent): void {
  let entity = new Pay(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity._chainSelector = event.params._chainSelector
  entity._token = event.params._token
  entity._amount = event.params._amount
  entity._receiver = event.params._receiver

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokensTransferred(event: TokensTransferredEvent): void {
  let entity = new TokensTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.messageId = event.params.messageId
  entity.destinationChainSelector = event.params.destinationChainSelector
  entity.receiver = event.params.receiver
  entity.token = event.params.token
  entity.tokenAmount = event.params.tokenAmount
  entity.feeToken = event.params.feeToken
  entity.fees = event.params.fees

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
