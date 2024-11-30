// --------------------Script do Scroll----------------------- //

window.addEventListener("scroll", function() {
    let header = document.querySelector('#header')
    header.classList.toggle('Scroll', window.scrollY > 0)
})

// --------------------Script do Cookie----------------------- //

const cookieBox = document.querySelector("#Cookie"),
    buttonCookies = document.querySelectorAll(".buttons");

const executeCodes = () => {
    // cookie de retorno contém codinglab ele será retornado e abaixo deste código não será executado
    if (document.cookie.includes("codinglab")) return
    cookieBox.classList.add("show");

    buttonCookies.forEach((button) => {
        button.addEventListener("click", () => {
            cookieBox.classList.remove("show");

            // se o botão tiver id aceitaBtn
            if (button.id == "aceitarBtn") {
            // definir cookies por 1 mês. 60 = 1 min, 60 = 1 hora, 24 = 1 dia, 30 = 30 dias
            document.cookie = "cookieby= codinglab; max-age=" + 60 * 60 * 24 * 30;
            }
        });
    });
};

// A função ExecuteCodes será chamada no carregamento da página da web
window.addEventListener("load", executeCodes);  