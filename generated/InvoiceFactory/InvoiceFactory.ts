// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Claim extends ethereum.Event {
  get params(): Claim__Params {
    return new Claim__Params(this);
  }
}

export class Claim__Params {
  _event: Claim;

  constructor(event: Claim) {
    this._event = event;
  }

  get _chainSelector(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _beneficiary(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferRequested extends ethereum.Event {
  get params(): OwnershipTransferRequested__Params {
    return new OwnershipTransferRequested__Params(this);
  }
}

export class OwnershipTransferRequested__Params {
  _event: OwnershipTransferRequested;

  constructor(event: OwnershipTransferRequested) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Pay extends ethereum.Event {
  get params(): Pay__Params {
    return new Pay__Params(this);
  }
}

export class Pay__Params {
  _event: Pay;

  constructor(event: Pay) {
    this._event = event;
  }

  get _chainSelector(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _receiver(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class TokensTransferred extends ethereum.Event {
  get params(): TokensTransferred__Params {
    return new TokensTransferred__Params(this);
  }
}

export class TokensTransferred__Params {
  _event: TokensTransferred;

  constructor(event: TokensTransferred) {
    this._event = event;
  }

  get messageId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get destinationChainSelector(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get receiver(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get tokenAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get feeToken(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get fees(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class InvoiceFactory extends ethereum.SmartContract {
  static bind(address: Address): InvoiceFactory {
    return new InvoiceFactory("InvoiceFactory", address);
  }

  allowlistedChains(param0: BigInt): boolean {
    let result = super.call(
      "allowlistedChains",
      "allowlistedChains(uint64):(bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBoolean();
  }

  try_allowlistedChains(param0: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "allowlistedChains",
      "allowlistedChains(uint64):(bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  allowlistedTokens(param0: Address): boolean {
    let result = super.call(
      "allowlistedTokens",
      "allowlistedTokens(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_allowlistedTokens(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "allowlistedTokens",
      "allowlistedTokens(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  chainSelector(): BigInt {
    let result = super.call("chainSelector", "chainSelector():(uint64)", []);

    return result[0].toBigInt();
  }

  try_chainSelector(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("chainSelector", "chainSelector():(uint64)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokens(param0: BigInt): Address {
    let result = super.call("tokens", "tokens(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_tokens(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("tokens", "tokens(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  transferTokensPayLINK(
    _destinationChainSelector: BigInt,
    _receiver: Address,
    _token: Address,
    _amount: BigInt
  ): Bytes {
    let result = super.call(
      "transferTokensPayLINK",
      "transferTokensPayLINK(uint64,address,address,uint256):(bytes32)",
      [
        ethereum.Value.fromUnsignedBigInt(_destinationChainSelector),
        ethereum.Value.fromAddress(_receiver),
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );

    return result[0].toBytes();
  }

  try_transferTokensPayLINK(
    _destinationChainSelector: BigInt,
    _receiver: Address,
    _token: Address,
    _amount: BigInt
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "transferTokensPayLINK",
      "transferTokensPayLINK(uint64,address,address,uint256):(bytes32)",
      [
        ethereum.Value.fromUnsignedBigInt(_destinationChainSelector),
        ethereum.Value.fromAddress(_receiver),
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  transferTokensPayNative(
    _destinationChainSelector: BigInt,
    _receiver: Address,
    _token: Address,
    _amount: BigInt
  ): Bytes {
    let result = super.call(
      "transferTokensPayNative",
      "transferTokensPayNative(uint64,address,address,uint256):(bytes32)",
      [
        ethereum.Value.fromUnsignedBigInt(_destinationChainSelector),
        ethereum.Value.fromAddress(_receiver),
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );

    return result[0].toBytes();
  }

  try_transferTokensPayNative(
    _destinationChainSelector: BigInt,
    _receiver: Address,
    _token: Address,
    _amount: BigInt
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "transferTokensPayNative",
      "transferTokensPayNative(uint64,address,address,uint256):(bytes32)",
      [
        ethereum.Value.fromUnsignedBigInt(_destinationChainSelector),
        ethereum.Value.fromAddress(_receiver),
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _invoiceFunction(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _addminWallet(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _chainSelector(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _router(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _link(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall extends ethereum.Call {
  get inputs(): AcceptOwnershipCall__Inputs {
    return new AcceptOwnershipCall__Inputs(this);
  }

  get outputs(): AcceptOwnershipCall__Outputs {
    return new AcceptOwnershipCall__Outputs(this);
  }
}

export class AcceptOwnershipCall__Inputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall__Outputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class AllowlistDestinationChainCall extends ethereum.Call {
  get inputs(): AllowlistDestinationChainCall__Inputs {
    return new AllowlistDestinationChainCall__Inputs(this);
  }

  get outputs(): AllowlistDestinationChainCall__Outputs {
    return new AllowlistDestinationChainCall__Outputs(this);
  }
}

export class AllowlistDestinationChainCall__Inputs {
  _call: AllowlistDestinationChainCall;

  constructor(call: AllowlistDestinationChainCall) {
    this._call = call;
  }

  get _destinationChainSelector(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get allowed(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class AllowlistDestinationChainCall__Outputs {
  _call: AllowlistDestinationChainCall;

  constructor(call: AllowlistDestinationChainCall) {
    this._call = call;
  }
}

export class AllowlistTokenCall extends ethereum.Call {
  get inputs(): AllowlistTokenCall__Inputs {
    return new AllowlistTokenCall__Inputs(this);
  }

  get outputs(): AllowlistTokenCall__Outputs {
    return new AllowlistTokenCall__Outputs(this);
  }
}

export class AllowlistTokenCall__Inputs {
  _call: AllowlistTokenCall;

  constructor(call: AllowlistTokenCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get allowed(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class AllowlistTokenCall__Outputs {
  _call: AllowlistTokenCall;

  constructor(call: AllowlistTokenCall) {
    this._call = call;
  }
}

export class ClaimCall extends ethereum.Call {
  get inputs(): ClaimCall__Inputs {
    return new ClaimCall__Inputs(this);
  }

  get outputs(): ClaimCall__Outputs {
    return new ClaimCall__Outputs(this);
  }
}

export class ClaimCall__Inputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }

  get _destinationChainSelector(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _beneficiary(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ClaimCall__Outputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class ClaimByUpkeepCall extends ethereum.Call {
  get inputs(): ClaimByUpkeepCall__Inputs {
    return new ClaimByUpkeepCall__Inputs(this);
  }

  get outputs(): ClaimByUpkeepCall__Outputs {
    return new ClaimByUpkeepCall__Outputs(this);
  }
}

export class ClaimByUpkeepCall__Inputs {
  _call: ClaimByUpkeepCall;

  constructor(call: ClaimByUpkeepCall) {
    this._call = call;
  }
}

export class ClaimByUpkeepCall__Outputs {
  _call: ClaimByUpkeepCall;

  constructor(call: ClaimByUpkeepCall) {
    this._call = call;
  }
}

export class PayCall extends ethereum.Call {
  get inputs(): PayCall__Inputs {
    return new PayCall__Inputs(this);
  }

  get outputs(): PayCall__Outputs {
    return new PayCall__Outputs(this);
  }
}

export class PayCall__Inputs {
  _call: PayCall;

  constructor(call: PayCall) {
    this._call = call;
  }

  get _destinationChainSelector(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _receiver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get subscriptionId(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get args(): Array<string> {
    return this._call.inputValues[5].value.toStringArray();
  }
}

export class PayCall__Outputs {
  _call: PayCall;

  constructor(call: PayCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class TransferTokensPayLINKCall extends ethereum.Call {
  get inputs(): TransferTokensPayLINKCall__Inputs {
    return new TransferTokensPayLINKCall__Inputs(this);
  }

  get outputs(): TransferTokensPayLINKCall__Outputs {
    return new TransferTokensPayLINKCall__Outputs(this);
  }
}

export class TransferTokensPayLINKCall__Inputs {
  _call: TransferTokensPayLINKCall;

  constructor(call: TransferTokensPayLINKCall) {
    this._call = call;
  }

  get _destinationChainSelector(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _receiver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class TransferTokensPayLINKCall__Outputs {
  _call: TransferTokensPayLINKCall;

  constructor(call: TransferTokensPayLINKCall) {
    this._call = call;
  }

  get messageId(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class TransferTokensPayNativeCall extends ethereum.Call {
  get inputs(): TransferTokensPayNativeCall__Inputs {
    return new TransferTokensPayNativeCall__Inputs(this);
  }

  get outputs(): TransferTokensPayNativeCall__Outputs {
    return new TransferTokensPayNativeCall__Outputs(this);
  }
}

export class TransferTokensPayNativeCall__Inputs {
  _call: TransferTokensPayNativeCall;

  constructor(call: TransferTokensPayNativeCall) {
    this._call = call;
  }

  get _destinationChainSelector(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _receiver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class TransferTokensPayNativeCall__Outputs {
  _call: TransferTokensPayNativeCall;

  constructor(call: TransferTokensPayNativeCall) {
    this._call = call;
  }

  get messageId(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _beneficiary(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawTokenCall extends ethereum.Call {
  get inputs(): WithdrawTokenCall__Inputs {
    return new WithdrawTokenCall__Inputs(this);
  }

  get outputs(): WithdrawTokenCall__Outputs {
    return new WithdrawTokenCall__Outputs(this);
  }
}

export class WithdrawTokenCall__Inputs {
  _call: WithdrawTokenCall;

  constructor(call: WithdrawTokenCall) {
    this._call = call;
  }

  get _beneficiary(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class WithdrawTokenCall__Outputs {
  _call: WithdrawTokenCall;

  constructor(call: WithdrawTokenCall) {
    this._call = call;
  }
}
