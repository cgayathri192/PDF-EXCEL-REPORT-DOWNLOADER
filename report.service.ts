import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getReportData(reportType: string) {
    return this.http.get<{ data: string }>(`${this.apiUrl}/${reportType}`);
  }

  
  generatePDF(data: string, filename: string) {
    const doc = new jsPDF();
    doc.text(data, 10, 10);
    doc.save(filename);
  }

}
