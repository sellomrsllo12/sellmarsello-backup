export interface MainContextType {
  // Attributes
  showNavbar: boolean;
  showFooter: boolean;

  // Methods
  setShowNavbar: (status: boolean) => void;
  setShowFooter: (status: boolean) => void;
}
