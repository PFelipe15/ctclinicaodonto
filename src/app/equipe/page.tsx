import Image from 'next/image';
import medico1 from '../assets/principal.jpg';
 

export default function Equipe() {
  const team = [
    {
        name: 'Dr. Carlos Almeida',
        title: 'Dentista',
        crm: 'CRO 12345',
        graduation: 'Universidade de São Paulo',
        description: 'Especialista em odontologia estética com mais de 15 anos de experiência. Focado em proporcionar sorrisos saudáveis e bonitos.',
        image: medico1,
    },
    {
        name: 'Dra. Fernanda Silva',
        title: 'Dentista',
        crm: 'CRO 67890',
        graduation: 'Universidade Federal do Rio de Janeiro',
        description: 'Dentista dedicada ao tratamento de doenças periodontais e à saúde bucal preventiva.',
        image: medico1,
    },
    {
        name: 'Dr. Rafael Moreira',
        title: 'Dentista',
        crm: 'CRO 11223',
        graduation: 'Universidade Estadual de Campinas',
        description: 'Apaixonado por endodontia, ajudando pacientes a manter dentes naturais sempre que possível.',
        image: medico1,
    },
    {
        name: 'Dra. Juliana Fernandes',
        title: 'Dentista',
        crm: 'CRO 33456',
        graduation: 'Universidade Federal de Minas Gerais',
        description: 'Especialista em ortodontia, corrigindo alinhamento dentário e maxilar para melhorar a funcionalidade e estética.',
        image: medico1,
    },
    {
        name: 'Ana Paula Souza',
        title: 'Atendente',
        crm: '',
        graduation: 'Curso Técnico em Saúde',
        description: 'Atendente dedicada, focada em proporcionar uma excelente experiência aos pacientes desde a recepção até o agendamento de consultas.',
        image: medico1,
    },
];



    return (
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl text-center  md:text-left text-primary font-bold  mb-8">
          Nossa Equipe
        </h1>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white hover:border-primary hover:border-2  shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 p-6 text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-black p-2 rounded-md   ">
                {member.name}
              </h2>
              <h3 className="text-xl text-indigo-600 mb-2">{member.title}</h3>
              {member.crm != "" ? (
                <p className="  mb-1 bg-primary text-white p-1 rounded-md ">
                  {member.crm}
                </p>
              ): ("")}

              <p className="text-gray-600 mb-2">{member.graduation}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
}
