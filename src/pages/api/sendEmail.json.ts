import type { APIRoute } from "astro"
import { Resend } from "resend";
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({params, request}) => {
    const body = await request.json();
    const { name, email, message } = body;
    const send = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['aescalaa1900@alumno.ipn.mx'],
        subject: 'hello world',
        html: '<h1>1hello world</h1>',
        text: `Nuevo contacto: ${name}, ${email}, ${message}`,
        // attachments: [
        //     {
        //     filename: 'invoice.pdf',
        //     content: invoiceBuffer,
        //     },
        // ],
        headers: {
            'X-Entity-Ref-ID': '123456789',
        },
        tags: [
            {
            name: 'category',
            value: 'confirm_email',
            },
        ],
    })

    if(send.data){
        return new Response(
            JSON.stringify({
                message: send.data
            }),
            {
                status: 200,
                statusText: 'OK',
            }
        )
    }else{
        return new Response(
            JSON.stringify({
                message: send.error
            }),
            {
                status: 500,
                statusText: 'Internal Server Error',
            }
        )
    }
  }