import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { Download, FileText } from 'lucide-react';
import InvoiceForm from './components/InvoiceForm';
import InvoicePreview from './components/InvoicePreview';
function App() {
  const [count, setCount] = useState(0)
  const previewRef = useRef();
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: '3349',
    date: new Date().toLocaleDateString(),
    items: [
      { id: 1, description: 'Website Design', price: 400, qty: 1, total: 400 },
      { id: 2, description: 'Frontend Development', price: 200, qty: 1, total: 200 },
    ],
    paymentInfo: {
      accountNo: '1234567890',
      accountName: 'John Doe',
      bankDetails: 'Bank of America, Branch 42, SWIFT: BOFAUS3N'
    },
    terms: 'Please pay within 15 days of receiving this invoice.',
    taxRate: 10,
    email: 'john@website.com',
    website: 'www.website.com',
    phone: '+34 605 22 22 56'
  });
  const handleDataChange = (newData) => {
    setInvoiceData({ ...invoiceData, ...newData });
  };
  const handleDownloadPdf = () => {
    const element = previewRef.current;
    
    // Configure html2pdf options
    const opt = {
      margin:       0,
