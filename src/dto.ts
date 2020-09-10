class SendTransaction {
    activityId: string
    amount: string
    recipient: string
    walletId: number
    approved: boolean
    status: TransactionStatus = TransactionStatus.PENDING
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

export enum TransactionStatus {
    PENDING = 'pending',
    APPROVED = 'aproved',
    REJECTED = 'rejected',
    PROCESSING = 'processing',
    CONFIRMED = 'confirmed'
}