import { useState, useEffect, } from "react";
import API from "../../API";
import { useLocation } from "react-router-dom";
import { Col, Form, Row } from "react-bootstrap";
import { Button, createTheme } from "@mui/material";
import { Box } from "@mui/system";
import AppBar from '../../Components/GeneralAppBar/AppBar';
import "../../Style/HeroStyle.css";

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
    const[nom_contact,setnom] = useState("");
    const[prenom_contact,setprenom] = useState("");
    const[adresse_contact,setadrcontact] = useState("");
    const[email_contact,setemail] = useState("");
    const[telephone_contact,setnum] = useState("");
    const [AI_Prix, setAIPrix] = useState("");
    const [AI_Localisation, setAILocalisation] = useState("");
    const [AI_Contact, setAIContactInfo] = useState("");
    //const [AI_Photo, setAIPhoto] = useState("");
    const [Annonces, setAnnonces] = useState([]);
    const[isOpen, setIsOpen]=useState(false)
   const toggle = () =>{
    setIsOpen(!isOpen)
   }

    useEffect(() => {
        refreshAnnonces();
    }, []);

    const refreshAnnonces = () => { //Recuperation des annonces de cet utilisateur de la base de données
        console.log(User_id);
        API.get("mesannonces/mesannonces/", { params: { Userid: User_id } })
            .then((res) => {
                setAnnonces(res.data);
            })
            .catch(console.error);
    };
//Fonction qui envoie les données de Locatiolisation vers le backend et renvoie le id pour l'affecter a AI_localisation
    async function saveLocation(){ 
        let item1 = { wilaya, commune, adresse };
        let res = await API.post("annonce/Localisation/", item1); //Sauvagarde dans la table de location et retourne le id
        console.log(res);
        let data = res.data.Loc_id; //Récupérer le id
        console.log(data);
        setAILocalisation(data); //on affecte le id a l'annonce
        console.log(AI_Localisation);
    }
//Fonction qui envoie les données de contact info vers le backend
    async function saveContactInfo(){
        let item = {nom_contact,prenom_contact,email_contact,telephone_contact,adresse_contact};
        let res = await API.post("ContactInfo/ContactInfo/", item)
        console.log(res);
        let dataCont = res.data.Contact_id;
        console.log(dataCont);
        setAIContactInfo(dataCont);
        console.log(AI_Contact);
    }

    async function onSubmit(e) {
        e.preventDefault();
         saveLocation();
         saveContactInfo();
        let item2 = { User_id, AI_Categorie, AI_Type, AI_Surface, AI_Description, AI_Prix, AI_Localisation, AI_Contact };
        API.post("annonce/annonce/", item2).then(() => refreshAnnonces()); //Sauvgarder l'annonce et reintialiser la page
    };
    const onDelete = (id) => {
        API.delete(`/${id}/`).then((res) => refreshAnnonces());
    };


    return (
        <Box sx={{
            //backgroundColor:'#E6F0FF',
            height:'100%'
            //display: 'flex',
            //flexDirection: 'row',
            
        }
        }> 
            <header> <AppBar toggle={toggle}  /></header>
            <span className="col-md-4" >
                <h1 className="customTitle" >Ajouter une nouvelle annonce</h1>
                <Form onSubmit={onSubmit} className="mt-4">
                    <Row className="form-margin">
                        <Form.Group as={Col} controlId="formGridCategorie">
                            <Form.Label>Categorie</Form.Label>
                            <Form.Select 
                              type="select"
                              defaultValue="Enter Categorie"
                              value={AI_Categorie}
                              onChange={(e) => setAICategorie(e.target.value)}>
                                <option>Choisissez...</option>
                                <option>Vente</option>
                                <option>Echange</option>
                                <option>Location</option>
                                <option>Location pour vacances</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridType">
                            <Form.Label>Type</Form.Label>
                            <Form.Select
                            type="text"
                            placeholder="Enter Type"
                            value={AI_Type}
                            onChange={(e) => setAIType(e.target.value)}>
                               <option>Choisissez...</option>
                               <option>Terrain</option>
                               <option>Terrain agricole</option>
                               <option>Appartement</option>
                               <option>Maison</option>
                               <option>Bungalow</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridnom">
                            <Form.Label>Nom du contact</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nom"
                                value={nom_contact}
                                onChange={(e) => setnom(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridprenom">
                            <Form.Label>Prenom du contact</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="prenom"
                                value={prenom_contact}
                                onChange={(e) => setprenom(e.target.value)}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="form-margin">
                        <Form.Group as={Col}  controlId="formGridDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter description"
                                value={AI_Description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group as={Col}  controlId="formGridEmail">
                            <Form.Label>Email du contact</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                value={email_contact}
                                onChange={(e) => setemail(e.target.value)}
                            />
                        </Form.Group>
                    </Row>          
                    <Form.Group className="form-margin" controlId="formGridadrcontact">
                        <Form.Label>Adresse du contact</Form.Label>
                        <Form.Control
                           type="text"
                           placeholder="Adresse du contact"
                           value={adresse_contact}
                           onChange={(e) => setadrcontact(e.target.value)}
                        />
                    </Form.Group> 
                    <Row className="form-margin">
                        <Form.Group as={Col}  controlId="formGridSurface">
                            <Form.Label>Surface</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Surface"
                                value={AI_Surface}
                                onChange={(e) => setAISurface(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group as={Col}  controlId="formGridPrix">
                            <Form.Label>Prix</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Prix"
                                value={AI_Prix}
                                onChange={(e) => setAIPrix(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridnumTel">
                            <Form.Label>Téléphone du contact</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="numéro"
                                value={telephone_contact}
                                onChange={(e) => setnum(e.target.value)}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="form-margin">
                        <Form.Group as={Col} controlId="formGridWilaya">
                            <Form.Label>Wilaya</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="wilaya"
                                value={wilaya}
                                onChange={(e) => setwilaya(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group as={Col}  controlId="formGridCommune">
                            <Form.Label>Commune</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="commune"
                                value={commune}
                                onChange={(e) => setcommune(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group as={Col}  controlId="formGridAdresse">
                            <Form.Label>Adresse</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="adresse"
                                value={adresse}
                                onChange={(e) => setadresse(e.target.value)}
                            />
                        </Form.Group>
                    </Row>   
                        
                        <div >
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                type="submit"
                                onClick={onSubmit}          
                            >
                                Sauvgarder l'annonce
                            </Button>
                        </div>
                </Form>
            </span>
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
        </Box>
    );
}

export default AjouterAnnonce;