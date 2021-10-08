// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Deposit_ extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Deposit_ entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Deposit_ entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Deposit_", id.toString(), this);
  }

  static load(id: string): Deposit_ | null {
    return store.get("Deposit_", id) as Deposit_ | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sender(): Bytes | null {
    let value = this.get("sender");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set sender(value: Bytes | null) {
    if (value === null) {
      this.unset("sender");
    } else {
      this.set("sender", Value.fromBytes(value as Bytes));
    }
  }

  get value(): BigInt | null {
    let value = this.get("value");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set value(value: BigInt | null) {
    if (value === null) {
      this.unset("value");
    } else {
      this.set("value", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Reward_ extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Reward_ entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Reward_ entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Reward_", id.toString(), this);
  }

  static load(id: string): Reward_ | null {
    return store.get("Reward_", id) as Reward_ | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get receiver(): Bytes | null {
    let value = this.get("receiver");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set receiver(value: Bytes | null) {
    if (value === null) {
      this.unset("receiver");
    } else {
      this.set("receiver", Value.fromBytes(value as Bytes));
    }
  }

  get value(): BigInt | null {
    let value = this.get("value");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set value(value: BigInt | null) {
    if (value === null) {
      this.unset("value");
    } else {
      this.set("value", Value.fromBigInt(value as BigInt));
    }
  }
}

export class WithdrawDeposit_ extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save WithdrawDeposit_ entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save WithdrawDeposit_ entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("WithdrawDeposit_", id.toString(), this);
  }

  static load(id: string): WithdrawDeposit_ | null {
    return store.get("WithdrawDeposit_", id) as WithdrawDeposit_ | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sender(): Bytes | null {
    let value = this.get("sender");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set sender(value: Bytes | null) {
    if (value === null) {
      this.unset("sender");
    } else {
      this.set("sender", Value.fromBytes(value as Bytes));
    }
  }

  get value(): BigInt | null {
    let value = this.get("value");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set value(value: BigInt | null) {
    if (value === null) {
      this.unset("value");
    } else {
      this.set("value", Value.fromBigInt(value as BigInt));
    }
  }
}

export class WithdrawReward_ extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save WithdrawReward_ entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save WithdrawReward_ entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("WithdrawReward_", id.toString(), this);
  }

  static load(id: string): WithdrawReward_ | null {
    return store.get("WithdrawReward_", id) as WithdrawReward_ | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sender(): Bytes | null {
    let value = this.get("sender");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set sender(value: Bytes | null) {
    if (value === null) {
      this.unset("sender");
    } else {
      this.set("sender", Value.fromBytes(value as Bytes));
    }
  }

  get value(): BigInt | null {
    let value = this.get("value");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set value(value: BigInt | null) {
    if (value === null) {
      this.unset("value");
    } else {
      this.set("value", Value.fromBigInt(value as BigInt));
    }
  }
}