import { auth } from "@/auth";
import { criarUsuario } from "@/services/usuarios";
import { ICreateUsuario } from "@/types/usuario";
import { NextRequest, NextResponse } from "next/server";
import { Permissao } from ".prisma/client";

export async function POST(request: NextRequest) {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    if (session.user.permissao !== "TOTAL") return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    const data: ICreateUsuario = await request.json();
    try {
        const usuario = await criarUsuario(data);
        if (!usuario) return NextResponse.json({ error: "Erro ao criar usuário" }, { status: 500 });
        return NextResponse.json({ message: "Usuário criado com sucesso" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}