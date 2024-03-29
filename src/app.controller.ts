import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { type } from 'os';
import { ReportType, data } from 'src/data';
import { v4 as uuid } from "uuid"

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports(@Param('type') type: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => report.type === reportType);
  }
  @Get(':id')
  getReportById(@Param('type') type: string, @Param('id') id: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
  }

  @Post()
  createReport(@Body() { amount, source }: { amount: number; source: string }, @Param('type') type: string) {
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type === 'income' ? ReportType.INCOME : ReportType.EXPENSE

    }
    data.report.push(newReport)
    return newReport;
  }

  @Put(':id')
  updateReport(
    @Param('type') type: string,
    @Param('id') id: string,
    @Body() { amount, source }: { amount: number; source: string },
  ) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    const report = data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);

    if (!report) return;

    const reportIndex = data.report.findIndex((report)=> report.id === id === reportToUpdate.id);

    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
    };
    return data.report[reportIndex];
  }

  @Delete(':id')
  deleteReport() {
    return 'Delete';
  }
}
