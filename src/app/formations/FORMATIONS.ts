import { Formation } from './formation';

export const FORMATIONS : Formation[] = [
    {
        id: 1,
        nom: "MIAGE",
        ecole: "Université Paul Sabatier et Capitole",
        location: "Toulouse",
        dateDeb: new Date("2019-09-02"),
        dateFin: new Date("2024-06-20"),
        image: "https://www.developpez.com/public/images/ecoles/miage.png"
    },
    {
        id: 2,
        nom: "DUT Informatique",
        ecole: "IUT de Blagnac",
        location: "Blagnac",
        dateDeb: new Date("2017-09-02"),
        dateFin: new Date("2019-06-20"),
        image: "https://upload.wikimedia.org/wikipedia/fr/8/8a/Logo_IUT_Blagnac.png"
    },
    {
        id: 3,
        nom: "CPES",
        ecole: "Lycée Bellevue",
        location: "Toulouse",
        dateDeb: new Date("2016-09-02"),
        dateFin: new Date("2017-06-20"),
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Chateau_de_Bellevue_avec_%C3%A9l%C3%A8ves_%E2%80%93_Toulouse_%282017%29.jpg/1200px-Chateau_de_Bellevue_avec_%C3%A9l%C3%A8ves_%E2%80%93_Toulouse_%282017%29.jpg"
    },
    {
        id: 4,
        nom: "Baccalauréat STI2D SIN",
        ecole: "Lycée Déodat de Severac",
        location: "Toulouse",
        dateDeb: new Date("2016-07-02"),
        dateFin: new Date("2016-07-02"),
        image: "http://moodle-cpge-deodat.ac-toulouse.fr/pluginfile.php/2/course/section/18/deodat_moodle%20%281%29.png"
    }

]