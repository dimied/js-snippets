/**
     * Checks periodically for condition and executes a callback.
     * 
     * @param checkFn function for checking the condition
     * @param onSuccess function to call when checkFn returns truthy result
     * @param period time period for checks (milliseconds)
     */
    function waitUntil(checkFn, onSuccess, period) {
        if(checkFn()) {
            onSuccess();
            return;
        }

        period = period || 1000;

        function tc(t) {
            if(checkFn()) {
                onSuccess();
                return;
            }

            setTimeout(function () {
                tc(t);
            }, t);
        }

        tc(period);
    }
