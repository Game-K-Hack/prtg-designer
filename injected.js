(function () {

    let event_is_setted = false;

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

    function set_event() {
        const events = $("body").Events();
        const origPublish = events.publish;
        events.publish = function (...args) {
            if (args.length > 0 && args[0].endsWith(".prtg")) {
                try {design();}
                catch (e) {}
            }
            return origPublish.apply(this, args);
        };
        event_is_setted = true;
    }

    function init() {
        if (!event_is_setted) {
            let body = document.querySelector("body");
            if (body == null || body == undefined) {
                setTimeout(init, 100);
                return;
            }
            set_event();
        }
    }

    init();
})();
