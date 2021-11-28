import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { EntityAdapter } from '@ngrx/entity';

export interface Category {
  id: string;
  name: string;
}

export interface CategoryState extends EntityState<Category> {
  isLoading: boolean;
  isDataLoaded: boolean;
  hasError: boolean;
}

export const categoryAdapter: EntityAdapter<Category> = createEntityAdapter<Category>();

export const initialCategoryState: CategoryState = categoryAdapter.getInitialState({
  isLoading: false,
  isDataLoaded: false,
  hasError: false,
});
