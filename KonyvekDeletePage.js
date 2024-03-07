import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from "react-router-dom";

export function KonyvekDeletePage() {
    const navigate = useNavigate();
    const id = useParams().konyvekId;
    const [konyv, setKonyv] = useState([]);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        (async () => {
            try {
                const res = await fetch(`https://localhost:5001/Konyv/${id}`);
                const konyv = await res.json();
                console.log(id)
                setKonyv(konyv);
            } catch (error) {
                console.log(error);
            } finally {
                setPending(false);
            }
        })();
    }, [id]);

    return (
        <div className='p-5 m-auto text-center content bg-lavender'>
            {isPending || !konyv.id ? (<div className='spinner-border'></div>) : (
                <div>
                    <h2>Könyv törlése</h2>
                    <div className='card p-3'>
                        <div className='card-body'>
                            <h4>{konyv.nev}</h4>
                            <h5 className='card-title'>{konyv.kiadasEve}</h5>
                            <h5>{konyv.ertekeles}</h5>
                            <img src={konyv.kepneve}></img>
                        </div>
                        <form onSubmit={async (e) => {
                            try {
                                e.preventDefault();
                                await fetch(`https://localhost:5001/Konyv/${id}`, {
                                    headers: { "Content-Type": "application/json" },
                                    method: "DELETE",
                                });
                                navigate("/");
                            } catch (error) {
                                console.log(error);
                            };
                        }}>
                            <div>
                                <NavLink to={"/"}>
                                    <button className="bi bi-backspace btn btn-warning rounded">Mégsem</button>
                                </NavLink>
                                <button className="bi bi-trash3 btn btn-danger rounded">Törlés</button>
                            </div>
                        </form>
                    </div>
                </div>
            )} </div>
    );
}
