$(()=>{
    //carousel
     $(".slider-projects").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    $(".slider-reviews").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
    
    //feedback
    $('.contact-form').on('submit', (event)=>{
        //запрет на перезагрузку страницы 
        event.preventDefault();

        let name = $('#name').val(),
        email = $('#email').val(),
        message = $('#message').val(),
        formData = {"name": name, "email": email, "message": message};
        
        console.log(formData);
        
        //1-url, 2-объект отправляемых данных, 3-обработчик ответа сервера, 4-формат ответа
        $.post('server.php', formData, (responseData)=>{
            if(responseData.result) {
                $('.jq-result-success').show();
                $('#name').val('');
                $('#email').val('');
                $('#message').val('');

                //TODO:
                //валидация формы (активировать встроенную)
                //скрыть обратно бокс с сообщением
                //рефакторин
                //принять данные на phpи отправить их на почту.
            } else {
                $('.jq-result-error').show();
            }
        }, 'json');



        //XHR-XmlHttpRequest AJAX - AsyncJSAndXML

        //json- современный формат ответа сервера (наряду с html) - строка, в которой данные в формате javascript объектов

        //зачем кодировать ответ в json? чтобы браузер (и сам javascript) мог работать с этим ответом как с javascript-объектом

        // мы можем отфильтровать ajax-запросы в браузере, посмотреть данные, которые были отправлены вместе с этим запросом, посмотреть "сырое" тело ответа и
        //обработанное
    });

});