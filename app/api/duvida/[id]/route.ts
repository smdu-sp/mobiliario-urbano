import { responderDuvida } from "@/services/duvidas";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const { id } = params;
    const { resposta } = await request.json();
    try {
        const duvida = await responderDuvida(id, resposta);
        if (!duvida) return NextResponse.json({ error: "Erro ao atualizar pergunta" }, { status: 500 });
        return NextResponse.json({ message: "Pergunta atualizada com sucesso" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}