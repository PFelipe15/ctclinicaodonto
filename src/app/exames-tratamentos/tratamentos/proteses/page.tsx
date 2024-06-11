import Image from 'next/image';

export default function Proteses() {
    return (
        <div className="mx-auto p-6 bg-gray-200 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Próteses</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-700 leading-relaxed">
                    As Próteses Dentárias são dispositivos utilizados para substituir dentes ausentes, restaurando a função mastigatória, a estética e a saúde bucal.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como são realizadas?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Existem vários tipos de próteses dentárias, incluindo próteses totais, parciais, fixas e removíveis. O processo envolve moldagens, ajustes e a colocação das próteses, realizadas por um dentista especializado.
                </p>
                <Image
                    src="https://www.trovaweb.net/images/protesi-dentarie-3d-fisse-mobili-centro-odontotecnico-riber-dental/protesi-dentarie-3d-fisse-mobili-centro-odontotecnico-riber-dental-01.jpg"
                    alt="Próteses Dentárias"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-700 leading-relaxed">
                    As próteses são feitas sob medida para cada paciente, garantindo um ajuste confortável e funcional.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-700 leading-relaxed">
                    As Próteses Dentárias são indicadas para:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li>Substituição de dentes perdidos</li>
                    <li>Melhoria da função mastigatória</li>
                    <li>Restabelecimento da estética do sorriso</li>
                    <li>Prevenção de problemas na articulação temporomandibular (ATM)</li>
                    <li>Manutenção da estrutura facial</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-700 leading-relaxed">
                    Embora geralmente seguras e eficazes, as próteses podem causar desconforto inicial, ajustes frequentes ou até infecções se não forem bem cuidadas. É essencial seguir as orientações do dentista para a adaptação e manutenção das próteses.
                </p>
            </section>
        </div>
    );
}
