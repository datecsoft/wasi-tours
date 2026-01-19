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
        price: { es: 60, en: 17 }, // Updated price
        duration: {
            es: "09:30 AM - 03:00 PM",
            en: "09:30 AM - 03:00 PM"
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
            es: "Namora es conocido por sus talleres de guitarras y la hermosa Laguna San Nicolás. Este tour incluye un recorrido completo por la Alameda de los 14 Incas, formaciones rocosas únicas y talleres artesanales.",
            en: "Namora is known for its guitar workshops and the beautiful San Nicolás Lagoon. This tour includes a complete tour of the Alameda of the 14 Incas, unique rock formations, and artisan workshops."
        },
        highlights: {
            es: ["Alameda de los 14 incas", "Bosque de piedras (sapitos y tortugas)", "Fábrica de guitarras", "Laguna San Nicolás"],
            en: ["Alameda of the 14 Incas", "Stone forest (toads and turtles)", "Guitar factory", "San Nicolás Lagoon"]
        },
        includes: { es: ["Transporte", "Guía", "Paseo en bote", "Almuerzo"], en: ["Transport", "Guide", "Boat ride", "Lunch"] },
        notIncluded: { es: [], en: [] },
        itinerary: [
            { time: "09:00 AM", title: { es: "Embarque", en: "Boarding" }, desc: { es: "Reunión y preparación para la salida.", en: "Meeting and preparation for departure." } },
            { time: "09:30 AM", title: { es: "Salida", en: "Departure" }, desc: { es: "Partida rumbo a Namora.", en: "Departure to Namora." } },
            { time: "10:30 AM", title: { es: "Alameda y Bosque de Piedras", en: "Alameda & Stone Forest" }, desc: { es: "Visita a la Alameda de los 14 Incas y formaciones rocosas.", en: "Visit to the Alameda of the 14 Incas and rock formations." } },
            { time: "11:30 AM", title: { es: "Talleres de Guitarras", en: "Guitar Workshops" }, desc: { es: "Demostración de fabricación de guitarras artesanales.", en: "Demonstration of handcrafted guitar making." } },
            { time: "12:30 PM", title: { es: "Laguna San Nicolás", en: "San Nicolás Lagoon" }, desc: { es: "Paseo en balsas de totora.", en: "Ride on totora reed boats." } },
            { time: "01:30 PM", title: { es: "Almuerzo", en: "Lunch" }, desc: { es: "Almuerzo típico incluido.", en: "Typical lunch included." } },
            { time: "03:00 PM", title: { es: "Retorno", en: "Return" }, desc: { es: "Llegada a Cajamarca.", en: "Arrival in Cajamarca." } }
        ],
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
        price: { es: 40, en: 11 }, // Updated price
        duration: {
            es: "09:30 AM - 02:00 PM",
            en: "09:30 AM - 02:00 PM"
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
            es: "La Granja Porcón es un ejemplo exitoso de cooperativa agraria en el Perú. Disfruta de una experiencia completa de agroturismo rodeado de naturaleza.",
            en: "Granja Porcón is a successful example of an agrarian cooperative in Peru. Enjoy a complete agrotourism experience surrounded by nature."
        },
        highlights: {
            es: ["Picapedreros de Huambocancha", "Bosque de pinos", "Zoológico", "Talleres textiles"],
            en: ["Huambocancha Stone Cutters", "Pine Forests", "Zoo", "Textile workshops"]
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
            { time: "09:00 AM", title: { es: "Embarque", en: "Boarding" }, desc: { es: "Punto de encuentro.", en: "Meeting point." } },
            { time: "09:30 AM", title: { es: "Salida", en: "Departure" }, desc: { es: "Rumbo a Porcón.", en: "Heading to Porcon." } },
            { time: "10:00 AM", title: { es: "Picapedreros", en: "Stone Cutters" }, desc: { es: "Visita a los picapedreros de Huambocancha.", en: "Visit to the Huambocancha stone cutters." } },
            { time: "11:00 AM", title: { es: "Granja Porcón", en: "Porcon Farm" }, desc: { es: "Recorrido por el zoológico, bosque de pinos y talleres.", en: "Tour of the zoo, pine forest, and workshops." } },
            { time: "01:00 PM", title: { es: "Tienda de Lácteos", en: "Dairy Shop" }, desc: { es: "Degustación y compra de productos.", en: "Tasting and purchase of products." } },
            { time: "02:00 PM", title: { es: "Retorno", en: "Return" }, desc: { es: "Llegada a Cajamarca.", en: "Arrival in Cajamarca." } }
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
        price: { es: 40, en: 11 }, // Updated price
        duration: {
            es: "09:30 AM - 01:40 PM",
            en: "09:30 AM - 01:40 PM"
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
            es: "Descubre la majestuosidad de los Andes peruanos con este tour exclusivo a Cumbemayo, una obra maestra de ingeniería hidráulica tallada en piedra hace más de 3000 años.",
            en: "Discover the majesty of the Peruvian Andes with this exclusive tour to Cumbemayo, a masterpiece of hydraulic engineering carved in stone over 3000 years ago."
        },
        highlights: {
            es: ["Mirador de Bellavista", "Santuario de Cumbemayo", "Túnel del deseo", "Piedra del sacrificio", "Canales Pre-Incas", "Petroglifos"],
            en: ["Bellavista Viewpoint", "Cumbemayo Sanctuary", "Tunnel of Desire", "Sacrificial Stone", "Pre-Inca Canals", "Petroglyphs"]
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
            { time: "09:00 AM", title: { es: "Embarque", en: "Boarding" }, desc: { es: "Recojo del hotel o punto de encuentro.", en: "Hotel pickup or meeting point." } },
            { time: "09:30 AM", title: { es: "Salida", en: "Departure" }, desc: { es: "Inicio del tour.", en: "Start of the tour." } },
            { time: "10:00 AM", title: { es: "Mirador de Bellavista", en: "Bellavista Viewpoint" }, desc: { es: "Vista panorámica de la ciudad.", en: "Panoramic view of the city." } },
            { time: "11:00 AM", title: { es: "Cumbemayo", en: "Cumbemayo" }, desc: { es: "Recorrido por el santuario, bosque de piedras, túnel, piedra del sacrificio y canales.", en: "Tour of the sanctuary, stone forest, tunnel, sacrificial stone, and canals." } },
            { time: "01:40 PM", title: { es: "Retorno", en: "Return" }, desc: { es: "Llegada a Cajamarca.", en: "Arrival in Cajamarca." } }
        ],
        faq: [
            {
                q: { es: "¿Qué debo llevar?", en: "What should I bring?" },
                a: { es: "Ropa cómoda, abrigo, agua y bloqueador.", en: "Comfortable clothes, warm clothing, water, and sunscreen." }
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
        price: { es: 30, en: 9 }, // Updated price
        duration: {
            es: "03:30 PM - 06:45 PM",
            en: "03:30 PM - 06:45 PM"
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
            es: "Las Ventanillas de Otuzco son un sitio arqueológico impresionante. Este tour combina historia, naturaleza y cultura local de Baños del Inca.",
            en: "The Ventanillas de Otuzco is an impressive archaeological site. This tour combines history, nature, and local culture of Baños del Inca."
        },
        highlights: {
            es: ["Ventanillas de Otuzco", "Puente colgante", "Feria Artesanal", "Jardín de las Hortensias", "Fábrica de Lácteos"],
            en: ["Ventanillas de Otuzco", "Suspension bridge", "Craft Fair", "Hydrangea Garden", "Dairy Factory"]
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
            { time: "03:00 PM", title: { es: "Embarque", en: "Boarding" }, desc: { es: "Reunión en el punto de encuentro.", en: "Meeting at the gathering point." } },
            { time: "03:30 PM", title: { es: "Salida", en: "Departure" }, desc: { es: "Inicio del tour.", en: "Start of the tour." } },
            { time: "04:00 PM", title: { es: "Ventanillas de Otuzco", en: "Ventanillas de Otuzco" }, desc: { es: "Visita guiada a la necrópolis y puente colgante.", en: "Guided tour of the necropolis and suspension bridge." } },
            { time: "05:00 PM", title: { es: "Feria y Jardín", en: "Fair and Garden" }, desc: { es: "Feria artesanal y Jardín de las Hortensias.", en: "Craft fair and Hydrangea Garden." } },
            { time: "06:00 PM", title: { es: "Fábrica de Lácteos", en: "Dairy Factory" }, desc: { es: "Visita y degustación.", en: "Visit and tasting." } },
            { time: "06:45 PM", title: { es: "Retorno", en: "Return" }, desc: { es: "Llegada a Cajamarca.", en: "Arrival in Cajamarca." } }
        ],
        faq: []
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
        price: { es: 30, en: 9 }, // Updated price
        duration: {
            es: "03:30 PM - 07:00 PM",
            en: "03:30 PM - 07:00 PM"
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
            es: "La ex hacienda La Collpa es un destino tradicional imperdible. Vive la experiencia del llamado de las vacas y conoce la historia de esta emblemática hacienda.",
            en: "The former La Collpa hacienda is a traditional destination not to be missed. Experience the calling of the cows and learn the history of this emblematic hacienda."
        },
        highlights: {
            es: ["Capilla Virgen del Carmen", "Casa ex hacienda", "Llamado de vacas", "Laguna artificial", "Alfareros de Mollepampa"],
            en: ["Virgin of Carmen Chapel", "Former Hacienda House", "Cow Calling", "Artificial Lagoon", "Mollepampa Potters"]
        },
        includes: { es: ["Transporte", "Guía", "Entrada"], en: ["Transport", "Guide", "Entrance"] },
        notIncluded: { es: ["Compras"], en: ["Shopping"] },
        itinerary: [
            { time: "03:00 PM", title: { es: "Embarque", en: "Boarding" }, desc: { es: "Preparación para la salida.", en: "Preparation for departure." } },
            { time: "03:30 PM", title: { es: "Salida", en: "Departure" }, desc: { es: "Partida hacia La Collpa.", en: "Departure to La Collpa." } },
            { time: "04:00 PM", title: { es: "La Collpa", en: "La Collpa" }, desc: { es: "Visita capilla, casa hacienda, laguna y llamado de vacas.", en: "Visit chapel, hacienda house, lagoon, and cow calling." } },
            { time: "06:00 PM", title: { es: "Alfareros", en: "Potters" }, desc: { es: "Visita a los alfareros de Mollepampa.", en: "Visit to the Mollepampa potters." } },
            { time: "07:00 PM", title: { es: "Retorno", en: "Return" }, desc: { es: "Llegada a Cajamarca.", en: "Arrival in Cajamarca." } }
        ],
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
        price: { es: 40, en: 11 }, // Updated price
        duration: {
            es: "09:30 AM - 02:00 PM / 03:00 PM - 07:00 PM",
            en: "09:30 AM - 02:00 PM / 03:00 PM - 07:00 PM"
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
            es: "El Castillo de Yanamarca es una impresionante formación arqueológica. Disfruta de la flexibilidad de dos horarios de salida para explorar este misterioso lugar.",
            en: "Yanamarca Castle is an impressive archaeological formation. Enjoy the flexibility of two departure times to explore this mysterious place."
        },
        highlights: {
            es: ["Vistas panorámicas", "Ruinas arqueológicas", "Formaciones rocosas"],
            en: ["Panoramic views", "Archaeological ruins", "Rock formations"]
        },
        includes: { es: ["Transporte", "Guía", "Entrada"], en: ["Transport", "Guide", "Entrance"] },
        notIncluded: { es: ["Almuerzo"], en: ["Lunch"] },
        itinerary: [
            { time: "09:00 AM / 02:30 PM", title: { es: "Embarque", en: "Boarding" }, desc: { es: "Reunión previa a la salida.", en: "Pre-departure meeting." } },
            { time: "09:30 AM / 03:00 PM", title: { es: "Salida", en: "Departure" }, desc: { es: "Rumbo a Yanamarca.", en: "Heading to Yanamarca." } },
            { time: "10:30 AM / 04:00 PM", title: { es: "Castillo de Yanamarca", en: "Yanamarca Castle" }, desc: { es: "Recorrido por las ruinas y alrededores.", en: "Tour of the ruins and surroundings." } },
            { time: "02:00 PM / 07:00 PM", title: { es: "Retorno", en: "Return" }, desc: { es: "Llegada al centro de Cajamarca.", en: "Arrival in downtown Cajamarca." } }
        ],
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
            es: "Sumérgete en la historia de Cajamarca con nuestro City Tour. Visitaremos los puntos más emblemáticos de la ciudad, desde la arquitectura religiosa hasta la historia inca.",
            en: "Immerse yourself in the history of Cajamarca with our City Tour. We will visit the city's most emblematic points, from religious architecture to Inca history."
        },
        highlights: {
            es: ["Catedral de Cajamarca", "Cuarto del Rescate", "Iglesia San Francisco", "Complejo Belén", "Museo Etnográfico", "Cerro Santa Apolonia"],
            en: ["Cajamarca Cathedral", "Ransom Room", "San Francisco Church", "Belén Complex", "Ethnographic Museum", "Santa Apolonia Hill"]
        },
        includes: { es: ["Transporte", "Guía oficial", "Entradas"], en: ["Transport", "Official guide", "Entry tickets"] },
        notIncluded: { es: ["Almuerzo", "Propinas"], en: ["Lunch", "Tips"] },
        itinerary: [
            { time: "30 min antes", title: { es: "Embarque", en: "Boarding" }, desc: { es: "Punto de reunión.", en: "Meeting point." } },
            { time: "Inicio", title: { es: "Catedral e Iglesias", en: "Cathedral & Churches" }, desc: { es: "Visita a la Catedral y San Francisco.", en: "Visit to the Cathedral and San Francisco." } },
            { time: "Intermedio", title: { es: "Historia Inca", en: "Inca History" }, desc: { es: "Cuarto del Rescate y Belén.", en: "Ransom Room and Belén." } },
            { time: "Final", title: { es: "Santa Apolonia", en: "Santa Apolonia" }, desc: { es: "Museo y mirador.", en: "Museum and viewpoint." } }
        ],
        faq: []
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
        duration: {
            es: "08:00 AM - 02:00 PM / 03:00 PM - 07:00 PM",
            en: "08:00 AM - 02:00 PM / 03:00 PM - 07:00 PM"
        },
        groupSize: { es: "Max 5 personas", en: "Max 5 people" },
        type: { es: "Privado", en: "Private" },
        location: "Cajamarca, Perú",
        title: { es: "Lagunas del Alto Perú", en: "Alto Peru Lagoons" },
        description: { es: "Un conjunto de lagunas de alto andinas de belleza incomparable.", en: "A set of high Andean lagoons of incomparable beauty." },
        fullDescription: { es: "Visita las Lagunas del Alto Perú, un ecosistema vital y hermoso en las alturas de Cajamarca. Elige entre nuestros horarios de mañana o tarde.", en: "Visit the Alto Peru Lagoons, a vital and beautiful ecosystem in the heights of Cajamarca. Choose between our morning or afternoon schedules." },
        highlights: { es: ["Lagunas", "Observación de aves", "Paisaje andino"], en: ["Lagoons", "Bird watching", "Andean landscape"] },
        includes: { es: ["Transporte privado", "Guía", "Entradas"], en: ["Private transport", "Guide", "Tickets"] },
        notIncluded: { es: ["Almuerzo"], en: ["Lunch"] },
        itinerary: [
            { time: "07:30 AM / 02:30 PM", title: { es: "Embarque", en: "Boarding" }, desc: { es: "Reunión previa.", en: "Pre-meeting." } },
            { time: "08:00 AM / 03:00 PM", title: { es: "Salida", en: "Departure" }, desc: { es: "Inicio del tour.", en: "Tour start." } },
            { time: "02:00 PM / 07:00 PM", title: { es: "Retorno", en: "Return" }, desc: { es: "Fin del servicio.", en: "End of service." } }
        ],
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
        duration: {
            es: "08:00 AM - 01:00 PM / 02:30 PM - 06:30 PM",
            en: "08:00 AM - 01:00 PM / 02:30 PM - 06:30 PM"
        },
        groupSize: { es: "Max 5 personas", en: "Max 5 people" },
        type: { es: "Privado", en: "Private" },
        location: "Polloc, Cajamarca",
        title: { es: "Santuario de Polloc", en: "Polloc Sanctuary" },
        description: { es: "Visita la hermosa iglesia y santuario de Polloc, una joya arquitectónica.", en: "Visit the beautiful church and sanctuary of Polloc, an architectural jewel." },
        fullDescription: { es: "El Santuario de la Virgen del Rosario en Polloc es una maravilla de arte religioso moderno. Descubre sus mosaicos y ebanistería.", en: "The Sanctuary of the Virgin of the Rosary in Polloc is a marvel of modern religious art. Discover its mosaics and cabinetmaking." },
        highlights: {
            es: ["Pampa de la Culebra", "Basílica de la Virgen del Rosario", "Mosaicos", "Talleres de Ebanistería"],
            en: ["Pampa de la Culebra", "Virgin of the Rosary Basilica", "Mosaics", "Cabinetmaking Workshops"]
        },
        includes: { es: ["Transporte privado", "Guía", "Entradas"], en: ["Private transport", "Guide", "Tickets"] },
        notIncluded: { es: ["Almuerzo"], en: ["Lunch"] },
        itinerary: [
            { time: "07:30 AM / 02:00 PM", title: { es: "Embarque", en: "Boarding" }, desc: { es: "Preparación para la salida.", en: "Preparation for departure." } },
            { time: "08:00 AM / 02:30 PM", title: { es: "Salida", en: "Departure" }, desc: { es: "Inicio del viaje.", en: "Start of trip." } },
            { time: "09:00 AM / 03:30 PM", title: { es: "Polloc", en: "Polloc" }, desc: { es: "Recorrido por la basílica y talleres.", en: "Tour of the basilica and workshops." } },
            { time: "01:00 PM / 06:30 PM", title: { es: "Retorno", en: "Return" }, desc: { es: "Llegada a Cajamarca.", en: "Arrival in Cajamarca." } }
        ],
        faq: []
    },
    {
        id: "estatuas-gigantes",
        category: "private",
        images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuA2PSlDpqa7FjSvHYc_qTcgCfQHWnPzOjTMG2pQ6hlJnROnkt5aAMOigVdHeWDHn6F3Dxs8ULYZ4KKbP0vAVTrFl6EHwr4XWVFa9Qj6lWckh5he8VRDC1c1maeGnyPKiFUHeB4cNY9ZH8PxRWPeaxunnkM38uI-MIq28gnkGNh6em642UdiJVQN24rdFToGKOKNIVihQPbgNz21numOB5Vb4mnJvD0sUfZgeVXKV9BFaepLs_MUsp8G4ZmCtWMj3Ytqm3ppy8c7v2ot"],
        rating: 4.5,
        reviews: 18,
        price: { es: 250, en: 68 },
        duration: {
            es: "09:30 AM - 02:00 PM / 03:00 PM - 07:00 PM",
            en: "09:30 AM - 02:00 PM / 03:00 PM - 07:00 PM"
        },
        groupSize: { es: "Max 5 personas", en: "Max 5 people" },
        type: { es: "Privado", en: "Private" },
        location: "Cajamarca, Perú",
        title: { es: "Estatuas Gigantes", en: "Giant Statues" },
        description: { es: "Parque temático con enormes esculturas que representan la cultura local.", en: "Theme park with huge sculptures representing local culture." },
        fullDescription: { es: "Diviértete con las impresionantes estatuas gigantes y vive la aventura en el Hotel Subterráneo y los juegos extremos.", en: "Have fun with the impressive giant statues and experience the adventure in the Underground Hotel and extreme games." },
        highlights: {
            es: ["Estatuas gigantes", "Hotel subterráneo", "Juegos extremos"],
            en: ["Giant Statues", "Underground Hotel", "Extreme Games"]
        },
        includes: { es: ["Transporte privado", "Guía", "Entradas"], en: ["Private transport", "Guide", "Tickets"] },
        notIncluded: { es: ["Almuerzo"], en: ["Lunch"] },
        itinerary: [
            { time: "09:00 AM / 02:30 PM", title: { es: "Embarque", en: "Boarding" }, desc: { es: "Punto de encuentro.", en: "Meeting point." } },
            { time: "09:30 AM / 03:00 PM", title: { es: "Salida", en: "Departure" }, desc: { es: "Rumbo a las Estatuas.", en: "Heading to the Statues." } },
            { time: "10:30 AM / 04:00 PM", title: { es: "Parque Temático", en: "Theme Park" }, desc: { es: "Recorrido por las atracciones.", en: "Tour of the attractions." } },
            { time: "02:00 PM / 07:00 PM", title: { es: "Retorno", en: "Return" }, desc: { es: "Vuelta a la ciudad.", en: "Back to the city." } }
        ],
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
