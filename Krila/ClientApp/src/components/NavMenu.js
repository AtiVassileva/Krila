import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <div id="header">
      <div id="believe-nav">
        <div class="container">
          <div class="min-marg">
            <nav class="navbar navbar-default">
              <div class="container-fluid">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <Link to="/" class="navbar-brand">KRILA</Link>
                </div>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav">
                    <li class="active"><Link to="/">Home <span class="sr-only">(current)</span></Link></li>
                    <li><Link to="/men">Мъже</Link></li>
                    <li><Link to="/women">Жени</Link></li>
                    <li><Link to="/kids">Деца</Link></li>
                    <li><Link to="/contacts">Контакти</Link></li>
                    <li><Link to="/about">За нас</Link></li>
                  </ul>

                  <ul class="nav navbar-nav navbar-right">
                    <li class="menu-search-form">
                      <Link to="#" id="open-srch-form"><img src="images/srch.png" alt="srch" /></Link>
                    </li>
                    <li><Link to="#"><img src="images/pav.png" alt="pav" /><span>2</span></Link></li>
                    <li><Link to="#"><img src="images/bag.png" alt="bag" /><span>2</span></Link></li>
                    <li id="open-srch-form-mod">
                      <div>
                        <form class="side-search">
                          <div class="input-group">
                            <input type="text" class="form-control search-wid" placeholder="Search Here" aria-describedby="basic-addon1" />
                            <Link to="" class="input-group-addon btn-side-serach" id="basic-addon1"><i class="fa fa-search"></i></Link>
                          </div>
                        </form>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </nav>
          </div>
          <div class="srch-form">
            <form class="side-search">
              <div class="input-group">
                <input type="text" class="form-control search-wid" placeholder="Search Here" aria-describedby="basic-addon2" />
                <Link to="" class="input-group-addon btn-side-serach" id="basic-addon2"><i class="fa fa-search"></i></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;