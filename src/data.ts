export const data: Data = {
    report: [
        {
            id: "id01",
            source: "Salary",
            amount: 7500,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: "id02",
            source: "Udemy",
            amount: 1500,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: "id03",
            source: "Food",
            amount: 1500,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
        }
    ],
};

interface Data {
    report: {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: "income" | "expense";

    }[]
}

export enum ReportType {
    INCOME = "income",
    EXPENSE = "expense"
}

// data.report.push({
//     id: '1',
//     source: 'Salary',
//     amount: 100,
//     created_at: new Date(),
//     updated_at: new Date(),
//     type: ReportType.INCOME
// })