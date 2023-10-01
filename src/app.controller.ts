import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { ReportType, data } from 'src/data'

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports(
    @Param('type') type: string
    console.log(type)
  ) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
      return data.report.filter((report => report.type === reportType);
  }
  @Get(':id')
  getReportById() {
    return {};
  }

  @Post()
  createReport() {
    return 'Created';
  }

  @Put(':id')
  updateReport() {
    return 'Updated';
  }

  @Delete(':id')
  deleteReport() {
    return 'Delete';
  }
}
