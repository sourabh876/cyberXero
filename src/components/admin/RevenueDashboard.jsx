import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Legend,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Download, 
  Calendar, 
  Filter, 
  ArrowUpRight, 
  PieChart as PieIcon, 
  Users, 
  Building2, 
  Printer, 
  Zap, 
  Wifi, 
  Wrench, 
  ShoppingBag,
  Briefcase,
  HelpCircle,
  FileSpreadsheet,
  Layers
} from 'lucide-react';
import { 
  kpiMetrics, 
  monthlyRevenueVsExpenses, 
  revenueByCategory, 
  topServicesRanked, 
  operatingExpensesBreakdown, 
  mockOrdersQueue 
} from '../../data/adminData';

export default function RevenueDashboard({ onBackToWebsite }) {
  const [dateRange, setDateRange] = useState('This Month (Oct 2026)');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');
  const [orderFilter, setOrderFilter] = useState('all');

  // Filter orders
  const filteredOrders = orderFilter === 'all' 
    ? mockOrdersQueue 
    : mockOrdersQueue.filter(o => o.status.toLowerCase().includes(orderFilter.toLowerCase()));

  // Export CSV functionality
  const handleExportCSV = () => {
    const headers = "Month,Gross Service Revenue (INR),Operating Expenses (INR),Operating Surplus (INR)\n";
    const rows = monthlyRevenueVsExpenses
      .map(m => `${m.month},${m.revenue},${m.expenses},${m.surplus}`)
      .join("\n");
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CyberCafe_Revenue_Report_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-slate-100/70 pb-20 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Management Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-brand-blue-50 text-brand-blue-800 border border-brand-blue-200 text-xs font-bold uppercase tracking-wider">
                Internal Management View
              </span>
              <span className="text-xs text-slate-400">Live POS & Counter Records</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-blue-950 tracking-tight">
              Revenue Analytics & Operations Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Based on Section 10 of the Business Specification: Shop service charges and government fees tracked separately.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-brand-blue-900 border border-slate-200 text-xs font-bold transition shadow-sm"
              title="Download CSV financial projection"
            >
              <FileSpreadsheet className="w-4 h-4 text-brand-emerald-600" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={onBackToWebsite}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-blue-700 hover:bg-brand-blue-800 text-white text-xs font-bold transition shadow-sm"
            >
              <span>← Back to Customer Website</span>
            </button>
          </div>
        </div>

        {/* Regulatory & Accounting Banner */}
        <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 flex items-start gap-3 text-xs leading-relaxed">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>Section 10 Accounting Principle:</strong> Gross Service Revenue represents net shop earnings for assisted services, xerox, typing, and printing. Government application fees (e.g., SSC exam fee, RTO tax, PAN statutory charge) are collected on behalf of public authorities as <strong>pass-through receipts</strong> and are strictly excluded from shop revenue.
          </div>
        </div>

        {/* 10.1 Recommended KPI Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Gross Service Revenue */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Gross Service Revenue</span>
              <div className="w-8 h-8 rounded-lg bg-brand-blue-50 text-brand-blue-700 flex items-center justify-center font-bold">
                ₹
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-brand-blue-950 font-mono">
              ₹{kpiMetrics.monthlyGrossRevenue.toLocaleString('en-IN')}
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-xs font-semibold text-brand-emerald-600">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+14.2% MoM walk-in growth</span>
            </div>
            <span className="text-[10px] text-slate-400 block mt-1">Excludes official pass-through fees</span>
          </div>

          {/* Card 2: Operating Expenses & Surplus */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Operating Surplus</span>
              <div className="w-8 h-8 rounded-lg bg-brand-emerald-50 text-brand-emerald-600 flex items-center justify-center font-bold">
                %
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-brand-emerald-700 font-mono">
              ₹{kpiMetrics.monthlyOperatingSurplus.toLocaleString('en-IN')}
            </div>
            <div className="flex items-center justify-between mt-2 text-xs font-medium text-slate-500">
              <span>Expenses: ₹{kpiMetrics.monthlyOperatingExpenses.toLocaleString('en-IN')}</span>
              <span className="font-bold text-brand-emerald-600">{kpiMetrics.surplusMargin}% Margin</span>
            </div>
            <span className="text-[10px] text-slate-400 block mt-1">Rent + 2 Staff + Toner + Power</span>
          </div>

          {/* Card 3: Pass-Through Government Fees */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Govt / Portal Fees</span>
              <div className="w-8 h-8 rounded-lg bg-brand-saffron-50 text-brand-saffron-600 flex items-center justify-center font-bold">
                🏛
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-800 font-mono">
              ₹{kpiMetrics.governmentFeesCollected.toLocaleString('en-IN')}
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-xs font-semibold text-brand-saffron-600">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% Official Receipts Issued</span>
            </div>
            <span className="text-[10px] text-slate-400 block mt-1">Pass-through fiduciary collections</span>
          </div>

          {/* Card 4: Orders & Average Ticket Size */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Jobs Completed</span>
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                #
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-brand-blue-950 font-mono">
              {kpiMetrics.totalJobsCompleted.toLocaleString('en-IN')}
            </div>
            <div className="flex items-center justify-between mt-2 text-xs text-slate-600 font-medium">
              <span>Avg Bill: <strong>₹{kpiMetrics.averageTicketValue}</strong></span>
              <span className="text-brand-saffron-600 font-bold">{kpiMetrics.pendingJobs} Pending</span>
            </div>
            <span className="text-[10px] text-slate-400 block mt-1">Repeat walk-in rate: {kpiMetrics.repeatCustomerRate}</span>
          </div>

        </div>

        {/* 10.2 Charts Section: Revenue vs Expenses & Category Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Revenue vs Expenses Trend (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <h3 className="font-extrabold text-base sm:text-lg text-brand-blue-950">
                  Monthly Revenue vs Operating Expenses
                </h3>
                <p className="text-xs text-slate-500">12-Month Financial Performance & Operating Surplus</p>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1.5 font-medium text-slate-600">
                  <span className="w-3 h-3 rounded bg-brand-blue-700 inline-block" /> Revenue
                </span>
                <span className="flex items-center gap-1.5 font-medium text-slate-600">
                  <span className="w-3 h-3 rounded bg-slate-300 inline-block" /> Expenses
                </span>
              </div>
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyRevenueVsExpenses} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} tickLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={11} tickFormatter={(val) => `₹${val / 1000}k`} tickLine={false} />
                  <Tooltip 
                    formatter={(value) => [`₹${value.toLocaleString('en-IN')}`, 'Amount']}
                    contentStyle={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '12px' }}
                  />
                  <Bar dataKey="revenue" fill="#1e40af" radius={[4, 4, 0, 0]} name="Shop Revenue" />
                  <Bar dataKey="expenses" fill="#cbd5e1" radius={[4, 4, 0, 0]} name="Operating Expenses" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Annual Planning Total: <strong className="text-brand-blue-900">₹12,93,000</strong></span>
              <span>Peak Month: <strong className="text-brand-emerald-600">December (₹1,32,000)</strong></span>
            </div>
          </div>

          {/* Revenue Split by Category (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-extrabold text-base sm:text-lg text-brand-blue-950">
                  Revenue Split by Category
                </h3>
                <span className="text-xs font-bold text-brand-saffron-600">₹1,25,000 / mo</span>
              </div>
              <p className="text-xs text-slate-500 mb-4">Breakdown of billable walk-in transactions</p>

              <div className="h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={revenueByCategory}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {revenueByCategory.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(val) => [`₹${val.toLocaleString('en-IN')}`, 'Revenue']}
                      contentStyle={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '12px' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Category breakdown table */}
            <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
              {revenueByCategory.slice(0, 4).map((c, i) => (
                <div key={i} className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                    <span className="text-slate-700 font-medium">{c.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">₹{c.value.toLocaleString('en-IN')}</span>
                    <span className="text-[11px] text-slate-400">({c.percentage})</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Operating Expenses & Top Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Section 10.4 Monthly Operating Expenses Breakdown (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div>
                <h3 className="font-extrabold text-base text-brand-blue-950">
                  Monthly Operating Expenses (₹52,000)
                </h3>
                <p className="text-xs text-slate-500">Fixed & variable operational overheads</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold font-mono">
                7 Cost Centers
              </span>
            </div>

            <div className="space-y-3">
              {operatingExpensesBreakdown.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-brand-saffron-500" />
                    <span className="font-medium text-slate-800">{item.item}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-extrabold text-brand-blue-950 font-mono">₹{item.amount.toLocaleString('en-IN')}</span>
                    <span className="px-2 py-0.5 rounded bg-white text-slate-500 text-[10px] font-bold border border-slate-200">
                      {item.share}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 rounded-xl bg-brand-emerald-50 border border-brand-emerald-200 flex items-center justify-between text-xs text-brand-emerald-900">
              <span>Monthly Operating Surplus (Revenue − Expenses):</span>
              <strong className="text-sm font-extrabold text-brand-emerald-700">₹73,000 (58.4%)</strong>
            </div>
          </div>

          {/* Top 8 Services Ranked by Revenue (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div>
                <h3 className="font-extrabold text-base text-brand-blue-950">
                  Top Services by Monthly Revenue
                </h3>
                <p className="text-xs text-slate-500">Highest grossing assisted counter tasks</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-brand-blue-50 text-brand-blue-700 text-xs font-bold">
                Volume Rank
              </span>
            </div>

            <div className="space-y-2.5">
              {topServicesRanked.map((srv, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0 text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-brand-blue-100 text-brand-blue-700 font-bold flex items-center justify-center text-[10px]">
                      {idx + 1}
                    </span>
                    <div>
                      <span className="font-bold text-slate-800 block">{srv.name}</span>
                      <span className="text-[10px] text-slate-400">{srv.orders} completed transactions</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-extrabold text-brand-blue-900 block font-mono">₹{srv.revenue.toLocaleString('en-IN')}</span>
                    <span className="text-[10px] text-slate-400">{srv.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Live Operational Job Queue (Section 12 - Service Jobs/Orders Mock) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-emerald-500 animate-ping" />
                <h3 className="font-extrabold text-base sm:text-lg text-brand-blue-950">
                  Counter Order Queue (Live Operations Desk)
                </h3>
              </div>
              <p className="text-xs text-slate-500">Active walk-in customer requests, document checks, and billing status</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-medium">Filter Status:</span>
              <select
                value={orderFilter}
                onChange={(e) => setOrderFilter(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 focus:outline-none"
              >
                <option value="all">All Orders</option>
                <option value="In Progress">In Progress</option>
                <option value="Awaiting Docs">Awaiting Docs</option>
                <option value="Ready for Pickup">Ready for Pickup</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3 px-4">Ticket ID</th>
                  <th className="py-3 px-4">Customer Name</th>
                  <th className="py-3 px-4">Service Required</th>
                  <th className="py-3 px-4">Shop Fee</th>
                  <th className="py-3 px-4">Govt Pass-Through</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredOrders.map((ord, idx) => {
                  let statusBadge = 'bg-slate-100 text-slate-700';
                  if (ord.status === 'Completed') statusBadge = 'bg-brand-emerald-50 text-brand-emerald-700 border-brand-emerald-200';
                  if (ord.status === 'In Progress') statusBadge = 'bg-brand-blue-50 text-brand-blue-700 border-brand-blue-200';
                  if (ord.status === 'Awaiting Docs') statusBadge = 'bg-brand-saffron-50 text-brand-saffron-700 border-brand-saffron-200';
                  if (ord.status === 'Ready for Pickup') statusBadge = 'bg-purple-50 text-purple-700 border-purple-200';

                  return (
                    <tr key={idx} className="hover:bg-slate-50/70 transition">
                      <td className="py-3 px-4 font-mono font-bold text-brand-blue-900 text-xs">
                        {ord.id}
                      </td>
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        {ord.customer}
                      </td>
                      <td className="py-3 px-4 text-slate-600 text-xs">
                        {ord.service}
                      </td>
                      <td className="py-3 px-4 font-bold text-brand-blue-700 font-mono">
                        ₹{ord.fee}
                      </td>
                      <td className="py-3 px-4 text-slate-500 font-mono text-xs">
                        {ord.govtFee > 0 ? `₹${ord.govtFee}` : '—'}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${statusBadge}`}>
                          {ord.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-[11px] text-slate-400">
                        {ord.time}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
