import { IconDefinition } from '@fortawesome/angular-fontawesome';

export interface UserDataPermission {
  sharedWith: string[];
}

export interface SortOption {
  sortProp: string;
  order: 'asc' | 'desc';
}


export interface MenuItem {
  title: string;
  url: string;
  icon: IconDefinition;
}
