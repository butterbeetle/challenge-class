import AuthContextProvider from "@/contexts/auth.context";

function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}

export default ProvidersLayout;
