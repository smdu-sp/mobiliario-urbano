import { NextRequest, NextResponse } from "next/server";
import { Usuario } from ".prisma/client";
import { atualizarUsuario } from "@/services/usuarios";

export async function PATCH(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const { id } = params;
    const data: Partial<Usuario> = await request.json();
    try {
        const duvida = await atualizarUsuario(id, data);
        if (!duvida) return NextResponse.json({ error: "Erro ao atualizar usuário" }, { status: 500 });
        return NextResponse.json({ message: "Usuário atualizado com sucesso" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}