import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Documentos() {
    return (
        <section
            id="docs"
            className="w-[90%] lg:w-[600px] mx-auto space-y-4 flex flex-col"
        >
            <div 
                className="w-full flex p-[3px] bg-[#D0DBBF]"
                style={{
                    clipPath:
                    "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
                }}
            >
                <div
                    className="grid grid-cols-3 w-full bg-white p-8 gap-4"
                    style={{
                        clipPath:
                        "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
                    }}
                >
                    <div className="flex flex-col gap-8 col-span-2">
                        <h2 className="text-[#3B2D3A] text-4xl font-bold">
                            EDITAL
                        </h2>
                        <p className="text-[#3B2D3A]">
                            Todas as informações que você precisa para participar estão reunidas no edital do concurso. Faça o download e garanta que seu projeto atenda a todos os requisitos técnicos e formais estabelecidos.
                        </p>
                        <Button
                            size="lg"
                            className="px-4 py-1 text-lg font-semibold cursor-pointer"
                            diagonal
                        >
                            Baixar edital
                        </Button>
                    </div>
                    <Image
                        src="/documentos/edital.png"
                        alt="Termo de referência"
                        width={132}
                        height={132}
                        className="w-full h-full self-center justify-self-center max-w-[132px] max-h-[132px] object-contain"
                    />
                </div>
            </div>
            <div 
                className="w-full flex p-[3px] bg-[#D0DBBF]"
                style={{
                    clipPath:
                    "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
                }}
            >
                <div
                    className="grid grid-cols-3 w-full bg-white p-8 gap-4"
                    style={{
                        clipPath:
                        "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
                    }}
                >
                    <div className="flex flex-col gap-8 col-span-2">
                        <h2 className="text-[#3B2D3A] text-4xl font-bold">
                            TERMO DE REFERÊNCIA
                        </h2>
                        <p className="text-[#3B2D3A]">
                            O Termo de Referência é o documento essencial para entender o contexto, os objetivos e os parâmetros técnicos do concurso. Baixe agora e utilize-o como guia para fundamentar sua proposta.
                        </p>
                        <Button
                            size="lg"
                            className="px-4 py-1 text-lg font-semibold cursor-pointer"
                            diagonal
                        >
                            Baixar termo
                        </Button>
                    </div>
                    <Image
                        src="/documentos/termo_referencia.png"
                        alt="Termo de referência"
                        width={132}
                        height={132}
                        className="w-full h-full self-center justify-self-center max-w-[132px] max-h-[132px] object-contain"
                    />
                </div>
            </div>
        </section>
    )
}