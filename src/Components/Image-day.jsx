
import { useEffect, useState } from "react";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const GetImageOfDay = () => {
    const [apiConector, setApiConector] = useState([]);
    const [searchCharacter, setSearchCharacter] = useState([]);

    const apiConection = async () => {
        const url = 'https://rickandmortyapi.com/api/character';
        const response = await fetch(url);
        const data = await response.json();
        setApiConector(data.results)
    }

    useEffect(() => {
        apiConection()
    }, [])

    const finder = (e) => {
        let textSearch = document.querySelector('#search').value
        setSearchCharacter(textSearch)
        e.preventDefault();
    }

    const filteredCharacterer = apiConector.filter(ch => {

        return (
            ch.name.toLowerCase().includes(searchCharacter) || ch.species.toLowerCase().includes(searchCharacter)
            || ch.status.toLowerCase().includes(searchCharacter)

        )

    })



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (searchCharacter = "") => setShow(true);

    console.log(filteredCharacterer)


    return (
        <div>
            <>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}

                >
                    <Modal.Header closeButton>
                        <Modal.Title>Rick and Morty finder</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            {filteredCharacterer.map((filter) =>
                                <li class="card" key={filter.id}>
                                    <img src={filter.image} alt={filter.name} />
                                    <div class="card-body">
                                        <h5 class="card-title">{filter.name}</h5>
                                        <p class="card-text">{filter.gender} - {filter.species} - {filter.status} </p>
                                    </div>

                                </li>
                            )}
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
            <form >
                <h2>Find your character:
                    <input type="text" placeholder="By name, alive-dead, specie, gender" id='search' />
                    <br />
                    <Button variant="primary" onClick={handleShow} onClickCapture={finder}>
                        Go find it!
                    </Button>
                </h2>

            </form>

            <ul>
                {apiConector.map((character) =>
                    <li key={character.id}>
                        <div class="card">
                            <img src={character.image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{character.name}</h5>
                                <p class="card-text">{character.gender} - {character.species} - {character.status} </p>
                            </div>
                        </div>
                    </li>
                )}
            </ul>



        </div >
    )
}




export {
    GetImageOfDay
} 
