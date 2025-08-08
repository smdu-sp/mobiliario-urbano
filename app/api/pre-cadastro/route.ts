/** @format */

// app/api/upload/route.ts
import { criarPreCadastro } from "@/services/cadastros";
import { NextRequest, NextResponse } from "next/server";
import { IParticipante } from "../cadastro/cadastro.dto";
import { transporter } from "@/lib/nodemailer";
import { templateEmail } from "./_utils/template-email";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const nome = formData.get("nome") as string;
    const email = formData.get("email") as string;
    const senha = formData.get("senha") as string;
    const telefone = formData.get("telefone") as string;
    const cpf = formData.get("cpf") as string;
    const cnpj = formData.get("cnpj") as string;
    const carteira_tipo = formData.get("carteira_tipo") as "CAU" | "CREA";
    const carteira_numero = formData.get("carteira_numero") as string;
    const cep = formData.get("cep") as string;
    const logradouro = formData.get("logradouro") as string;
    const cidade = formData.get("cidade") as string;
    const uf = formData.get("uf") as string;
    const numero = formData.get("numero") as string | undefined;
    const complemento = formData.get("complemento") as string | undefined;
    const participantesTexto = formData.get(
      "participantes"
    ) as unknown as string;
    const participantes: IParticipante[] = JSON.parse(participantesTexto);
    const equipe: boolean = formData.get("equipe") === "true";

    const senhaHashed = await hashSenha(senha);

    const cadastro = await criarPreCadastro({
      equipe,
      nome,
      senha: senhaHashed,
      email,
      telefone,
      cpf,
      cnpj,
      carteira_tipo,
      carteira_numero,
      cep,
      logradouro,
      cidade,
      uf,
      numero,
      complemento,
      participantes,
    });
    
    if (!cadastro) {
      return NextResponse.json(
        { message: "Falha ao salvar registro do cadastro." },
        { status: 500 }
      );
    }

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Pre cadastro realizado!",
      text: "Espera as próximas etapas",
      html: templateEmail(nome),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ cadastro: cadastro }, { status: 201 });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error to save pre register:", error);
    return NextResponse.json(
      { message: "Falha ao enviar cadastro", error: error.message },
      { status: 500 }
    );
  }
}

async function hashSenha(password: string): Promise<string> {
  try {
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS! ?? 8));
    const hash = await bcrypt.hash(password, salt);

    return hash;
  } catch (error) {
    console.error("Erro ao gerar o hash:", error);
    throw new Error("Erro ao gerar o hash da senha.");
  }
}
