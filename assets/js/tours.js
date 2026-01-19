export const tours = [
    {
        id: "namora",
        category: "popular",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC-BWEVPF_D5-SKSLaT_NwuVJxxEGQ3ny45mqR-RR1dI9zS31ls46DP0RGiOaZVIjZJSNmZShDrlYqlwy3fPoYlxUHNCKdC2jkB7yevc-Zo4thoeD8Bce0Dp-Qe5bBTfWRQYo2d9qyjioMcp4A_7-_U7Z974u9grfXcBIqMqC7EoAzuyn4DRRoQ6hXhLnoQbH6_5Lihcl-414wQZ0XjpC0So24rPMWIUFcyYfaVyvteYSRQLtPOrAzT5NoAP1sLCLISFtq2s1n9Z-IH",
            "https://upload.wikimedia.org/wikipedia/commons/e/ea/Laguna_San_Nicol%C3%A1s_-_panoramio.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/b/b3/Laguna_San_Nicol%C3%A1s_-_panoramio_%282%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/e/ea/Laguna_San_Nicol%C3%A1s_-_panoramio.jpg"
        ],
        rating: 4.6,
        reviews: 60,
        price: { es: 110, en: 30 },
        duration: {
            es: "Medio Día",
            en: "Half Day"
        },
        groupSize: { es: "Max 12 personas", en: "Max 12 people" },
        type: { es: "Relax", en: "Relax" },
        location: "Namora, Cajamarca",
        title: {
            es: "Namora",
            en: "Namora"
        },
        description: {
            es: "Visita la tierra de las guitarras y disfruta de un tranquilo paseo en bote en la laguna San Nicolás.",
            en: "Visit the land of guitars and enjoy a peaceful boat ride on San Nicolas lagoon."
        },
        fullDescription: {
            es: "Namora es conocido por sus talleres de guitarras y la hermosa Laguna San Nicolás. Disfrutaremos de los paisajes, la artesanía y la gastronomía local.",
            en: "Namora is known for its guitar workshops and the beautiful San Nicolás Lagoon. We will enjoy the landscapes, crafts, and local cuisine."
        },
        highlights: {
            es: ["Laguna San Nicolás", "Taller de guitarras", "Paseo en bote"],
            en: ["San Nicolás Lagoon", "Guitar workshops", "Boat ride"]
        },
        includes: { es: ["Transporte", "Guía", "Paseo en bote"], en: ["Transport", "Guide", "Boat ride"] },
        notIncluded: { es: ["Almuerzo"], en: ["Lunch"] },
        itinerary: [],
        faq: []
    },
    {
        id: "porcon",
        category: "popular",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCj5KQTti6ZgLfCgCgvn-zWCFgHxKREMNnVaznlFYR0yANqraCD97xuGt7_w3Aa_IiAy1grGKOaAs6hsVybv9iDEuFVeCg-qO-29Fimeo2L-wJpOSJ3SD7y1-WNMbZPKQQIgVtalSEKV3FttM0FzYvI5urGG5SSHUrjZYp_3f87hto74XMNi5LlRKUc_F2BynKi-dbhBNyXFeW2G_MBiPqPi8809SI5wx2dznm1pHRdBSYXdZYIhtkUZVQQMLtrwvBZF7ulyy_M-weW",
            "https://upload.wikimedia.org/wikipedia/commons/e/e0/Granja_Porc%C3%B3n_-_View_with_vicu%C3%B1as.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/7/77/Granja_Porc%C3%B3n_-_View.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/e/e0/Granja_Porc%C3%B3n_-_View_with_vicu%C3%B1as.jpg"
        ],
        rating: 4.7,
        reviews: 95,
        price: { es: 150, en: 40 },
        duration: {
            es: "Día Completo",
            en: "Full Day"
        },
        groupSize: {
            es: "Max 20 personas",
            en: "Max 20 people"
        },
        type: {
            es: "Agroturismo",
            en: "Agrotourism"
        },
        location: "Granja Porcón, Cajamarca",
        title: {
            es: "Granja Porcón",
            en: "Porcon Farm"
        },
        description: {
            es: "Sumérgete en la vida tradicional de granja rodeado de inmensos bosques de pinos y vida silvestre.",
            en: "Immerse yourself in traditional farm life surrounded by immense pine forests and wildlife."
        },
        fullDescription: {
            es: "La Granja Porcón es un ejemplo exitoso de cooperativa agraria en el Perú. Rodeada de bosques de pinos, ofrece turismo rural, zoológico con osos de anteojos, pumas, y actividades de campo como ordeño de vacas.",
            en: "Granja Porcón is a successful example of an agrarian cooperative in Peru. Surrounded by pine forests, it offers rural tourism, a zoo with spectacled bears, pumas, and field activities such as cow milking."
        },
        highlights: {
            es: ["Turismo vivencial", "Bosques de pinos", "Zoológico"],
            en: ["Experiential tourism", "Pine forests", "Zoo"]
        },
        includes: {
            es: ["Transporte", "Guía", "Entrada a Granja Porcón"],
            en: ["Transport", "Guide", "Granja Porcón Entrance"]
        },
        notIncluded: {
            es: ["Almuerzo"],
            en: ["Lunch"]
        },
        itinerary: [
            { time: "09:00 AM", title: { es: "Salida", en: "Departure" }, desc: { es: "Rumbo a Porcón.", en: "Heading to Porcon." } },
            { time: "10:30 AM", title: { es: "Talleres Artesanales", en: "Artisan Workshops" }, desc: { es: "Visita a talleres de picapedreros.", en: "Visit to stone cutters workshops." } },
            { time: "11:30 AM", title: { es: "Granja Porcón", en: "Porcon Farm" }, desc: { es: "Recorrido por el zoológico y bosque.", en: "Tour of the zoo and forest." } },
            { time: "02:00 PM", title: { es: "Almuerzo libre", en: "Free lunch" }, desc: { es: "Tiempo para comer (no incluido).", en: "Time to eat (not included)." } },
            { time: "04:00 PM", title: { es: "Retorno", en: "Return" }, desc: { es: "Llegada a Cajamarca.", en: "Arrival in Cajamarca." } }
        ],
        faq: [
            { q: { es: "¿Hay restaurantes dentro?", en: "Are there restaurants inside?" }, a: { es: "Sí, hay varias opciones típicas.", en: "Yes, there are several typical options." } }
        ]
    },
    {
        id: "cumbemayo",
        category: "popular",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA2PSlDpqa7FjSvHYc_qTcgCfQHWnPzOjTMG2pQ6hlJnROnkt5aAMOigVdHeWDHn6F3Dxs8ULYZ4KKbP0vAVTrFl6EHwr4XWVFa9Qj6lWckh5he8VRDC1c1maeGnyPKiFUHeB4cNY9ZH8PxRWPeaxunnkM38uI-MIq28gnkGNh6em642UdiJVQN24rdFToGKOKNIVihQPbgNz21numOB5Vb4mnJvD0sUfZgeVXKV9BFaepLs_MUsp8G4ZmCtWMj3Ytqm3ppy8c7v2ot",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCIreQeK82bDENxPsrSwk_REsyT6mxxLfBaqxEfB9QeFTyufK3CylpWkKWQm55ZI5Fnl_ZfhWLRI-TRCR4JuYby52NP3JPVGaSit29faC2bavFKFehaWHTrIl-9G6tBmD17k2EzHFgF8JexMaWHVKhJAKSj7YkV63eqELCUf-6fHGHi3FCuzp8hBkpHi_LPlxrs5W33lRDN3t0UfYlQ9GK7jiBttwJDLutG_RQf8U-9qp_JkZGF_ndzN5R3mlxmfvxmjM9XtfB6Eqxs",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD1_eMfZ0j9g643Lpq3kppoYroiIpqeH5u8WoiRmulH-mcXbx-Ro7K7BinuJWyv8pqNKK42Dow2Y-n9vVAISwStTfLaV3StMOYMvPsOATC_MSrtzgQwLMNolyZ6_H0fpMrOgTcr6ssWgVSp0m6zxTc_RfdAexu-wEPxH3qwupw5tG4zQ5W5XB6_2lrvZJgFLVSX22Xb1ez6NTSEoPtNq8oJtNd177oWiSxWgm7jEBfHPe9AsTMkfo4tJ6YwTrY2BhBjx9zZ-7BWTzXt",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAVZGzxK7c4z0TMU8HhHOcBZ1Jdjws2E61E8XlOEBSIVQ5BJw2fSOHEHmEuVpdYvBfcIPRGClex7YXC9EJNYHz99DOjDOXDhnZ-NMk02-lCyLaM96Kucb7D18OkIaGcazyH9ja-0Dpcwj-mW365K7k_Cu1SDVvYZMl6q3CCxbOR1LGv315uockkg3hLK_trkd2wfpZ2w3wYzjQ4FiuRcw33rLge0l7a-4prlupyasLpPJthuDpBbB8_isPaa_0xuy2YynBThuhcZtbG"
        ],
        rating: 4.8,
        reviews: 124,
        price: { es: 165, en: 45 },
        duration: {
            es: "6 Horas",
            en: "6 Hours"
        },
        groupSize: {
            es: "Max 15 personas",
            en: "Max 15 people"
        },
        type: {
            es: "Ecoturismo",
            en: "Ecotourism"
        },
        location: "Cajamarca, Perú - A 20km de la ciudad",
        title: {
            es: "Cumbemayo",
            en: "Cumbemayo"
        },
        description: {
            es: "Sé testigo del majestuoso Bosque de Piedras y los impresionantes acueductos de ingeniería hidráulica antigua.",
            en: "Witness the majestic Stone Forest and impressive ancient hydraulic engineering aqueducts."
        },
        fullDescription: {
            es: "Descubre la majestuosidad de los Andes peruanos con este tour exclusivo a Cumbemayo. Comenzaremos nuestro viaje ascendiendo a través de bosques de pinos y formaciones rocosas únicas conocidas como 'Los Frailones'. Exploraremos el canal prehispánico de Cumbemayo, una obra maestra de ingeniería hidráulica tallada en piedra hace más de 3000 años.",
            en: "Discover the majesty of the Peruvian Andes with this exclusive tour to Cumbemayo. We will begin our journey ascending through pine forests and unique rock formations known as 'Los Frailones'. We will explore the pre-Hispanic canal of Cumbemayo, a masterpiece of hydraulic engineering carved in stone over 3000 years ago."
        },
        highlights: {
            es: ["Bosque de piedras", "Canal prehispánico", "Frailejes"],
            en: ["Stone forest", "Pre-Hispanic canal", "Frailejes"]
        },
        includes: {
            es: ["Transporte turístico ida y vuelta", "Guía oficial de turismo", "Tickets de ingreso", "Botiquín de primeros auxilios"],
            en: ["Round trip tourist transport", "Official tour guide", "Entrance tickets", "First aid kit"]
        },
        notIncluded: {
            es: ["Almuerzo o alimentación", "Propinas", "Gastos extra"],
            en: ["Lunch or food", "Tips", "Extra expenses"]
        },
        itinerary: [
            {
                time: "09:00 AM",
                title: { es: "Recojo del Hotel", en: "Hotel Pickup" },
                desc: { es: "Iniciamos el recorrido recogiéndote desde tu hospedaje en el centro.", en: "We start the tour by picking you up from your lodging in the center." }
            },
            {
                time: "10:00 AM",
                title: { es: "Mirador de Bellavista", en: "Bellavista Viewpoint" },
                desc: { es: "Parada breve para fotos panorámicas de la ciudad.", en: "Brief stop for panoramic photos of the city." }
            },
            {
                time: "11:00 AM",
                title: { es: "Bosque de Piedras y Cumbemayo", en: "Stone Forest & Cumbemayo" },
                desc: { es: "Caminata suave de 1 hora explorando los frailones y el canal.", en: "Gentle 1-hour walk exploring the frailones and the canal." }
            },
            {
                time: "01:30 PM",
                title: { es: "Retorno a Cajamarca", en: "Return to Cajamarca" },
                desc: { es: "Fin del tour en la Plaza de Armas.", en: "End of the tour at the Main Square." }
            }
        ],
        faq: [
            {
                q: { es: "¿Qué debo llevar?", en: "What should I bring?" },
                a: { es: "Ropa cómoda, abrigo, agua y bloqueador.", en: "Comfortable clothes, warm clothing, water, and sunscreen." }
            },
            {
                q: { es: "¿Es apto para niños?", en: "Is it suitable for children?" },
                a: { es: "Sí, mayores de 5 años.", en: "Yes, over 5 years old." }
            }
        ]
    },
    {
        id: "otuzco",
        category: "popular",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB695eg1qgbXIHDZtDYIGQHJq-8IYiwuwyNIsiuiyvoG39vlpxXpD5JQZCzP3BRCMgVwt3B2l1fKYJJPw87niD22G5SGT0OVUpvfsvi58hhe2WlAwbbpa1aeO9i_ngVcwjmA2w_INNiaBg3fM5ypuq28KN2kh3t-re3nWJv5moc6ft7jrlZDAB84vaWy4lYCGdiR4VfQzy78VCWbxN2Cv4WgRlH2tv1nt_5l1AcUs_Moq0xqmrfK_Aus8BsXOVO3U2579f1_4auUA16",
            "https://upload.wikimedia.org/wikipedia/commons/e/e0/Ventanas_de_Otuzco.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/e/e9/Ventanillas_de_Otuzco%2C_Peru.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/3/3b/Las_Ventanillas_de_Otuzco.jpg"
        ],
        rating: 4.8,
        reviews: 124,
        price: { es: 130, en: 35 },
        duration: {
            es: "Medio Día",
            en: "Half Day"
        },
        groupSize: {
            es: "Max 15 personas",
            en: "Max 15 people"
        },
        type: {
            es: "Arqueología",
            en: "Archaeology"
        },
        location: "Baños del Inca, Cajamarca",
        title: {
            es: "Ventanillas de Otuzco",
            en: "Ventanillas de Otuzco"
        },
        description: {
            es: "Explora la misteriosa necrópolis pre-inca tallada directamente en acantilados de piedra volcánica.",
            en: "Explore the mysterious pre-Inca necropolis carved directly into volcanic stone cliffs."
        },
        fullDescription: {
            es: "Las Ventanillas de Otuzco son un sitio arqueológico peruano situado en el distrito de Baños del Inca a 8 km al noroeste de la ciudad de Cajamarca. El sitio es una necrópolis de origen preincaico, anterior a la cultura Cajamarca, excavada en la roca volcánica. Exploraremos las criptas y disfrutaremos del paisaje únicos.",
            en: "The Ventanillas de Otuzco is a Peruvian archaeological site located in the district of Baños del Inca, 8 km northwest of the city of Cajamarca. The site is a pre-Inca necropolis carved into volcanic rock. We will explore the crypts and enjoy the unique landscape."
        },
        highlights: {
            es: ["Necrópolis pre-inca", "Vistas panorámicas", "Caminata ligera"],
            en: ["Pre-Inca necropolis", "Panoramic views", "Light hiking"]
        },
        includes: {
            es: ["Transporte turístico", "Guía oficial", "Entradas"],
            en: ["Tourist transport", "Official guide", "Entrance fees"]
        },
        notIncluded: {
            es: ["Almuerzo", "Propinas"],
            en: ["Lunch", "Tips"]
        },
        itinerary: [
            {
                time: "09:00 AM",
                title: { es: "Recojo del Hotel", en: "Hotel Pickup" },
                desc: { es: "Inicio del tour desde su hotel.", en: "Start of the tour from your hotel." }
            },
            {
                time: "09:30 AM",
                title: { es: "Jardín de las Hortensias", en: "Hydrangea Garden" },
                desc: { es: "Breve parada para apreciar flores locales.", en: "Brief stop to appreciate local flowers." }
            },
            {
                time: "10:30 AM",
                title: { es: "Ventanillas de Otuzco", en: "Ventanillas de Otuzco" },
                desc: { es: "Visita guiada por la necrópolis.", en: "Guided tour through the necropolis." }
            },
            {
                time: "01:00 PM",
                title: { es: "Retorno", en: "Return" },
                desc: { es: "Llegada a la Plaza de Armas.", en: "Arrival at the Main Square." }
            }
        ],
        faq: [
            {
                q: { es: "¿Es difícil la caminata?", en: "Is the hike difficult?" },
                a: { es: "No, es nivel básico.", en: "No, it is basic level." }
            }
        ]
    },
    {
        id: "collpa",
        category: "popular",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBItH20Od7WBYTBMaacs8E9Iam3XYb-m5hkvm7fqHDuHc_44vPk1oOD84jr0EytQuosazRVyOwhOvkpkc5Zdx1f0nIKGl52Ob8n3SM1_0A80qLSmjfazFD3deCzGbTDHzMs1U_lhEvoP5VNAp5FYGN0jvGqANSwUgdzOuz0NMJZ9eAH51JWuOnd0lqWka-7Y_R-I0Ra32VJYa9Q1N-Ivcnzk34ck-g902wgCO2kMMdx_KXKaB50LvG6fvgA9zYHcnhGaJzOgPU0hHKM",
            "https://commons.wikimedia.org/wiki/Special:FilePath/HACIENDA_LA_COLPA_01.jpg",
            "https://commons.wikimedia.org/wiki/Special:FilePath/HACIENDA_LA_COLPA_04.jpg",
            "https://commons.wikimedia.org/wiki/Special:FilePath/HACIENDA_LA_COLPA_01.jpg"
        ],
        rating: 4.8,
        reviews: 150,
        price: { es: 95, en: 25 },
        duration: {
            es: "Medio Día",
            en: "Half Day"
        },
        groupSize: { es: "Max 20 personas", en: "Max 20 people" },
        type: { es: "Tradicional", en: "Traditional" },
        location: "La Collpa, Cajamarca",
        title: {
            es: "La Collpa",
            en: "La Collpa"
        },
        description: {
            es: "Famoso por el 'Llamado de las Vacas', donde el ganado regresa por su nombre. Disfruta de delicias lácteas frescas.",
            en: "Famous for the 'Call of the Cows', where cattle return by name. Enjoy fresh dairy delights."
        },
        fullDescription: {
            es: "La ex hacienda La Collpa es un destino tradicional donde se puede observar el llamado de las vacas y degustar productos lácteos como el manjar blanco.",
            en: "The former La Collpa hacienda is a traditional destination where you can observe the calling of the cows and taste dairy products like manjar blanco."
        },
        highlights: {
            es: ["Llamado de vacas", "Capilla histórica", "Degustación de lácteos"],
            en: ["Cow calling", "Historical chapel", "Dairy tasting"]
        },
        includes: { es: ["Transporte", "Guía", "Entrada"], en: ["Transport", "Guide", "Entrance"] },
        notIncluded: { es: ["Compras"], en: ["Shopping"] },
        itinerary: [],
        faq: []
    },
    {
        id: "yanamarca",
        category: "popular",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC-QkyN672jnJHlYDVkNx8JsstVSbTKDr1z7jzd6anl0T6BnhqIagYG8wnYUwdBcd0X5n9iJLI0kCl19UoExeHaliucAFShxVgnF0PIQP4MmW1MtD2GJZvQmu4ewa7RZcvvbKlKEXBxmguCW9C1lxYTUO3KSceCkUnxgGMD4_ZAJvEdebxQ1vp3xRrAkSrlp_HOih3AY_eIzixNlvalMCwDCemu2m5m5-5_zWE-TWa1b2axQafRwE2ORetC9JVvP-b65Eqnu6L7SG0E",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC-QkyN672jnJHlYDVkNx8JsstVSbTKDr1z7jzd6anl0T6BnhqIagYG8wnYUwdBcd0X5n9iJLI0kCl19UoExeHaliucAFShxVgnF0PIQP4MmW1MtD2GJZvQmu4ewa7RZcvvbKlKEXBxmguCW9C1lxYTUO3KSceCkUnxgGMD4_ZAJvEdebxQ1vp3xRrAkSrlp_HOih3AY_eIzixNlvalMCwDCemu2m5m5-5_zWE-TWa1b2axQafRwE2ORetC9JVvP-b65Eqnu6L7SG0E",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC-QkyN672jnJHlYDVkNx8JsstVSbTKDr1z7jzd6anl0T6BnhqIagYG8wnYUwdBcd0X5n9iJLI0kCl19UoExeHaliucAFShxVgnF0PIQP4MmW1MtD2GJZvQmu4ewa7RZcvvbKlKEXBxmguCW9C1lxYTUO3KSceCkUnxgGMD4_ZAJvEdebxQ1vp3xRrAkSrlp_HOih3AY_eIzixNlvalMCwDCemu2m5m5-5_zWE-TWa1b2axQafRwE2ORetC9JVvP-b65Eqnu6L7SG0E",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC-QkyN672jnJHlYDVkNx8JsstVSbTKDr1z7jzd6anl0T6BnhqIagYG8wnYUwdBcd0X5n9iJLI0kCl19UoExeHaliucAFShxVgnF0PIQP4MmW1MtD2GJZvQmu4ewa7RZcvvbKlKEXBxmguCW9C1lxYTUO3KSceCkUnxgGMD4_ZAJvEdebxQ1vp3xRrAkSrlp_HOih3AY_eIzixNlvalMCwDCemu2m5m5-5_zWE-TWa1b2axQafRwE2ORetC9JVvP-b65Eqnu6L7SG0E"
        ],
        rating: 4.5,
        reviews: 45,
        price: { es: 95, en: 25 },
        duration: {
            es: "Medio Día",
            en: "Half Day"
        },
        groupSize: { es: "Max 15 personas", en: "Max 15 people" },
        type: { es: "Arqueología", en: "Archaeology" },
        location: "Yanamarca, Cajamarca",
        title: {
            es: "Castillo de Yanamarca",
            en: "Yanamarca Castle"
        },
        description: {
            es: "Retrocede en el tiempo en estas ruinas históricas que ofrecen vistas panorámicas del campo.",
            en: "Step back in time at these historical ruins offering panoramic countryside views."
        },
        fullDescription: {
            es: "El Castillo de Yanamarca es una formación rocosa y sitio arqueológico que se asemeja a un castillo medieval (Cultura Caxamarca). Ofrece vistas espectaculares del valle.",
            en: "Yanamarca Castle is a rock formation and archaeological site that resembles a medieval castle (Caxamarca Culture). It offers spectacular views of the valley."
        },
        highlights: {
            es: ["Vistas panorámicas", "Ruinas arqueológicas", "Formaciones rocosas"],
            en: ["Panoramic views", "Archaeological ruins", "Rock formations"]
        },
        includes: { es: ["Transporte", "Guía", "Entrada"], en: ["Transport", "Guide", "Entrance"] },
        notIncluded: { es: ["Almuerzo"], en: ["Lunch"] },
        itinerary: [],
        faq: []
    },
    {
        id: "city-tour",
        category: "popular",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/e/e0/Cajamarca6.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/f/f6/PLAZA_DE_ARMAS_DE_CAJAMARCA.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/c/c5/El_cuarto_del_Rescate%2C_Cajamarca%2C_Peru.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/d/d1/Iglesia_de_San_Francisco%2C_Cajamarca%2C_Per%C3%BA%2C_2015-07-31%2C_DD_10.JPG"
        ],
        rating: 4.9,
        reviews: 210,
        price: { es: 40, en: 15 },
        duration: {
            es: "4 Horas",
            en: "4 Hours"
        },
        groupSize: { es: "Max 15 personas", en: "Max 15 people" },
        type: { es: "Cultural", en: "Cultural" },
        location: "Centro Histórico, Cajamarca",
        title: {
            es: "City Tour Cajamarca",
            en: "Cajamarca City Tour"
        },
        description: {
            es: "Recorre las joyas arquitectónicas coloniales y los sitios históricos más importantes de la ciudad.",
            en: "Tour the colonial architectural gems and the most important historical sites of the city."
        },
        fullDescription: {
            es: "Sumérgete en la historia de Cajamarca con nuestro City Tour. Visitaremos la histórica Plaza de Armas, el Cuarto del Rescate (el único vestigio inca en la ciudad), el Complejo Monumental Belén, y la colina de Santa Apolonia para una vista panorámica inigualable.",
            en: "Immerse yourself in the history of Cajamarca with our City Tour. We will visit the historic Plaza de Armas, the Ransom Room (the only Inca vestige in the city), the Belén Monumental Complex, and Santa Apolonia Hill for an invalid panoramic view."
        },
        highlights: {
            es: ["Cuarto del Rescate", "Plaza de Armas", "Mirador Santa Apolonia", "Iglesias Coloniales"],
            en: ["Ransom Room", "Main Square", "Santa Apolonia Viewpoint", "Colonial Churches"]
        },
        includes: { es: ["Transporte", "Guía oficial", "Entradas"], en: ["Transport", "Official guide", "Entry tickets"] },
        notIncluded: { es: ["Almuerzo", "Propinas"], en: ["Lunch", "Tips"] },
        itinerary: [
            { time: "09:00 AM", title: { es: "Inicio", en: "Start" }, desc: { es: "Reunión en la Plaza de Armas.", en: "Meeting at the Main Square." } },
            { time: "09:30 AM", title: { es: "Cuarto del Rescate", en: "Ransom Room" }, desc: { es: "Visita al lugar histórico del Inca Atahualpa.", en: "Visit to the historical site of Inca Atahualpa." } },
            { time: "10:30 AM", title: { es: "Iglesias", en: "Churches" }, desc: { es: "Recorrido por San Francisco y Belén.", en: "Tour of San Francisco and Belén." } },
            { time: "12:00 PM", title: { es: "Santa Apolonia", en: "Santa Apolonia" }, desc: { es: "Subida al mirador.", en: "Climb to the viewpoint." } }
        ],
        faq: [
            { q: { es: "¿Se camina mucho?", en: "Is there a lot of walking?" }, a: { es: "Es un recorrido a pie moderado.", en: "It is a moderate walking tour." } }
        ]
    },
    // PRIVATE TOURS
    {
        id: "velo-novia",
        category: "private",
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuC-QkyN672jnJHlYDVkNx8JsstVSbTKDr1z7jzd6anl0T6BnhqIagYG8wnYUwdBcd0X5n9iJLI0kCl19UoExeHaliucAFShxVgnF0PIQP4MmW1MtD2GJZvQmu4ewa7RZcvvbKlKEXBxmguCW9C1lxYTUO3KSceCkUnxgGMD4_ZAJvEdebxQ1vp3xRrAkSrlp_HOih3AY_eIzixNlvalMCwDCemu2m5m5-5_zWE-TWa1b2axQafRwE2ORetC9JVvP-b65Eqnu6L7SG0E"],
        rating: 4.8,
        reviews: 12,
        price: { es: 250, en: 68 },
        duration: { es: "1 Día", en: "1 Day" },
        groupSize: { es: "Max 5 personas", en: "Max 5 people" },
        type: { es: "Privado", en: "Private" },
        location: "Cajamarca, Perú",
        title: { es: "Velo de la Novia", en: "Bridal Veil Falls" },
        description: { es: "Impresionante caída de agua rodeada de naturaleza exuberante.", en: "Impressive waterfall surrounded by lush nature." },
        fullDescription: { es: "Disfruta de la tranquilidad y belleza de la catarata Velo de la Novia en un tour privado exclusivo.", en: "Enjoy the tranquility and beauty of the Bridal Veil waterfall in an exclusive private tour." },
        highlights: { es: ["Catarata Velo de la Novia", "Naturaleza", "Privacidad"], en: ["Bridal Veil Waterfall", "Nature", "Privacy"] },
        includes: { es: ["Transporte privado", "Guía", "Entradas"], en: ["Private transport", "Guide", "Tickets"] },
        notIncluded: { es: ["Almuerzo"], en: ["Lunch"] },
        itinerary: [],
        faq: []
    },
    {
        id: "cochecoral",
        category: "private",
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBItH20Od7WBYTBMaacs8E9Iam3XYb-m5hkvm7fqHDuHc_44vPk1oOD84jr0EytQuosazRVyOwhOvkpkc5Zdx1f0nIKGl52Ob8n3SM1_0A80qLSmjfazFD3deCzGbTDHzMs1U_lhEvoP5VNAp5FYGN0jvGqANSwUgdzOuz0NMJZ9eAH51JWuOnd0lqWka-7Y_R-I0Ra32VJYa9Q1N-Ivcnzk34ck-g902wgCO2kMMdx_KXKaB50LvG6fvgA9zYHcnhGaJzOgPU0hHKM"],
        rating: 4.7,
        reviews: 8,
        price: { es: 250, en: 68 },
        duration: { es: "1 Día", en: "1 Day" },
        groupSize: { es: "Max 5 personas", en: "Max 5 people" },
        type: { es: "Privado", en: "Private" },
        location: "Cajamarca, Perú",
        title: { es: "Cascadas de Cochecoral", en: "Cochecoral Waterfalls" },
        description: { es: "Serie de hermosas cascadas perfectas para la fotografía y el relax.", en: "Series of beautiful waterfalls perfect for photography and relaxation." },
        fullDescription: { es: "Explora las cascadas de Cochecoral a tu propio ritmo. Un destino ideal para desconectarse.", en: "Explore the Cochecoral waterfalls at your own pace. An ideal destination to disconnect." },
        highlights: { es: ["Cascadas", "Caminata", "Fotografía"], en: ["Waterfalls", "Hiking", "Photography"] },
        includes: { es: ["Transporte privado", "Guía", "Entradas"], en: ["Private transport", "Guide", "Tickets"] },
        notIncluded: { es: ["Almuerzo"], en: ["Lunch"] },
        itinerary: [],
        faq: []
    },
    {
        id: "alto-peru",
        category: "private",
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuCj5KQTti6ZgLfCgCgvn-zWCFgHxKREMNnVaznlFYR0yANqraCD97xuGt7_w3Aa_IiAy1grGKOaAs6hsVybv9iDEuFVeCg-qO-29Fimeo2L-wJpOSJ3SD7y1-WNMbZPKQQIgVtalSEKV3FttM0FzYvI5urGG5SSHUrjZYp_3f87hto74XMNi5LlRKUc_F2BynKi-dbhBNyXFeW2G_MBiPqPi8809SI5wx2dznm1pHRdBSYXdZYIhtkUZVQQMLtrwvBZF7ulyy_M-weW"],
        rating: 4.9,
        reviews: 15,
        price: { es: 250, en: 68 },
        duration: { es: "1 Día", en: "1 Day" },
        groupSize: { es: "Max 5 personas", en: "Max 5 people" },
        type: { es: "Privado", en: "Private" },
        location: "Cajamarca, Perú",
        title: { es: "Lagunas del Alto Perú", en: "Alto Peru Lagoons" },
        description: { es: "Un conjunto de lagunas de alto andinas de belleza incomparable.", en: "A set of high Andean lagoons of incomparable beauty." },
        fullDescription: { es: "Visita las Lagunas del Alto Perú, un ecosistema vital y hermoso en las alturas de Cajamarca.", en: "Visit the Alto Peru Lagoons, a vital and beautiful ecosystem in the heights of Cajamarca." },
        highlights: { es: ["Lagunas", "Observación de aves", "Paisaje andino"], en: ["Lagoons", "Bird watching", "Andean landscape"] },
        includes: { es: ["Transporte privado", "Guía", "Entradas"], en: ["Private transport", "Guide", "Tickets"] },
        notIncluded: { es: ["Almuerzo"], en: ["Lunch"] },
        itinerary: [],
        faq: []
    },
    {
        id: "banos-inca",
        category: "private",
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuB695eg1qgbXIHDZtDYIGQHJq-8IYiwuwyNIsiuiyvoG39vlpxXpD5JQZCzP3BRCMgVwt3B2l1fKYJJPw87niD22G5SGT0OVUpvfsvi58hhe2WlAwbbpa1aeO9i_ngVcwjmA2w_INNiaBg3fM5ypuq28KN2kh3t-re3nWJv5moc6ft7jrlZDAB84vaWy4lYCGdiR4VfQzy78VCWbxN2Cv4WgRlH2tv1nt_5l1AcUs_Moq0xqmrfK_Aus8BsXOVO3U2579f1_4auUA16"],
        rating: 4.6,
        reviews: 40,
        price: { es: 250, en: 68 },
        duration: { es: "Medio Día", en: "Half Day" },
        groupSize: { es: "Max 5 personas", en: "Max 5 people" },
        type: { es: "Privado", en: "Private" },
        location: "Baños del Inca, Cajamarca",
        title: { es: "Baños del Inca (Privado)", en: "Inca Baths (Private)" },
        description: { es: "Relájate en las aguas termales curativas con un servicio exclusivo.", en: "Relax in the healing thermal waters with exclusive service." },
        fullDescription: { es: "Disfruta de los históricos Baños del Inca con la comodidad de un tour privado.", en: "Enjoy the historic Inca Baths with the comfort of a private tour." },
        highlights: { es: ["Aguas termales", "Historia", "Relax"], en: ["Thermal waters", "History", "Relax"] },
        includes: { es: ["Transporte privado", "Guía", "Entradas"], en: ["Private transport", "Guide", "Tickets"] },
        notIncluded: { es: ["Almuerzo"], en: ["Lunch"] },
        itinerary: [],
        faq: []
    },
    {
        id: "polloc",
        category: "private",
        images: ["https://upload.wikimedia.org/wikipedia/commons/d/d1/Iglesia_de_San_Francisco%2C_Cajamarca%2C_Per%C3%BA%2C_2015-07-31%2C_DD_10.JPG"],
        rating: 4.8,
        reviews: 22,
        price: { es: 250, en: 68 },
        duration: { es: "Medio Día", en: "Half Day" },
        groupSize: { es: "Max 5 personas", en: "Max 5 people" },
        type: { es: "Privado", en: "Private" },
        location: "Polloc, Cajamarca",
        title: { es: "Santuario de Polloc", en: "Polloc Sanctuary" },
        description: { es: "Visita la hermosa iglesia y santuario de Polloc, una joya arquitectónica.", en: "Visit the beautiful church and sanctuary of Polloc, an architectural jewel." },
        fullDescription: { es: "El Santuario de la Virgen del Rosario en Polloc es una maravilla de arte religioso moderno.", en: "The Sanctuary of the Virgin of the Rosary in Polloc is a marvel of modern religious art." },
        highlights: { es: ["Iglesia", "Arte religioso", "Jardines"], en: ["Church", "Religious art", "Gardens"] },
        includes: { es: ["Transporte privado", "Guía", "Entradas"], en: ["Private transport", "Guide", "Tickets"] },
        notIncluded: { es: ["Almuerzo"], en: ["Lunch"] },
        itinerary: [],
        faq: []
    },
    {
        id: "estatuas-gigantes",
        category: "private",
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuA2PSlDpqa7FjSvHYc_qTcgCfQHWnPzOjTMG2pQ6hlJnROnkt5aAMOigVdHeWDHn6F3Dxs8ULYZ4KKbP0vAVTrFl6EHwr4XWVFa9Qj6lWckh5he8VRDC1c1maeGnyPKiFUHeB4cNY9ZH8PxRWPeaxunnkM38uI-MIq28gnkGNh6em642UdiJVQN24rdFToGKOKNIVihQPbgNz21numOB5Vb4mnJvD0sUfZgeVXKV9BFaepLs_MUsp8G4ZmCtWMj3Ytqm3ppy8c7v2ot"],
        rating: 4.5,
        reviews: 18,
        price: { es: 250, en: 68 },
        duration: { es: "Medio Día", en: "Half Day" },
        groupSize: { es: "Max 5 personas", en: "Max 5 people" },
        type: { es: "Privado", en: "Private" },
        location: "Cajamarca, Perú",
        title: { es: "Estatuas Gigantes", en: "Giant Statues" },
        description: { es: "Parque temático con enormes esculturas que representan la cultura local.", en: "Theme park with huge sculptures representing local culture." },
        fullDescription: { es: "Diviértete y toma fotos increíbles con las estatuas gigantes de Cajamarca.", en: "Have fun and take incredible photos with the giant statues of Cajamarca." },
        highlights: { es: ["Esculturas gigantes", "Diversión", "Fotos"], en: ["Giant sculptures", "Fun", "Photos"] },
        includes: { es: ["Transporte privado", "Guía", "Entradas"], en: ["Private transport", "Guide", "Tickets"] },
        notIncluded: { es: ["Almuerzo"], en: ["Lunch"] },
        itinerary: [],
        faq: []
    },
    {
        id: "sexemayo",
        category: "private",
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuC-QkyN672jnJHlYDVkNx8JsstVSbTKDr1z7jzd6anl0T6BnhqIagYG8wnYUwdBcd0X5n9iJLI0kCl19UoExeHaliucAFShxVgnF0PIQP4MmW1MtD2GJZvQmu4ewa7RZcvvbKlKEXBxmguCW9C1lxYTUO3KSceCkUnxgGMD4_ZAJvEdebxQ1vp3xRrAkSrlp_HOih3AY_eIzixNlvalMCwDCemu2m5m5-5_zWE-TWa1b2axQafRwE2ORetC9JVvP-b65Eqnu6L7SG0E"],
        rating: 4.6,
        reviews: 10,
        price: { es: 250, en: 68 },
        duration: { es: "Medio Día", en: "Half Day" },
        groupSize: { es: "Max 5 personas", en: "Max 5 people" },
        type: { es: "Privado", en: "Private" },
        location: "Sexemayo, Cajamarca",
        title: { es: "Bosque de Piedras Sexemayo", en: "Sexemayo Stone Forest" },
        description: { es: "Formaciones rocosas únicas en un entorno místico y poco explorado.", en: "Unique rock formations in a mystical and little-explored environment." },
        fullDescription: { es: "Descubre el misterio del bosque de piedras de Sexemayo en una ruta privada.", en: "Discover the mystery of the Sexemayo stone forest on a private route." },
        highlights: { es: ["Formaciones rocosas", "Aventura", "Paisaje"], en: ["Rock formations", "Adventure", "Landscape"] },
        includes: { es: ["Transporte privado", "Guía", "Entradas"], en: ["Private transport", "Guide", "Tickets"] },
        notIncluded: { es: ["Almuerzo"], en: ["Lunch"] },
        itinerary: [],
        faq: []
    },
    {
        id: "yumagual",
        category: "private",
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuB695eg1qgbXIHDZtDYIGQHJq-8IYiwuwyNIsiuiyvoG39vlpxXpD5JQZCzP3BRCMgVwt3B2l1fKYJJPw87niD22G5SGT0OVUpvfsvi58hhe2WlAwbbpa1aeO9i_ngVcwjmA2w_INNiaBg3fM5ypuq28KN2kh3t-re3nWJv5moc6ft7jrlZDAB84vaWy4lYCGdiR4VfQzy78VCWbxN2Cv4WgRlH2tv1nt_5l1AcUs_Moq0xqmrfK_Aus8BsXOVO3U2579f1_4auUA16"],
        rating: 4.7,
        reviews: 14,
        price: { es: 250, en: 68 },
        duration: { es: "Medio Día", en: "Half Day" },
        groupSize: { es: "Max 5 personas", en: "Max 5 people" },
        type: { es: "Privado", en: "Private" },
        location: "Yumagual, Cajamarca",
        title: { es: "Aguas Termales de Yumagual", en: "Yumagual Thermal Waters" },
        description: { es: "Aguas termales naturales en un entorno rústico y tranquilo.", en: "Natural thermal waters in a rustic and quiet environment." },
        fullDescription: { es: "Relájate en las aguas de Yumagual, una alternativa más natural y menos concurrida.", en: "Relax in the waters of Yumagual, a more natural and less crowded alternative." },
        highlights: { es: ["Aguas termales", "Naturaleza", "Relax"], en: ["Thermal waters", "Nature", "Relax"] },
        includes: { es: ["Transporte privado", "Guía", "Entradas"], en: ["Private transport", "Guide", "Tickets"] },
        notIncluded: { es: ["Almuerzo"], en: ["Lunch"] },
        itinerary: [],
        faq: []
    },
    {
        id: "rio-rejo",
        category: "private",
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuCj5KQTti6ZgLfCgCgvn-zWCFgHxKREMNnVaznlFYR0yANqraCD97xuGt7_w3Aa_IiAy1grGKOaAs6hsVybv9iDEuFVeCg-qO-29Fimeo2L-wJpOSJ3SD7y1-WNMbZPKQQIgVtalSEKV3FttM0FzYvI5urGG5SSHUrjZYp_3f87hto74XMNi5LlRKUc_F2BynKi-dbhBNyXFeW2G_MBiPqPi8809SI5wx2dznm1pHRdBSYXdZYIhtkUZVQQMLtrwvBZF7ulyy_M-weW"],
        rating: 4.8,
        reviews: 9,
        price: { es: 250, en: 68 },
        duration: { es: "Medio Día", en: "Half Day" },
        groupSize: { es: "Max 5 personas", en: "Max 5 people" },
        type: { es: "Privado", en: "Private" },
        location: "Rio Rejo, Cajamarca",
        title: { es: "Santuario de Aves Rio Rejo", en: "Rio Rejo Bird Sanctuary" },
        description: { es: "Paraíso para los observadores de aves y amantes de la naturaleza.", en: "Paradise for bird watchers and nature lovers." },
        fullDescription: { es: "Explora la biodiversidad de Cajamarca en el Santuario Rio Rejo.", en: "Explore the biodiversity of Cajamarca at the Rio Rejo Sanctuary." },
        highlights: { es: ["Aves", "Naturaleza", "Fotografía"], en: ["Birds", "Nature", "Photography"] },
        includes: { es: ["Transporte privado", "Guía", "Entradas"], en: ["Private transport", "Guide", "Tickets"] },
        notIncluded: { es: ["Almuerzo"], en: ["Lunch"] },
        itinerary: [],
        faq: []
    }
];
