export interface UserDataPermission {
  sharedWith: string[];
}

export interface SortOption {
  sortProp: string;
  order: 'asc' | 'desc';
}
