// Core TaxTrack Types and Interfaces

export interface User {
  id: string;
  address: string;
  role: UserRole;
  isVerified: boolean;
  createdAt: Date;
  profile?: UserProfile;
}

export type UserRole = 'public' | 'token-holder' | 'committee' | 'auditor' | 'admin';

export interface UserProfile {
  name?: string;
  avatar?: string;
  bio?: string;
  credentials?: Credential[];
}

export interface Credential {
  type: 'civic' | 'proof-of-personhood' | 'ngo' | 'media' | 'official';
  status: 'pending' | 'verified' | 'rejected';
  documentHash?: string;
}

// Governance Types
export interface Proposal {
  id: string;
  title: string;
  description: string;
  sponsor: string;
  status: ProposalStatus;
  category: ProposalCategory;
  budgetRequest?: BudgetRequest;
  attachments: Document[];
  votingPeriod: VotingPeriod;
  results?: VotingResults;
  createdAt: Date;
  updatedAt: Date;
}

export type ProposalStatus = 'draft' | 'live' | 'closed' | 'executed' | 'rejected';
export type ProposalCategory = 'infrastructure' | 'community' | 'treasury' | 'governance' | 'other';

export interface BudgetRequest {
  totalAmount: number;
  currency: string;
  breakdown: BudgetItem[];
  milestones: Milestone[];
}

export interface BudgetItem {
  category: string;
  amount: number;
  description: string;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  status: 'pending' | 'in-progress' | 'completed' | 'delayed';
}

export interface VotingPeriod {
  startDate: Date;
  endDate: Date;
  quorumRequired: number;
  participationThreshold: number;
}

export interface VotingResults {
  totalVotes: number;
  quorumReached: boolean;
  support: number;
  against: number;
  abstain: number;
  outcome: 'passed' | 'rejected' | 'quorum-not-met';
}

export interface Vote {
  proposalId: string;
  voter: string;
  choice: VoteChoice;
  weight: number;
  timestamp: Date;
  comment?: string;
}

export type VoteChoice = 'support' | 'against' | 'abstain';

// Treasury Types
export interface TreasuryAllocation {
  id: string;
  proposalId: string;
  amount: number;
  currency: string;
  recipient: string;
  status: AllocationStatus;
  approvals: Approval[];
  disbursements: Disbursement[];
  createdAt: Date;
}

export type AllocationStatus = 'pending' | 'approved' | 'rejected' | 'disbursed' | 'completed';

export interface Approval {
  approver: string;
  timestamp: Date;
  signature?: string;
}

export interface Disbursement {
  id: string;
  allocationId: string;
  amount: number;
  recipient: string;
  transactionHash?: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  timestamp: Date;
}

// Document and IPFS Types
export interface Document {
  id: string;
  name: string;
  type: DocumentType;
  ipfsHash: string;
  size: number;
  uploadedBy: string;
  uploadedAt: Date;
  verified: boolean;
  tags: string[];
}

export type DocumentType = 'proposal' | 'budget' | 'legal' | 'audit' | 'compliance' | 'other';

// Analytics Types
export interface AnalyticsData {
  participation: ParticipationMetrics;
  treasury: TreasuryMetrics;
  governance: GovernanceMetrics;
}

export interface ParticipationMetrics {
  totalHolders: number;
  activeVoters: number;
  averageTurnout: number;
  newHoldersThisMonth: number;
}

export interface TreasuryMetrics {
  totalBalance: number;
  allocatedFunds: number;
  disbursedFunds: number;
  pendingApprovals: number;
}

export interface GovernanceMetrics {
  activeProposals: number;
  proposalsThisMonth: number;
  averageVotingPeriod: number;
  successRate: number;
}

// UI Component Types
export interface NavItem {
  title: string;
  href: string;
  icon?: string;
  disabled?: boolean;
  external?: boolean;
  roles?: UserRole[];
}

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  badge?: number;
}

export interface ActionResult {
  success: boolean;
  message: string;
  data?: any;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  pagination?: PaginationInfo;
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// Form Types
export interface CreateProposalForm {
  title: string;
  description: string;
  category: ProposalCategory;
  budgetRequest?: {
    amount: number;
    currency: string;
    breakdown: string;
  };
  attachments: File[];
}

export interface VoteForm {
  proposalId: string;
  choice: VoteChoice;
  comment?: string;
}
