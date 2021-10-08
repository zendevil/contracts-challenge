import { BigInt } from "@graphprotocol/graph-ts"
import {
  ETHPool,
  Deposit,
  Reward,
  WithdrawDeposit,
  WithdrawReward
} from "../generated/ETHPool/ETHPool"
import { Deposit_, Reward_, WithdrawDeposit_, WithdrawReward_ } from "../generated/schema"

function makeid(length: number): string {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength: f64 = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(<i32>Math.floor(Math.random() * <f64> charactersLength));
   }
   return result;
}
export function handleDeposit(event: Deposit): void {
    let deposit = new Deposit_(makeid(10))
    deposit.sender = event.params.sender;
    deposit.value = event.params.value;
}

export function handleReward(event: Reward): void {
    let reward = new Reward_(makeid(10))
    reward.receiver = event.params.receiver;
    reward.value = event.params.value;
}

export function handleWithdrawDeposit(event: WithdrawDeposit): void {
    let withdrawDeposit = new WithdrawDeposit_(makeid(10))
    withdrawDeposit.sender = event.params.sender;
    withdrawDeposit.value = event.params.value;
}

export function handleWithdrawReward(event: WithdrawReward): void {
    let withdrawReward = new WithdrawReward_(makeid(10))
    withdrawReward.sender = event.params.sender;
    withdrawReward.value = event.params.value;
}
