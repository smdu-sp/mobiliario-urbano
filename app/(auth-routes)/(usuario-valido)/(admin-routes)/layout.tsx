import { auth } from "@/auth";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { verificarPermissoes } from "@/services/usuarios";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  const permissao = verificarPermissoes(session.user.id, ['TOTAL']);
  if (!permissao) {
    redirect("/");
  }
  return children;
}