import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface ListItem {
  id: string;
  categoryId: string,
  categoryName: string,
  name: string
  value: boolean,
  createdAt: string
}

export interface PendingListItems {
  list: ListItem[]
}

export interface ListItemState extends EntityState<ListItem> {
  selectedDate: string;
  isLoading: boolean;
  isDataLoaded: boolean;
  hasError: boolean;
}

export const ListItemAdapter: EntityAdapter<ListItem> = createEntityAdapter<ListItem>({
  selectId: (pendingList: ListItem) => pendingList.id
});

export const initialListItemsState: ListItemState = ListItemAdapter.getInitialState({
  selectedDate: "",
  isLoading: false,
  isDataLoaded: false,
  hasError: false,
});
