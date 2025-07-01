(function () {
    const events = $("body").Events();
    const origPublish = events.publish;

    function design() {
        var trs = document
            .getElementById("table_sensortable")
            .querySelector("tbody")
            .querySelectorAll("tr");
        for (let tr of trs) {
            let elm = tr.querySelector(`td[class="col-probegroupdevice"]`);
            elm.querySelector(`div`).style.marginTop = "unset";
            elm.style.verticalAlign = "unset";
            elm.style.paddingBottom = window
                .getComputedStyle(elm)
                .getPropertyValue("padding-top");
        }
    }

    events.publish = function (...args) {
        if (args.length > 0 && args[0].endsWith(".prtg")) design();
        return origPublish.apply(this, args);
    };
})();
