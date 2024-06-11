import Image from 'next/image';
import React from 'react';

export default function Restauracao() {
    return (
        <div className="mx-auto p-6 bg-gray-200 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Restauração</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-700 leading-relaxed">
                    A restauração é um procedimento odontológico que visa reparar e restaurar a função e integridade de um dente danificado. Isso pode ser necessário devido a cáries, fraturas ou desgaste.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é realizado?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    O procedimento é realizado sob anestesia local para garantir conforto ao paciente. A área danificada do dente é removida, e o espaço é preenchido com um material restaurador, como resina composta, amálgama ou cerâmica.
                </p>
                <Image
                    src="https://complex-dent.com.ua/wp-content/uploads/2021/01/plomba.jpg"
                    alt="Restauração"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-700 leading-relaxed">
                    O material é moldado e polido para combinar com a forma e a cor do dente natural, restaurando sua função e aparência.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-700 leading-relaxed">
                    A restauração é indicada para:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li>Reparar cáries</li>
                    <li>Consertar fraturas ou fissuras</li>
                    <li>Substituir restaurações antigas e danificadas</li>
                    <li>Melhorar a estética do sorriso</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-700 leading-relaxed">
                    Embora a restauração seja um procedimento seguro e comum, pode haver riscos como sensibilidade dentária temporária, desconforto ou reação alérgica ao material usado. É importante seguir as recomendações do dentista para cuidados pós-procedimento.
                </p>
            </section>
        </div>
    );
}
