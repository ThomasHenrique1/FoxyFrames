// Importação de imagens
import raposa1 from "../assets/images/raposa_afega.jpg";
import raposa2 from "../assets/images/raposa_de_darwin.jpg";
import raposa3 from "../assets/images/Raposa_colorada.jpg";
import raposa4 from "../assets/images/Raposa_cinzenta_argentina.jpg";
import raposa5 from "../assets/images/Raposa_das_estepes.jpg";
import raposa6 from "../assets/images/Raposa_das_ilhas.jpg";
import raposa7 from "../assets/images/Raposa_de_bengala.jpg";
import raposa8 from "../assets/images/raposa_de_ruppell.jpg";
import raposa9 from "../assets/images/Raposa_do_artico.jpg";
import raposa10 from "../assets/images/Raposa_do_cabo.jpg";
import raposa11 from "../assets/images/Raposa_do_campo.jpeg";
import raposa12 from "../assets/images/raposa_do_deserto.jpg";
import raposa13 from "../assets/images/raposa-do-himalaia.jpg";
import raposa14 from "../assets/images/raposa-orelhuda.jpg";
import raposa15 from "../assets/images/Raposa-veloz.jpg";
import raposa16 from "../assets/images/Raposa-vermelha.jpg";

// Array de informações das raposas
const foxData = [
    {
      id: 1,
      src: raposa1,
      alt: "Raposa Afegã",
      slug: "raposa-afega",
      description: "A Raposa Afegã é conhecida por sua pelagem longa e adaptabilidade a climas áridos.",
      scientificName: "Vulpes cana",
      size: "50–60 cm (corpo) + 30 cm (cauda)",
      weight: "1,5–3 kg",
      habitat: "Regiões montanhosas do Oriente Médio e Ásia Central",
      diet: "Pequenos mamíferos, insetos e frutas",
      fullDescription:
        "A Raposa Afegã, também chamada de raposa de Blanford, é uma pequena espécie de raposa adaptada a terrenos áridos e montanhosos. Seu corpo esguio e sua cauda longa e espessa ajudam no equilíbrio enquanto se desloca por terrenos rochosos. Possui hábitos noturnos e se alimenta de uma grande variedade de presas, incluindo insetos e pequenos roedores. Diferente de outras raposas, ela não cava tocas, preferindo abrigar-se em fendas de rochas durante o dia.",
    },
    {
      id: 2,
      src: raposa2,
      alt: "Raposa de Darwin",
      slug: "raposa-de-darwin",
      description: "Encontrada no sul da América do Sul, essa raposa é famosa por sua astúcia e elegância.",
      scientificName: "Lycalopex fulvipes",
      size: "48–60 cm (corpo) + 25–30 cm (cauda)",
      weight: "2–4 kg",
      habitat: "Florestas temperadas do Chile",
      diet: "Pequenos vertebrados, frutos e insetos",
      fullDescription:
        "A Raposa de Darwin é uma das espécies mais raras de raposa, encontrada apenas em algumas regiões do Chile, incluindo a Ilha de Chiloé e partes da floresta temperada valdiviana. Seu nome é uma homenagem a Charles Darwin, que a documentou durante sua viagem pelo continente sul-americano. Diferente de outras raposas sul-americanas, ela possui um comportamento mais reservado e é predominantemente noturna. Sua pelagem escura e espessa ajuda na camuflagem dentro das densas florestas.",
    },
    {
      id: 3,
      src: raposa3,
      alt: "Raposa Colorada",
      slug: "raposa-colorada",
      description: "Habitante das regiões montanhosas, a Raposa Colorada tem uma pelagem vibrante.",
      scientificName: "Lycalopex culpaeus",
      size: "70–90 cm (corpo) + 35–50 cm (cauda)",
      weight: "5–14 kg",
      habitat: "Montanhas e planícies da América do Sul",
      diet: "Roedores, lebres, aves e frutas",
      fullDescription:
        "A Raposa Colorada, também conhecida como raposa-andina, é uma das maiores espécies de raposas da América do Sul. Sua pelagem avermelhada e densa a ajuda a suportar temperaturas frias nas altas altitudes dos Andes. Apesar de ser um predador eficiente de pequenos animais, também complementa sua dieta com frutas e carniça. Em algumas regiões, essa espécie é temida por caçadores e fazendeiros devido ao seu hábito de caçar animais domésticos.",
    },
    {
      id: 4,
      src: raposa4,
      alt: "Raposa Cinzenta Argentina",
      slug: "raposa-cinzenta-argentina",
      description: "Essa raposa é famosa por sua agilidade e habilidade de subir em árvores.",
      scientificName: "Lycalopex griseus",
      size: "65–110 cm (incluindo cauda)",
      weight: "2,5–4,5 kg",
      habitat: "Regiões semiáridas da Argentina e Chile",
      diet: "Pequenos mamíferos, aves, insetos e frutas",
      fullDescription:
        "A Raposa Cinzenta Argentina, também conhecida como raposa-chilena, é uma das poucas espécies de raposas que tem a habilidade de escalar árvores. Com uma pelagem acinzentada e focinho alongado, ela se adapta bem a ambientes secos e abertos. Tem hábitos oportunistas e pode se alimentar de uma grande variedade de presas, além de frutas e até restos de comida humana em áreas urbanas.",
    },
    {
      id: 5,
      src: raposa5,
      alt: "Raposa das Estepes",
      slug: "raposa-das-estepes",
      description: "Habitante das estepes, essa raposa possui uma pelagem adaptada ao frio extremo.",
      scientificName: "Vulpes corsac",
      size: "45–65 cm (corpo) + 25–35 cm (cauda)",
      weight: "2,5–4 kg",
      habitat: "Estepes da Ásia Central e Mongólia",
      diet: "Roedores, insetos e ocasionalmente frutas",
      fullDescription:
        "A Raposa das Estepes é uma espécie adaptada a ambientes secos e frios da Ásia Central. Sua pelagem densa ajuda a suportar as temperaturas extremas das estepes. Essa raposa é conhecida por sua resistência e capacidade de percorrer longas distâncias em busca de alimento. Diferente de outras espécies, ela não cava suas próprias tocas, preferindo usar buracos abandonados por outros animais.",
    },
    {
      id: 6,
      src: raposa6,
      alt: "Raposa das Ilhas",
      slug: "raposa-das-ilhas",
      description: "Nativa de ilhas isoladas, essa raposa é pequena e ágil.",
      scientificName: "Urocyon littoralis",
      size: "48–50 cm (corpo) + 15–25 cm (cauda)",
      weight: "1,5–2,5 kg",
      habitat: "Ilhas do litoral da Califórnia",
      diet: "Insetos, pequenos mamíferos e frutas",
      fullDescription:
        "A Raposa das Ilhas é uma espécie endêmica das Ilhas do Canal, na Califórnia. Seu pequeno porte se deve a um fenômeno chamado 'nanismo insular', onde animais que vivem em ilhas tendem a evoluir para tamanhos menores. Essa raposa tem uma relação simbiótica com os habitantes locais e se tornou um símbolo de conservação na região, após esforços para proteger sua população ameaçada.",
    },
    {
      id: 7,
      src: raposa7,
      alt: "Raposa de Bengala",
      slug: "raposa-de-bengala",
      description: "Com uma pelagem dourada, essa raposa é nativa do subcontinente indiano.",
      scientificName: "Vulpes bengalensis",
      size: "45–60 cm (corpo) + 25–35 cm (cauda)",
      weight: "2–4 kg",
      habitat: "Savanas e campos abertos do sul da Ásia",
      diet: "Insetos, pequenos mamíferos e frutas",
      fullDescription:
        "A Raposa de Bengala é uma espécie pequena e ágil, encontrada principalmente na Índia, Nepal e Bangladesh. Diferente de outras raposas, ela evita áreas densamente florestadas, preferindo terrenos abertos. Seu comportamento discreto e noturno dificulta sua observação na natureza. Apesar de sua população ser relativamente estável, a destruição do habitat tem se tornado uma ameaça crescente.",
    },
    {
      id: 8,
      src: raposa8,
      alt: "Raposa de Rüppell",
      slug: "raposa-de-ruppell",
      description: "Encontrada em desertos, essa raposa possui orelhas grandes para dissipar calor.",
      scientificName: "Vulpes rueppellii",
      size: "40–52 cm (corpo) + 25–30 cm (cauda)",
      weight: "1,5–3 kg",
      habitat: "Desertos do Norte da África e Oriente Médio",
      diet: "Insetos, lagartos, roedores e frutas",
      fullDescription:
        "A Raposa de Rüppell é uma especialista na sobrevivência em ambientes áridos. Suas grandes orelhas ajudam a dissipar o calor e sua dieta é extremamente flexível, variando de pequenos vertebrados a restos deixados por outros predadores. Ela raramente precisa beber água, obtendo a maior parte da umidade necessária dos alimentos que consome.",
    },
    {
      id: 9,
      src: raposa9,
      alt: "Raposa do Ártico",
      slug: "raposa-do-artico",
      description: "Com uma pelagem branca e espessa, essa raposa é adaptada ao frio extremo.",
      scientificName: "Vulpes lagopus",
      size: "46–68 cm (corpo) + 30–35 cm (cauda)",
      weight: "3–9 kg",
      habitat: "Tundra Ártica",
      diet: "Lemmings, aves marinhas e carniça",
      fullDescription:
        "A Raposa do Ártico é uma das espécies mais bem adaptadas ao frio intenso. Sua pelagem muda de cor conforme a estação, ficando branca no inverno e acastanhada no verão. Essa raposa é uma exímia caçadora e também aproveita restos de presas deixados por ursos polares. Durante os invernos rigorosos, pode percorrer grandes distâncias em busca de alimento.",
    },
    {
      id: 10,
      src: raposa10,
      alt: "Raposa do Cabo",
      slug: "raposa-do-cabo",
      description: "Essa raposa africana possui uma cauda longa e peluda.",
      scientificName: "Vulpes chama",
      size: "45–61 cm (corpo) + 30–40 cm (cauda)",
      weight: "2,5–5 kg",
      habitat: "Savana e regiões áridas do sul da África",
      diet: "Insetos, pequenos vertebrados e frutas",
      fullDescription:
        "A Raposa do Cabo é a única espécie de raposa nativa do sul da África. Sua pelagem curta e densa a ajuda a lidar com as temperaturas variáveis da savana. Noturna e solitária, ela é um predador oportunista, alimentando-se de uma grande diversidade de presas. Apesar de sua adaptação ao ambiente, enfrenta ameaças como a caça e a perda de habitat.",
    },
    {
      id: 11,
      src: raposa11,
      alt: "Raposa do Campo",
      slug: "raposa-do-campo",
      description: "Habitante das savanas brasileiras, essa raposa é ágil e pequena.",
      scientificName: "Lycalopex vetulus",
      size: "58–80 cm (incluindo cauda)",
      weight: "2,5–4 kg",
      habitat: "Cerrado e savanas do Brasil",
      diet: "Insetos, frutas e pequenos vertebrados",
      fullDescription:
        "A Raposa do Campo é uma das poucas espécies de raposas encontradas no Brasil. Pequena e discreta, ela se adapta bem às áreas de cerrado e savana. Sua dieta é variada, composta por insetos, frutos e pequenos animais. Apesar de sua ampla distribuição, a destruição do habitat é uma preocupação para sua conservação.",
    },
    {
      id: 12,
      src: raposa12,
      alt: "Raposa do Deserto",
      slug: "raposa-do-deserto",
      description: "Com grandes orelhas, essa raposa é adaptada ao calor do deserto.",
      scientificName: "Vulpes zerda",
      size: "24–41 cm (corpo) + 18–30 cm (cauda)",
      weight: "0,7–1,6 kg",
      habitat: "Desertos do Norte da África",
      diet: "Insetos, roedores, ovos e frutas",
      fullDescription:
        "A Raposa do Deserto, também conhecida como Feneco, é a menor espécie de raposa do mundo. Suas grandes orelhas ajudam a dissipar o calor e aprimoram sua audição para detectar presas sob a areia. Essa raposa tem hábitos noturnos e raramente precisa beber água, obtendo umidade diretamente dos alimentos que consome. Sua aparência fofa e comportamento curioso a tornaram uma das espécies de raposas mais populares.",
    },
    {
      id: 13,
      src: raposa13,
      alt: "Raposa do Himalaia",
      slug: "raposa-do-himalaia",
      description: "Essa raposa vive nas montanhas e é conhecida por sua resistência.",
      scientificName: "Vulpes ferrilata",
      size: "60–70 cm (corpo) + 30–40 cm (cauda)",
      weight: "4–6 kg",
      habitat: "Regiões montanhosas do Himalaia e Tibete",
      diet: "Roedores, aves, insetos e restos de carcaças",
      fullDescription:
        "A Raposa do Himalaia, também chamada de Raposa Tibetana, é uma espécie robusta adaptada às altitudes extremas do Himalaia. Sua pelagem espessa e densa a protege do frio intenso. Diferente de outras raposas, ela tem um focinho mais achatado e um comportamento mais reservado. Costuma caçar em parceria com os ursos-do-Himalaia, aproveitando-se das presas que eles espantam.",
    },
    {
      id: 14,
      src: raposa14,
      alt: "Raposa Orelhuda",
      slug: "raposa-orelhuda",
      description: "Famosa por suas orelhas gigantes, é uma excelente ouvinte.",
      scientificName: "Otocyon megalotis",
      size: "46–66 cm (corpo) + 23–34 cm (cauda)",
      weight: "3–5 kg",
      habitat: "Savanas e pastagens da África",
      diet: "Cupins, insetos e pequenos vertebrados",
      fullDescription:
        "A Raposa Orelhuda é uma espécie peculiar que se destaca por suas enormes orelhas, usadas para detectar sons de insetos sob o solo. Ao contrário de outras raposas, sua alimentação é composta principalmente por cupins e outros invertebrados. Vive em grupos familiares e tem um papel ecológico importante no controle populacional de insetos nas savanas africanas.",
    },
    {
      id: 15,
      src: raposa15,
      alt: "Raposa Veloz",
      slug: "raposa-veloz",
      description: "Essa raposa vive em planícies e pode atingir altas velocidades.",
      scientificName: "Vulpes velox",
      size: "38–53 cm (corpo) + 25–35 cm (cauda)",
      weight: "2–3 kg",
      habitat: "Planícies da América do Norte",
      diet: "Roedores, insetos, aves e frutas",
      fullDescription:
        "A Raposa Veloz é uma das espécies mais ágeis do gênero Vulpes, podendo atingir até 50 km/h em curtas distâncias. Adaptada às pradarias e planícies abertas, é excelente caçadora e tem hábitos crepusculares. Sua população já esteve ameaçada devido à perda de habitat, mas programas de conservação ajudaram a estabilizá-la.",
    },
    {
      id: 16,
      src: raposa16,
      alt: "Raposa Vermelha",
      slug: "raposa-vermelha",
      description: "A mais conhecida das raposas, com uma pelagem laranja vibrante.",
      scientificName: "Vulpes vulpes",
      size: "45–90 cm (corpo) + 30–55 cm (cauda)",
      weight: "3–14 kg",
      habitat: "Florestas, campos e áreas urbanas ao redor do mundo",
      diet: "Pequenos mamíferos, aves, insetos, frutas e restos de comida",
      fullDescription:
        "A Raposa Vermelha é a espécie de raposa mais amplamente distribuída no mundo. Sua inteligência e adaptabilidade permitiram que prosperasse em diversos habitats, incluindo áreas urbanas. Possui uma cauda espessa, usada tanto para equilíbrio quanto para se aquecer no frio. É um símbolo de astúcia em várias culturas e frequentemente aparece em mitologias e contos populares.",
    },

];

export default foxData;
