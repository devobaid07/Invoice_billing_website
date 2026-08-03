# Invoice Billing System

A clean, modern invoice and billing web application that lets freelancers, small businesses, and agencies create, manage, and track invoices with ease. Built entirely with **HTML, CSS, and JavaScript**, featuring a purple-magenta accent theme, the Inter typeface, and a distraction-free, professional interface.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Design System](#design-system)
- [Project Structure](#project-structure)
- [Data Model](#data-model)
- [Getting Started](#getting-started)
- [Usage Guide](#usage-guide)
- [Invoice Calculation Logic](#invoice-calculation-logic)
- [PDF Export](#pdf-export)
- [Browser Support](#browser-support)
- [Roadmap](#roadmap)
- [Known Limitations](#known-limitations)
- [FAQ](#faq)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Overview

**Invoice Billing System** is a fully front-end invoicing tool designed to remove the friction of billing clients manually. Instead of juggling spreadsheets or paid SaaS tools, users can generate professional, itemized invoices directly in the browser — complete with automatic tax and total calculations, client record-keeping, status tracking, and print/PDF export — all without needing a backend or database.

Data is persisted locally in the browser (`localStorage`), which means the app works fully offline once loaded and requires zero setup cost to start using.

**Live Demo:** [Add your deployed link here]

---

## Features

### Invoice Creation
- Add client name, email, address, and phone number per invoice
- Add unlimited line items, each with description, quantity, unit price
- Set custom tax percentage and discount (flat or percentage)
- Auto-generated invoice number and date, with editable due date
- Add notes / payment terms to the invoice footer

### Calculations
- Real-time subtotal calculation as items are added or edited
- Automatic tax and discount application to compute the grand total
- Currency formatting applied consistently across the UI and exports

### Client Management
- Save clients once and reuse them across multiple invoices
- Edit or delete saved client records
- Quick client search/autocomplete when creating a new invoice

### Invoice Tracking
- Dashboard view listing all invoices with status badges: **Paid**, **Pending**, **Overdue**
- Filter/sort
