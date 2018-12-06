const authChecker = {

    isAuthenticated : false ,
    authenticate(email, pass, cb, cb_failAuth){
        fetch('/auth/login',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                email: email,
                password: pass,
            }),
        }).then((response)=>{

            if(response.status === 200){
                this.isAuthenticated = true;
                return response.json();
            } else if(response.status === 401){
                return response.json();
            } else{
                console.log(response);
            }
        })
            .then( (body) => {
                if(this.isAuthenticated){
                    this.uid = body.id;
                    console.log(this.uid);
                    cb();
                } else{
                    cb_failAuth(body.message[0]);
                }

            })
            .catch((err) => {
                console.log(err);
            });

    },  signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

export default authChecker;