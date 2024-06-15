import axios from 'axios';

export async function imageReader(imageBase64: string | string[]) {
    try {
        const data = await axios.post(
            'http://localhost:11434/api/generate',
            {
                model: 'llava',
                prompt: 'Does this image contain any offensive content? Answer only yes or no',
                stream: false,
                image: imageBase64
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        return data;
    } catch (error) {
        console.error('Erro ao enviar a requisição:', error);
    }
}
