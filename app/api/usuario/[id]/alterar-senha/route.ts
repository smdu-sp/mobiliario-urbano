import { auth } from "@/auth";
import { alterarSenha } from "@/services/usuarios";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    const { id } = params;
    if (session.user.id !== id) return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    const data: { senha: string, confirmarSenha: string } = await request.json();
    try {
        const duvida = await alterarSenha(id, data);
        if (!duvida) return NextResponse.json({ error: "Erro ao atualizar usuário" }, { status: 500 });
        return NextResponse.json({ message: "Usuário atualizado com sucesso" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}