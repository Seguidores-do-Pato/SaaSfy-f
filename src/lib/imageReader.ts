import { api } from './api';

//ISSO NAO TA PRONTO, FAVOR, NAO USAR
export async function imageReader(imageBase64: string) {
    try {
        const { data } = await api.post(
            'http://localhost:11434/api/generate',
            {
                model: 'llava',
                prompt: 'Does this image contain any offensive content? Answer only with yes or no',
                image: imageBase64
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        console.log(data);
    } catch (error) {
        console.error('Erro ao enviar a requisição:', error);
    }
}
