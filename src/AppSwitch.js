import React, { useEffect } from 'react';

const fetchAuthToken = async (latency) => {
    return new Promise(async (resolve, reject) => {
        // get EC-Token
        const PAYPAL_CLIENT = 'AfJHM-Wg3hRFKB5cNtknYDjVE1v2sGLoJPLqMrR_lzhlMscgdUeZuQ94d2ApHIM9tsjoKEPAgJXtFtvb';
        const PAYPAL_SECRET = 'EAWwAbUlRWA4FIsLtoU4e3KKC4URPuof8YdB_VuacFZS0MCoo7Ve_wdX6hjoVhGHyThIlz2MIKK-TNEZ';

        const PAYPAL_OAUTH_API = 'https://api.sandbox.paypal.com/v1/oauth2/token/';

        console.log('Auth');
        const basicAuth = window.btoa(`${ PAYPAL_CLIENT }:${ PAYPAL_SECRET }`);
        
        console.log(`Fetching...${basicAuth}`);
        await fetch(PAYPAL_OAUTH_API, {
            method: 'post',
            mode: 'cors',
            headers: {
                Accept:        `application/json`,
                Authorization: `Basic ${ basicAuth }`,
                'Content-Type': 'application/x-www-form-urlencoded' 
            },
            body: 'grant_type=client_credentials'
        })
        .then(response => response.json())
        .then(json => {
            console.log(`Data: ${JSON.stringify(json)}`);
            const token = `EC-8281640976881894T`;//json['access_token'];
            console.log(`token: ${token}`);

            setTimeout(() => {
                window.location.href = `http://localhost.paypal.com:8000/cgi-bin/webscr?cmd=_express-checkout&useraction=commit&token=${token}`;
            }, latency)
        })
        .catch(e => {
            console.error(e);
            reject(e);
        });
    });
};

function AppSwitch({ latency = 100 }) {
    useEffect(() => {
        console.log('redirecting');
        fetchAuthToken(latency);
    }, [latency]);

    return <h1>App Switching...</h1>;
}

export default AppSwitch;