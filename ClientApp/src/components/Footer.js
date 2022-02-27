const Footer = () => {
    return (
        <div id="footer">
            <div class="footer-widget">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="text-widget">
                                <div class="wid-title">KRILA</div>
                                <p>
                                    Крила е онлайн магазин с оригинални и актуални за времето стоки на достъпна цена. <a href="">Пазарувай сега</a>
                                </p>
                                <ul class="ft-soc clearfix">
                                    <li><a href=""><i class="fa fa-facebook-square"></i></a></li>
                                    <li><a href=""><i class="fa fa-twitter"></i></a></li>
                                    <li><a href=""><i class="fa fa-google-plus-square"></i></a></li>
                                    <li><a href=""><i class="fa fa-instagram"></i></a></li>
                                    <li><a href=""><i class="fa fa-pinterest"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="quick-links">
                                <div class="wid-title">Бързи линкове</div>
                                <ul>
                                    <li><a href="/men">Мъже</a></li>
                                    <li><a href="/women">Жени</a></li>
                                    <li><a href="/kids">Деца</a></li>
                                    <li><a href="/about">За нас</a></li>
                                    <li><a href="/contacts">Контакти</a></li>
                                    <li><a href="/faq">Често задавани въпроси</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="term">
                                <div class="wid-title">&nbsp;</div>
                                <p>
                                    <a href="#">Доставка</a><br />
                                    <a href="#">Условия за ползване</a><br />
                                    <a href="#">Връщане и замяна</a><br />
                                    <a href="#">Legal Desclaimer</a><br />
                                </p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="subscribe">
                                <div class="wid-title">Бюлетин</div>
                                <p>
                                    Абонирайте се за нашия бюлетин, за да не пропускате нови оферти.
                                </p>
                                <form>
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Вашият имейл" />
                                    </div>
                                    <button type="submit" class="btn btn-default">Абонирай се</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-text">
                <div class="container">
                    <p>Copyright 2018. Designed and Developed by <a href="https://bootstrapmart.com/">BootstrapMart </a> &amp; Distributed by <a href="https://themewagon.com/">ThemeWagon</a></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;