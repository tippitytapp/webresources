export interface ContactFormSubmitInterface {
    template_id: string,
    service_id: string,
    user_id: string,
    private_key: string,
    template_params: ContactFormInterface
}

export interface ContactFormInterface {
    firstName: string,
    lastName: string,
    email: string,
    phone?: string,
    callBackRequuested: boolean,
    message: string
}