export const data: Data = {
    report: [],
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

enum ReportType {
    INCOME = "income",
    EXPENSE = "expense"
}

data.report.push({
    id: '1',
    source: 'Salary',
    amount: 100,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME
})