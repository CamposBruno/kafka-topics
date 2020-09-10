class SendTransaction {
    amount: string
    recipient: string
    walletId: number
    approved: boolean
    createdAt: Date
    updatedAt: Date
}

export class SendTransactionBTC extends SendTransaction {    
    statoshis?: string
}

export class SendTransactionETH extends SendTransaction {    
    gas?: string
    gasLimit?: string
}