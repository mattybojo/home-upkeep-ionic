import { UserDataPermission } from '../app.beans';

export interface Task extends UserDataPermission {
  id: string;
  category: string;
  label: string;
  control: string;
  lastCompletedDate: number;
  dueDate: number;
  sortOrder: number;
  notes: string;
  dueDateString?: string;
  uid?: string;
  categoryLabel?: string;
}

export interface Category extends UserDataPermission {
  id?: string;
  label: string;
  category: string;
  sortOrder: number;
  type: CategoryType;
  items?: Task[];
  isExpanded?: boolean;
}

export type CategoryType = 'category' | 'date';
