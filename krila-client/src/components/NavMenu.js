import { Link } from 'react-router-dom';
import './NavMenu.css';

const NavMenu = () => {
  return (
    <div id="believe-nav">
      <div className="container">
        <div className="min-marg">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link to="/"className="navbar-brand" href="index.html">KRILA</Link>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="active"><Link to="/">Home <span className="sr-only">(current)</span></Link></li>
                  <li><Link to="/men">Мъже</Link></li>
                  <li><Link to="/women">Жени</Link></li>
                  <li><Link to="/kids">Деца</Link></li>
                  <li><Link to="/contacts">Контакти</Link></li>
                  <li><Link to="/about">За нас</Link></li>
                </ul>

                <ul className="nav navbar-nav navbar-right">
                  <li className="menu-search-form">
                    <Link to="#" id="open-srch-form"><img src="images/srch.png" alt="srch"/></Link>
                  </li>
                  <li><Link to="/favorites"><img src="images/pav.png" alt="pav" /><span>2</span></Link></li>
                  <li><Link to="/cart"><img src="images/bag.png" alt="bag"/><span>2</span></Link></li>
                  <li id="open-srch-form-mod">
                    <div>
                      <form className="side-search">
                        <div className="input-group">
                          <input type="text" className="form-control search-wid" placeholder="Search Here" aria-describedby="basic-addon1"/>
                            <Link to="" className="input-group-addon btn-side-serach" id="basic-addon1"><i className="fa fa-search"></i></Link>
                        </div>
                      </form>
                    </div>
                  </li>
                </ul>

              </div>
              </div> 

          </nav>
        </div>
        <div className="srch-form">
          <form className="side-search">
            <div className="input-group">
              <input type="text" className="form-control search-wid" placeholder="Search Here" aria-describedby="basic-addon2" />
              <Link to="" className="input-group-addon btn-side-serach" id="basic-addon2"><i className="fa fa-search"></i></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;