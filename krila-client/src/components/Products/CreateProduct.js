const CreateProduct = () => {

    const onFormSubmitHandler = (e) => {
        e.preventDefault();

    };

    return (
        <div class="container-fluid pt-5">
            <div class="text-center mb-4">
                <h2 class="section-title px-5"><span class="px-2">Нов продукт</span></h2>
            </div>
            <div class="row px-xl-5">
                <div class="col-lg-7 mb-5">
                    <div class="contact-form">
                        <div id="success"></div>
                        <form name="sentMessage" enctype="multipart/form-data" 
                        id="contactForm" novalidate="novalidate"
                        onSubmit={onFormSubmitHandler}
                        >
                            <div class="control-group">
                            <label for="name">Име на продукта: &nbsp;</label>
                                <input type="text" class="form-control" id="name" placeholder="Име"
                                    required="required" data-validation-required-message="Моля, въведете име" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <label for="name">Цена на продукта: &nbsp;</label>
                            <div class="control-group">
                                <input type="text" class="form-control" id="email" placeholder="Цена"
                                    required="required" data-validation-required-message="Моля, въведете цена" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <label for="name">Снимки на продукта: &nbsp;</label>
                            <div class="control-group">

                                <input type="file" id="subject"
                                    required="required"
                                    accept=".jpg, .jpeg, .jfif, .pjpeg, .pjp, .png, .svg"
                                    multiple
                                    data-validation-required-message="Моля, качете поне 1 снимка" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                            <label for="name">Описание на продукта: &nbsp;</label>
                                <textarea class="form-control" rows="6" id="message" placeholder="Описание"
                                    required="required"
                                    data-validation-required-message="Моля, въведете описание"></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                            <div>
                                <button class="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Публикувай</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProduct;