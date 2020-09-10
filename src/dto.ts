class SendTransaction {
    activityId: string
    amount: string
    recipient: string
    walletId: number
    approved: boolean
    status: string
    createdAt: Date
    updatedAt: Date
}

export class SendTransactionBTC extends SendTransaction {    
    txid?: string
    statoshis?: string
}

export class SendTransactionETH extends SendTransaction {    
    hash?: string
    gas?: string
    gasLimit?: string
}