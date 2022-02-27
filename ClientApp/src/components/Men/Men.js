const Men = () => {
    return (
        <div className="newest" style={{background:"black"}}>
            <div className="container">
                <div className="newest-content">
                    <div className="newest-tab">
                        <ul id="myTab" className="nav nav-tabs newest" role="tablist">
                            <li role="presentation">
                                <a href="#2" role="tab" id="cat-2" data-toggle="tab" aria-controls="2">New Arrivals</a>
                            </li>
                        </ul>
                        <div id="myTabContent" className="tab-content">
                            <div role="tabpanel" className="tab-pane fade in active" id="1" aria-labelledby="cat-1">
                                <div className="row clearfix">
                                    <div className="col-md-3 prdct-grid">
                                        <div className="product-fade">
                                            <div className="product-fade-wrap">
                                                <div id="product-image" className="owl-carousel owl-theme">
                                                    <div className="item">
                                                        <img src="/images/p-1.jpg" alt="" /></div>
                                                    <div className="item"><img src="/images/p-2.jpg" alt="" className="img-responsive" /></div>
                                                    <div className="item"><img src="images/p-3.jpg" alt="" className="img-responsive" /></div>
                                                    <div className="item"><img src="images/p-4.jpg" alt="" className="img-responsive" /></div>
                                                    <div className="item"><img src="images/p-5.jpg" alt="" className="img-responsive" /></div>
                                                </div>
                                                <div className="product-fade-ct">
                                                    <div className="product-fade-control">
                                                        <div className="to-left">
                                                            <a href=""><i className="fa fa-heart"></i></a>
                                                            <a href=""><i className="fa fa-retweet"></i></a>
                                                            <a href=""><i className="fa fa-search"></i></a>
                                                        </div>
                                                        <div className="to-right">
                                                            <div id="product-control" className="owl-carousel owl-theme clearfix">
                                                                <div className="item"><div className="bullets"></div></div>
                                                                <div className="item"><div className="bullets"></div></div>
                                                                <div className="item"><div className="bullets"></div></div>
                                                                <div className="item"><div className="bullets"></div></div>
                                                            </div>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                        <a href="" className="btn btn-to-cart"><span className="bag"></span><span>Add To cart</span><div className="clearfix"></div></a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="product-name">
                                            <a href="">Adidas Striped Men's Round Neck T-Shirt</a>
                                        </div>
                                        <div className="star-1"></div>
                                        <div className="product-price">
                                            <span>$19.00</span> $15.00
                                        </div>
                                    </div>

                                    <div className="clearfix"></div>
                                    <div className="col-md-3 prdct-grid">
                                        <div className="product-fade">
                                            <div className="product-fade-wrap">
                                                <div id="product-image5" className="owl-carousel owl-theme">
                                                    <div className="item">
                                                        <img src="file:///images/p-5.jpg" alt="" className="img-responsive" />
                                                    </div>
                                                    <div className="item"><img src="images/p-1.jpg" alt="" className="img-responsive" /></div>
                                                    <div className="item"><img src="images/p-2.jpg" alt="" className="img-responsive" /></div>
                                                    <div className="item"><img src="images/p-3.jpg" alt="" className="img-responsive" /></div>
                                                    <div className="item"><img src="images/p-4.jpg" alt="" className="img-responsive" /></div>
                                                </div>
                                                <div className="product-fade-ct">
                                                    <div className="product-fade-control">
                                                        <div className="to-left">
                                                            <a href=""><i className="fa fa-heart"></i></a>
                                                            <a href=""><i className="fa fa-retweet"></i></a>
                                                            <a href=""><i className="fa fa-search"></i></a>
                                                        </div>
                                                        <div className="to-right">
                                                            <div id="product-control5" className="owl-carousel owl-theme">
                                                                <div className="item"><div className="bullets"></div></div>
                                                                <div className="item"><div className="bullets"></div></div>
                                                                <div className="item"><div className="bullets"></div></div>
                                                                <div className="item"><div className="bullets"></div></div>

                                                            </div>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                        <a href="" className="btn btn-to-cart"><span className="bag"></span><span>Add To cart</span><div className="clearfix"></div></a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-name">
                                            <a href="">Striped Men's Round Neck T-Shirt</a>
                                        </div>
                                        <div className="product-price">
                                            <span>$19.00</span> $15.00
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Men;