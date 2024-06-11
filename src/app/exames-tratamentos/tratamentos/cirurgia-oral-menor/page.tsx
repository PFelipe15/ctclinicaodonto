import Image from 'next/image';

export default function CirurgiaOralMenor() {
    return (
      <div className="mx-auto p-6 bg-gray-200 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-primary mb-6">
          Cirurgia Oral Menor
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-primary mb-2">O que é?</h2>
          <p className="text-gray-700 leading-relaxed">
            A Cirurgia Oral Menor inclui procedimentos cirúrgicos de pequeno
            porte realizados na cavidade oral, como extração de dentes, remoção
            de cistos, e frenectomias.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-primary mb-2">
            Como é realizada?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            O procedimento é realizado sob anestesia local. Dependendo da
            cirurgia, pode envolver a remoção de tecido, ossos ou dentes.
            Técnicas precisas são usadas para minimizar o desconforto e promover
            a rápida recuperação.
          </p>
          <Image
            src="https://avatars.mds.yandex.net/get-altay/5587131/2a0000017ee838b0e044888988faf881675f/XXL_height"
            alt="Cirurgia Oral Menor"
            width={600}
            height={400}
            className="rounded-lg mb-4"
          />
          <p className="text-gray-700 leading-relaxed">
            A recuperação varia de acordo com o procedimento, sendo importante
            seguir as orientações pós-operatórias.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-primary mb-2">
            Indicações
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A Cirurgia Oral Menor é indicada para:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Extração de dentes impactados</li>
            <li>Remoção de cistos e tumores benignos</li>
            <li>Correção de frenulum anormal (frenectomia)</li>
            <li>Tratamento de infecções orais</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-2">
            Riscos e Considerações
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A Cirurgia Oral Menor é segura, mas pode causar dor, inchaço e risco
            de infecção. Seguir as orientações pós-operatórias é crucial para
            uma recuperação rápida e sem complicações.
          </p>
        </section>
      </div>
    );
}
