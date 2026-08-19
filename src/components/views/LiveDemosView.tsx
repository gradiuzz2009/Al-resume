import React, { useState } from 'react';
import { 
  MonitorPlay, 
  Layers, 
  Search, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  TrendingUp, 
  DollarSign, 
  Cpu, 
  HardDrive, 
  ShieldCheck, 
  Sparkles, 
  Server, 
  Box, 
  Truck, 
  Check, 
  ArrowRight,
  Filter,
  Plus,
  RefreshCw,
  FileText,
  Building2,
  Target,
  Briefcase,
  BadgeCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface LiveDemosViewProps {
  initialDemo?: string;
}

// ─── Enterprise Transformation Framework — strategic layers ───
const TRANSFORMATION_LAYERS = [
  {
    label: 'Business Transformation Domains',
    items: ['Finance', 'Operations', 'Compliance', 'Warehousing', 'Service Management', 'AI'],
    icon: Building2
  },
  {
    label: 'Transformation Challenges Solved',
    items: ['Cost Control', 'Governance', 'Process Efficiency', 'Legacy Modernization'],
    icon: Target
  },
  {
    label: 'Interactive Enterprise Demonstrations',
    items: ['FinOps', 'ITSM', 'ERP', 'Warehouse', 'Compliance'],
    icon: MonitorPlay
  },
  {
    label: 'Technology Foundation',
    items: ['Microsoft 365', 'Dataverse', 'Power Platform', 'AI'],
    icon: Layers
  }
];

// ─── Architecture Strategy per demonstration (Challenge → Approach → Result) ───
const DEMO_STRATEGIES: Record<string, { challenge: string; approach: string; result: string; benefits: string[] }> = {
  finops: {
    challenge: 'Disparate cloud purchases created fragmented oversight and licensing inefficiencies.',
    approach: 'Designed a centralized governance framework integrating procurement workflows, approval chains, spending analytics, and executive reporting.',
    result: 'Enabled transparent spending management and stronger operational governance.',
    benefits: ['Reduced approval delays', 'Improved policy compliance', 'Increased visibility into operational costs', 'Faster reporting cycles', 'Stronger audit readiness']
  },
  'it-service': {
    challenge: 'Service requests were tracked across fragmented tools, creating SLA risk and limited operational visibility.',
    approach: 'Consolidated incident, request, and governance workflows into a single service operations platform with SLA monitoring and governed acceptance windows.',
    result: 'Zero SLA breaches with a governed 72-hour acceptance window across mapped operational processes.',
    benefits: ['Reduced service downtime', 'Faster incident resolution', 'Improved IT governance', 'Clearer operational accountability']
  },
  erp: {
    challenge: 'Procurement and staff requisitions relied on manual approval chains with limited audit trails.',
    approach: 'Automated a four-tier approval flow with mandatory internal lockouts, ERP synchronization, and policy enforcement.',
    result: 'Accelerated procurement cycles while preserving compliance and audit integrity.',
    benefits: ['Faster procurement cycles', 'Stronger audit trails', 'Consistent policy enforcement', 'Reduced manual reconciliation']
  },
  warehouse: {
    challenge: 'Pre-loading inspections and stock movements were paper-based, creating demurrage risk and compliance gaps.',
    approach: 'Digitized container inspections with geo-tagged photo evidence, automated gate passes, and ERP-synchronized stock movement logging.',
    result: 'Zero demurrage delays with 100% inspection evidence captured in-field.',
    benefits: ['Reduced demurrage penalties', 'Improved inspection compliance', 'Real-time stock visibility', 'Faster gate release']
  },
  maintenance: {
    challenge: 'Asset reliability and server health checks were reactive, risking unplanned downtime and audit findings.',
    approach: 'Built a unified command center combining plant telemetry, preventative maintenance work orders, and automated server audit checklists.',
    result: 'Proactive reliability management with verified recovery targets and audit-ready records.',
    benefits: ['Reduced unplanned downtime', 'Improved asset reliability', 'Audit-ready evidence', 'Faster issue detection']
  },
  rebate: {
    challenge: 'Multi-component commercial rebates were calculated manually, creating errors, disputes, and slow approval cycles.',
    approach: 'Engineered a governed calculation engine applying seven formula components with statutory caps and multi-level approval scheduling.',
    result: 'Reduced approval cycle time from days to ~15 minutes with policy-enforced ceiling controls.',
    benefits: ['Faster commercial approvals', 'Eliminated calculation errors', 'Policy-enforced caps', 'Improved partner trust']
  },
  'cs-resolver': {
    challenge: 'Customer inquiries were routed manually across 120+ SOP categories, inflating handling time and inconsistency.',
    approach: 'Deployed an AI-enabled classification engine that routes issues to the correct SOP and deep-links operators to resolution workspaces.',
    result: '50–80% handling time reduction with consistent, audit-tracked issue resolution.',
    benefits: ['Reduced handling time', 'Consistent classifications', 'Faster decision-making', 'Scalable knowledge operations']
  }
};

const StrategyBlock: React.FC<{ demoId: string }> = ({ demoId }) => {
  const strategy = DEMO_STRATEGIES[demoId];
  if (!strategy) return null;
  return (
    <div className="glass-card p-5 sm:p-6 rounded-2xl border border-[#282a2e] space-y-5 animate-in fade-in duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <Briefcase className="w-4 h-4 text-[#00dbe7]" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wide">Architecture Strategy</h3>
        </div>
        <span className="text-[10px] font-mono text-[#c0c7d4] bg-[#111318] px-3 py-1.5 rounded-lg border border-[#282a2e] max-w-md leading-relaxed">
          Representative enterprise-scale operating model — governance workflows, budget controls, and approval processes commonly used in large organizations.
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-[#111318] border border-[#282a2e] space-y-2">
          <p className="text-[10px] font-mono uppercase text-amber-400 font-bold flex items-center space-x-1.5">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Business Challenge</span>
          </p>
          <p className="text-xs text-[#c0c7d4] leading-relaxed">{strategy.challenge}</p>
        </div>
        <div className="p-4 rounded-xl bg-[#111318] border border-[#282a2e] space-y-2">
          <p className="text-[10px] font-mono uppercase text-[#a3c9ff] font-bold flex items-center space-x-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>Transformation Approach</span>
          </p>
          <p className="text-xs text-[#c0c7d4] leading-relaxed">{strategy.approach}</p>
        </div>
        <div className="p-4 rounded-xl bg-[#111318] border border-[#282a2e] space-y-2">
          <p className="text-[10px] font-mono uppercase text-emerald-400 font-bold flex items-center space-x-1.5">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Business Result</span>
          </p>
          <p className="text-xs text-[#c0c7d4] leading-relaxed">{strategy.result}</p>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-[10px] font-mono uppercase tracking-widest text-[#00dbe7] font-bold">Potential Enterprise Benefits</p>
        <div className="flex flex-wrap gap-2">
          {strategy.benefits.map((benefit) => (
            <span key={benefit} className="text-[11px] px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center space-x-1.5">
              <Check className="w-3 h-3" />
              <span>{benefit}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const LiveDemosView: React.FC<LiveDemosViewProps> = ({ initialDemo = 'finops' }) => {
  const [activeDemo, setActiveDemo] = useState<string>(initialDemo);

  // State for Rebate Calculator
  const [rebateBaseRate, setRebateBaseRate] = useState<number>(0.08);
  const [rebateVolume, setRebateVolume] = useState<number>(1200); // tonnes
  const [rebateDistance, setRebateDistance] = useState<number>(0.03);
  const [rebateSpecialTerm, setRebateSpecialTerm] = useState<number>(0.02);
  const [rebateSeasonal, setRebateSeasonal] = useState<number>(0.01);
  const [rebateTax, setRebateTax] = useState<number>(0.01);
  const [rebateCreditDeduction, setRebateCreditDeduction] = useState<number>(0.01);
  const [rebateApproved, setRebateApproved] = useState<boolean>(false);

  // Rebate calculations
  const rawRebatePerTonne = Math.max(0, rebateBaseRate + rebateDistance + rebateSpecialTerm + rebateSeasonal + rebateTax - rebateCreditDeduction);
  const cappedRebatePerTonne = Math.min(rawRebatePerTonne, 0.20);
  const isCapped = rawRebatePerTonne > 0.20;
  const totalRebateAmountRM = (cappedRebatePerTonne * rebateVolume).toFixed(2);

  // State for AI SOP Classifier
  const [ticketSubject, setTicketSubject] = useState<string>('Batch 402 Palm Stearin melting point deviation during high temperature filtration');
  const [classifiedCategory, setClassifiedCategory] = useState<string>('Quality Assurance / Non-Conformance (CAPA)');
  const [confidenceScore, setConfidenceScore] = useState<number>(94.8);
  const [recommendedSOP, setRecommendedSOP] = useState<string>('SOP-QA-042: Filtration & High Temp Non-Conformance Protocol');
  const [isClassifying, setIsClassifying] = useState<boolean>(false);

  // State for IT Service Request Hub
  const [itTickets, setItTickets] = useState([
    { id: 'INC-2025-084', title: 'Dataverse Production Entity Sync Timeout', priority: 'High', status: 'In Progress', requester: 'Finance Ops', sla: '4.2h left' },
    { id: 'REQ-2025-112', title: 'SAP Gateway Connector Permission Upgrade', priority: 'Medium', status: 'Pending Review', requester: 'Logistics Lead', sla: '22h left' },
    { id: 'INC-2025-079', title: 'Domino QMS Archived Database Read-Only Mount', priority: 'Low', status: 'Resolved (Accepting)', requester: 'QA Audit', sla: '72h rating window' }
  ]);
  const [newTicketTitle, setNewTicketTitle] = useState('');

  // FinOps quick approval toggle
  const [approvals, setApprovals] = useState<{ [key: string]: boolean }>({
    'REQ-4921': false,
    'REQ-4922': true,
    'REQ-4923': false
  });

  const triggerApproveRebate = () => {
    setRebateApproved(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  const handleClassifyTicket = () => {
    setIsClassifying(true);
    setTimeout(() => {
      setIsClassifying(false);
      if (ticketSubject.toLowerCase().includes('server') || ticketSubject.toLowerCase().includes('disk') || ticketSubject.toLowerCase().includes('patch')) {
        setClassifiedCategory('Infrastructure & IT Server Health');
        setConfidenceScore(96.2);
        setRecommendedSOP('SOP-IT-018: Weekly Server Audit & Capacity Threshold Protocol');
      } else if (ticketSubject.toLowerCase().includes('rebate') || ticketSubject.toLowerCase().includes('po') || ticketSubject.toLowerCase().includes('invoice')) {
        setClassifiedCategory('Commercial & Sales Rebates (Tasek Engine)');
        setConfidenceScore(98.4);
        setRecommendedSOP('SOP-FIN-009: 7-Component Tiered Rebate Formula Governance');
      } else if (ticketSubject.toLowerCase().includes('container') || ticketSubject.toLowerCase().includes('warehouse') || ticketSubject.toLowerCase().includes('pallet')) {
        setClassifiedCategory('Warehouse & Logistics Operations (Slice D)');
        setConfidenceScore(93.5);
        setRecommendedSOP('SOP-LOG-027: Pre-Loading Container Inspection & Seal Verification');
      } else {
        setClassifiedCategory('Quality Management & Documentation Control (Slice A)');
        setConfidenceScore(95.1);
        setRecommendedSOP('SOP-QA-042: Filtration & High Temp Non-Conformance Protocol');
      }
    }, 600);
  };

  const demosList = [
    { id: 'finops', title: 'Cloud Cost Governance', icon: <DollarSign className="w-4 h-4" />, badge: 'FinOps' },
    { id: 'it-service', title: 'Enterprise Service Operations', icon: <Cpu className="w-4 h-4" />, badge: 'ITSM' },
    { id: 'erp', title: 'Financial Process Automation', icon: <Layers className="w-4 h-4" />, badge: 'ERP' },
    { id: 'warehouse', title: 'Warehouse Compliance & Inspection', icon: <Box className="w-4 h-4" />, badge: 'Logistics' },
    { id: 'maintenance', title: 'Asset Reliability Management', icon: <Server className="w-4 h-4" />, badge: 'Reliability' },
    { id: 'rebate', title: 'Commercial Pricing Governance', icon: <TrendingUp className="w-4 h-4" />, badge: 'Policy Capped' },
    { id: 'cs-resolver', title: 'AI-Enabled Decision Support', icon: <Sparkles className="w-4 h-4" />, badge: 'AI / NLP' }
  ];

  return (
    <div className="space-y-8 py-6 animate-in fade-in duration-300">
      
      {/* Page Header — Enterprise Transformation Solutions in Action */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#00dbe7] font-bold">
          <MonitorPlay className="w-4 h-4" />
          <span>Enterprise Transformation Solutions in Action</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          See Enterprise Modernization in Action
        </h1>
        <p className="text-xs sm:text-sm text-[#c0c7d4] max-w-3xl leading-relaxed">
          Unlike static portfolios, this site includes interactive business platforms demonstrating real-world modernization patterns built using Microsoft 365, Power Platform, Dataverse, SharePoint Online, and AI services. Each experience showcases how legacy processes can be transformed into scalable, governed enterprise solutions.
        </p>
      </div>

      {/* Trust & Provenance — derived from production patterns */}
      <div className="flex items-start space-x-3 bg-[#0078d4]/10 border border-[#0078d4]/30 rounded-2xl p-4 sm:p-5">
        <BadgeCheck className="w-4 h-4 text-[#a3c9ff] mt-0.5 shrink-0" />
        <p className="text-xs text-[#c0c7d4] leading-relaxed">
          These demonstrations are derived from <strong className="text-white">production patterns and enterprise transformation initiatives</strong> delivered across manufacturing, operations, governance, and Microsoft ecosystem modernization programs. Sensitive business data and proprietary details have been anonymized.
        </p>
      </div>

      {/* Enterprise Transformation Framework — strategic layers */}
      <div className="glass-card p-5 sm:p-6 rounded-2xl border border-[#282a2e] space-y-3">
        <div className="flex items-center space-x-2">
          <Briefcase className="w-4 h-4 text-[#00dbe7]" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wide">Enterprise Transformation Framework</h3>
        </div>
        <p className="text-xs text-[#c0c7d4] leading-relaxed">
          Every demonstration follows the same operating pattern — a business domain, a transformation challenge, an interactive solution, and the Microsoft technology foundation beneath it.
        </p>
        <div className="space-y-1">
          {TRANSFORMATION_LAYERS.map((layer, idx) => {
            const LayerIcon = layer.icon;
            return (
              <div key={layer.label}>
                <div className="flex items-start space-x-3 bg-[#111318] border border-[#282a2e] rounded-xl p-3.5">
                  <LayerIcon className="w-4 h-4 text-[#00dbe7] mt-0.5 shrink-0" />
                  <div className="space-y-2">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#c0c7d4] font-bold">{layer.label}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {layer.items.map((item) => (
                        <span key={item} className="text-[11px] px-2.5 py-1 rounded-full bg-[#1a1c20] text-white border border-[#282a2e]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {idx < TRANSFORMATION_LAYERS.length - 1 && (
                  <div className="flex justify-center py-0.5 text-[#0078d4]">
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Demo Selector Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 border-b border-[#282a2e]">
        {demosList.map((d) => {
          const isActive = activeDemo === d.id;
          return (
            <button
              key={d.id}
              onClick={() => setActiveDemo(d.id)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-[#0078d4] text-white shadow-lg shadow-[#0078d4]/30'
                  : 'bg-[#161b22] text-[#c0c7d4] hover:text-white hover:bg-[#1a1c20] border border-[#282a2e]'
              }`}
            >
              <span>{d.icon}</span>
              <span>{d.title}</span>
              <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${
                isActive ? 'bg-white/20 text-white' : 'bg-[#282a2e] text-[#a3c9ff]'
              }`}>
                {d.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* DEMO 1: FinOps Spend Portal (Image 3 Style) */}
      {activeDemo === 'finops' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#161b22] p-5 rounded-2xl border border-[#282a2e]">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#00dbe7] font-semibold">Executive FinOps Dashboard</span>
              <h2 className="text-xl font-bold text-white">FinOps Governance Platform</h2>
              <p className="text-[11px] text-[#c0c7d4] mt-1 max-w-xl leading-relaxed">
                Centralized visibility into cloud spending, licensing investment, procurement approvals, and operational accountability.
              </p>
            </div>
            <div className="flex items-center space-x-3 text-xs font-mono">
              <span className="text-[#c0c7d4]">Reporting Period: <strong className="text-white">FY2025-Q1</strong></span>
              <span className="px-2.5 py-1 rounded bg-[#0078d4]/20 text-[#a3c9ff] border border-[#0078d4]/40 font-bold">Live Sync</span>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#1a1c20] p-5 rounded-2xl border border-[#282a2e] space-y-1">
              <p className="text-xs text-[#c0c7d4]">Total Allocated Budget</p>
              <p className="text-2xl font-black text-white font-mono">$3,200,000</p>
              <p className="text-[11px] text-[#00dbe7] font-medium">+4.5% vs Prior Quarter</p>
            </div>
            <div className="bg-[#1a1c20] p-5 rounded-2xl border border-[#282a2e] space-y-1">
              <p className="text-xs text-[#c0c7d4]">Actual MTD Spend</p>
              <p className="text-2xl font-black text-[#a3c9ff] font-mono">$2,847,500</p>
              <p className="text-[11px] text-[#c0c7d4] font-medium">88.9% Burn Rate (On Track)</p>
            </div>
            <div className="bg-[#1a1c20] p-5 rounded-2xl border border-[#282a2e] space-y-1">
              <p className="text-xs text-[#c0c7d4]">SaaS &amp; M365 Licenses</p>
              <p className="text-2xl font-black text-[#dab9ff] font-mono">$642,100</p>
              <p className="text-[11px] text-[#00dbe7] font-medium">Optimized via CoE Starter Kit</p>
            </div>
            <div className="bg-[#1a1c20] p-5 rounded-2xl border border-[#282a2e] space-y-1">
              <p className="text-xs text-[#c0c7d4]">Actionable Requisitions</p>
              <p className="text-2xl font-black text-amber-400 font-mono">3 Pending</p>
              <p className="text-[11px] text-amber-400 font-medium">Requires Executive Signature</p>
            </div>
          </div>

          {/* Pending Approvals Table */}
          <div className="bg-[#161b22] rounded-2xl border border-[#282a2e] overflow-hidden">
            <div className="px-6 py-4 border-b border-[#282a2e] flex items-center justify-between">
              <h3 className="text-sm font-bold text-white">Pending Executive Requisitions (SmartFlow Engine)</h3>
              <span className="text-xs text-[#c0c7d4] font-mono">3 Records</span>
            </div>
            <div className="divide-y divide-[#282a2e]">
              {[
                { id: 'REQ-4921', name: 'Azure OpenAI GPT-4o Dedicated Deployment', dept: 'Enterprise Automation', amount: '$42,500', requester: 'Ali Akhmad Fauzie' },
                { id: 'REQ-4922', name: 'Dataverse Storage Capacity Add-on (50GB)', dept: 'IOI Domino Cutover', amount: '$18,000', requester: 'Cloud Ops Lead' },
                { id: 'REQ-4923', name: 'Power BI Premium Per Capacity Node P1', dept: 'Global Operations', amount: '$59,940', requester: 'BI Team Lead' }
              ].map((req) => (
                <div key={req.id} className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#1a1c20] transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs font-bold text-[#a3c9ff]">{req.id}</span>
                      <span className="text-xs font-bold text-white">{req.name}</span>
                    </div>
                    <p className="text-xs text-[#c0c7d4]">{req.dept} • Requested by <span className="text-white">{req.requester}</span></p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-bold font-mono text-white">{req.amount}</span>
                    <button
                      onClick={() => setApprovals({ ...approvals, [req.id]: !approvals[req.id] })}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        approvals[req.id]
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : 'bg-[#0078d4] text-white hover:bg-[#0086ea]'
                      }`}
                    >
                      {approvals[req.id] ? '✓ Approved' : 'Sign & Approve'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* DEMO 2: Industrial Nexus / IT Service Request (Image 4 Style) */}
      {activeDemo === 'it-service' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#161b22] p-5 rounded-2xl border border-[#282a2e]">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#00dbe7] font-semibold">ITSM Operations • 56 Mapped Columns</span>
              <h2 className="text-xl font-bold text-white">Industrial Nexus Service Desk</h2>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                ● 0% SLA Breaches
              </span>
              <span className="text-xs text-[#a3c9ff] font-mono bg-[#0078d4]/20 px-3 py-1 rounded-full border border-[#0078d4]/40">
                72h Accept Window
              </span>
            </div>
          </div>

          {/* Quick Ticket Submission */}
          <div className="bg-[#1a1c20] p-4 rounded-2xl border border-[#282a2e] flex flex-col sm:flex-row items-center gap-3">
            <input
              type="text"
              placeholder="Log new IT incident or service request (e.g. Lotus Notes DB replication latency)..."
              value={newTicketTitle}
              onChange={(e) => setNewTicketTitle(e.target.value)}
              className="flex-1 w-full px-3.5 py-2.5 rounded-xl bg-[#111318] border border-[#282a2e] focus:border-[#0078d4] focus:outline-none text-xs text-white placeholder-[#555962]"
            />
            <button
              onClick={() => {
                if (!newTicketTitle.trim()) return;
                setItTickets([
                  { id: `INC-2025-${Math.floor(Math.random() * 800 + 100)}`, title: newTicketTitle, priority: 'High', status: 'Submitted (Admin Triage)', requester: 'Local Station', sla: '48.0h left' },
                  ...itTickets
                ]);
                setNewTicketTitle('');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#0078d4] hover:bg-[#0086ea] text-white text-xs font-semibold whitespace-nowrap"
            >
              + Submit Ticket
            </button>
          </div>

          {/* Ticket Queue */}
          <div className="bg-[#161b22] rounded-2xl border border-[#282a2e] overflow-hidden">
            <div className="px-6 py-4 border-b border-[#282a2e] flex items-center justify-between">
              <h3 className="text-sm font-bold text-white">Active Operational Incidents &amp; Governance Queue</h3>
              <span className="text-xs text-[#c0c7d4] font-mono">{itTickets.length} Active Tickets</span>
            </div>
            <div className="divide-y divide-[#282a2e]">
              {itTickets.map((t) => (
                <div key={t.id} className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#1a1c20] transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs font-bold text-[#00dbe7]">{t.id}</span>
                      <span className="text-xs font-bold text-white">{t.title}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono font-bold">
                        {t.priority}
                      </span>
                    </div>
                    <p className="text-xs text-[#c0c7d4]">Requester: <span className="text-white">{t.requester}</span> • SLA Timer: <span className="text-amber-400 font-mono">{t.sla}</span></p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#111318] text-[#a3c9ff] border border-[#282a2e]">
                      {t.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* DEMO 3: Enterprise Core ERP (Image 5 Style) */}
      {activeDemo === 'erp' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-[#161b22] p-5 rounded-2xl border border-[#282a2e] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#dab9ff] font-semibold">Enterprise Core ERP • Purchase Orders &amp; Staff Requisitions</span>
              <h2 className="text-xl font-bold text-white">Procurement &amp; Governance Center</h2>
            </div>
            <span className="text-xs font-mono bg-[#111318] px-3 py-1.5 rounded-lg border border-[#282a2e] text-[#c0c7d4]">
              4-Tier Approval Flow • 5-Day Lockout
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#1a1c20] p-5 rounded-2xl border border-[#282a2e] space-y-2">
              <span className="text-xs font-mono text-[#a3c9ff]">PO-2025-9941</span>
              <h4 className="text-sm font-bold text-white">Refined Bleached Palm Oil Processing Unit</h4>
              <p className="text-xs text-[#c0c7d4]">Vendor: Alfa Laval Separation Sdn Bhd</p>
              <div className="pt-2 flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-white">RM 340,000</span>
                <span className="text-emerald-400 font-medium">✓ CFO Approved</span>
              </div>
            </div>

            <div className="bg-[#1a1c20] p-5 rounded-2xl border border-[#282a2e] space-y-2">
              <span className="text-xs font-mono text-[#00dbe7]">REQ-STAFF-014</span>
              <h4 className="text-sm font-bold text-white">Senior Process Control Engineer (QA Lab)</h4>
              <p className="text-xs text-[#c0c7d4]">Internal Lockout: Day 3 of 5 (Mandatory Posting)</p>
              <div className="pt-2 flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-white">Headcount: 1 FTE</span>
                <span className="text-amber-400 font-medium">HR Review Active</span>
              </div>
            </div>

            <div className="bg-[#1a1c20] p-5 rounded-2xl border border-[#282a2e] space-y-2">
              <span className="text-xs font-mono text-[#dab9ff]">PO-2025-9948</span>
              <h4 className="text-sm font-bold text-white">GHS Safety Labeling &amp; Calibration Tooling</h4>
              <p className="text-xs text-[#c0c7d4]">Master Reference Slice E Sync</p>
              <div className="pt-2 flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-white">RM 24,500</span>
                <span className="text-emerald-400 font-medium">✓ Validated</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DEMO 4: Warehouse Central (Image 6 Style) */}
      {activeDemo === 'warehouse' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-[#161b22] p-5 rounded-2xl border border-[#282a2e] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#00dbe7] font-semibold">Slice D Logistics Operations</span>
              <h2 className="text-xl font-bold text-white">Warehouse Central &amp; Pre-Loading Inspection Hub</h2>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono">
              <span className="text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/30">Zero Demurrage Delay</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left: Container Pre-Loading Inspection Simulator */}
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-[#00dbe7]" />
                  <span>Container Pre-Loading Inspection</span>
                </h3>
                <span className="text-xs font-mono text-[#a3c9ff]">CNTR-MY-88421</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-[#111318] border border-[#282a2e] space-y-2">
                  <p className="font-semibold text-white">Digital Photo Seal Verification</p>
                  <div className="h-28 rounded-lg bg-[#1a1c20] border border-dashed border-[#282a2e] flex flex-col items-center justify-center text-[#c0c7d4] space-y-1">
                    <CheckCircle2 className="w-6 h-6 text-[#00dbe7]" />
                    <span className="text-[11px]">Seal #ML-99042 captured via Power Apps Mobile</span>
                    <span className="text-[10px] text-[#00dbe7] font-mono">Geo-tagged &amp; Timestamped</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-[#111318] border border-[#282a2e]">
                    <span className="text-[#c0c7d4]">Pallet Integrity:</span>
                    <p className="font-bold text-emerald-400">100% Passed</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#111318] border border-[#282a2e]">
                    <span className="text-[#c0c7d4]">Gate Pass:</span>
                    <p className="font-bold text-[#a3c9ff]">AUTO-ISSUED</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Real-time Stock Movements */}
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                  <Box className="w-4 h-4 text-[#dab9ff]" />
                  <span>Live Stock &amp; Batch Movement Log</span>
                </h3>
                <span className="text-xs font-mono text-[#dab9ff]">SAP Synchronized</span>
              </div>

              <div className="space-y-2.5 text-xs">
                {[
                  { batch: 'B-8491', product: 'Refined Palm Stearin (Bag 25kg)', bay: 'Bay 14-A', qty: '480 Bags', status: 'Staged' },
                  { batch: 'B-8492', product: 'Glycerine USP 99.7% Drums', bay: 'Bay 02-C', qty: '80 Drums', status: 'Ready for Gate Pass' },
                  { batch: 'B-8493', product: 'Lauric Acid Distilled Flakes', bay: 'Bay 09-F', qty: '320 Bags', status: 'Inspected' }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#111318] border border-[#282a2e] flex items-center justify-between">
                    <div>
                      <p className="font-bold text-white">{item.product}</p>
                      <p className="text-[11px] text-[#c0c7d4] font-mono">{item.batch} • {item.bay} • {item.qty}</p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0078d4]/20 text-[#a3c9ff] border border-[#0078d4]/30">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* DEMO 5: Maintenance HQ Command & Server Audit (Image 12 Style) */}
      {activeDemo === 'maintenance' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-[#161b22] p-5 rounded-2xl border border-[#282a2e] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#00dbe7] font-semibold">IT Security &amp; Plant Reliability</span>
              <h2 className="text-xl font-bold text-white">Maintenance HQ Command Center &amp; Server Audit Register</h2>
            </div>
            <div className="flex items-center space-x-3 text-xs font-mono">
              <span className="text-white">OEE Overall: <strong className="text-emerald-400">78.4%</strong></span>
              <span className="px-2.5 py-1 rounded bg-[#0078d4]/20 text-[#a3c9ff] border border-[#0078d4]/40">Active Telemetry</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Server Audit Numbering */}
            <div className="bg-[#1a1c20] p-5 rounded-2xl border border-[#282a2e] space-y-3">
              <span className="text-[10px] font-mono uppercase text-[#a3c9ff] font-semibold">Server Checklist Numbering</span>
              <p className="font-mono text-sm font-bold text-white bg-[#111318] p-2.5 rounded-lg border border-[#282a2e]">
                Server Checklist-2025-W12-004
              </p>
              <ul className="space-y-1 text-xs text-[#c0c7d4]">
                <li>• CPU Load: 18.2% (Normal)</li>
                <li>• RAM Allocation: 48.4 GB / 64 GB (75%)</li>
                <li>• C:\ Drive Free Space: 142 GB (Healthy)</li>
              </ul>
              <span className="inline-block text-[10px] text-emerald-400 font-mono">✓ Systems Manager Signed Off</span>
            </div>

            {/* Critical Asset 2 */}
            <div className="bg-[#1a1c20] p-5 rounded-2xl border border-[#282a2e] space-y-3">
              <span className="text-[10px] font-mono uppercase text-[#00dbe7] font-semibold">Fractionation Chiller Unit 3</span>
              <p className="font-mono text-sm font-bold text-white bg-[#111318] p-2.5 rounded-lg border border-[#282a2e]">
                WO-MECH-2025-0819
              </p>
              <ul className="space-y-1 text-xs text-[#c0c7d4]">
                <li>• Vibration Sensor: 0.12 mm/s (Optimal)</li>
                <li>• Coolant Pressure: 4.8 bar</li>
                <li>• Next Preventative PM: in 14 Days</li>
              </ul>
              <span className="inline-block text-[10px] text-emerald-400 font-mono">✓ Online &amp; Operational</span>
            </div>

            {/* Critical Asset 3 */}
            <div className="bg-[#1a1c20] p-5 rounded-2xl border border-[#282a2e] space-y-3">
              <span className="text-[10px] font-mono uppercase text-[#dab9ff] font-semibold">Dataverse Backup &amp; Disaster Recovery</span>
              <p className="font-mono text-sm font-bold text-white bg-[#111318] p-2.5 rounded-lg border border-[#282a2e]">
                DR-HEALTH-CHECK-OK
              </p>
              <ul className="space-y-1 text-xs text-[#c0c7d4]">
                <li>• Last Immutable Snapshot: 2 hours ago</li>
                <li>• RPO: &lt; 15 minutes</li>
                <li>• RTO: &lt; 1 hour verified</li>
              </ul>
              <span className="inline-block text-[10px] text-[#00dbe7] font-mono">✓ ISO 27001 Certified Audit</span>
            </div>

          </div>
        </div>
      )}

      {/* DEMO 6: Interactive Tasek Cement Rebate Calculator */}
      {activeDemo === 'rebate' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-[#161b22] p-5 rounded-2xl border border-[#282a2e] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#00dbe7] font-semibold">Tasek Cement Commercial Approval Engine</span>
              <h2 className="text-xl font-bold text-white">7-Component Dynamic Rebate Formula Simulator</h2>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-[#0078d4]/20 text-[#a3c9ff] border border-[#0078d4]/40 font-bold">
                Cap Limit: RM 0.20 / Tonne
              </span>
              <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold">
                Cycle Time: ~15 Min
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 bg-[#1a1c20] p-6 rounded-2xl border border-[#282a2e] space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#a3c9ff] font-bold">
                Formula Variables Configuration
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                
                <div className="space-y-1">
                  <label className="text-[#c0c7d4] flex justify-between">
                    <span>Base Tier Rate (RM/t)</span>
                    <span className="font-mono text-white">RM {rebateBaseRate.toFixed(2)}</span>
                  </label>
                  <input
                    type="range"
                    min="0.02"
                    max="0.15"
                    step="0.01"
                    value={rebateBaseRate}
                    onChange={(e) => setRebateBaseRate(parseFloat(e.target.value))}
                    className="w-full accent-[#0078d4]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#c0c7d4] flex justify-between">
                    <span>Order Volume (Metric Tonnes)</span>
                    <span className="font-mono text-white">{rebateVolume} tonnes</span>
                  </label>
                  <input
                    type="range"
                    min="200"
                    max="5000"
                    step="100"
                    value={rebateVolume}
                    onChange={(e) => setRebateVolume(parseInt(e.target.value))}
                    className="w-full accent-[#0078d4]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#c0c7d4] flex justify-between">
                    <span>Logistics Distance Adj (RM/t)</span>
                    <span className="font-mono text-white">RM {rebateDistance.toFixed(2)}</span>
                  </label>
                  <input
                    type="range"
                    min="0.00"
                    max="0.08"
                    step="0.01"
                    value={rebateDistance}
                    onChange={(e) => setRebateDistance(parseFloat(e.target.value))}
                    className="w-full accent-[#00dbe7]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#c0c7d4] flex justify-between">
                    <span>Special Contract Terms (RM/t)</span>
                    <span className="font-mono text-white">RM {rebateSpecialTerm.toFixed(2)}</span>
                  </label>
                  <input
                    type="range"
                    min="0.00"
                    max="0.06"
                    step="0.01"
                    value={rebateSpecialTerm}
                    onChange={(e) => setRebateSpecialTerm(parseFloat(e.target.value))}
                    className="w-full accent-[#dab9ff]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#c0c7d4] flex justify-between">
                    <span>Seasonal Incentive (RM/t)</span>
                    <span className="font-mono text-white">RM {rebateSeasonal.toFixed(2)}</span>
                  </label>
                  <input
                    type="range"
                    min="0.00"
                    max="0.04"
                    step="0.01"
                    value={rebateSeasonal}
                    onChange={(e) => setRebateSeasonal(parseFloat(e.target.value))}
                    className="w-full accent-[#a3c9ff]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#c0c7d4] flex justify-between">
                    <span>Credit Risk Deduction (RM/t)</span>
                    <span className="font-mono text-red-400">- RM {rebateCreditDeduction.toFixed(2)}</span>
                  </label>
                  <input
                    type="range"
                    min="0.00"
                    max="0.05"
                    step="0.01"
                    value={rebateCreditDeduction}
                    onChange={(e) => setRebateCreditDeduction(parseFloat(e.target.value))}
                    className="w-full accent-red-400"
                  />
                </div>

              </div>
            </div>

            {/* Calculation Output Card */}
            <div className="lg:col-span-5 glass-card p-6 rounded-2xl space-y-5 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#00dbe7] font-semibold">
                  Real-time Governance Evaluation
                </span>

                <div className="p-4 rounded-xl bg-[#111318] border border-[#282a2e] space-y-2">
                  <div className="flex justify-between text-xs text-[#c0c7d4]">
                    <span>Raw Formula Output:</span>
                    <span className="font-mono text-white">RM {rawRebatePerTonne.toFixed(2)} / t</span>
                  </div>
                  <div className="flex justify-between text-xs text-[#c0c7d4]">
                    <span>Statutory Capped Rate:</span>
                    <span className="font-mono font-bold text-[#a3c9ff]">RM {cappedRebatePerTonne.toFixed(2)} / t</span>
                  </div>
                  {isCapped && (
                    <div className="text-[11px] text-amber-400 bg-amber-500/10 p-2 rounded border border-amber-500/20 flex items-center space-x-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>Governance rule active: Capped at RM 0.20 maximum ceiling!</span>
                    </div>
                  )}
                </div>

                <div className="text-center py-2 space-y-1">
                  <p className="text-xs text-[#c0c7d4]">Total Customer Rebate Value</p>
                  <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#a3c9ff] to-[#00dbe7] font-mono">
                    RM {totalRebateAmountRM}
                  </p>
                  <p className="text-[11px] text-[#c0c7d4] font-mono">Based on {rebateVolume} Metric Tonnes</p>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={triggerApproveRebate}
                  className={`w-full py-3 rounded-xl text-xs font-bold transition-all shadow-lg flex items-center justify-center space-x-2 ${
                    rebateApproved
                      ? 'bg-emerald-600 text-white shadow-emerald-500/30'
                      : 'bg-[#0078d4] hover:bg-[#0086ea] text-white shadow-[#0078d4]/30'
                  }`}
                >
                  {rebateApproved ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Rebate Authorized by Group COO (15-Min Sched)</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Submit Multi-Level Rebate Approval</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* DEMO 7: AI Builder SOP Classifier & Live Ticket Resolver */}
      {activeDemo === 'cs-resolver' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-[#161b22] p-5 rounded-2xl border border-[#282a2e] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#00dbe7] font-semibold">AI Builder NLP Model • 120+ SOP Categories</span>
              <h2 className="text-xl font-bold text-white">Customer Service Resolver &amp; SOP Recommendation Engine</h2>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-[#5c2d91]/20 text-[#dab9ff] border border-[#5c2d91]/40 font-bold">
                50–80% Handling Time Reduction
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Input Inquiry */}
            <div className="lg:col-span-6 bg-[#1a1c20] p-6 rounded-2xl border border-[#282a2e] space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-white">Inbound Customer / Operator Issue Description</label>
                <p className="text-[11px] text-[#c0c7d4]">Type or select any scenario to test real-time NLP classification</p>
              </div>

              <textarea
                rows={3}
                value={ticketSubject}
                onChange={(e) => setTicketSubject(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#111318] border border-[#282a2e] focus:border-[#0078d4] focus:outline-none text-xs text-white placeholder-[#555962] resize-none"
              />

              {/* Sample Scenario Buttons */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-[#c0c7d4]">Sample Test Scenarios:</span>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setTicketSubject('Batch 402 Palm Stearin melting point deviation during high temperature filtration')}
                    className="text-[10px] px-2.5 py-1 rounded bg-[#111318] text-[#a3c9ff] border border-[#282a2e] hover:border-[#a3c9ff]"
                  >
                    QA Deviation (Slice B)
                  </button>
                  <button
                    onClick={() => setTicketSubject('Primary Domain Controller server memory exceeded 85% with pending patch reboot')}
                    className="text-[10px] px-2.5 py-1 rounded bg-[#111318] text-[#00dbe7] border border-[#282a2e] hover:border-[#00dbe7]"
                  >
                    IT Server Checklist
                  </button>
                  <button
                    onClick={() => setTicketSubject('Special volume contract rebate exceeded standard tier with regional distance credit')}
                    className="text-[10px] px-2.5 py-1 rounded bg-[#111318] text-[#dab9ff] border border-[#282a2e] hover:border-[#dab9ff]"
                  >
                    Tasek Rebate
                  </button>
                  <button
                    onClick={() => setTicketSubject('Pre-loading container inspection photo damaged pallet seal at Bay 04')}
                    className="text-[10px] px-2.5 py-1 rounded bg-[#111318] text-white border border-[#282a2e] hover:border-white"
                  >
                    Logistics Slice D
                  </button>
                </div>
              </div>

              <button
                onClick={handleClassifyTicket}
                disabled={isClassifying}
                className="w-full py-2.5 rounded-xl bg-[#0078d4] hover:bg-[#0086ea] text-white text-xs font-semibold flex items-center justify-center space-x-2"
              >
                {isClassifying ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Querying AI Builder NLP Classifier...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Run AI Classification &amp; SOP Linker</span>
                  </>
                )}
              </button>
            </div>

            {/* AI Output Card */}
            <div className="lg:col-span-6 glass-card p-6 rounded-2xl space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#00dbe7] font-semibold">
                AI Builder Model Inference Output
              </span>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#111318] border border-[#282a2e] space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#c0c7d4]">Classified Category:</span>
                    <span className="text-xs font-mono font-bold text-white">{classifiedCategory}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#c0c7d4]">Confidence Score:</span>
                    <span className="text-xs font-mono font-bold text-emerald-400">{confidenceScore}%</span>
                  </div>
                  <div className="w-full bg-[#1e2024] h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full" style={{ width: `${confidenceScore}%` }}></div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0078d4]/10 border border-[#0078d4]/30 space-y-2">
                  <p className="text-xs font-bold text-[#a3c9ff] flex items-center space-x-1.5">
                    <FileText className="w-4 h-4 text-[#00dbe7]" />
                    <span>Recommended Standard Operating Procedure</span>
                  </p>
                  <p className="text-xs font-mono text-white font-medium">{recommendedSOP}</p>
                  <div className="pt-1 flex items-center space-x-2 text-[11px] text-[#00dbe7]">
                    <ArrowRight className="w-3.5 h-3.5" />
                    <span>Direct deep-link routed to agent workspace in Microsoft Teams</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Architecture Strategy for the active demonstration */}
      <StrategyBlock demoId={activeDemo} />

      {/* Enterprise Capability Coverage */}
      <div className="glass-card p-5 sm:p-6 rounded-2xl border border-[#282a2e] space-y-4">
        <div className="flex items-center space-x-2">
          <Building2 className="w-4 h-4 text-[#00dbe7]" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wide">Enterprise Capability Coverage</h3>
        </div>
        <p className="text-xs text-[#c0c7d4] leading-relaxed max-w-3xl">
          The showcased systems represent common enterprise transformation domains. Together they demonstrate how modern Microsoft platforms can replace fragmented legacy systems with governed, scalable operating models.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { label: 'Finance & FinOps', icon: DollarSign },
            { label: 'Governance & Compliance', icon: ShieldCheck },
            { label: 'IT Service Management', icon: Cpu },
            { label: 'ERP Integration', icon: Layers },
            { label: 'Warehouse Operations', icon: Box },
            { label: 'Asset Management', icon: Server },
            { label: 'AI-Enabled Decision Support', icon: Sparkles }
          ].map((domain) => {
            const DomainIcon = domain.icon;
            return (
              <div key={domain.label} className="p-3.5 rounded-xl bg-[#111318] border border-[#282a2e] flex items-center space-x-2.5 hover:border-[#0078d4]/50 transition-colors">
                <DomainIcon className="w-4 h-4 text-[#00dbe7] shrink-0" />
                <span className="text-xs text-white font-semibold">{domain.label}</span>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
