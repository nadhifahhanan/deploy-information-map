import React, { Component } from 'react';
//import { Dropdown } from 'semantic-ui-react'
import { Dropdown, Image } from 'reactjs-dropdown-component';
import places from '../places.json'


class Dropdowns extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fakultas: [
        {
          id: 0,
          title: 'Fakultas Ekonomi',
          img: 'https://static.republika.co.id/uploads/images/inpicture_slide/fakultas-ekonomi-universitas-indonesia-fe-ui-_150325212256-816.jpg',
          alamat: 'Fakultas Ekonomi dan Bisnis, Jalan Prof. Dr. Sudjono D Pusponegoro, Kampus Universitas Indonesia, Depok, West Java, Indonesia',
          telp: '(021) 7272425',
          email: 'it.feb@ui.ac.id',
          latitude: -6.359899,
          longitude: 106.825849,
          selected: false,
          key: 'fakultas',
        },
        {
          id: 1,
          title: 'Fakultas Farmasi',
          img: 'https://i0.wp.com/www.anakui.com/wp-content/uploads/2015/09/maxresdefault-7.jpg',
          alamat: 'Fakultas Farmasi, Kampus UI Depok, Jawa Barat 16424',
          telp: '(021) 7270031',
          email: 'secretariat@farmasi.ui.ac.id',
          latitude: -6.368064,
          longitude: 106.825958,
          selected: false,
          key: 'fakultas'
        },
        {
          id: 2,
          title: 'Fakultas Hukum',
          img: 'https://arsitekhukum.files.wordpress.com/2013/05/fhui.jpg',
          alamat: 'Jl. Prof. Mr. Djokosoetono, Kampus Universitas Indonesia Depok 16424, Indonesia',
          telp: '(021) 7270003',
          email: 'lawschool@ui.ac.id',
          latitude: -6.364366,
          longitude: 106.831526,
          selected: false,
          key: 'fakultas'
        },
        {
          id: 3,
          title: 'Fakultas Ilmu Administrasi',
          img: 'https://fastly.4sqi.net/img/general/600x600/52872455_gRj5EN8F-2vbESaANWHZnP4b_m_iVWPKkQl2rI6xug0.jpg',
          alamat: 'Prajudi Atmosudirdjo Building, Level 2, FIA UI Depok, Indonesia 16424',
          telp: '(021) 78849087',
          email: 'humasfia@ui.ac.id',
          latitude: -6.362813,
          longitude: 106.828712,
          selected: false,
          key: 'fakultas'
        },
        {
          id: 4,
          title: 'Fakultas Ilmu Budaya',
          img: 'https://fib.ui.ac.id/wp-content/uploads/sites/120/2020/03/fib-ui-740x450.jpg',
          alamat: 'Kampus UI Depok Jawa Barat 16424',
          telp: '(021) 7863528',
          email: 'humas1@ui.ac.id',
          latitude: -6.362918,
          longitude: 106.828011,
          selected: false,
          key: 'fakultas'
        },
        {
          id: 5,
          title: 'Fakultas Ilmu Keperawatan',
          img: 'https://pbs.twimg.com/media/CAg-N_yU8AAxsgH.jpg',
          alamat: 'Fakultas Ilmu Keperawatan Universitas Indonesia \
            Gedung A Lantai 2, Rumpun Ilmu Kesehatan (RIK), Kampus UI Depok \
            Jawa Barat 16424 – Indonesia',
          telp: '(021) 78849120',
          email: 'publicrelation-nursing@ui.ac.id',
          latitude: -6.370630,
          longitude: 106.827886,
          selected: false,
          key: 'fakultas'
        },
        {
          id: 6,
          title: 'Fakultas Ilmu Komputer',
          img: 'https://i0.wp.com/www.anakui.com/wp-content/uploads/2015/10/DSC_113-1024x627.jpg',
          alamat: 'Kampus UI Depok, Indonesia 16424',
          telp: '(021) 7863419',
          email: 'humasfasilkom@cs.ui.ac.id',
          latitude: -6.364356,
          longitude: 106.828710,
          selected: false,
          key: 'fakultas'
        },
        {
          id: 7,
          title: 'Fakultas Ilmu Sosial dan Politik',
          img: 'https://www.ui.ac.id/wp-content/uploads/2018/01/DSC09694.jpg',
          alamat: 'Jl. Prof. Dr. Selo Soemardjan Depok, Jawa Barat 16424 Indonesia',
          telp: '(021)  7270006',
          email: 'fisip@ui.ac.id',
          latitude: -6.361442,
          longitude: 106.829752,
          selected: false,
          key: 'fakultas'
        },
        {
          id: 8,
          title: 'Fakultas Kesehatan Masyarakat',
          img: 'https://asset-a.grid.id/crop/0x0:0x0/360x240/photo/haifoto/original/1441_fakultas-kesehatan-masyakarat-universitas-indonesia-fkm-ui-dokter-untuk-rakyat.jpg',
          alamat: 'Kampus Baru UI Depok Jawa Barat – 16424 Indonesia',
          telp: '(021) 7864975',
          email: 'fkmui@ui.ac.id',
          latitude: -6.370732,
          longitude: 106.829052,
          selected: false,
          key: 'fakultas'
        },
        {
          id: 9,
          title: 'Fakultas Matematika dan IPA',
          img: 'https://www.sci.ui.ac.id/wp-content/uploads/2018/06/3-1-740x450.jpg',
          alamat: 'Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas Indonesia',
          telp: '(021) 7863436',
          email: 'sekretariat@sci.ui.ac.id',
          latitude: -6.369389,
          longitude: 106.826270,
          selected: false,
          key: 'fakultas'
        },
        {
          id: 10,
          title: 'Fakultas Psikologi',
          img: 'https://psikologi.ui.ac.id/wp-content/uploads/sites/14/2019/01/Halaman-Depan-740x450.jpg',
          alamat: 'Kampus Baru UI – Depok 16424',
          telp: '(021) 7863520',
          email: 'fpsi@ui.ac.id',
          latitude: -6.362873,
          longitude: 106.830192,
          key: 'fakultas'
        },
        {
          id: 11,
          title: 'Fakultas Teknik',
          img: 'https://bimbinganalumniui.com/blog/wp-content/uploads/2016/12/237d379282b09c50a58cb44f3d74b240.jpg',
          alamat: 'Teknik UI',
          telp: '(021) 7863504',
          email: 'humas@eng.ui.ac.id',
          latitude: -6.362054,
          longitude: 106.824076,
          selected: false,
          key: 'fakultas'
        }

      ],
      umum: [
        {
          id: 0,
          title: 'Asrama Mahasiswa',
          img: 'https://2.bp.blogspot.com/-JpvWeXZKH9U/Wejgs9nBvrI/AAAAAAAABS8/PU_ZJxxtn2A9Fc1D6-J7X4M5--QpVGBBwCLcBGAs/s1600/asrama.JPG',
          alamat: 'Asrama Mahasiswa UI, RW.3, Srengseng Sawah, Kec. Jagakarsa, Kota Jakarta Selatan, Jawa Barat 16424',
          telp: '(021) 7863446',
          latitude: -6.348070,
          longitude: 106.829665,
          selected: false,
          key: 'umum'
        },
        {
          id: 1,
          title: 'Balairung',
          alamat: 'Jl. Prof. DR. Mahar Mardjono, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat 16424',
          img: 'https://vokasi.ui.ac.id/web/wp-content/uploads/2018/04/Balairung-UI.jpg',
          telp: '(021) 7863446',
          latitude: -6.368807,
          longitude: 106.829096,
          selected: false,
          key: 'umum'
        },
        {
          id: 2,
          title: 'Masjid Universitas Indonesia',
          img: 'https://www.ui.ac.id/wp-content/uploads/2015/04/masjid-ui.jpg',
          alamat: 'Jalan Lingkar Kampus Raya, Pondok Cina, Beji, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat 16424',
          telp: '(021) 7863414',
          latitude: -6.365482,
          longitude: 106.831042,
          selected: false,
          key: 'umum'
        },
        {
          id: 3,
          title: 'Pusat Administrasi Universitas Indonesia',
          img: 'https://fastly.4sqi.net/img/general/600x600/6798494_JJQyapQ4lTxgbBr8blVk77CII6uvrx6GOi4aED74DCU.jpg',
          alamat: 'Kampus UI, Jalan Margonda Raya, Pondok Cina, Beji, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat 16424',
          telp: '(021) 7867222',
          latitude: -6.366603,
          longitude: 106.828588,
          selected: false,
          key: 'umum'
        }

      ],
      parkir: [
        {
          id: 0,
          title: 'Parkir Fasilkom',
          img: 'https://i.ytimg.com/vi/WWo-JgNnyss/maxresdefault.jpg',
          jam: '08.00 - 21.00',
          latitude: -6.364951,
          longitude: 106.828663,
          selected: false,
          key: 'parkir'
        },
        {
          id: 1,
          title: 'Parkir Masjid UI',
          img: 'https://pbs.twimg.com/media/CEIKaPyUgAERmtU.jpg',
          jam: '00.00 - 24.00',
          latitude: -6.365482,
          longitude: 106.831042,
          selected: false,
          key: 'parkir'
        },
        {
          id: 2,
          title: 'Parkir FISIP UI',
          img: 'https://i2.wp.com/www.anakui.com/wp-content/uploads/2015/09/20131217-parkir-mobil.jpg',
          jam: '08.00 - 20.00',
          latitude: -6.361280,
          longitude: 106.830360,
          selected: false,
          key: 'parkir'
        },
        {
          id: 3,
          title: 'Parkir Psikologi UI',
          img: 'https://i2.wp.com/www.anakui.com/wp-content/uploads/2015/09/20131217-parkir-mobil.jpg',
          jam: '08.00 - 20.00',
          latitude: -6.361632,
          longitude: 106.830639,
          selected: false,
          key: 'parkir'
        }

      ],
      makan: [
        {
          id: 0,
          title: 'Kantin Fasilkom',
          img: 'https://i0.wp.com/www.anakui.com/wp-content/uploads/2014/12/kantin-2-300x225.jpg?resize=300%2C225',
          makanan: ['Ayam bakar','Nasi Goreng','Jus','Steak', 'Sate', 'Soto', 'Yoshinoya'],
          harga: 'Rp 1.000 - Rp 20.000',
          jam: '09.00-20.00',
          latitude: -6.364192,
          longitude: 106.828531,
          selected: false,
          key: 'makan'
        },
        {
          id: 1,
          title: 'Kantin Teknik',
          img: 'https://www.anakui.com/wp-content/uploads/2015/04/untitled3.jpg',
          makanan: ['Ayam Geprek','Nasi Kebuli','Minuman Segar','Steak', 'Sate', 'Waffle'],
          harga: 'Rp 5.000 - Rp 20.000',
          jam: '09.00-20.00',
          latitude: -6.362948,
          longitude: 106.825042,
          selected: false,
          key: 'makan'
        },
        {
          id: 2,
          title: 'Kantin FMIPA',
          img: 'https://bpmfmipaui.files.wordpress.com/2013/07/debat-publik-3.jpg',
          makanan: ['Ayam Penyet','Gorengan','Ice Cream','Snack', 'Tahu Bulat'],
          harga: 'Rp 1.000 - Rp 25.000',
          jam: '09.00-20.00',
          latitude: -6.369500,
          longitude: 106.827364,
          key: 'makan'
        },
        {
          id: 3,
          title: 'Mang Engking',
          img: 'https://www.datawisata.com/wp-content/uploads/2018/05/mang-engking-ui-depok-1024x683.jpg',
          makanan: ['Seafood','Nasi Liwet','Aneka Ayam','Aneka Sambal'],
          harga: 'Rp 10.000 - Rp 250.000',
          jam: '11.00-19.00',
          latitude: -6.349184,
          longitude: 106.831541,
          selected: false,
          key: 'makan'
        }

      ],
      halte: [
        {
          id: 0,
          title: 'Halte Masjid UI',
          img: 'https://pbs.twimg.com/media/CXi0O7GU0AAxphr.jpg',
          latitude: -6.365473,
          longitude: 106.832101,
          selected: false,
          key: 'halte'
        },
        {
          id: 1,
          title: 'Halte FH',
          img: 'https://mapio.net/images-p/55632751.jpg',
          latitude: -6.364719,
          longitude: 106.832220,
          selected: false,
          key: 'halte'
        },
        {
          id: 2,
          title: 'Halte FISIP',
          img: 'https://www.anakui.com/wp-content/uploads/2015/05/9478049642_fcc10d75f1_b.jpg',
          latitude: -6.361575,
          longitude: 106.830159,
          selected: false,
          key: 'halte'
        },
        {
          id: 3,
          title: 'Halte Psiko',
          img: 'https://www.anakui.com/wp-content/uploads/2015/05/9478049642_fcc10d75f1_b.jpg',
          latitude: -6.362766,
          longitude: 106.831135,
          selected: false,
          key: 'halte'
        }

      ],
      stasiun: [
        {
          id: 0,
          title: 'Stasiun Pondok Cina',
          img: 'https://awsimages.detik.net.id/customthumb/2016/03/02/297/171727_pocincvr.jpg?w=700&q=90',
          latitude: -6.368791,
          longitude: 106.832197,
          selected: false,
          key: 'stasiun'
        },
        {
          id: 1,
          title: 'Stasiun UI',
          img: 'https://heritage.kai.id/media/DSC_2455-copy-rev-copy.jpg?1511346917043',
          latitude: -6.360540,
          longitude: 106.831729,
          selected: false,
          key: 'stasiun'
        }

      ],
      lapangan: [
        {
          id: 0,
          title: 'Lapangan Teknik',
          img: 'https://eng.ui.ac.id/wp-content/uploads/IMG_3504-1040x780.jpeg',
          jam: '10.00 - 20.00',
          latitude: -6.360685,
          longitude: 106.824110,
          selected: false,
          key: 'lapangan'
        },
        {
          id: 1,
          title: 'Lapangan FH',
          img: 'https://i.ytimg.com/vi/Csx-PJ28gLo/maxresdefault.jpg',
          jam: '10.00 - 20.00',
          latitude: -6.363970,
          longitude: 106.830350,
          selected: false,
          key: 'lapangan'
        },
        {
          id: 2,
          title: 'Lapangan Fisip',
          img: 'https://eng.ui.ac.id/wp-content/uploads/olahraga-1040x780.jpg',
          jam: '10.00 - 20.00',
          latitude: -6.360613,
          longitude: 106.829550,
          selected: false,
          key: 'lapangan'
        }

      ],
      bank: [
        {
          id: 0,
          title: 'Bank BNI Perpustakaan UI',
          img: 'https://mhdanang.files.wordpress.com/2015/08/122312_gedung-perpustakaan-baru-universitas-indonesia-ui-_663_382.jpg?w=584',
          alamat: 'Gedung Perpustakaan Pusat Universitas Indonesia, Pondok Cina, Depok, Kota Depok, Jawa Barat 16424',
          fasilitas: ['ATM', 'Setor Tunai', 'Buka Tabungan'],
          telp: '(021) 7270040',
          hari: 'Senin - Sabtu',
          jam: '10.00 - 17.00',
          latitude: -6.365291,
          longitude: 106.829503,
          selected: false,
          key: 'bank'
        },
        {
          id: 1,
          title: 'Bank Syariah Mandiri FMIPA',
          img: 'https://2.bp.blogspot.com/-HQ8Trs1ONag/XHXteUezVPI/AAAAAAAAOFQ/yiyaXmSUgBkVZ41SRwlTqmGW1rXrvkDNQCLcBGAs/s1600/jam%2Bkerja%2Bbsm.jpg',
          alamat: 'Komplek Fakultas Mipa Universitas Indonesia, Depok, Pondok Cina, Beji, Depok City, West Java 16424',
          fasilitas: ['ATM', 'Setor Tunai', 'Buka Tabungan'],
          telp: '(021) 78849007',
          hari: 'Senin - Jumat',
          jam: '10.00 - 17.00',
          latitude: -6.368884,
          longitude: 106.826746,
          selected: false,
          key: 'bank'
        }

      ]
    }

  }

  componentDidMount() {
    window.addEventListener("keydown", this.tabKeyPressed);
    window.addEventListener("mousedown", this.mouseClicked);
  }

  tabKeyPressed = (e) => {
    if (e.keyCode === 9) {
      document.querySelector('body').classList.remove("noFocus")
      window.removeEventListener('keydown', this.tabKeyPressed);
      window.addEventListener('mousedown', this.mouseClicked);
    }
  }

  mouseClicked = (e) => {
    document.querySelector('body').classList.add("noFocus")
    window.removeEventListener('mousedown', this.mouseClicked);
    window.addEventListener('keydown', this.tabKeyPressed);
  }

  toggleItem = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp
    })
  }

  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    console.log(temp)
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      [key]: temp
    })
    console.log([key])
    //alert("you select " + temp[id].title)
    if(key === 'fakultas'){
      this.props.getSelectedFakultas(temp[id].title, temp[id].latitude, temp[id].longitude, temp[id].img, temp[id].alamat, temp[id].telp, temp[id].email, key)
    } else if (key === 'umum'){
      this.props.getSelectedUmum(temp[id].title, temp[id].latitude, temp[id].longitude, temp[id].img, temp[id].alamat, temp[id].telp, key)
    } else if (key === 'parkir'){
      this.props.getSelectedParkir(temp[id].title, temp[id].latitude, temp[id].longitude, temp[id].img, temp[id].jam, key)
    } else if (key === 'makan'){
      this.props.getSelectedResto(temp[id].title, temp[id].latitude, temp[id].longitude, temp[id].img, temp[id].makanan, temp[id].harga, temp[id].jam, key)
    } else if (key === 'halte' || key === 'stasiun'){
      this.props.getSelectedTransport(temp[id].title, temp[id].latitude, temp[id].longitude, temp[id].img, key)
      console.log(key)
      console.log(temp[id].title)
    } else if (key === 'lapangan'){
      this.props.getSelectedLapangan(temp[id].title, temp[id].latitude, temp[id].longitude, temp[id].img, temp[id].jam, key)
      console.log(key)
      console.log(temp[id].title)
    } else if (key === 'bank'){
      this.props.getSelectedBank(temp[id].title, temp[id].latitude, temp[id].longitude, temp[id].img, temp[id].alamat, temp[id].telp, temp[id].fasilitas, temp[id].hari, temp[id].jam, key)
      console.log(key)
      console.log(temp[id].title)
      console.log(temp[id].alamat)
    }
    // this.props.getSelectedVal(temp[id].latitude, temp[id].longitude, key, temp[id].title, temp[id].alamat, temp[id].telp, temp[id].email, temp[id].info)
    // console.log(temp[id].latitude, temp[id].longitude, key, temp[id].title, temp[id].alamat, temp[id].telp, temp[id].email, temp[id].info)
  }

  showAll= (e) =>{
    const id = e.target.id
    this.props.selectedId(id)
    var tempItem = []
    if(id === 'fakultas'){
      tempItem = this.state.fakultas
      this.props.getSelectedItems(tempItem)
    }
    else if(id === 'umum'){
      tempItem = this.state.umum
      this.props.getSelectedItems(tempItem)
    }
    else if(id === 'parkir'){
      tempItem = this.state.parkir
      this.props.getSelectedItems(tempItem)
    }
    else if(id === 'makan'){
      tempItem = this.state.makan
      this.props.getSelectedItems(tempItem)
    }
    else if(id === 'halte'){
      tempItem = this.state.halte
      this.props.getSelectedItems(tempItem)
    }
    else if(id === 'stasiun'){
      tempItem = this.state.stasiun
      this.props.getSelectedItems(tempItem)
    }
    else if(id === 'lapangan'){
      tempItem = this.state.lapangan
      this.props.getSelectedItems(tempItem)
    }
    else if(id === 'bank'){
      tempItem = this.state.bank
      this.props.getSelectedItems(tempItem)
    }
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">

          <Dropdown className="fakultas"
            searchable={["Cari nama fakultas", "No matching fruit"]}
            title="Gedung Fakultas"
            list={this.state.fakultas}
            resetThenSet={this.resetThenSet}
          />
          <button className="showAll" onClick={this.showAll} id="fakultas" type="button" >Tampilkan Semua</button>
          <Dropdown
            searchable={["Cari nama gedung umum", "No matching location"]}
            title="Gedung Umum"
            list={this.state.umum}
            resetThenSet={this.resetThenSet}
          />
          <button className="showAll" onClick={this.showAll} id="umum" type="button">Tampilkan Semua</button>
          <Dropdown
            searchable={["Cari lapangan parkir", "No matching location"]}
            title="Lapangan Parkir"
            list={this.state.parkir}
            resetThenSet={this.resetThenSet}
          />
          <button className="showAll" onClick={this.showAll} id="parkir" type="button">Tampilkan Semua</button>
          <Dropdown
            searchable={["Cari area makan", "No matching location"]}
            title="Area Makan"
            list={this.state.makan}
            resetThenSet={this.resetThenSet}
          />
          <button className="showAll" onClick={this.showAll} id="makan" type="button">Tampilkan Semua</button>
          <Dropdown
            searchable={["Cari halte bus", "No matching location"]}
            title="Halte Bus"
            list={this.state.halte}
            resetThenSet={this.resetThenSet}
          />
          <button className="showAll" onClick={this.showAll} id="halte" type="button">Tampilkan Semua</button>
          <Dropdown
            searchable={["Cari stasiun kereta", "No matching location"]}
            title="Stasiun Kereta Api"
            list={this.state.stasiun}
            resetThenSet={this.resetThenSet}
          />
          <button className="showAll" onClick={this.showAll} id="stasiun" type="button">Tampilkan Semua</button>
          <Dropdown
            searchable={["Cari lapangan olah raga", "No matching location"]}
            title="Lapangan Olahraga"
            list={this.state.lapangan}
            resetThenSet={this.resetThenSet}
          />
          <button className="showAll" onClick={this.showAll} id="lapangan" type="button">Tampilkan Semua</button>
          <Dropdown
            searchable={["Cari bank", "No matching location"]}
            title="Bank"
            list={this.state.bank}
            resetThenSet={this.resetThenSet}
          />
          <button className="showAll" onClick={this.showAll} id="bank" type="button">Tampilkan Semua</button>
        </div>
      </div>
    );
  }
}



export default Dropdowns;