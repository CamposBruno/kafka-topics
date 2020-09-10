export const PENDING_TRANSACTIONS_TOPICS = {
    btc : {
        topic : 'pending-transactions-btc',
        numPartitions: 1    
    },
    eth : {
        topic : 'pending-transactions-eth',
        numPartitions: 1    
    }
}

export const APPROVED_TRANSACTIONS_TOPICS = {
    btc: {
        topic : 'approved-transactions-btc',
        numPartitions: 1    
    },
    eth: {
        topic : 'approved-transactions-eth',
        numPartitions: 1    
    }
}