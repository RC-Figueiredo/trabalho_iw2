import '../components/style/estilo.css';

export default function Home() {
  return (
    <div className="container" style={{ background: '#840000ff' }}>

      <div className="login text-center mt-3"> 
        <h1 className="titulo">Home</h1>
        <div className="w-50 mx-auto">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
          </div>
          <div>
            <button className="btn_login">Login</button>
          </div>
        </div>
      </div>

    </div>
  );
}