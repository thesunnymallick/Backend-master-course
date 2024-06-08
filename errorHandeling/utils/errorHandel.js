
class ErrorHandel extends Error{
    constructor(messsage, statusCode){
        super(messsage)
        this.statusCode=statusCode;
    }
}

export default ErrorHandel