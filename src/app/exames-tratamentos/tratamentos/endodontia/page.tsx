import Image from 'next/image';
import React from 'react';

export default function Endodontia() {
    return (
        <div className="mx-auto p-6 bg-gray-200 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-primary mb-6">Endodontia</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Endodontia é a especialidade odontológica que trata das doenças da polpa dentária e dos tecidos que circundam as raízes dos dentes. Comumente conhecida como tratamento de canal, é essencial para salvar dentes severamente danificados ou infectados.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Como é realizado?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    O procedimento de endodontia envolve a remoção da polpa dentária danificada ou infectada, seguida da limpeza, desinfecção e preenchimento do canal radicular com material obturador. O dente é então restaurado com uma coroa ou outro tipo de restauração para proteger e restaurar sua função.
                </p>
                <Image
                    src="https://i.pinimg.com/originals/32/e8/b6/32e8b68136b307abedb595c77c42c830.jpg"
                    alt="Endodontia"
                    width={600}
                    height={400}
                    className="rounded-lg mb-4"
                />
                <p className="text-gray-700 leading-relaxed">
                    Este procedimento permite que o dente seja preservado, evitando a extração e mantendo a integridade da arcada dentária.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Indicações</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Endodontia é indicada para:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li>Tratamento de cáries profundas que atingem a polpa dentária</li>
                    <li>Reparação de fraturas dentárias que expõem a polpa</li>
                    <li>Tratamento de abscessos ou infecções na raiz do dente</li>
                    <li>Tratamento de lesões traumáticas nos dentes</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-primary mb-2">Riscos e Considerações</h2>
                <p className="text-gray-700 leading-relaxed">
                    A Endodontia é um procedimento seguro e eficaz, mas pode haver riscos como infecção persistente, desconforto temporário ou necessidade de tratamentos adicionais. É importante seguir as orientações do dentista para cuidados pós-procedimento e manter boas práticas de higiene bucal para garantir a saúde do dente tratado.
                </p>
            </section>
        </div>
    );
}
