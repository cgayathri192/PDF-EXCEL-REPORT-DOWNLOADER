import { Component } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})

export class ReportComponent {


  activeDropdown: string | null = null;

  constructor(private reportService: ReportService) {}

  toggleDropdown(dropdownId: string) {
    this.activeDropdown = this.activeDropdown === dropdownId ? null : dropdownId;
  }


  downloadFile(reportType: string, fileType: string) {
    this.reportService.getReportData(reportType).subscribe((data) => {
      const reportData = data.data;
      const filename = `${reportType}.${fileType}`;
  
      if (fileType === 'pdf') {
        this.reportService.generatePDF(reportData, filename);
      }
    });
  }
  

}
