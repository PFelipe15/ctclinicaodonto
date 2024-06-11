import Image from 'next/image';

export default function Clareamento() {
    return (
        <div className="mx-auto p-6 bg-gray-200 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Clareamento</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-700 leading-relaxed">
                    O Clareamento Dental é um procedimento estético que visa clarear a cor dos dentes, removendo manchas e descolorações, proporcionando um sorriso mais brilhante e atraente.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é realizado?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    O clareamento pode ser feito no consultório dentário, utilizando agentes clareadores mais fortes, ou em casa, com kits fornecidos pelo dentista. O processo envolve a aplicação de um gel clareador nos dentes, que é ativado por uma fonte de luz ou laser.
                </p>
                <Image
                    src="https://www.researchgate.net/publication/362424382/figure/fig2/AS:11431281103606475@1669745149860/FIGURA-6-A-Imagem-inicial-da-paciente-antes-do-procedimento-B-Aspecto-cirurgico_Q320.jpg"
                    alt="Clareamento Dental"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-700 leading-relaxed">
                    Os resultados são visíveis após algumas sessões, proporcionando dentes mais brancos e brilhantes.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-700 leading-relaxed">
                    O Clareamento Dental é indicado para:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li>Manchas causadas por alimentos e bebidas</li>
                    <li>Manchas de tabaco</li>
                    <li>Descoloração devido ao envelhecimento</li>
                    <li>Manchas de medicamentos</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-700 leading-relaxed">
                    O Clareamento é seguro, mas pode causar sensibilidade temporária nos dentes e irritação gengival. É importante seguir as orientações do dentista e evitar alimentos que possam manchar os dentes após o procedimento.
                </p>
            </section>
        </div>
    );
}
