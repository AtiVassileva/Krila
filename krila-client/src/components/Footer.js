import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div id="footer">
            <div className="footer-widget">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="text-widget">
                                <div className="wid-title">KRILA</div>
                                <p>
                                    Крила е онлайн магазин с оригинални и актуални за времето стоки на достъпна цена. <a href="">Пазарувай сега</a>
                                </p>
                                <ul className="ft-soc clearfix">
                                    <li><a href=""><i className="fa fa-facebook-square"></i></a></li>
                                    <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                    <li><a href=""><i className="fa fa-google-plus-square"></i></a></li>
                                    <li><a href=""><i className="fa fa-instagram"></i></a></li>
                                    <li><a href=""><i className="fa fa-pinterest"></i></a></li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="quick-links">
                                <div className="wid-title">Бързи линкове</div>
                                <ul>
                                    <li><Link to="/men">Мъже</Link></li>
                                    <li><Link to="/women">Жени</Link></li>
                                    <li><Link to="/kids">Деца</Link></li>
                                    <li><Link to="/about">За нас</Link></li>
                                    <li><Link to="/contacts">Контакти</Link></li>
                                    <li><Link to="/faq">Често задавани въпроси</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="term">
                                <div className="wid-title">&nbsp;</div>
                                <p>
                                    <a href="#">Доставка</a><br />
                                    <a href="#">Условия за ползване</a><br />
                                    <a href="#">Връщане и замяна</a><br />
                                    <a href="#">Legal Desclaimer</a><br />
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="subscribe">
                                <div className="wid-title">Бюлетин</div>
                                <p>
                                    Абонирайте се за нашия бюлетин, за да не пропускате нови оферти.
                                </p>
                                <form>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Вашият имейл" />
                                    </div>
                                    <button type="submit" className="btn btn-default">Абонирай се</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-text">
                <div className="container">
                    <p>Copyright 2018. Designed and Developed by <a href="https://bootstrapmart.com/">BootstrapMart </a> &amp; Distributed by <a href="https://themewagon.com/">ThemeWagon</a></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;