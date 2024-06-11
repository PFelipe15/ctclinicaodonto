import Image from 'next/image';

export default function Exodontia() {
    return (
        <div className="mx-auto p-6 bg-gray-200 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Exodontia</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Exodontia é a remoção cirúrgica de um dente, comumente conhecida como extração dentária. É realizada quando um dente está danificado, infeccionado ou quando há necessidade de espaço para um tratamento ortodôntico.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é realizada?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    O procedimento é realizado sob anestesia local. O dentista utiliza instrumentos específicos para remover o dente de forma segura. Em alguns casos, pode ser necessário fazer uma incisão na gengiva.
                </p>
                <Image
                    src="https://www.cleardental.com.au/wp-content/uploads/2022/12/tooth-Extraction.png"
                    alt="Exodontia"
                    width={600}
                    
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-700 leading-relaxed">
                    Após a remoção, o local da extração é limpo e pode ser necessário suturar a gengiva.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Exodontia é indicada para:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li>Dentes severamente danificados ou cariados</li>
                    <li>Dentes infeccionados</li>
                    <li>Dentes do siso impactados</li>
                    <li>Preparação para tratamento ortodôntico</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Exodontia é um procedimento comum e seguro, mas pode causar dor, inchaço e sangramento. É importante seguir as orientações pós-operatórias do dentista para evitar infecções e promover a cicatrização adequada.
                </p>
            </section>
        </div>
    );
}
