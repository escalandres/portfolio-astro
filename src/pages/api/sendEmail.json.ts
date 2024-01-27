import type { APIRoute } from "astro"
import { Resend } from "resend";
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({params, request}) => {
    const body = await request.json();
    const { name, email, message } = body;
    const send = await resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>',
        to: ['aescalaa1900@alumno.ipn.mx'],
        subject: 'Nuevo contacto',
        html: `<h1>Nuevo contacto</h1><h3>Una persona ha contactado desde el portafolio</h3><p>Nombre: ${name}</p><p>Correo: ${email}</p><p>Mensaje: ${message}</p>`,
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
                ok: true,
                status: 200,
                statusText: 'Email sent',
            }),
        )
    }else{
        return new Response(
            JSON.stringify({
                ok: false,
                status: 500,
                statusText: 'Internal Server Error',
            }),
        )
    }
}