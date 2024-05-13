import useSWR from 'swr';
import { api } from '@/lib/api';
import { AxiosRequestConfig } from 'axios';

export function useAPI<Data = any, Error = any>(url: string) {
    const { data, error, isLoading } = useSWR<Data, Error>(url, async (url: string) => {
        const { data } = await api(url);

        return data;
    });

    return { data, error, isLoading };
}
