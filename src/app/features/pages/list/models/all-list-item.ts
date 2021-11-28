import { EntityAdapter, EntityState } from '@ngrx/entity';
import { createEntityAdapter } from '@ngrx/entity';

export interface AllListItems {
  id: string;
  categoryId: string;
  name: string;
  createdAt: string;
  checklist: CheckListState
}

export interface CheckList {
  id: string;
  name: string;
  value: boolean
}


export interface AllListItemsState extends EntityState<AllListItems> {
  isLoading: boolean;
  isDataLoaded: boolean;
  hasError: boolean;
  selectedDate: string;
}

export const AllListItemsAdapter: EntityAdapter<AllListItems> = createEntityAdapter<AllListItems>();

export const initialAllListItemsState: AllListItemsState = AllListItemsAdapter.getInitialState({
  isLoading: false,
  isDataLoaded: false,
  hasError: false,
  selectedDate: ""
});

// CHECKLIST STATE

export interface CheckListState extends EntityState<CheckList> {
}

export const CheckListAdapter: EntityAdapter<CheckList> = createEntityAdapter<CheckList>();

export const initialCheckListState: CheckListState = CheckListAdapter.getInitialState({
});
