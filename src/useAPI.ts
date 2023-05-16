export async function UseAPI() {
    return {
        async getDealsAPI() {
            let res = await fetch('http://127.0.0.1:8000/deals');
            return res.json()
        },
        async postUserAPI(user:string,password:string){
            let res = await fetch('http://127.0.0.1:8000/auth/' + user + '/' + password,{
                method:"POST"
            })
            if (res.ok){
                return res.json()
            }else{
                return res.status
            }
        }
    }
}
