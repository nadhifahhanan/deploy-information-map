import React from "react";
import { Grid } from 'semantic-ui-react'
import Maps from './Maps'
import '../App.css'
import Dropdowns from './Dropdown'
import Navbar from './Navbar'

export class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            namaTempat: '',
            latitude: null,
            longitude: null,
            img: '',
            jam: '',
            harga: '',
            makanan: [],
            fasilitas: [],
            hari: '',
            alamat: '',
            telp: '',
            email: '',
            keys: "",
            showAllItems: [],
            idShowAll: null
        };
    }

    getShowAll(items){
        this.setState({
            showAllItems :items
        });
    }

    getFakultas(namaFakultas, lat, long, img, alamat, telp, email, keys) {
        this.setState({
            namaTempat: namaFakultas,
            latitude: lat,
            longitude: long,
            img: img,
            alamat: alamat,
            telp: telp,
            email: email,
            keys: keys
        })
    }

    getUmum(namaGedung, lat, long, img, alamat, telp, keys) {
        this.setState({
            namaTempat: namaGedung,
            latitude: lat,
            longitude: long,
            img: img,
            alamat: alamat,
            telp: telp,
            keys: keys
        }, () => {
            console.log(this.state.latitude, this.state.longitude, this.state.keys, this.state.namaTempat, this.state.alamat, this.state.telp, 'isi props');
        });
    }

    getParkir(namaParkir, lat, long, img, jam, keys) {
        this.setState({
            namaTempat: namaParkir,
            latitude: lat,
            longitude: long,
            img: img,
            jam: jam,
            keys: keys
        })
    }

    getResto(namaResto, lat, long, img, makanan, harga, jam, keys) {
        this.setState({
            namaTempat: namaResto,
            latitude: lat,
            longitude: long,
            img: img,
            makanan: makanan,
            harga: harga,
            jam: jam,
            keys: keys
        })
    }

    getTransport(naamHalte, lat, long, img, keys) {
        this.setState({
            namaTempat: naamHalte,
            latitude: lat,
            longitude: long,
            img: img,
            keys: keys
        })
    }

    getLapangan(namaLapangan, lat, long, img, jam, keys) {
        this.setState({
            namaTempat: namaLapangan,
            latitude: lat,
            longitude: long,
            img: img,
            jam: jam,
            keys: keys
        })
    }

    getBank(namaBank, lat, long, img, alamat, telp, fasilitas, hari, jam, keys) {
        this.setState({
            namaTempat: namaBank,
            latitude: lat,
            longitude: long,
            alamat: alamat,
            telp: telp,
            fasilitas: fasilitas,
            img: img,
            hari: hari,
            jam: jam,
            keys: keys
        } ,() => {
            console.log(this.state.latitude, this.state.longitude, this.state.keys, this.state.namaTempat, this.state.alamat, this.state.telp, this.state.img,'isi props');
        })
    }

    getSelectedId(id) {
        this.setState({
            idShowAll: id
        }, () => {
            console.log(this.state.idShowAll)
        });
    }



    render() {
        return (
            <div className="container">
                <Navbar />
                <div className="page-identifier">
                    <p>Kampus Depok</p>
                </div>
                <Grid>
                    <Grid.Column className="scrollable" width={5} style={{ height: '75vh' }}>
                        <Dropdowns
                            getSelectedFakultas={this.getFakultas.bind(this)}
                            getSelectedUmum={this.getUmum.bind(this)}
                            getSelectedParkir={this.getParkir.bind(this)}
                            getSelectedResto={this.getResto.bind(this)}
                            getSelectedTransport={this.getTransport.bind(this)}
                            getSelectedLapangan={this.getLapangan.bind(this)}
                            getSelectedBank={this.getBank.bind(this)}
                            getSelectedItems={this.getShowAll.bind(this)}
                            selectedId={this.getSelectedId.bind(this)}
                        />
                    </Grid.Column>
                    <Grid.Column className="map-container" width={11} style={{ height: '81vh' }}>
                        <Maps
                            namaTempat={this.state.namaTempat}
                            latitude={this.state.latitude}
                            longitude={this.state.longitude}
                            alamat={this.state.alamat}
                            telp={this.state.telp}
                            email={this.state.email}
                            img={this.state.img}
                            jam={this.state.jam}
                            hari={this.state.hari}
                            harga={this.state.harga}
                            makanan={this.state.makanan}
                            fasilitas={this.state.fasilitas}
                            keys={this.state.keys}
                            showAllItems={this.state.showAllItems}
                            idShowAll={this.state.idShowAll} />
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default Main;