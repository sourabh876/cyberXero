import React from 'react';
import RevenueDashboard from '../components/admin/RevenueDashboard';
import { useNavigate } from 'react-router-dom';

export default function AdminPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <RevenueDashboard onBackToWebsite={() => navigate('/')} />
    </div>
  );
}
