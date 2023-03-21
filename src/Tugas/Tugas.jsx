import React from 'react';
import './Tugas.css';

class Tugas extends React.Component {
    render() {
        return (
            <div className="row">
                <form action="POST">
                    <div className="col-md-12">
                    <h1 className="text-h3">Form Login</h1>
                        <div className="card">
                            <div class="container">
                                <h2 className="text-header">Tugas Pertemuan <br></br> Ketiga</h2>
                                <div class="form-group">
                                    <span className="text-username"><b>Username</b></span>&emsp;
                                <input type="text" name="username" placeholder="masukkan username"></input>
                                </div>
                                <div class="form-group">
                                    <span className="text-username"><b>Password</b> </span>&emsp;
                                <input type="password" name="password" placeholder="masukkan Password Anda"></input>
                                </div>
                                <div class="form-group">
                                    <button class="button button1">Login</button>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="remember"></input>&nbsp;
                                <label className="text-rmem">Remember Me</label>
                                </div>
                                <div class="form-group">
                                    <button class="button button2">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Tugas;