import React from "react";

const Mhs = (props) => {
  return (
    <div className="mahasiswa">
      <div className="gambar-mahasiswa">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwH8ZV1PJTXTl72fKqYqftEuCh9tSBc2a-2-mEs6itx84c6mxG4_XHsJXk4vT56bTZt2E&usqp=CAU"
          alt="Gambar Mahasiswa"
        />
      </div>
      <div className="konten-mahasiswa">
        <div className="nama-mahasiswa">{props.nama}</div>
        <p className="nim-mahasiswa">NIM : {props.nim}</p>
        <p className="alamat-mahasiswa">Alamat : {props.alamat}</p>
        <p className="hp-mahasiswa">No Handphone : {props.hp}</p>
        <p className="angkatan-mahasiswa">Angkatan : {props.angkatan}</p>
        <p className="status-mahasiswa">Status : {props.status}</p>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => props.hapusMahasiswa(props.idMahasiswa)}
        >
          Hapus Mahasiswa
        </button>
      </div>
    </div>
  );
};

export default Mhs;
