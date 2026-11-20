// Mock and operational analytics data directly based on Section 9 & 10 of documentation

export const kpiMetrics = {
  monthlyGrossRevenue: 125000,
  monthlyOperatingExpenses: 52000,
  monthlyOperatingSurplus: 73000,
  surplusMargin: 58.4,
  governmentFeesCollected: 84500, // Pass-through amount tracked separately
  totalJobsCompleted: 1470,
  pendingJobs: 14,
  averageTicketValue: 85,
  repeatCustomerRate: '64.2%',
  topCategory: 'Govt Job Forms & Applications'
};

export const monthlyRevenueVsExpenses = [
  { month: 'Jan', revenue: 85000, expenses: 46000, surplus: 39000 },
  { month: 'Feb', revenue: 90000, expenses: 47000, surplus: 43000 },
  { month: 'Mar', revenue: 95000, expenses: 48000, surplus: 47000 },
  { month: 'Apr', revenue: 88000, expenses: 47500, surplus: 40500 },
  { month: 'May', revenue: 105000, expenses: 50000, surplus: 55000 },
  { month: 'Jun', revenue: 112000, expenses: 51000, surplus: 61000 },
  { month: 'Jul', revenue: 108000, expenses: 50500, surplus: 57500 },
  { month: 'Aug', revenue: 115000, expenses: 51500, surplus: 63500 },
  { month: 'Sep', revenue: 120000, expenses: 52000, surplus: 68000 },
  { month: 'Oct', revenue: 125000, expenses: 52000, surplus: 73000 },
  { month: 'Nov', revenue: 118000, expenses: 51000, surplus: 67000 },
  { month: 'Dec', revenue: 132000, expenses: 53500, surplus: 78500 }
];

export const revenueByCategory = [
  { name: 'Govt Forms & Exams', value: 30000, color: '#1e40af', percentage: '24.0%' },
  { name: 'Xerox & Printing', value: 26000, color: '#2563eb', percentage: '20.8%' },
  { name: 'Certificates & Schemes', value: 22000, color: '#f59e0b', percentage: '17.6%' },
  { name: 'KYC & Identity Help', value: 18000, color: '#10b981', percentage: '14.4%' },
  { name: 'Scan / Photo / Lamination', value: 14000, color: '#06b6d4', percentage: '11.2%' },
  { name: 'Typing & Resume', value: 10000, color: '#8b5cf6', percentage: '8.0%' },
  { name: 'Internet & Email Access', value: 5000, color: '#64748b', percentage: '4.0%' }
];

export const topServicesRanked = [
  { name: 'SSC / UPSC / Railway Forms', revenue: 22500, orders: 195, tag: 'Govt Jobs' },
  { name: 'A4 B&W Bulk Photocopy', revenue: 18400, orders: 480, tag: 'Printing' },
  { name: 'PAN Card Assistance', revenue: 14200, orders: 118, tag: 'KYC' },
  { name: 'Income / Caste Certificate Guidance', revenue: 12800, orders: 112, tag: 'Citizen' },
  { name: 'A4 Color Laser Printouts', revenue: 10200, orders: 290, tag: 'Printing' },
  { name: 'Admit Card Printouts', revenue: 7500, orders: 360, tag: 'Govt Jobs' },
  { name: 'Document Scan & Portal Compress', revenue: 6800, orders: 210, tag: 'Scanning' },
  { name: 'Instant Passport Photos', revenue: 6200, orders: 95, tag: 'Finishing' }
];

export const operatingExpensesBreakdown = [
  { item: 'Staff Salaries (2 Demo Operators)', amount: 18000, share: '34.6%', icon: 'Users' },
  { item: 'Shop Rent (Demo Commercial Area)', amount: 12000, share: '23.1%', icon: 'Building2' },
  { item: 'Paper & Toner Consumables', amount: 10000, share: '19.2%', icon: 'Printer' },
  { item: 'Electricity & Inverter Backup', amount: 4500, share: '8.7%', icon: 'Zap' },
  { item: 'Other Supplies & Cleaning', amount: 4300, share: '8.3%', icon: 'ShoppingBag' },
  { item: 'Machine Maintenance & AMC', amount: 2000, share: '3.8%', icon: 'Wrench' },
  { item: 'High-Speed Fiber Broadband', amount: 1200, share: '2.3%', icon: 'Wifi' }
];

export const mockOrdersQueue = [
  { id: 'ORD-1049', customer: 'Demo Applicant: Vikas V.', service: 'SSC GD Constable Form + Photo Crop', time: '10 mins ago', status: 'In Progress', fee: 120, govtFee: 100 },
  { id: 'ORD-1048', customer: 'Demo Citizen: Sunita D.', service: 'Caste & Income Certificate Upload', time: '25 mins ago', status: 'Awaiting Docs', fee: 150, govtFee: 30 },
  { id: 'ORD-1047', customer: 'Demo Student: Amit K.', service: '120 Pages Thesis B&W Print + Spiral', time: '40 mins ago', status: 'Ready for Pickup', fee: 240, govtFee: 0 },
  { id: 'ORD-1046', customer: 'Demo Citizen: Pooja S.', service: 'New PAN Card Application Form', time: '1 hr ago', status: 'Completed', fee: 100, govtFee: 107 },
  { id: 'ORD-1045', customer: 'Demo Citizen: Rajesh M.', service: 'Admit Card Download & Color Print', time: '1.5 hrs ago', status: 'Completed', fee: 20, govtFee: 0 },
  { id: 'ORD-1044', customer: 'Demo Professional: Deepak J.', service: 'Resume Typing & Formatting (2 Prints)', time: '2 hrs ago', status: 'Completed', fee: 150, govtFee: 0 }
];
