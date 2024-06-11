import Image from 'next/image';


export default function Limpeza() {
    return (
        <div className="mx-auto p-6 bg-gray-200 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Limpeza</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Limpeza Dental, também conhecida como profilaxia, é um procedimento de higiene bucal realizado por um dentista ou higienista para remover placa bacteriana, tártaro e manchas dos dentes.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é realizada?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    O procedimento inclui raspagem para remover tártaro, polimento dos dentes para eliminar manchas superficiais e aplicação de flúor para fortalecer o esmalte dentário. A limpeza é realizada com instrumentos manuais ou ultrassônicos.
                </p>
                <Image
                    src="https://sabkadentist.com/wp-content/uploads/2021/04/Dental-Filling-Procedure-1024x682.jpg"                    alt="Limpeza Dental"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-700 leading-relaxed">
                    A limpeza regular ajuda a prevenir cáries, gengivite e outras doenças periodontais.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Limpeza Dental é indicada para:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li>Prevenção de cáries e gengivite</li>
                    <li>Remoção de placa bacteriana e tártaro</li>
                    <li>Manutenção da saúde bucal</li>
                    <li>Prevenção de doenças periodontais</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Limpeza Dental é segura e essencial para a manutenção da saúde bucal. Pode causar leve desconforto ou sensibilidade temporária, mas é fundamental para prevenir problemas mais graves.
                </p>
            </section>
        </div>
    );
}