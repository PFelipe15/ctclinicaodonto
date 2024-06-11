import Image from 'next/image';

export default function Harmonizacao() {
    return (
        <div className="mx-auto p-6 bg-gray-200 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Harmonização</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Harmonização Orofacial é um conjunto de procedimentos estéticos realizados na face e no sorriso, visando melhorar a harmonia e a estética facial.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é realizada?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    A harmonização pode incluir procedimentos como preenchimento com ácido hialurônico, aplicação de toxina botulínica (Botox), bichectomia, entre outros. Cada procedimento é personalizado de acordo com as necessidades do paciente.
                </p>
                <Image
                    src="https://feragreece.com/system_files/pages/dental_procedures/images/dental_procedures_1_main_xl.jpg"
                    alt="Harmonização Orofacial"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Harmonização Orofacial é indicada para:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li>Correção de assimetrias faciais</li>
                    <li>Melhoria do contorno facial</li>
                    <li>Redução de linhas de expressão e rugas</li>
                    <li>Aumento e definição dos lábios</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-700 leading-relaxed">
                    Os procedimentos de harmonização são seguros, mas podem causar efeitos temporários como inchaço, vermelhidão e hematomas. É importante seguir as orientações do profissional para obter os melhores resultados e minimizar riscos.
                </p>
            </section>
        </div>
    );
}
