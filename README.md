# 1. Introdução e Objetivo

## Visão Geral:
Atualmente, cuidar da saúde é cada vez mais necessário devido ao ritmo acelerado em que vivemos. Segundo dados da Pesquisa Nacional de Saúde, mais de 60,3% da população brasileira apresenta excesso de peso. Surge, então, a necessidade de sistemas que auxiliem no processo de melhoria da saúde do usuário, rastreando e contabilizando dados relevantes para essa mudança de hábito, junto a outras funcionalidades que possam facilitar esse processo.

## Objetivos:
- **Integração Paciente-Médico:** Fornecer um meio de comunicação facilitado entre médico e paciente para conversas sem a necessidade de marcar consultas.

- **Registro Detalhado de Informações de Saúde:** Apresentar de forma detalhada as informações registradas, fornecendo resumos e gráficos da evolução do paciente ao longo do tempo.

- **Lembretes de Atividades:** Enviar lembretes diários ao usuário sobre a necessidade de realizar atividades, tomar água, entre outros.

# 2. Restrições

## Técnicas:
- **Compatibilidade:** Suporte a múltiplas plataformas, incluindo iOS, Android, e navegadores web.

- **Segurança:** Proteger dados dos usuários através de autenticação e criptografia robustas.

## Organizacionais:
- **Compliance:** Cumprir regulamentações de privacidade e proteção de dados, como a LGPD.

- **Parceria com Organizações de Saúde:** Respeitar acordos com hospitais e clínicas de saúde.

# 3. Contexto

## Ambiente do Sistema:
O **HISCare** é um sistema HIS (Hospital Information System), permitindo o gerenciamento de informações de pacientes, agendamentos e prontuários eletrônicos. Nos prontuários eletrônicos devem estar presentes as seguintes informações: contabilizar calorias e nutrientes ingeridos durante as refeições, manter registro de litros de água consumidos, manter relatórios de atividades executadas e horas de sono, possibilitando que o médico tenha acesso aos dados inseridos em tempo real, criando um ambiente compartilhado. O sistema automatiza diversas funções de um hospital, contribuindo para um atendimento mais eficiente e seguro aos pacientes.

## Interações Externas:
- **Pacientes:** Interagem através de aplicativos móveis e web para cadastrar e visualizar dados de saúde, além de entrar em contato com seu médico.

- **Médicos:** Interagem através da aplicação web para acessar os dados cadastrados pelo paciente. O médico pode receitar remédios, dietas e afins.

- **Serviços de Autenticação:** Utilizados para login social e criação de contas.
