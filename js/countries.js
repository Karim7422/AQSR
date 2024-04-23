let certificationTitleTop = document.getElementById("certification-services-title-top");
certificationTitleTop.style.opacity = "0"
window.onscroll = () => {
    if (window.scrollY >= 200) {
        certificationTitleTop.style.opacity = "1"
    }

}