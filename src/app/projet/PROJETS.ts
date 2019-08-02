import { Projet } from './projet';

export const PROJETS: Projet[]= [
    {
        id: 1,
        nom: "Stage chez INEO SCLE FERROFIAIRE",
        context: "Développement d'une application de pointage",
        technologies: ["C#", "WPF", "SQL Server"],
        annee: new Date('2019-04-08'),
        image: "https://upload.wikimedia.org/wikipedia/fr/c/c6/Engie.svg",
        lien:""
    },
    {
        id: 2,
        nom: "Site E-Commerce PHP",
        context: "Développement d'un site E-Commerce avec une architecture MVC en PHP",
        technologies: ["PHP", "MySQL", "HTML", "CSS"],
        annee: new Date('2019-01-08'),
        image: "https://c7.alamy.com/comp/EB33K7/a-digital-binary-code-background-with-the-abbreviation-of-php-for-EB33K7.jpg",
        lien:"https://jonathanpham.000webhostapp.com/PWS/index.php"
    },
    {
        id: 3,
        nom: "Projet Tutoré - Site E-Commerce MEANJS ",
        context: "Développement d'un site web e-commerce en MEANJS",
        technologies: ["MongoDB", "ExpressJS", "Angular", "NodeJS"],
        annee: new Date('2018-11-01'),
        image: "https://lerjen.me/wp-content/uploads/2015/05/maxresdefault.jpg",
        lien:"https://github.com/Excaling/PTUT-MEAN"
    },
    {
        id: 4,
        nom: "MasterMind Java",
        context: "Développement d'un Mastermind en Java SWING",
        technologies: ["Java", "SWING"],
        annee: new Date('2018-04-08'),
        image: "https://previews.123rf.com/images/scandinavianstock/scandinavianstock1409/scandinavianstock140900034/31231546-java-concept-green-background-with-green-text.jpg",
        lien:""
    },
    {
        id: 5,
        nom: "Menu Bash",
        context: "Réalisation d'un menu Linux en Bash",
        technologies: ["Bash"],
        annee: new Date('2017-12-01'),
        image: "https://techcrunch.com/wp-content/uploads/2017/05/linux_build.jpg",
        lien:"https://github.com/Excaling/Main"
    },
    {
        id: 6,
        nom: "Scripts Bash",
        context: "Divers Scripts Bash",
        technologies: ["Bash"],
        annee: new Date('2012-12-01'),
        image: "https://images.techhive.com/images/idge/imported/article/itw/2013/08/29/2_6-100521834-orig.png",
        lien:"https://github.com/Excaling/bash"
    }
]