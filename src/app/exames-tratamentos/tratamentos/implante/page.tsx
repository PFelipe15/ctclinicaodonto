import Image from 'next/image';
import React from 'react';

export default function Implante() {
    return (
        <div className="mx-auto p-6 bg-gray-200 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Implante</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-700 leading-relaxed">
                    O Implante Dentário é um procedimento cirúrgico que visa substituir dentes perdidos por raízes artificiais feitas de titânio, que são inseridas no osso maxilar ou mandibular.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é realizado?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    O procedimento é realizado em etapas. Primeiro, o implante de titânio é inserido cirurgicamente no osso. Após um período de cicatrização, onde o implante se integra ao osso, uma coroa é colocada sobre o implante para substituir o dente ausente.
                </p>
                <Image
                    src="https://dental-clinic.ae/wp-content/uploads/2021/04/dental-implantation-3.jpeg"
                    alt="Implante Dentário"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-700 leading-relaxed">
                    Este processo proporciona uma base sólida para dentes substitutos, que se parecem e funcionam como dentes naturais.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-700 leading-relaxed">
                    O Implante Dentário é indicado para:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li>Substituição de um ou mais dentes perdidos</li>
                    <li>Suporte para próteses dentárias</li>
                    <li>Melhoria da função mastigatória</li>
                    <li>Preservação da estrutura óssea facial</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-700 leading-relaxed">
                    Embora seja um procedimento altamente bem-sucedido, a colocação de implantes pode acarretar riscos como infecção, lesões nos nervos ou sinusite. É fundamental seguir as orientações do dentista para garantir a correta cicatrização e sucesso do implante.
                </p>
            </section>
        </div>
    );
}
