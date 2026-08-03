
// Initialize Lucide icons
lucide.createIcons();
// State
let items = [
  { id: Date.now(), description: 'Website Design', price: 400, qty: 1 }
];
// DOM Elements
const itemsTbody = document.getElementById('items-tbody');
const prevItemsTbody = document.getElementById('prev-items-tbody');
// Form Inputs
const inputInvoiceNumber = document.getElementById('input-invoice-number');
const inputDate = document.getElementById('input-date');
const inputFrom = document.getElementById('input-from');
const inputTo = document.getElementById('input-to');
const inputCurrency = document.getElementById('input-currency');
const inputFont = document.getElementById('input-font');
const inputLogo = document.getElementById('input-logo');
const inputSignature = document.getElementById('input-signature');
const inputTaxRate = document.getElementById('input-tax-rate');
const inputDiscount = document.getElementById('input-discount');
const inputEmail = document.getElementById('input-email');
const inputWebsite = document.getElementById('input-website');
const inputPhone = document.getElementById('input-phone');
const inputAccNo = document.getElementById('input-acc-no');
const inputAccName = document.getElementById('input-acc-name');
const inputBankDetails = document.getElementById('input-bank-details');
// Preview Elements
const prevInvoiceNumber = document.getElementById('prev-invoice-number');
const prevDate = document.getElementById('prev-date');
const prevFrom = document.getElementById('prev-from');
const prevTo = document.getElementById('prev-to');
const prevLogoText = document.getElementById('prev-logo-text');
const prevLogoTagline = document.getElementById('prev-logo-tagline');
const prevLogoImg = document.getElementById('prev-logo-img');
const prevSignatureImg = document.getElementById('prev-signature-img');
const prevSignatureLine = document.getElementById('prev-signature-line');
