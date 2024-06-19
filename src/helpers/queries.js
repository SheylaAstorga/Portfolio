const URL_Mail = import.meta.env.VITE_API_MAIL;


export const enviarMail = async (mail) => {
    try {
        const response = await fetch(URL_Mail, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            }, 
            body: JSON.stringify(mail)
        })
        return response
    } catch (error) {
        console.log(error)
    }
}