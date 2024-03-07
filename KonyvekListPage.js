import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

export function KonyvekListPage() {

    const [konyv, setKonyv] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        fetch("https://localhost:5001/Konyv")
            .then((res) => res.json())
            .then((konyvek) => setKonyv(konyvek))
            .catch(console.log)
            .finally(() => {
                setFetchPending(false);
            });
    }, []);

    return (
        <div className='p-5 m-auto text-center content bg-ivory'>
            {isFetchPending ? (<div className='spinner-border'></div>) : (
                <div>
                    <h2>Könyvek</h2>
                    <div className="d-flex flex-wrap justify-content-center">
                        {konyv.map((konyv) => (
                            <div key={konyv.id + 4} className='card m-1 p-2' style={{ width: "200px" }}>
                                <h6 className='text-muted'>Könyv neve: {konyv.nev}</h6>
                                <h5 className='text-muted'>Kiadás éve: {konyv.kiadasEve}</h5>
                                <p>Könyv értékelése: {konyv.ertekeles}</p>
                                <NavLink key={konyv.id} to={"/konyvek/" + konyv.id}>
                                    <div className='card-body'>
                                        <img src={konyv.kepneve} style={{ width: "100%", height: "auto" }} alt="Kép" />
                                    </div>
                                </NavLink>
                                <br />
                                <NavLink key={konyv.id + 1} to={"/mod-konyvek/" + konyv.id}>
                                    <i className="bi bi-pencil-square mx-1">Módosítás</i>
                                </NavLink>
                                <NavLink key={konyv.id + 2} to={"/del-konyvek/" + konyv.id} className={"text-danger"}>
                                    <i className="bi bi-trash3">Törlés</i>
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}