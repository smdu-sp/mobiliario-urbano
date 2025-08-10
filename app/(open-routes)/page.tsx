import Banner from "./_components/banner";
import Informacoes from "./_components/informacoes";
import Apoio from "./_components/apoio";
import Documentos from "./_components/documentos";
import Destaque from "./_components/destaque";

export default async function Home() {
  return (
    <div className="flex flex-col w-full h-full bg-[#e9edde] gap-4">
      <Banner />
      <Informacoes />
      <Documentos />
      <Apoio />
      <Destaque />
    </div>
  );
}
