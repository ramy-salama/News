var myicon = document.getElementById("click"),
            myside = document.getElementById("sidebar");

        myicon.onclick = function () {
            if (myside.classList.contains("hide")) {
                myside.classList = "show";
            } else {
                myside.classList = "hide";
            }
        }