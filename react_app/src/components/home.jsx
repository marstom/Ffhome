import React from 'react';
// import "./components.css"

export default function Home() {
    return (
        <div>
            Strona logowania
            <div className="container">
                <form className="form_add_cost">
                    <label htmlFor="">Login</label>
                    <input className="form-control" type="text"/>
                    <input className="form-control"  type="password"/>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>

        </div>
    )

}
