export interface IAuth {
  id: string;
  displayName?: string;
  email: string;
  photoUrl?: string;
  isLoading?: boolean;
  isAuthenticated?: boolean;
}
