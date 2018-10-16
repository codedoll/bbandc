export interface Transaction {
    key?: string;
    transactType: string;
    transactId: string;
    // uniqueId: string;
    // isPending: boolean;
    accountName: string;
    accountNumber: number;
    date: Date;
    amt: number;
    user: string;
    // TotalAmt: number;
    // PreviousAmt: number;
    // PreviousChangeDate: Date;
}