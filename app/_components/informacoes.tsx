"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Info, Phone } from "lucide-react";
import { useState } from "react";

export default function Informacoes() {
  const [value, setValue] = useState<string | undefined>(undefined)
  return (
    <div className="w-full">
        <h2 className="text-[#3B2D3A] intersect:motion-preset-slide-up motion-delay-150 text-2xl md:text-3xl font-bold text-center mb-8 uppercase">
            Informações do Concurso
        </h2>
        <Accordion
            type="single"
            collapsible
            className="w-full lg:w-3xl mx-auto space-y-4"
            value={value}
            onValueChange={setValue}
        >
            <div
                className={`w-full flex flex-col gap-4 p-[2px] ${value === "item-1" ? "bg-[#D0DBBF]" : ""}`}
                style={{
                    clipPath:
                    "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
                }}
            >
                <AccordionItem
                    value="item-1"
                    className={`border rounded-lg intersect:motion-preset-slide-up motion-delay-150 ${value === "item-1" ? "bg-white" : ""}`}
                    style={value === "item-1" ? {
                        clipPath:
                        "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
                    } : {}}
                >
                    <AccordionTrigger
                        className={`py-4 px-4 flex gap-3 items-center ${value === "item-1" ? "bg-transparent" : "bg-[#D0DBBF]"}`}
                        style={{
                            clipPath:
                            "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
                        }}
                    >
                        <div className=" flex items-center w-full">
                            <p className="font-semibold text-xl w-full text-start text-[#3B2D3A]">
                            Sobre
                            </p>
                            <Info className="h-5 w-5 text-primary flex-shrink-0 col-span-0" />
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 px-9">
                        <p className="text-muted-foreground">
                            A SP Urbanismo, com apoio da Secretaria de Urbanismo e
                            Licenciamento, vai realizar a segunda edição do Concurso
                            Nacional de Elementos de Mobiliário Urbano, iniciativa que
                            incentiva arquitetos e urbanistas a desenvolverem projetos
                            inovadores para os espaços públicos de São Paulo. O edital
                            está em elaboração e a pré-divulgação da iniciativa ocorre
                            durante a Semana de Design promovida pela DW! um dos maiores
                            eventos do setor no mundo.
                        </p>
                        <p className="text-muted-foreground mt-3">
                            O concurso terá como objetivo selecionar propostas de
                            mobiliário urbano – como bancos, totens, floreiras e
                            sanitários – que priorizem a redução do impacto ambiental, a
                            incorporação de novas tecnologias e a melhoria da experiência
                            dos cidadãos no espaço público. Além de valorizar o design e a
                            funcionalidade, a iniciativa reforça o compromisso da
                            Prefeitura com o desenvolvimento urbano sustentável.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </div>
            <div
                className={`flex flex-col gap-4 p-[2px] ${value === "item-2" ? "bg-[#D0DBBF]" : ""}`}
                style={{
                    clipPath:
                    "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
                }}
            >
                <AccordionItem
                    value="item-2"
                    className={`border rounded-lg intersect:motion-preset-slide-up motion-delay-150 ${value === "item-2" ? "bg-white" : ""}`}
                    style={value === "item-2" ? {
                        clipPath:
                        "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
                    } : {}}
                >
                    <AccordionTrigger
                        className={`py-4 px-4 flex gap-3 items-center ${value === "item-2" ? "bg-transparent" : "bg-[#D0DBBF]"}`}
                        style={{
                            clipPath:
                            "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
                        }}
                    >
                        <div className=" flex items-center w-full">
                            <p className="font-semibold text-xl w-full text-start text-[#3B2D3A]">
                                Data de Inscrição
                            </p>
                            <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 px-9">
                        <div className="space-y-3">
                            <p className="text-gray-700 dark:text-gray-300">
                                <strong>Período:</strong> 15 a 20 de Agosto de 2025
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                <strong>Horários:</strong>
                            </p>
                            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                                <li>Segunda a Sexta: das 10h às 22h</li>
                                <li>Sábado e Domingo: das 9h às 23h</li>
                            </ul>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </div>
            <div
                className={`flex flex-col gap-4 p-[2px] ${value === "item-3" ? "bg-[#D0DBBF]" : ""}`}
                style={{
                    clipPath:
                    "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
                }}
            >
                <AccordionItem
                    value="item-3"
                    className={`border rounded-lg intersect:motion-preset-slide-up motion-delay-150 ${value === "item-3" ? "bg-white" : ""}`}
                    style={value === "item-3" ? {
                        clipPath:
                        "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
                    } : {}}
                >
                    <AccordionTrigger
                        className={`py-4 px-4 flex gap-3 items-center ${value === "item-3" ? "bg-transparent" : "bg-[#D0DBBF]"}`}
                        style={{
                            clipPath:
                            "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
                        }}
                    >
                        <div className=" flex items-center w-full">
                            <p className="font-semibold text-xl w-full text-start text-[#3B2D3A]">
                                Programação
                            </p>
                            <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 px-9">
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-primary">
                                    15 de Agosto (Abertura)
                                </h4>
                                <ul className="mt-2 space-y-2">
                                    <li className="flex gap-2">
                                        <span className="text-sm font-medium w-16">10:00</span>
                                        <span className="text-gray-700 dark:text-gray-300">
                                            Abertura dos portões e exposições
                                        </span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-sm font-medium w-16">14:00</span>
                                        <span className="text-gray-700 dark:text-gray-300">
                                            Workshop de arte urbana
                                        </span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-sm font-medium w-16">19:00</span>
                                        <span className="text-gray-700 dark:text-gray-300">
                                            Cerimônia oficial de abertura
                                        </span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-sm font-medium w-16">20:30</span>
                                        <span className="text-gray-700 dark:text-gray-300">
                                            Show de música com artistas locais
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-primary">
                                    16 de Agosto (Julgamento)
                                </h4>
                                <ul className="mt-2 space-y-2">
                                    <li className="flex gap-2">
                                        <span className="text-sm font-medium w-16">10:00</span>
                                        <span className="text-gray-700 dark:text-gray-300">
                                            Feira de artesanato
                                        </span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-sm font-medium w-16">13:00</span>
                                        <span className="text-gray-700 dark:text-gray-300">
                                            Apresentações de dança folclórica
                                        </span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-sm font-medium w-16">16:00</span>
                                        <span className="text-gray-700 dark:text-gray-300">
                                            Painel: &quot;A História Cultural de São Paulo&quot;
                                        </span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-sm font-medium w-16">20:00</span>
                                        <span className="text-gray-700 dark:text-gray-300">
                                            Apresentação teatral
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-primary">
                                    16 de Setembro (Resultado)
                                </h4>
                                <ul className="mt-2 space-y-2">
                                    <li className="flex gap-2">
                                        <span className="text-sm font-medium w-16">10:00</span>
                                        <span className="text-gray-700 dark:text-gray-300">
                                            Feira de artesanato
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </div>
            <div
                className={`flex flex-col gap-4 p-[2px] ${value === "item-4" ? "bg-[#D0DBBF]" : ""}`}
                style={{
                    clipPath:
                    "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
                }}
            >
                <AccordionItem
                    value="item-4"
                    className={`border rounded-lg intersect:motion-preset-slide-up motion-delay-150 ${value === "item-4" ? "bg-white" : ""}`}
                    style={value === "item-4" ? {
                        clipPath:
                        "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
                    } : {}}
                >
                    <AccordionTrigger
                        className={`py-4 px-4 flex gap-3 items-center ${value === "item-4" ? "bg-transparent" : "bg-[#D0DBBF]"}`}
                        style={{
                            clipPath:
                            "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
                        }}
                    >
                        <div className=" flex items-center w-full">
                            <p className="font-semibold text-xl w-full text-start text-[#3B2D3A]">
                                Contato
                            </p>
                            <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 px-9">
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold">Central de Atendimento:</h4>
                                <p className="mt-1 text-gray-700 dark:text-gray-300">
                                    <strong>Telefone:</strong> (11) 3333-4444
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <strong>Horário:</strong> Segunda a sexta, das 8h às 18h
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold">E-mail:</h4>
                                <p className="mt-1 text-gray-700 dark:text-gray-300">
                                    festival@prefeitura.sp.gov.br
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Redes Sociais:</h4>
                                <div className="flex gap-3 mt-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="rounded-full h-10 w-10 p-0"
                                    >
                                        <span className="sr-only">Instagram</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-primary"
                                        >
                                            <rect
                                            width="20"
                                            height="20"
                                            x="2"
                                            y="2"
                                            rx="5"
                                            ry="5"
                                            />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                        </svg>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="rounded-full h-10 w-10 p-0"
                                    >
                                        <span className="sr-only">Facebook</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-primary"
                                        >
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                        </svg>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="rounded-full h-10 w-10 p-0"
                                    >
                                        <span className="sr-only">Twitter</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-primary"
                                        >
                                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                        </svg>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="rounded-full h-10 w-10 p-0"
                                    >
                                        <span className="sr-only">YouTube</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-primary"
                                        >
                                            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                                            <path d="m10 15 5-3-5-3z" />
                                        </svg>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </div>
        </Accordion>
    </div>
  );
}