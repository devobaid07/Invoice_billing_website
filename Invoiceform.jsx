import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
const InvoiceForm = ({ data, onChange }) => {
  const handleItemChange = (id, field, value) => {
    const newItems = data.items.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    });
    onChange({ items: newItems });
  };
  const addItem = () => {
    const newItem = {
      id: Date.now(),
      description: '',
      price: 0,
      qty: 1,
      total: 0
    };
    onChange({ items: [...data.items, newItem] });
  };
  const removeItem = (id) => {
    onChange({ items: data.items.filter(item => item.id !== id) });
  };
  const handlePaymentChange = (field, value) => {
    onChange({ paymentInfo: { ...data.paymentInfo, [field]: value } });
  };
  return (
    <div className="invoice-form">
      <div className="form-group row">
        <div>
          <label>Invoice Number</label>
          <input 
            type="text" 
            value={data.invoiceNumber} 
            onChange={e => onChange({ invoiceNumber: e.target.value })} 
          />
        </div>
        <div>
          <label>Date</label>
          <input 
            type="text" 
            value={data.date} 
