import { useState, useEffect, } from "react";
import API from "../../API";
import { useLocation } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "@mui/material";


const AjouterAnnonce = ({ onAdd }) => {
    const location = useLocation();
    let User_id = location.state.userId;
    const [AI_Categorie, setAICategorie] = useState("");
    const [AI_Type, setAIType] = useState("");
    const [AI_Surface, setAISurface] = useState("");
    const [AI_Description, setDescription] = useState("");
    const [wilaya, setwilaya] = useState("");
    const [commune, setcommune] = useState("");
    const [adresse, setadresse] = useState("");
    const [AI_Prix, setAIPrix] = useState("");
    const [AI_Localisation, setAILocalisation] = useState("");
    //const [AI_Contact, setAIContactInfo] = useState(null);
    //const [AI_Photo, setAIPhoto] = useState("");
    const [Annonces, setAnnonces] = useState([]);

    useEffect(() => {
        refreshAnnonces();
    }, []);

    const refreshAnnonces = () => { //Recuperation de toutes les annonces de la base de données
        console.log(User_id);
        API.get("mesannonces/mesannonces/", {params : {Userid: User_id}})
            .then((res) => {
                setAnnonces(res.data);
            })
            .catch(console.error);
    };

    async function onSubmit  (e)  { 
        e.preventDefault();
        let item1={wilaya,commune,adresse};
        let res = await API.post("annonce/Localisation/",item1); //Sauvagarde dans la table de location et retourne le id
        console.log(res);
        let data = res.data.Loc_id; //Récupérer le id
        console.log(data);
        setAILocalisation(data); //on affecte le id a l'annonce
        console.log(AI_Localisation);
        let item2 = { User_id, AI_Categorie, AI_Type, AI_Surface, AI_Description, AI_Prix, AI_Localisation };
        API.post("annonce/annonce/", item2).then(() => refreshAnnonces()); //Sauvgarder l'annonce et reintialiser la page
    };
    const onDelete = (id) => {
        API.delete(`/${id}/`).then((res) => refreshAnnonces());
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <h3 className="float-left">Ajouter une nouvelle annonce</h3>
                    <Form onSubmit={onSubmit} className="mt-4">
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Categorie</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Categorie"
                                value={AI_Categorie}
                                onChange={(e) => setAICategorie(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicGenre">
                            <Form.Label>Type</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Type"
                                value={AI_Type}
                                onChange={(e) => setAIType(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicStarring">
                            <Form.Label>Surface</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter surface"
                                value={AI_Surface}
                                onChange={(e) => setAISurface(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicStarring">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter description"
                                value={AI_Description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicStarring">
                            <Form.Label>Prix</Form.Label>
                            <Form.Control
                                type="integer"
                                placeholder="Enter price"
                                value={AI_Prix}
                                onChange={(e) => setAIPrix(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicStarring">
                            <Form.Label>wilaya</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter price"
                                value={wilaya}
                                onChange={(e) => setwilaya(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicStarring">
                            <Form.Label>commune</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter price"
                                value={commune}
                                onChange={(e) => setcommune(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicStarring">
                            <Form.Label>adresse</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter price"
                                value={adresse}
                                onChange={(e) => setadresse(e.target.value)}
                            />
                        </Form.Group>
                        <div className="float-right">
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={onSubmit}
                                className="mx-2"
                            >
                                Save
                            </Button>
                        </div>
                    </Form>
                </div>
                <div className="col-md-8 m">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Annonce categorie</th>
                                <th scope="col">Annonce type</th>
                                <th scope="col">Annonce prix</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from(Annonces).map((annonce, index) => {
                                return (
                                    <tr key="">
                                        <th scope="row">{annonce.User_id}</th>
                                        <td> {annonce.AI_Categorie}</td>
                                        <td>{annonce.AI_Type}</td>
                                        <td>{annonce.AI_Prix}</td>
                                        <td>
                                            <i
                                                className="fa fa-trash-o text-danger d-inline mx-3"
                                                aria-hidden="true"
                                                onClick={() => onDelete(annonce.User_id)}
                                            ></i>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AjouterAnnonce;