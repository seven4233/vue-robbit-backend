
class Exception extends Error {
    constructor(public message:string, public code:string, public result:any = null){
        super(message)
        this.code = code
        this.result = result
    }
}

export default Exception